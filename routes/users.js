var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var nodemailer = require('nodemailer');

var User = require('../models/user');

// Register
router.get('/register', function (req, res) {
	res.render('register');
});

// Login
router.get('/login', function (req, res) {
	res.render('login');
});

// Admin Dashboard
router.get('/admin', function (req, res) {
    if (req.user) {
	res.render('admin', {name : req.user.name, organization: req.user.organization});
    } else {
       res.render('login'); 
    }
});

// Staff Dashboard
router.get('/staff', function (req, res) {
	res.render('staff');
});

// Register User
router.post('/register', function (req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
    var organization = req.body.organization;
    var expiration = req.body.expiration;
    var role = req.body.role

	// Validation
	req.checkBody('name', 'Name is required!').notEmpty();
	req.checkBody('email', 'Email is required!').notEmpty();
	req.checkBody('email', 'Email is not valid!').isEmail();
	req.checkBody('username', 'Username is required!').notEmpty();
    req.checkBody('organization', 'Organization is required!').notEmpty();
	req.checkBody('password', 'Password is required!').notEmpty();
	req.checkBody('password2', 'Passwords do not match!').equals(req.body.password);

	var errors = req.validationErrors();

	if (errors) {
        console.log(errors)
		res.status(500).send({
			message: 'Error: ' + errors[0].msg
		});
	}
	else {
		//checking for email and username are already taken
		User.findOne({ username: { 
			"$regex": "^" + username + "\\b", "$options": "i"
	}}, function (err, user) {
			User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {
                User.findOne({ organization: { 
				"$regex": "^" + organization + "\\b", "$options": "i"
		}}, function (err, org) {
                    
                    if (user || mail || org) {
                    
                    
                    if (user) {
                        res.status(500).send({
			             message: `Error: A user with the username ${user.username} already exists! Try another.`
		              });
                    }
                    if (mail) {
                        res.status(500).send({
			             message: `Error: A user with the email ${mail.email} already exists! Try another.`
		              });
                    }
                    if (org) {
                        res.status(500).send({
			             message: `Error: The organization ${org.organization} already exists! Try another.`
		              });
                    }}
				
				else {
					var newUser = new User({
						name: name,
						email: email,
						username: username,
                        organization: organization,
                        role: role,
                        expiration: expiration,
						password: password
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	res.status(200).send({
                message: 'You have successfully signed up! Please <a href="/users/login">Login</a> to continue.'
                })
            }
         })
        })
    })
 }
})
			

passport.use(new LocalStrategy(
	function (username, password, done) {
		User.getUserByUsername(username, function (err, user) {
			if (err) throw err;
			if (!user) {
				return done(null, false, { message: 'Error: Unknown User' });
			}

			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
					return done(null, user);
				} else {
					return done(null, false, { message: 'Error: Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});

router.post('/login',
	passport.authenticate('local', { failureRedirect: '/users/login', failureFlash: true }), function (req, res) {
        var today = new Date();
        if (req.user.role === 'admin' && today >= req.user.expiration) {
            res.status(500).send({
			             message: 'Error: Your Free Trial has ended! Please upgrade to continue using EZ Staff.'
		              });
        } else {
                
               res.redirect('/users/admin')
            console.log(req.user)
           
        
        }
	});

router.get('/logout', function (req, res) {
    console.log(req.user)
    console.log(req.session)
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});



router.post('/inviteStaff', function (req, res) {
    
var recipient = req.body.recipient
var organization = req.body.organization

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: 'philberhane7@gmail.com',
  to: recipient,
  subject: "You've been invited to EZ Staff",
  text: 'That was easy!'
};
    
//Insert field checks
//Insert check if email exists
    req.checkBody('recipient', 'Email is required!').notEmpty();
	req.checkBody('recipient', 'Email is not valid!').isEmail();
	

	var errors = req.validationErrors();

	if (errors) {
        console.log(errors)
		res.status(500).send({
			message: 'Error: ' + errors[0].msg
		});
	}
	else {    
        
        User.findOne({ email: { 
				"$regex": "^" + recipient + "\\b", "$options": "i"
		}}, function (err, mail) {
            
            if (mail) {
                        res.status(500).send({
			             message: `Error: A user with the email ${mail.email} already exists! Try another.`
		              });
                    } else {


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('Email sent: ' + info.response);
      
      var newUser = new User({
						email: recipient,
                        organization: organization,
                        role: 'staff',
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	 res.status(200).send({
                message: 'Your invitation has been sent!'
                }) 

            }
});
        } })
    }
    
})



module.exports = router;