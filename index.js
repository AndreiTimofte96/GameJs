var sq = document.getElementById("square");
var cont = document.getElementById("container");
var smallSq = document.getElementById("small_square");


var smallSq_Pos = {
    y : parseInt(window.getComputedStyle(smallSq, null).getPropertyValue("top")),
    x : parseInt(window.getComputedStyle(smallSq, null).getPropertyValue("left")), 
    length : parseInt(window.getComputedStyle(smallSq, null).getPropertyValue("width"))
};

var randomVal = {

	x : 0, 
	y : 0
};

var sq_Pos = {
	x : 0,
	y : 0,
	length : parseInt(window.getComputedStyle(sq, null).getPropertyValue("height"))
};


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CheckCollision(){

	if ( ( (sq_Pos.x + sq_Pos.length >= smallSq_Pos.x) && (sq_Pos.x <= smallSq_Pos.x + smallSq_Pos.length) )
	&&  ( (sq_Pos.y + sq_Pos.length >= smallSq_Pos.y) && (sq_Pos.y <= smallSq_Pos.y + smallSq_Pos.length) ) )
		return true;

	return false;
}

function CheckBorders(){

	if ( (sq_Pos.x >= 0 &&  sq_Pos.x <= parseInt(window.getComputedStyle(cont, null).getPropertyValue("width")) - sq_Pos.length)
	&& (sq_Pos.y >= 0 &&  sq_Pos.y <= parseInt(window.getComputedStyle(cont, null).getPropertyValue("height"))-sq_Pos.length)  )	
		return true;
	return false;
}

function MoveSmallSquare(){

	var delayMillis = 2000; //2 second

	if (delayMillis < 2200) delayMillis+=500;
	
	while (Math.abs(randomVal.x - sq_Pos.x) < 80 || Math.abs(randomVal.y - sq_Pos.y) < 80){

		randomVal.x = getRandom(0, 
			parseInt(window.getComputedStyle(cont, null).getPropertyValue("width")) - smallSq_Pos.length
		);
		randomVal.y = getRandom(0, 
			parseInt(window.getComputedStyle(cont, null).getPropertyValue("height")) - smallSq_Pos.length
		);
	}
	 
	window.setTimeout(function() {
		smallSq.style.left = randomVal.x +  'px';
		smallSq.style.top = randomVal.y  +  'px';
		smallSq_Pos.x = randomVal.x;
		smallSq_Pos.y = randomVal.y;
	}, delayMillis);
}

var step = 20;
function Move(e){

	if (e.keyCode == 37){
		sq_Pos.x-=step;
		if (CheckBorders() == true){
			sq.style.left = sq_Pos.x +  'px';
		}
		else{
			sq_Pos.x+=step;
		}

	}
	if (e.keyCode == 38){
		sq_Pos.y-=step;
		if (CheckBorders() == true){
			sq.style.top = sq_Pos.y +  'px';
		}
		else{
			sq_Pos.y+=step;
		}
	}
	if (e.keyCode == 39){
		sq_Pos.x+=step;
		if (CheckBorders() == true){
			sq.style.left = sq_Pos.x +  'px';
		}
		else{
			sq_Pos.x-=step;
		}
	}
	if (e.keyCode == 40){
		sq_Pos.y+=step;
		if (CheckBorders() == true){
			sq.style.top = sq_Pos.y +  'px';	
		}
		else{
			sq_Pos.y-=step;
		}
	}

	if (CheckCollision() == true ){
		console.log("Collision");
		alert("Bravo, ba, ai o maslinuta!");
		alert("Bravo, ba, ai o maslinuta!");
		alert("Bravo, ba, ai o maslinuta!");
	}
	else{
		MoveSmallSquare();
	}
}
document.onkeydown = Move;

	


