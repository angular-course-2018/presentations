import { NgModule } from '@angular/core';
import { ChangeDetectionComponent } from './change-detection.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';


@NgModule({
  imports:[FormsModule],
  declarations: [
    ChangeDetectionComponent,
    UserProfileComponent,
    UserProfileFormComponent,
  ],
  exports: [ChangeDetectionComponent]
})
export class ChangeDetectionModule { }
