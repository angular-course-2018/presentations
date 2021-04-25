import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserProfile } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss']
})
export class UserProfileFormComponent {
  @Input() profile: UserProfile = {
    firstname: '',
    lastname: '',
    username: ''
  }

  @Output() profileChange = new EventEmitter();
  constructor() { }


  propertyChanged(){
    this.profileChange.emit(this.profile);
  }
}
