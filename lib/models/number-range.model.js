'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var numberRangeSchema = new Schema({
	secret_number: Number,
	user: [{
		name: String,
		attempts: Number,
		numberattepmts: [{
			number: Number
		}]
	}]
});

module.exports = mongoose.model('Numberranges', numberRangeSchema);
