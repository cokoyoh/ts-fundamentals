function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`'New game starting for player: ${name}`);
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === '') {
        return undefined;
    }

    return inputElement.value;
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');

    if (scoreElement) {
        scoreElement.innerText = `${score} - ${playerName}`;
    }
}

let startGameElement = document.getElementById('startGame');
if (startGameElement) startGameElement.addEventListener('click', startGame);


const logMessage = (message: string) => console.log(message);

logMessage('Welcome to MultiMath');