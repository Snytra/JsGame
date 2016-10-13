Enemy = function(id,x,y,spdX,spdY,width,height){
    var enemy3 = {
        type:'enemy',
        x:x,
        spdX:spdX,
        y:y,
        spdY:spdY,
        id:id,
        width:width,
        height:height,
        color:'red',
        //
        aimAngle:0,
        atkSpd:1,
        attackCounter:0,
    };
    enemyList[id] = enemy3;

}

randomlyGenerateEnemy = function(){
    //Math.random() returns a number between 0 and 1
    var x = Math.random()*WIDTH;
    var y = Math.random()*HEIGHT;
    var height = 10 + Math.random()*30;	//between 10 and 40
    var width = 10 + Math.random()*30;
    var id = Math.random();
    var spdX = 5 + Math.random() * 5;
    var spdY = 5 + Math.random() * 5;
    Enemy(id,x,y,spdX,spdY,width,height);

}
