/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

//add clieck handler to  the start game button
(<HTMLElement>document.getElementById('startGame'))
    .addEventListener('click', () => {
        const playerName = Utility.getInputValue('playername');
        const player: Player = new Player(playerName, 0);

        const problemCount: number = Number(Utility.getInputValue('problemCount'));
        const factor: number = Number(Utility.getInputValue('factor'));

        newGame = new Game(player, problemCount, factor);
        newGame.displayGame();
    });

// add click handler to calculate the score
(<HTMLElement>document.getElementById('calculate'))
    .addEventListener('cliclickcl', () => {
        console.log('calculating score...');
        newGame.calculateScore();
    })
