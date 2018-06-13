var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var nodemailer = require('nodemailer');

var Event = require('../models/event');



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





router.post('/deleteEvent', function (req, res) {
    // delete user
Event.findByIdAndRemove(req.body.id, function (err, user) {
    console.log('deleting user', user);
    if (err)
        throw err;
    
})  
})






module.exports = router;