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

    if(frameCount % 25 === 0)	//every 4 sec
        randomlyGenerateEnemy();

    if(frameCount % 75 === 0)	//every 3 sec
        randomlyGenerateUpgrade();

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

    for(var key in upgradeList){
        updateEntity(upgradeList[key]);
        var isColliding = testCollisionEntity(player,upgradeList[key]);
        if(isColliding){
            if(upgradeList[key].category === 'score')
                score += 1000;
            if(upgradeList[key].category === 'atkSpd')
                player.atkSpd += 3;
            delete upgradeList[key];
        }
    }

    for(var key in enemyList){
        updateEntity(enemyList[key]);

        var isColliding = testCollisionEntity(player,enemyList[key]);
        var isColliding1 = testCollisionEntity(base,enemyList[key])
        if(isColliding){
            player.hp = player.hp - 1;
        }
        if(isColliding1){
            base.hp = base.hp - 1;
        }
    }








    if(player.hp <= 0){
        var timeSurvived = Date.now() - timeWhenGameStarted;
        console.log("You lost! You survived for " + timeSurvived + " ms.");
        startNewGame();
    }
    updateEntity(player);
    updateEntity(base);
    ctx.fillText(base.hp + " Hp",0,30);
    ctx.fillText('Score: ' + score,200,30);



}
s