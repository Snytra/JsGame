var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';

var HEIGHT = 800;
var WIDTH = 800;
var timeWhenGameStarted = Date.now();	//return time in ms

var frameCount = 0;

var score = 0;
var player;
var base;


var enemyList = {};
var bulletList = {};
var particles = [];
