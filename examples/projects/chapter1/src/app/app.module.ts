import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { IntroModule } from './intro/intro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IntroModule,
    LifecycleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
