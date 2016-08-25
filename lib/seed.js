var root = require('app-root-path');
var seeder = require('mongoose-seed');
var data = require(root+'/lib/seeders/number-range.seeder');

var connectionString = 'mongodb://localhost:27017/hcl';
seeder.connect(connectionString, function(err) {
	// Load Mongoose models
	seeder.loadModels([
		root + '/lib/models/number-range.model.js',
	]);

	seeder.clearModels(['Numberranges'], function(errs) {
		seeder.populateModels(data, function(){
			console.log('data seed complete!');
		});
	});
});

// connectionString.disconnect();


