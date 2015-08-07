var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var passwordHash = require('password-hash');

app.use('/', express.static(__dirname + '/public'));

MongoClient.connect('mongodb://localhost:27017/exampleDb', function(err, db){
	if(err){
		return console.dir(err);
	}
	if(!err){
		console.log("We are connected");
		db.collection('test', function(err, collection) {});
		var collection = db.collection('test');
		console.log(collection);
	}
});

if(app.use(express.static('ang-budget'))){
	console.log('it worked');
}

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});