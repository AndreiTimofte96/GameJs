function Sort(obj){

	var length = obj.users.length;
	data = obj.users[length-1];
	for (i = length - 1; i >= 1 && obj.users[i-1].seconds >= data.seconds; i = i-1){
		obj.users[i] = obj.users[i-1];
	}
			
	obj.users[i] = data;
	return obj;
}
module.exports = Sort;
