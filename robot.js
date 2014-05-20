'use strict';
var Tracks = require('./tracks'),
    Turret = require('./turret'),
    Cannon = require('./cannon');


function Robot(board, five) {
    this.tracks = new Tracks(board, five);
    this.turret = new Turret(board, five);
    this.cannon = new Cannon(board, five);
}

Robot.prototype.peaceMode = function () {
    this.cannon.deactivate();
};

Robot.prototype.attackMode = function () {
    this.cannon.activate();
};

Robot.prototype.fire = function () {
    this.cannon.fire();
};

Robot.prototype.aim = function (coords) {
    this.turret.moveTo(coords);
};

Robot.prototype.forward = function (speed) {
    this.tracks.forward(speed);
};

Robot.prototype.reverse = function (speed) {
    this.tracks.reverse(speed);
};

Robot.prototype.left = function (speed) {
    this.tracks.left(speed);
};

Robot.prototype.right = function (speed) {
    this.tracks.right(speed);
};

Robot.prototype.stop = function () {
    this.tracks.stop();
};

Robot.prototype.turret = this.turret;

module.exports = Robot;