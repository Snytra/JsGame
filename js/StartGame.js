startNewGame = function(){
    
    base.hp=100
    timeWhenGameStarted = Date.now();
    frameCount = 0;
    score = 0;
    enemyList = {};
    upgradeList = {};
    bulletList = {};
    randomlyGenerateEnemy();
    randomlyGenerateEnemy();
    randomlyGenerateEnemy();


}

createPlayer();
createBase();


startNewGame();

setInterval(update,40);