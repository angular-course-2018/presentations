import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { TimerPipe } from './timer.pipe';
import { OddNumbersPipe } from './odd-numbers.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    TimerPipe,
    OddNumbersPipe,
  ],
  exports: [PipesComponent],
  imports: [
      CommonModule,
  ]
})
export class PipesModule { }
