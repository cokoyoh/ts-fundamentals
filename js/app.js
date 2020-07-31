"use strict";
function startGame() {
    var messageElement = document.getElementById('messages');
    if (messageElement)
        messageElement.innerText = 'Welcome to MultiMath! Staring a new game...';
}
var startGameElement = document.getElementById('startGame');
if (startGameElement)
    startGameElement.addEventListener('click', startGame);
//# sourceMappingURL=app.js.map