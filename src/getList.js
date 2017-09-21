

function GetList(name, seconds){

	
	var jsonObj = require('./data.json');
	var fs = require('fs');

	jsonObj[name] = seconds;
	console.log(jsonObj);

	var str = JSON.stringify(jsonObj);
	console.log(str);
	
	fs.writeFile("data.json", str, finished); 
	function finished(err){
		console.log(err);
	}
    	
}

module.exports = GetList;