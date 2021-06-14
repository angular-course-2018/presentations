import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { appRoutes } from './app.routes';
import { SimpleConfigModule } from './simple-config/simple-config.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    SimpleConfigModule, // example 1 + 2: Simple config + children
    RouterModule.forRoot(appRoutes),

    // RouterModule.forRoot(lazyRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
