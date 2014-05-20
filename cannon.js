'use strict';
var Bolt = require('bolt');

function Cannon(board, five) {
    this.bolt = new Bolt(board, five);
    this.isActive = false;
    this.activatePin = 8;
    this.board = board;
}

Cannon.prototype.fire = function () {
    var self = this,
        fire = function() {
            if (!self.bolt.isOpen) {
                self.bolt.open();
                setTimeout(function () {
                    self.bolt.close();
                    setTimeout(function () {
                        self.bolt.open();
                    }, 300);
                }, 300);
            } else {
                self.bolt.close();
                setTimeout(function () {
                    self.bolt.open(); 
                }, 300);
            }
        };
        
    if (this.isActive) {
        fire();
    } else {
        this.activate();
        setTimeout(function () {
           fire();
        }, 1500);
    }
};

Cannon.prototype.activate = function () {
    this.isActive = true;
    this.board.pinMode(this.activatePin, 1); // what pinmode is one? Digital write?
    this.board.digitalWrite(this.activatePin, 1); // is either a one or zero here, not sure which way I have the circuit hooked up yet.
};

Cannon.prototype.deactivate = function () {
    this.isActive = false;
    this.board.pinMode(this.activatePin, 1); // what pinmode is one? Digital write?
    this.board.digitalWrite(this.activatePin, 0); // is either a one or zero here, not sure which way I have the circuit hooked up yet.
};

module.exports = Cannon;