import { Component } from '@angular/core';
import { GameService } from './services-examples/game.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chapter3';
  // constructor(
  //   private gameService: GameService,
  // ) {
  //   gameService.startGame();
  // }
}
