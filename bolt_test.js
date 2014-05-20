var five = require("johnny-five"),
    keypress = require('keypress'),
    Cannon = require('cannon'),
    board = new five.Board();


board.on("ready", function () {
    'use strict';
    var cannon = new Cannon(board, five);
    keypress(process.stdin);
    this.repl.inject({
        cannon: cannon
    });
    board.on('move:complete', function(){
        console.log('completed2'); 
    });
    
    

  /*  process.stdin.on('keypress', function (ch, key){
        if(key.name === 'f'){
            cannon.fire();
        }
        console.log(key.name);
    });
    */
});
