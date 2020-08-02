var Player = (function () {
    function Player(name, highScore) {
        this.name = name;
        this.highScore = highScore;
    }
    Player.prototype.formatName = function () {
        return this.name.toLocaleUpperCase();
    };
    return Player;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.getInputValue = function (elementId) {
        return document.getElementById(elementId).value;
    };
    return Utility;
}());
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreBoard = function () {
        var output = "<h2>Scoreboard</h2>";
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += "<h4>";
            output += result.playerName + ':' + result.score + "/" + result.problemCount + 'for factor' + result.factor;
            output += '</h4';
        }
        var scoreElements = document.getElementById('scores');
        scoreElements.innerHTML = output;
    };
    return Scoreboard;
}());
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var index = 1; index <= this.problemCount; index++) {
            gameForm += "<div class=\"form-group\">";
            gameForm += "<label for=\"answer " + index + "\" class=\"col-sm-2 control-label\">";
            gameForm += String(this.factor) + " X " + index + " </label>";
            gameForm += "<div class=\"col-sm-1\"><input type=\"text\" class=\"form-control\" id=\"answer " + index + "\" size=\"5\"/></div>";
            gameForm += "</div>";
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var index = 0; index < this.problemCount; index++) {
            var answer = Number(Utility.getInputValue('answer' + index));
            if (index * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreBoard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
var newGame;
document.getElementById('startGame')
    .addEventListener('click', function () {
    var playerName = Utility.getInputValue('playername');
    var player = new Player(playerName, 0);
    var problemCount = Number(Utility.getInputValue('problemCount'));
    var factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate')
    .addEventListener('cliclickcl', function () {
    console.log('calculating score...');
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map