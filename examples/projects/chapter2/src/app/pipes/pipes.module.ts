import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { TimerPipe } from './timer.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    TimerPipe,
  ],
  exports: [PipesComponent],
  imports: [
      CommonModule,
  ]
})
export class PipesModule { }
