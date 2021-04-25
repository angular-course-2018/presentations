import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserProfile } from './user-profile/user-profile.component';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent {
  profile: UserProfile = {
    firstname: '',
    lastname: '',
    username: ''
  };

  // onProfileChange(profile:UserProfile){
  //   this.profile = {
  //     ...profile
  //   }
  // }
}
