import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IntroComponent } from './intro.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    IntroComponent,
  ],
  exports: [
    IntroComponent,
  ]
})
export class IntroModule { }
