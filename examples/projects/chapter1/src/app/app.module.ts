import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { IntroModule } from './intro/intro.module';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent
  ],
  imports: [
    BrowserModule,
    IntroModule,
    LifecycleModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
