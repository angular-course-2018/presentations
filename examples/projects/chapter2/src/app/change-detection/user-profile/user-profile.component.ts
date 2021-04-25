import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {
  @Input() profile: UserProfile

}


export interface UserProfile {
  username: string;
  firstname: string;
  lastname: string;
}
