var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var nodemailer = require('nodemailer');

var Event = require('../models/event');

// To see whether a user is checked in or not
var User = require('../models/user');




router.post('/createEvent', function (req, res) {
    
    data = req.body
    const event = new Event(data)
    
    var venue = req.body.venue;
	var date = req.body.date;
	var begins = req.body.begins;
	var ends = req.body.ends;
	var location = req.body.location;
    var numberOfStaff = req.body.numberOfStaff;
    var specs = req.body.specs;
   

	// Validation
	req.checkBody('venue', 'Venue is required!').notEmpty();
	req.checkBody('date', 'Date is required!').notEmpty();
	req.checkBody('begins', 'Beginning Time is required!').notEmpty();
	req.checkBody('ends', 'Ending Time is required!').notEmpty();
    req.checkBody('location', 'Location is required!').notEmpty();
	req.checkBody('numberOfStaff', 'The Number of Staff Members is required!').notEmpty();
	req.checkBody('specs', 'The Specifications are required!').notEmpty();

	var errors = req.validationErrors();

	if (errors) {
        console.log(errors)
		res.status(500).send({
			message: 'Error: ' + errors[0].msg
		});
	}
	else {
        
    var emailArray = []
    
    User.find({ 'organization': req.body.organization, 'role': 'staff'},  (err, arrayOfUsers) => {
            if (err) {
                return handleError(err);
            }
        
        if (arrayOfUsers.length > 0) {
            
        
            for (i=0; i<arrayOfUsers.length; i++) {
                emailArray.push(arrayOfUsers[i].email)
            }
        // Email functions goes here
        var transporter = nodemailer.createTransport({
  host: process.env.HOST,
    port: 465,
    secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});
        console.log(emailArray)

var mailOptions = {
  from: process.env.EMAIL,
  to: emailArray,
  subject: "An Event has been created!",
  html: '<p>A new event has been added and is ready for staff members!. Click <a href="http:/localhost:3000/users/login">here</a> to sign in and accept the event!</p>'
};
        transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('Emails Sent!')
  }
});
    }    })
    
    
    event.save( (err, model) => {
            
            res.status(201).send({postId: model._id, message : 'Your event has been successfully created!'})
                console.log(model, 'saved!!!')
                
        })
    }
    
})


router.post('/viewEvents', function (req, res) {
    
    Event.find({ 'organization': req.body.organization },  (err, arrayOfEvents) => {
            if (err) {
                return handleError(err);
            }
        
        if (arrayOfEvents.length === 0) {
            res.status(500).send({
			message: 'Error: There are no events!'
		});
        }
            else {
        res.status(201).send({
            message: arrayOfEvents
        })
            }
            
        })
})









router.post('/editEvent', function (req, res) {
    console.log(req.body)
    
   
    var venue = req.body.venue;
	var date = req.body.date;
	var begins = req.body.begins;
	var ends = req.body.ends;
	var location = req.body.location;
    var numberOfStaff = req.body.numberOfStaff;
    var specs = req.body.specs;
    var id = req.body.id;
    var staffed = req.body.staffed
   

	// Validation
	req.checkBody('venue', 'Venue is required!').notEmpty();
	req.checkBody('date', 'Date is required!').notEmpty();
	req.checkBody('begins', 'Beginning Time is required!').notEmpty();
	req.checkBody('ends', 'Ending Time is required!').notEmpty();
    req.checkBody('location', 'Location is required!').notEmpty();
	req.checkBody('numberOfStaff', 'The Number of Staff Members is required!').notEmpty();
	req.checkBody('specs', 'The Specifications are required!').notEmpty();

	var errors = req.validationErrors();

	if (errors) {
        console.log(errors)
		res.status(500).send({
			message: 'Error: ' + errors[0].msg
		});
	}
	else {
    
    Event.update({_id: id}, {
    venue: venue, 
    location: location,
    begins: begins,
    ends: ends,
    location: location,
    numberOfStaff : numberOfStaff,
    specs: specs,
    staffed: staffed  
}, function(err, affected, resp) {
   //console.log(resp);
})
        
        
        
    }
                                         
    
})


router.post('/eventStaffChanges', function (req, res) {
    var id = req.body.id;
    var staffed = req.body.staffed;
    var role = req.body.role
    
    if (role === 'staff') {
    
    
    var original = req.body.original
    var user = req.body.user
    var organization = req.body.organization
    if (original > staffed) {
        console.log('A Staff Member has cancelled an event')
        console.log(organization)
        User.find({ 'organization': organization},  (err, arrayOfUsers) => {
            if (err) {
                return handleError(err);
            }
            
            var emailArray = []
        
        if (arrayOfUsers.length > 0) {
            
            
        
            for (i=0; i<arrayOfUsers.length; i++) {
                if (arrayOfUsers[i].name !== user) {
                emailArray.push(arrayOfUsers[i].email)
                }
            }
            
        // Email functions goes here
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
  to: emailArray,
  subject: "A Staff Member has cancelled an event!",
  html: '<p>This means that, if you are a staff member, an event is available to accept. Click <a href="http:/localhost:3000/users/login">here</a> to sign in and accept the event!</p>'
};
        transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('Emails Sent!')
  }
});
    }    })
        
        
        
        
        
        
    } else {
        console.log('A Staff Member has accepted an event')
        User.findOne({ organization: req.body.organization, role: 'admin'},  (err, adminUser) => {
            if (err) {
                return handleError(err);
            }
            
            
        // Email functions goes here
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
  to: adminUser.email,
  subject: "An Event has been accepted!",
  html: '<p>A staff member has accepted an event!. Click <a href="http:/localhost:3000/users/login">here</a> to sign in and see who is currently staffed!</p>'
};
        transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('Emails Sent!')
  }
});
        })
        
        
        
        
        
    } }
    
    Event.update({_id: id}, {
    staffed: staffed  
}, function(err, affected, resp) {
   //console.log(resp);
})
    
})




router.post('/deleteEvent', function (req, res) {
    // delete user
Event.findByIdAndRemove(req.body.id, function (err, user) {
    console.log('deleting user', user);
    if (err)
        throw err;
    
})  
})


router.post('/checkInChanges', function (req, res) {
    var id = req.body.id;
    var checkIn = req.body.checkIn;
    var user = req.body.user
    var checkInStatus = req.body.checkInStatus
    
    User.findOne({ organization: req.body.organization, role: 'admin'},  (err, adminUser) => {
            if (err) {
                return handleError(err);
            }
            
            
        // Email functions goes here
        var transporter = nodemailer.createTransport({
  host: process.env.HOST,
    port: 465,
    secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});
        
    if (checkInStatus === 'Checking in') {

var mailOptions = {
  from: process.env.EMAIL,
  to: adminUser.email,
  subject: "An Event has been checked into!",
  text: user + ' has checked into an event!'
}; 
    } else {
         var mailOptions = {
  from: process.env.EMAIL,
  to: adminUser.email,
  subject: "An Event has been checked out of!",
  text: user + ' has checked out of an event!'
};   
            
            
        }
        transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
      console.log('Emails Sent!')
  }
});
        })
    
    
    
    Event.update({_id: id}, {
    checkIn: checkIn  
}, function(err, affected, resp) {
   //console.log(resp);
})
    
})






module.exports = router;