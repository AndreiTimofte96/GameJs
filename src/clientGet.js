
function GetData(){

	var Client = require("node-rest-client").Client;
	var Sort = require("./dataSort.js")

	var client = new Client(); 
	client.get("http://127.0.0.1:8081/users", function (data, response) {

	    var str= JSON.parse(data);
	    console.log(str);
	 	//console.log(Sort(str));
	});
}

module.exports = GetData;