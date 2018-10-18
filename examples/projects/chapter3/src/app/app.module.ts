import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesExamplesModule } from './services-examples/services-examples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServicesExamplesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
