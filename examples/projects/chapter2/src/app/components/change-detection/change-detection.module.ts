import { NgModule } from '@angular/core';
import { Title1Component } from './components/title1/title1.component';
import { Title2Component } from './components/title2/title2.component';
import { ChangeDetectionComponent } from './change-detection.component';


@NgModule({
  declarations: [
    Title1Component,
    Title2Component,
    ChangeDetectionComponent,
  ],
  exports: [ChangeDetectionComponent]
})
export class ChangeDetectionModule { }
