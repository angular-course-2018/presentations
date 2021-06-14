import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesExamplesModule } from './services-examples/services-examples.module';
import { GameService } from './services-examples/game.service';
import { LoggerService } from './services-examples/logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesExamplesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


appmodule -> ServicesExamplesModule -> GameService, LoggerService
|
|
----->AppComponent
