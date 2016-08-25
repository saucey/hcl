'use strict';
var root = require('app-root-path');
var numberRange = require(root + '/lib/models/number-range.model');
var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.route('/number-range').post(function(req, res) {

	numberRange.find(function(err, doc) {
		var secretNumber = doc[0].secret_number;

		var userExists = _.find(doc[0].user, function(user) {
			return req.body.number.name == user.name;
		});


		if (_.isUndefined(userExists)) {

			var newUser = {
				name: req.body.number.name,
				attempts: 2,
				numberattepmts: [{
					number: req.body.number.range,
				}]
			};

			if (secretNumber == req.body.number.range) {
				newUser.attempts = 3;
			}

			console.log(newUser, 'WHOM!!!!!');

			doc[0].user.push(newUser);
			doc[0].save(function() {
				if (secretNumber == req.body.number.range) {
					return res.status(200).json({success: true, message: 'Your have successfully guessed the hidden number'});
				}
				return res.status(401).json({success: false, user: newUser});
			});
		} else {
			userExists.attempts--;

			if (userExists.attempts >= 0){
				userExists.numberattepmts.push({number: req.body.number.range});
			} else {
				userExists.attempts = 0;
				return res.status(401).json({attemptsMax:true, success: false, user:userExists, message: 'You have had too many attempts'});

			}

			if (secretNumber == req.body.number.range) {
				userExists.attempts = 3;
			}

			doc[0].update({'user.name': req.body.number.name}, {'$set': userExists});
			doc[0].save(function(){
				if (secretNumber == req.body.number.range) {
					return res.status(200).json({success: true, message: 'Your have successfully guessed the hidden number'});
				}
				return res.status(401).json({success: false, user:userExists});
			});
		}
	});
});


module.exports = router;

