var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var nodemailer = require('nodemailer');

var User = require('../models/user');

// Register for Admin
router.get('/register', function (req, res) {
	res.render('register');
});


// Register for Staff Members
router.get('/registerStaff', function (req, res) {
	res.render('registerStaff');
});

// Login
router.get('/login', function (req, res) {
	res.render('login');
});

// Login Error
router.get('/loginError', function (req, res) {
	res.render('loginError');
});

// Admin Dashboard
router.get('/admin', function (req, res) {
    if (req.user) {
        if (req.user.role === 'admin') {
	res.render('admin', {name : req.user.name, organization: req.user.organization, plan: req.user.plan, email: req.user.email, expiration: req.user.expiration});
        } else {
            res.redirect('/users/staff')
        }
    } else {
       res.render('login'); 
    }
});

// Staff Dashboard
router.get('/staff', function (req, res) {
    if (req.user) {
        if (req.user.role === 'staff') {

	res.render('staff', {name : req.user.name, organization: req.user.organization});
        } else {
            res.redirect('/users/admin')
        }
            
    } else {
       res.render('login'); 
    }
});


router.get('/test', function (req, res) {
    
    var emailArray = []
    
    User.find({ 'organization': 'Shift Media Management LLC Operations', 'role': 'staff'},  (err, arrayOfUsers) => {
            if (err) {
                return handleError(err);
            }
            
        
            for (i=0; i<arrayOfUsers.length; i++) {
                emailArray.push(arrayOfUsers[i].email)
            }
        console.log(emailArray)
        // Email functions goe here
        })
    
    
})

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
						password: password,
                        plan : "Free"
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
	passport.authenticate('local', { failureRedirect: '/users/loginError', failureFlash: true, message : 'test' }), function (req, res) {
        var today = new Date();
         if (req.user.role === 'admin') {
                
               res.redirect('/users/admin')
           
        
        } else {
            res.redirect('/users/staff')
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
  host: process.env.HOST,
    port: 465,
    secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: process.env.EMAIL,
  to: recipient,
  subject: "You've been invited to EZ Staff",
  html: '<p>EZ Staff is the leading Event Staffing Software. Click <a href="https://ezstaff.herokuapp.com/users/registerStaff">here</a> to get started!</p>'
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

User.findOne({ email: req.body.email}, function (err, admin) {
    
    let allowedUsers
    
    if (admin.plan === 'Free') {
        allowedUsers = 5
    }
    
    if (admin.plan === 'Small') {
        allowedUsers = 5
    }
    
    if (admin.plan === 'Medium') {
        allowedUsers = 20
    }
    
    User.find({ 'organization': req.body.organization, 'role': 'staff'},  (err, arrayOfUsers) => {
        if (err) {
                return handleError(err);
            }
    
        if (arrayOfUsers.length >= allowedUsers) {
            
           res.status(500).send({
                message: 'Error: Your current plan does not allow you to invite any more staff members! Please upgrade your plan if you wish to invite more'
                })  
        }
    else {
    
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
    
    }
    })
    
    
    
    
                    })    } }) }
    
    
})



router.post('/staffRegister', function (req, res) {
    
var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
 //   var organization = req.body.organization;

	// Validation
	req.checkBody('name', 'Name is required!').notEmpty();
	req.checkBody('email', 'Email is required!').notEmpty();
	req.checkBody('email', 'Email is not valid!').isEmail();
	req.checkBody('username', 'Username is required!').notEmpty();
//    req.checkBody('organization', 'Organization is required!').notEmpty();
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
		
			User.findOne({ email: { 
				"$regex": "^" + email + "\\b", "$options": "i"
		}}, function (err, mail) {

    
                    if (!mail) {
                        res.status(500).send({
			             message: `Error: You haven't been invited to the application!`
		              });
                    } else if (mail.password) {
                        
                        res.status(500).send({
			             message: `Error: This user already exists!!`
		              });
                    }  else {
                        var email = mail.email
                        var organization = mail.organization
                        var role = mail.role
                        
                        mail.remove({email: email}, function (err) {
    // if no error, your models are removed
});
                        
                        var newUser = new User({
						name: name,
						email: email,
						username: username,
                        organization: organization,
                        role: role,
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
 }
})



router.post('/findUsers', function (req, res) {
    User.find({ 'organization': req.body.organization, 'role': 'staff'},  (err, arrayOfUsers) => {
            if (err) {
                return handleError(err);
            }
        
        if (arrayOfUsers.length === 0) {
            res.status(500).send({
			message: 'Error: There are no staff members to add! Change this by inviting a staff member to this app'
		});
        }
            else {
        res.status(201).send({
            message: arrayOfUsers
        })
            }
            
        })
} )



router.post('/changeMembership', function (req, res) {
    const stripe = require("stripe")(process.env.STRIPE_PRIVATE_API);
  
    
    var email = req.body.email
    var plan = req.body.plan
    var previousPlan = req.body.previousPlan
    
    
    stripe.plans.list(
  { limit: 3 },
  function(err, plans) {

  var enterprise = plans.data[0]
  var medium = plans.data[1]
  var small = plans.data[2]
  
  let desiredPlan;
      
      for (i=0;i<plans.data.length;i++) {
          if (plans.data[i].nickname === plan) {
              desiredPlan = plans.data[i].id
          }
      }
      
      console.log(desiredPlan)
  
  
  
    
    
    
    
    if (previousPlan === 'Free') {
        var token = req.body.token
    
    stripe.customers.create({
   source: token,
    email: email
 }, function(err, customer) {

    stripe.subscriptions.create({
  customer: customer.id,
  items: [
    {
      plan: desiredPlan
    }
  ]
}, function(err, subscription) {
    // asynchronously called
  }
);
    
    });
        
    } else {
        
        stripe.customers.list(
        { email: req.body.email },
        function(err, customers) {
            const customerId = customers.data[0].id
        
            stripe.subscriptions.list(
            { customer: customerId },
            function(err, subscriptions) {
                // asynchronously called
            var subscription = subscriptions.data[0].id
                
                stripe.subscriptionItems.list(
  { subscription: subscriptions.data[0].id },
  function(err, subscriptionItems) {
    // asynchronously called
      var subscriptionItem = subscriptionItems.data[0].id

            
            stripe.subscriptionItems.update(
 subscriptionItem,
  {
    plan: desiredPlan,
  },
  function(err, subscriptionItem) {
    // asynchronously called
  }
);
                  }
);
                
});
            
        })
        
    } }
);

    User.update({email: email}, {
    plan: plan  
}, function(err, affected, resp) {
   //console.log(resp);
})
})


router.post('/updateCard', function (req, res) {
    const stripe = require("stripe")(process.env.STRIPE_PRIVATE_API);
        
    
    /* STEP ONE:
    Retrieve the Customer's ID from Stripe's database using their email. 
    */   
    stripe.customers.list(
        { email: req.body.email },
        function(err, customers) {
            const customerId = customers.data[0].id
       
            
            
            /*STEP TWO:
            Use Customer ID to retreive the Credit Card ID
            */
            stripe.customers.listCards(
                customerId, function(err, cards) {

                /*This "if" statement basically says to check if the user
                has a card on file. If so, continue to update it. If not,
                then send the message 'You dont have a card on file'
                */
                 if (cards.data[0]) {
                    
                    const cardId = cards.data[0].id
                
               
                
                   /* STEP THREE:
                    Use both the Customer ID and Credit Card ID to Delete the Credit Card
                    */  
                    stripe.customers.deleteCard(
                        customerId,
                        cardId,
                        function(err, confirmation) {
                            }
                            );
                    
                     
                    /* STEP FOUR:
                    Add a new Credit Card using the tokenized information, thus completing our update
                    */
                    stripe.customers.createSource(
                        customerId,
                        { card: req.body.token },
                        function(err, card) {
                            res.status(201).send({ 
                                message: 'Success: The card has been successfully updated!!'
                                })
                        }
                        );
                    
                    
                } else {
                    res.status(500).send({
                        message: 'Error: You do not have a card on file to update!'
                            })
                       }
                    
        })
    })   
    
})





router.post('/cancelMembership', function (req, res) {
    
    var email = req.body.email
    
    var stripe = require("stripe")(
  process.env.STRIPE_PRIVATE_API
);
    
    stripe.customers.list(
        { email: req.body.email },
        function(err, customers) {
            const customerId = customers.data[0].id
            
        
            stripe.customers.del( customerId,
  function(err, confirmation) {
    // asynchronously called
  }
);
            
        })
        
    

    User.update({email: email}, {
    plan: 'Free',
    reasonForLeaving : req.body.reasonForLeaving
}, function(err, affected, resp) {
   //console.log(resp);
})


    
})


router.get('/listSubscriptions', function (req, res) {
    console.log(process.env.STRIPE_PRIVATE_API)
    var stripe = require("stripe")(
  process.env.STRIPE_PRIVATE_API
);
    
    stripe.subscriptions.list(
  { customer: 'cus_D3fRquHb5JRl2c' },
  function(err, subscriptions) {
  // asynchronously called
      stripe.subscriptionItems.list(
  { subscription: subscriptions.data[0].id },
  function(err, subscriptionItems) {
    // asynchronously called
      console.log(subscriptionItems.data[0].id)
  }
);
});
    

    
    
})



module.exports = router;