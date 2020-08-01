function startGame() {
    // starting a new game

    let playerName: string = 'Jane Doe';
    logPlayer(playerName);

    let messageElement = document.getElementById('messages');

    if (messageElement) messageElement.innerText = 'Welcome to MultiMath! Staring a new game...';
}

function logPlayer(name: string): void {
    console.log(`'New game starting for player: ${name}`);
}

let startGameElement = document.getElementById('startGame');
if (startGameElement) startGameElement.addEventListener('click', startGame);