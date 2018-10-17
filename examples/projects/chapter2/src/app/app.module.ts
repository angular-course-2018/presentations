import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { appRoutes } from './app.routes';
import { AttributeDirectiveModule } from './attribute-directives/attribute-directives.module';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveModule } from './structural-directives/structural-directives.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ChangeDetectionModule,
    AttributeDirectiveModule,
    StructuralDirectiveModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
