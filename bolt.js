'use strict';
function Bolt(board, five) {
    this.isOpen = false,
    this.servo = new five.Servo({
        pin: 11,
        startAt: 175
    });
}

Bolt.prototype.open = function () {
    this.servo.to(175);
    this.isOpen = true;
};

Bolt.prototype.close = function () {
    this.servo.to(40);
    this.isOpen = false;
};

module.exports = Bolt;

