import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { GameService } from './game.service';
import { LoggerService } from './logger.service';

@NgModule({
    providers: [
        GameService,
        LoggerService,
    ],
    declarations: [BoardComponent],
    exports: [BoardComponent]
})
export class ServicesExamplesModule {}
