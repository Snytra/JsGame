createPlayer = function(){
    player = {
        type:'player',
        x:50,
        spdX:30,
        y:40,
        spdY:5,
        width:20,
        height:20,
        color:'green',
        //
        hp:10,
        atkSpd:50,
        attackCounter:0,
        aimAngle:0,
        //
        pressingDown:false,
        pressingUp:false,
        pressingLeft:false,
        pressingRight:false,
    };
}