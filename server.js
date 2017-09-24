var express = require("express");
var bodyParser = require("body-parser")
var app = express();
var fs = require("fs");
var jsonObj = require("./public/src/data.json");
var path = require('path');
var Sort = require("./public/src/dataSort.js");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/src',express.static( 'public/src'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


/*app.get("/", function (req, res) {

  res.end("Helau");
});*/

app.get("/", function (req, res) {

  res.sendFile(path.resolve("index.html"));

  //res.sendFile(path.resolve("../index.html"));
});

app.post('/login', function (req, res) {
  
  console.log(req.body);

  jsonObj.users.push(req.body);
  
  if (jsonObj.users.length > 1){
    jsonObj = Sort(jsonObj);
  }
  
  var str = JSON.stringify(jsonObj);
  fs.writeFile("./public/src/data.json", str, function Write(err){
    console.log(err);
  });
  res.send(req.body);
  res.end();
  
});

app.get("/users", function (req, res) {

  fs.readFile("./public/src/data.json", function Read(err, data) {
      if (err) {
          throw err;
      }
      res.end(data);
  }); 
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});