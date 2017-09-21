/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//@Timi
var sq = document.getElementById("square");
var cont = document.getElementById("container");
var smallSq = document.getElementById("small_square");


var smallSq_Pos = {
 
    x : parseInt(window.getComputedStyle(smallSq, null).getPropertyValue("left")), 
    y : parseInt(window.getComputedStyle(smallSq, null).getPropertyValue("top")),
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

var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

var time0 = 0;
var firstTime = true;
var name;

function InitSquares(){
	
	sq_Pos.x = 0;
	sq_Pos.y = 0;
	smallSq.x = parseInt(window.getComputedStyle(smallSq, null).getPropertyValue("left"));
	smallSq.y = parseInt(window.getComputedStyle(smallSq, null).getPropertyValue("top"));
}
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
}function MoveSmallSquare(){

	var delayMillis = 2000; //2 second

	//if (delayMillis < 2200) 
	//	delayMillis+=500;
	
	var zid = 80; // 80 for high difficulty
	while (Math.abs(randomVal.x - sq_Pos.x) < zid || Math.abs(randomVal.y - sq_Pos.y) < zid){

		randomVal.x = getRandom(0, parseInt(window.getComputedStyle(cont, null).getPropertyValue("width")) - smallSq_Pos.length);
		randomVal.y = getRandom(0, parseInt(window.getComputedStyle(cont, null).getPropertyValue("height")) - smallSq_Pos.length);
	}
	 
	window.setTimeout(function() {
		smallSq.style.left = randomVal.x +  'px';
		smallSq.style.top = randomVal.y  +  'px';
		smallSq_Pos.x = randomVal.x;
		smallSq_Pos.y = randomVal.y;
	}, delayMillis);
}


window.onkeydown = function(e){
     var kc = e.keyCode;

     if (firstTime === true){
     	time0 = performance.now();
     	firstTime = false;
     }
     e.preventDefault();

     if(kc === 37) Keys.left = true;
     if(kc === 38) Keys.up = true;
     if(kc === 39) Keys.right = true;
     if(kc === 40) Keys.down = true;
 };

window.onkeyup = function(e){
     var kc = e.keyCode;
     e.preventDefault();

     if(kc === 37) Keys.left = false;
     if(kc === 38) Keys.up = false;
     if(kc === 39) Keys.right = false;
     if(kc === 40) Keys.down = false;
};


function main(){
	
	Move();

}

function Move() {

	var step = 30;

    if (Keys.up){
        sq_Pos.y-=step;
		if (CheckBorders() == true){
			sq.style.top = sq_Pos.y +  'px';
		}
		else{
			sq_Pos.y+=step;
		}
    }

    if (Keys.down){
        sq_Pos.y+=step;
		if (CheckBorders() == true){
			sq.style.top = sq_Pos.y +  'px';	
		}
		else{
			sq_Pos.y-=step;
		}
    }

    if (Keys.left) {
        sq_Pos.x-=step;
		if (CheckBorders() == true){
			sq.style.left = sq_Pos.x +  'px';
		}
		else{
			sq_Pos.x+=step;
		}
    }

    if (Keys.right){
        sq_Pos.x+=step;
		if (CheckBorders() == true){
			sq.style.left = sq_Pos.x +  'px';
		}
		else{
			sq_Pos.x-=step;
		}
    }

	if (CheckCollision() == true ){
		console.log("Collision");
		
		var time1 = performance.now();
		var time = (time1 - time0) / 1000;
		var sec = time.toPrecision(5);
		alert("Bravo " + name + ", ai o maslinuta!\nTimp: " + sec + " secunde.\n");
		location.reload();

	}
	else{
		MoveSmallSquare();
	}
}

name = prompt("Please enter your name");
setInterval(main, 100);


/***/ })
/******/ ]);