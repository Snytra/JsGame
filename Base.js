Base = function () {

    base = {
        health:100,
        type:'base',
        x:20,
        y:20,
        width:100,
        height:120
    };
    drawBase= function() {

        ctx.rect(base.x,base.y,base.height,base.width);
        ctx.stroke();

    }
    drawBase();
};