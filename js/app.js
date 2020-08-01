function startGame() {
    // starting a new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("'New game starting for player: " + name);
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    return inputElement.value;
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    if (scoreElement) {
        scoreElement.innerText = score + " - " + playerName;
    }
    logger("Score: " + score);
}
var startGameElement = document.getElementById('startGame');
if (startGameElement)
    startGameElement.addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
var logError = function (error) { return console.error(error); };
var firstPlayer = new Player('Jane Doe', 10);
console.log(firstPlayer.name);
