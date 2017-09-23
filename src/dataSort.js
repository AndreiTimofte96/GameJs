

function Sort(obj){

	var ok = true;
	var aux1, aux2;

	while (ok){

		ok = false;
		
		for (i = 0 ; i <  obj.users.length - 1; i = i+1){
			if (obj.users[i].seconds > obj.users[i+1].seconds){
				aux1 = obj.users[i].seconds;
				aux2 = obj.users[i].username;
				obj.users[i].seconds = obj.users[i+1].seconds;
				obj.users[i].username = obj.users[i+1].username;
				obj.users[i+1].seconds = aux1;
				obj.users[i+1].username = aux2;
				ok = true;
			}
		}
				

	}
	return obj;
}

module.exports = Sort;
