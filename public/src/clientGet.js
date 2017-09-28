
function GetData(){

	var Client = require("node-rest-client").Client;
	var link = require("./getLink.js");

	var client = new Client(); 
	client.get(link + "/users", function (data, response) {

	    var str= JSON.parse(data);
	    console.log(str);
	});
}

module.exports = GetData;