import { NgModule } from '@angular/core';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { CommonModule } from '@angular/common';
import { CustomStructuralDirectivesComponent } from './components/custom-structural-directive/custom-structural-directive.component';
import { DuplicateDirective } from './components/custom-structural-directive/duplicate.directive';
import { ItemComponent } from './components/built-in-directives/components/item.component';




@NgModule({
  declarations: [
    ItemComponent,
    StructuralDirectiveComponent,
    BuiltInDirectivesComponent,
    CustomStructuralDirectivesComponent,
    DuplicateDirective,
  ],
  exports: [StructuralDirectiveComponent],
  imports: [
      CommonModule,
  ]
})
export class StructuralDirectiveModule { }
