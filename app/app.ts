function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);
    postScore(-5, playerName);
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
    let logger: (value: string) => void;


    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');

    if (scoreElement) {
        scoreElement.innerText = `${score} - ${playerName}`;
    }

    logger(`Score: ${score}`);
}

let startGameElement = document.getElementById('startGame');
if (startGameElement) startGameElement.addEventListener('click', startGame);


const logMessage = (message: string) => console.log(message);

const logError = (error: string) => console.error(error);

let myResult: Result = {
    playerName: 'Jane Doe',
    score: 5,
    problemCount: 5,
    factor: 7
};

let player: Person = {
    name: 'John Doe',
    formatName: () => 'Jane'
}