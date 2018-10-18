import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
    selector: 'app-board-component',
    template: `<h1>Board Component</h1>`,
    // providers: [GameService],
})
export class BoardComponent {
    constructor(
        gameService: GameService
    ) {
        gameService.startGame();
    }
}
