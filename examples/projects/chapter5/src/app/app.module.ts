import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleConfigModule } from './simple-config/simple-config.module';
import { CommonModule } from '@angular/common';
import { AuthzExampleModule } from './guards/authorization/authz-example.module';
import { UnsavedChangesModule } from './guards/unsaved-changes/unsaved-changes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    // SimpleConfigModule, // example 1 + 2: Simple config + children
    // AuthzExampleModule, // example 3: CanActivate
    UnsavedChangesModule, // example 4: CanDeactivate
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
