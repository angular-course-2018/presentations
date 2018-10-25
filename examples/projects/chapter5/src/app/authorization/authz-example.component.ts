import { Component } from '@angular/core';
import { AuthzService } from './services/authorization.service';
import { Roles } from './user-roles.model';

@Component({
    selector: 'app-authz-example',
    template: `
        Login as: <button (click)="loginAsFinance()">Finance User</button>
        <button (click)="loginAsAdmin()">Admin User</button>
        <h1>Current User: {{ authzService.userRoles }}</h1>
        <nav>
            <a routerLink="/second"  routerLinkActive="active">Dashboard</a>
            <a routerLink="/second/settings"  routerLinkActive="active">Admin Settings</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [
        `
            a { margin: 0 20px; }
            nav { margin: 10px 0; }
        `
    ]
})
export class AuthzExampleComponent {
    constructor(private authzService: AuthzService) {}
    loginAsFinance() {
        this.authzService.userRoles = [Roles.FINANCE];
    }

    loginAsAdmin() {
        this.authzService.userRoles = [Roles.ADMIN];
    }
}
