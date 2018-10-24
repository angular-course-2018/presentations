import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleConfigModule } from './simple-config/simple-config.module';
import { CommonModule } from '@angular/common';
import { AuthzExampleModule } from './guards/authorization/authz-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // SimpleConfigModule,
    CommonModule,
    AuthzExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
