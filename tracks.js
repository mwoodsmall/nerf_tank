'use strict';

function Tracks(board, five) {
    this.motors = {
        left: new five.Motor({
            pins: {
                pwm: 3,
                dir: 2,
                cdir: 4
            }
        }),
        right: new five.Motor({
            pins: {
                pwm: 5,
                dir: 6,
                cdir: 7
            }
        })
    };
}


Tracks.prototype.forward = function (speed) {
    var mSpeed = speed || 255;
    this.motors.left.forward(mSpeed);
    this.motors.right.forward(mSpeed);
};

Tracks.prototype.reverse = function (speed) {
    var mSpeed = speed || 255;
    this.motors.left.reverse(mSpeed);
    this.motors.right.reverse(mSpeed);
};

Tracks.prototype.left = function (speed) {
    var mSpeed = speed || 255;
    this.motors.right.forward(mSpeed);
    this.motors.left.reverse(mSpeed);
};

Tracks.prototype.right = function (speed) {
    var mSpeed = speed || 255;
    this.motors.right.reverse(mSpeed);
    this.motors.left.forward(mSpeed); 
};

Tracks.prototype.stop = function () {
    this.motors.right.stop();
    this.motors.left.stop();
};

module.exports = Tracks;