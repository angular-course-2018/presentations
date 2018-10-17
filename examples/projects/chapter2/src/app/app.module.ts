import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { appRoutes } from './app.routes';
import { AttributeDirectiveModule } from './attribute-directives/attribute-directives.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ChangeDetectionModule,
    AttributeDirectiveModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
