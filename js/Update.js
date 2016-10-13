updateEntity = function(entity){
    updateEntityPosition(entity);
    drawEntity(entity);
}

updateEntityPosition = function(entity){
    if(entity.type === 'player'){
        if(player.pressingRight)
            player.x += 10;
        if(player.pressingLeft)
            player.x -= 10;
        if(player.pressingDown)
            player.y += 10;
        if(player.pressingUp)
            player.y -= 10;

        //ispositionvalid
        if(player.x < player.width/2)
            player.x = player.width/2;
        if(player.x > WIDTH-player.width/2)
            player.x = WIDTH - player.width/2;
        if(player.y < player.height/2)
            player.y = player.height/2;
        if(player.y > HEIGHT - player.height/2)
            player.y = HEIGHT - player.height/2;

    } else {
        entity.x += entity.spdX;
        entity.y += entity.spdY;

        if(entity.x < 0 || entity.x > WIDTH){
            entity.spdX = -entity.spdX;
        }
        if(entity.y < 0 || entity.y > HEIGHT){
            entity.spdY = -entity.spdY;
        }
    }
}

update = function(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    frameCount++;
    score++;

    if(frameCount % 100 === 0)	//every 4 sec
        randomlyGenerateEnemy();



    player.attackCounter += player.atkSpd;


    for(var key in bulletList){
        updateEntity(bulletList[key]);

        var toRemove = false;
        bulletList[key].timer++;
        if(bulletList[key].timer > 75){
            toRemove = true;
        }

        for(var key2 in enemyList){
            var isColliding = testCollisionEntity(bulletList[key],enemyList[key2]);
            if(isColliding){
                toRemove = true;
                delete enemyList[key2];
                break;
            }
        }
        if(toRemove){
            delete bulletList[key];
        }
    }

    

    for(var key in enemyList){
        updateEntity(enemyList[key]);
        var Remove =false;
        var isColliding = testCollisionEntity(player,enemyList[key]);
        var isColliding1 = testCollisionEntity(base,enemyList[key])
        if(isColliding){
            player.hp = player.hp - 1;
        }
        if(isColliding1){
            base.hp = base.hp - 1;
            Remove = true;
            createExplosion(400, 400, "#525252");
            if (Remove){
                delete enemyList[key];
            }

        }

    }

    for (var i=0; i<particles.length; i++)
    {
        var particle = particles[i];

        particle.update(frameCount);
        particle.draw(ctx);
    }

    if(base.hp <= 0){
        var timeSurvived = Date.now() - timeWhenGameStarted;
        ctx.fillText("You lost! You survived for " + timeSurvived + " ms.",400,500);



    }
    updateEntity(player);
    updateEntity(base);
    ctx.fillText(base.hp + " Hp",0,30);
    ctx.fillText('Score: ' + score,200,30);



}
