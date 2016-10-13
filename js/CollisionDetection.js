getDistanceBetweenEntity = function (entity1,entity2){	//return distance (number)
    var vx = entity1.x - entity2.x;
    var vy = entity1.y - entity2.y;
    return Math.sqrt(vx*vx+vy*vy);
}

testCollisionEntity = function (entity1,entity2){	//return if colliding (true/false)
    var rect1 = {
        x:entity1.x-entity1.width/2,
        y:entity1.y-entity1.height/2,
        width:entity1.width,
        height:entity1.height,
    }
    var rect2 = {
        x:entity2.x-entity2.width/2,
        y:entity2.y-entity2.height/2,
        width:entity2.width,
        height:entity2.height,
    }
    return testCollisionRectRect(rect1,rect2);

}

testCollisionRectRect = function(rect1,rect2){
    return rect1.x <= rect2.x+rect2.width
        && rect2.x <= rect1.x+rect1.width
        && rect1.y <= rect2.y + rect2.height
        && rect2.y <= rect1.y + rect1.height;
}
