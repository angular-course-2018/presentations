import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleConfigModule } from './simple-config/simple-config.module';
import { CommonModule } from '@angular/common';
import { AuthzExampleModule } from './authorization/authz-example.module';
import { UnsavedChangesModule } from './unsaved-changes/unsaved-changes.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    SimpleConfigModule, // example 1 + 2: Simple config + children
    AuthzExampleModule, // example 3: CanActivate
    UnsavedChangesModule, // example 4: CanDeactivate
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
