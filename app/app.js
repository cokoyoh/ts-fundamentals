function startGame() {
    // starting a new game
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Staring a new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
