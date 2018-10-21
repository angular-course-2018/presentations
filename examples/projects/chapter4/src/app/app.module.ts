import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FibonacciGeneratorComponent } from './fibonacci-generator/fibonacci-generator.component';
import { CommonModule } from '@angular/common';
import { ThrottledScrollComponent } from './throttled-scroll/throttled-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciGeneratorComponent,
    ThrottledScrollComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
