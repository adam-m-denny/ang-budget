var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var passwordHash = require('password-hash');
app.use('/', express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
var multer = require('multer'); 

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer()); // for parsing multipart/form-data

app.post('/create', function (req, res) {
	var username = req.body.username;
	var hashedPassword = passwordHash.generate(req.body.password);
	
	console.log(username);
	console.log(hashedPassword);
	
	MongoClient.connect('mongodb://localhost:27017/exampleDb', function(err, db){
		if(err){
			return console.dir(err);
		}
		if(!err){
			console.log("Connected to mongodb");
			db.collection('budget', function(err, collection) {});
			var collection = db.collection('budget');
			
			collection.find({'username' : username}).toArray(function(err, items) {
				if(items != ""){
					console.log("Username already in use");
				} else {
					var user = {'username' : username, 'hash' : hashedPassword};
					collection.insert(user, {w:1}, function(err, result){
						console.log(result);
					});
				}
			});
		}
	});
})

if(app.use(express.static('ang-budget'))){
	console.log('it worked');
}

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});