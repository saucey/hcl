var express = require('express');
var root = require('app-root-path');
var numberRange = require(root +'/lib/routes/number-range.route');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var dbName = 'hcl';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/bower_components',  express.static(root + '/bower_components'));
app.use('/app.js',  express.static(root + '/app.js'));
app.use('/assets',  express.static(root + '/assets'));
app.use('/app',  express.static(root + '/app'));


app.get('/', function(req, res) {
	res.sendFile(root + '/index.html');
});

app.use('/api', numberRange);

app.listen(8000);