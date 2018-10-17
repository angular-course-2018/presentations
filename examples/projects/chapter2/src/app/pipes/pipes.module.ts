import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';

@NgModule({
  declarations: [
    PipesComponent,
  ],
  exports: [PipesComponent],
  imports: [
      CommonModule,
  ]
})
export class PipesModule { }
