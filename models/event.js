var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    organization: {
		type: String
	},
	venue: {
		type: String
	},
	date: {
		type: Date
	},
	begins: {
		type: String
	},
	ends: {
		type: String
	},
    location: {
        type: String
    },
    numberOfStaff: {
        type: Number
    },
    specs: {
        type: String
    },
    staffed: {
        type: Array
    },
    checkIn: {
        type: Array
    }
});

module.exports = mongoose.model('Event', EventSchema);