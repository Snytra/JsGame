drawEntity = function(entity){
    ctx.save();
    ctx.fillStyle = entity.color;
    ctx.fillRect(entity.x-entity.width/2,entity.y-entity.height/2,entity.width,entity.height);
    ctx.restore();
}