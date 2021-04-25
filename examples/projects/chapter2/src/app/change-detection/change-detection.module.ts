import { NgModule } from '@angular/core';
import { Title1Component } from './components/title1/title1.component';
import { Title2Component } from './components/title2/title2.component';
import { ChangeDetectionComponent } from './change-detection.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';


@NgModule({
  imports:[FormsModule],
  declarations: [
    Title1Component,
    Title2Component,
    ChangeDetectionComponent,
    UserProfileComponent,
    UserProfileFormComponent,
  ],
  exports: [ChangeDetectionComponent]
})
export class ChangeDetectionModule { }
