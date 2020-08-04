import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';


let newGame: Game;

//add clieck handler to  the start game button
(<HTMLElement>document.getElementById('startGame'))
    .addEventListener('click', () => {
        const playerName = Helpers.getValue('playername');
        const player: Player = new Player(playerName, 0);

        const problemCount: number = Number(Helpers.getValue('problemCount'));
        const factor: number = Number(Helpers.getValue('factor'));

        newGame = new Game(player, problemCount, factor);
        newGame.displayGame();
    });

// add click handler to calculate the score
(<HTMLElement>document.getElementById('calculate'))
    .addEventListener('cliclickcl', () => {
        console.log('calculating score...');
        newGame.calculateScore();
    })
