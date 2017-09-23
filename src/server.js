var express = require("express");
var bodyParser = require("body-parser")
var app = express();
var fs = require("fs");
var jsonObj = require("./data.json");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get("/", function (req, res) {

	res.end("Helau");
});

/*app.get("/login", function (req, res) {

	res.sendFile("./login.html", {root: __dirname});
});*/

app.post('/login', function (req, res) {
 	
 	console.log(req.body);
 	jsonObj.users.push(req.body);
   	
  var str = JSON.stringify(jsonObj);
 
 	fs.writeFile("data.json", str, function Write(err){
 		console.log(err);
 	});
 	res.send(req.body);
  res.end();
	
});

app.get("/users", function (req, res) {

  var Sort = require("./dataSort.js");
	fs.readFile("data.json", function Read(err, data) {
    	if (err) {
        	throw err;
    	}
   		var str= JSON.parse(data);
      var obj = Sort(str);
      data = JSON.stringify(obj);
      res.end(data);
	});	
});

app.get("/highscore", function (req, res) {

  fs.readFile("data.json", function Read(err, data) {
      if (err) {
          throw err;
      }
      var str= JSON.parse(data);
      res.end(data);
  }); 
});

var server = app.listen(8081, function () {

  	var host = server.address().address;
  	var port = server.address().port;
  	console.log("Example app listening at http://%s:%s", host, port);
});