import { NgModule } from '@angular/core';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { CommonModule } from '@angular/common';
import { CustomAttrDirectivesComponent } from './components/custom-directive/custom-directive.component';
import { HighlighterDirective } from './components/custom-directive/highlighter.directive';



@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    BuiltInDirectivesComponent,
    CustomAttrDirectivesComponent,
    HighlighterDirective,
  ],
  exports: [AttributeDirectiveComponent],
  imports: [
      CommonModule,
  ]
})
export class AttributeDirectiveModule { }
