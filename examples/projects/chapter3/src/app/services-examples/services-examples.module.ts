import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { GameService } from './game.service';

@NgModule({
    providers: [GameService],
    declarations: [BoardComponent],
    exports: [BoardComponent]
})
export class ServicesExamplesModule {}
