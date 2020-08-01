var Player = /** @class */ (function () {
    function Player(name, highScore) {
        this.name = name;
        this.highScore = highScore;
    }
    Player.prototype.formatName = function () {
        return this.name.toLocaleUpperCase();
    };
    return Player;
}());
