
let canvas = document.getElementById("ctx").getContext("2d");

canvas.width = 4000;
canvas.height = 900;


let background = new Image();
background.src = "images/background.jpg";
background.width = 800;
background.height = 600;


// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    canvas.drawImage(background,0,0,background.width,background.height);}