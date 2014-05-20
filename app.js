var five = require("johnny-five"),
    Robot = require('./robot'),
    keypress = require('keypress'),
    board = new five.Board();


board.on("ready", function () {
    'use strict';
    var Woodro = new Robot(board, five);
    keypress(process.stdin);
    console.log(Woodro.prototype);
    this.repl.inject({
        woodro: Woodro
    });
    process.stdin.on('keypress', function (ch, key){
        if(key.name === 'up'){
            Woodro.forward();
        }
        if(key.name === 'down'){
            Woodro.reverse()
        }
        if(key.name === 'space'){
            Woodro.stop();
        }
        if(key.name === 'left'){
            Woodro.left();
        }
        if(key.name === 'right'){
            Woodro.right();
        }
        if(key.name === 'm'){
            Woodro.attackMode();   
        }
        if(key.name === 'p'){
            Woodro.peaceMode();   
        }
        if(key.name === 'f'){
            Woodro.fire();   
        }
        if(key.name === 'a'){
            Woodro.turret.left();
        }
        if(key.name === 'w'){
            Woodro.turret.up();
        }
        if(key.name === 's'){
            Woodro.turret.down();
        }
        if(key.name === 'd'){
            Woodro.turret.right();   
        }
        
        console.log(key.name);
    });
});
