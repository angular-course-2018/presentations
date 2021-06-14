import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a [routerLink]="route"  routerLinkActive="active">Simple config</a>
      <a [routerLink]="['/second']" routerLinkActive="active">Authorization guard</a>
      <a [routerLink]="['/third']" routerLinkActive="active">Unsaved changes guard</a>
    </nav>
    <hr>
    <h3>Router content goes here: </h3>
    <router-outlet></router-outlet>

    <div>this div is also common for everything</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  route = ['/first']
  title = 'chapter5';



}
