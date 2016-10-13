Bullet = function (id,x,y,spdX,spdY,width,height){
    var asd = {
        type:'bullet',
        x:x,
        spdX:spdX,
        y:y,
        spdY:spdY,
        name:'E',
        id:id,
        width:width,
        height:height,
        color:'black',
        //
        timer:0,
    };
    bulletList[id] = asd;
}

generateBullet = function(actor,aimOverwrite){
    //Math.random() returns a number between 0 and 1
    var x = player.x;
    var y = player.y;
    var height = 10;
    var width = 10;
    var id = Math.random();

    var angle;
    if(aimOverwrite !== undefined)
        angle = aimOverwrite;
    else angle = actor.aimAngle;

    var spdX = Math.cos(angle/180*Math.PI)*5;
    var spdY = Math.sin(angle/180*Math.PI)*5;
    Bullet(id,x,y,spdX,spdY,width,height);
}
