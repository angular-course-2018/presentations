import { NgModule } from '@angular/core';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    StructuralDirectiveComponent,
    BuiltInDirectivesComponent,
  ],
  exports: [StructuralDirectiveComponent],
  imports: [
      CommonModule,
  ]
})
export class StructuralDirectiveModule { }
