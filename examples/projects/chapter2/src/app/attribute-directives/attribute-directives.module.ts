import { NgModule } from '@angular/core';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    BuiltInDirectivesComponent,
  ],
  exports: [AttributeDirectiveComponent],
  imports: [
      CommonModule,
  ]
})
export class AttributeDirectiveModule { }
