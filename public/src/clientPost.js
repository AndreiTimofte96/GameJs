
function PostData(name, seconds){

	var Client = require('node-rest-client').Client;
	var client = new Client();

	var args = {
	    data: { username: "Radu",
	            seconds : 41},
	    headers: { "Content-Type": "application/json",
				   'Origin': 'https://127.0.0.1:8081', 
				   'Access-Control-Request-Method': 'POST', 
				   'Access-Control-Request-Headers': 'X-Requested-With'
				 }
	};
	args.data.username = name;
	args.data.seconds = seconds;
	 
	client.post("http://127.0.0.1:8081/login", args, function (data, response) {
	    // parsed response body as js object 
	    console.log(response);
	    console.log(data);
	    
	});
}
module.exports = PostData;