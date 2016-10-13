document.onclick = function(mouse){
    performAttack(player);
}

performAttack = function(actor){
    if(actor.attackCounter > 25){	//every 1 sec
        actor.attackCounter = 0;
        generateBullet(actor);
    }
}

document.oncontextmenu = function(mouse){
    performSpecialAttack(player);
    mouse.preventDefault();
}

performSpecialAttack = function(actor){
    if(actor.attackCounter > 50){	//every 1 sec
        actor.attackCounter = 0;

        for(var i = 0 ; i < 360; i++){
            generateBullet(actor,i);
        }

        generateBullet(actor,actor.aimAngle - 5);
        generateBullet(actor,actor.aimAngle);
        generateBullet(actor,actor.aimAngle + 5);
    }
}


document.onmousemove = function(mouse){
    var mouseX = mouse.clientX - document.getElementById('ctx').getBoundingClientRect().left;
    var mouseY = mouse.clientY - document.getElementById('ctx').getBoundingClientRect().top;

    mouseX -= player.x;
    mouseY -= player.y;

    player.aimAngle = Math.atan2(mouseY,mouseX) / Math.PI * 180;
}

document.onkeydown = function(event){
    if(event.keyCode === 68)	//d
        player.pressingRight = true;
    else if(event.keyCode === 83)	//s
        player.pressingDown = true;
    else if(event.keyCode === 65) //a
        player.pressingLeft = true;
    else if(event.keyCode === 87) // w
        player.pressingUp = true;
}

document.onkeyup = function(event){
    if(event.keyCode === 68)	//d
        player.pressingRight = false;
    else if(event.keyCode === 83)	//s
        player.pressingDown = false;
    else if(event.keyCode === 65) //a
        player.pressingLeft = false;
    else if(event.keyCode === 87) // w
        player.pressingUp = false;
}