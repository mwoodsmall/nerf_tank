'use strict';
var Cannon = require('cannon');

function Turret(board, five) {
    this.cannon = new Cannon(board, five);
    this.elevation = {
        servo: five.Servo({
            pin: 9
        }).center()
    };
    this.windage = {
        servo: five.Servo({
            pin: 10
        }).center()
    };
    this.position = {
        x: 90,
        y: 90
    };
}



Turret.prototype.pan = function (degrees, callback) {
    this.windage.servo.to(degrees);
};

Turret.prototype.tilt = function (degrees, callback) {
    this.elevation.servo.to(degrees);
};

Turret.prototype.moveTo = function (coords, callback) {
    this.elevation.servo.to(coords.x);
    this.windage.servo.to(coords.y);
};

Turret.prototype.left = function () {
    this.windage.servo.to(this.position.x += 10);
};

Turret.prototype.right = function () {
    this.windage.servo.to(this.position.x -= 10);
};

Turret.prototype.up = function () {
    this.elevation.servo.to(this.position.y += 10);
};

Turret.prototype.down = function () {
    this.elevation.servo.to(this.position.y -= 10);
};

module.exports = Turret;