import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a [routerLink]="['/first']"  routerLinkActive="active">Simple config</a>
      <a [routerLink]="['/second']" routerLinkActive="active">Authorization guard</a>
      <a [routerLink]="['/third']" routerLinkActive="active">Unsaved changes guard</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chapter5';
}
