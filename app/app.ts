function startGame() {
    // starting a new game
    let messageElement = document.getElementById('messages');

    if (messageElement) messageElement.innerText = 'Welcome to MultiMath! Staring a new game...';
}

let startGameElement = document.getElementById('startGame');

if (startGameElement) startGameElement.addEventListener('click', startGame);