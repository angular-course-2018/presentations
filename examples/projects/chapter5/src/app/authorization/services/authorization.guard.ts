import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthzService } from './authorization.service';
import { Roles } from '../user-roles.model';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthzService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const pathAllowedRoles = next.data.roles as Roles[];
        if (this.authService.isAuthorized(pathAllowedRoles)) {
            return true;
        }
        this.router.navigate(['/second/forbidden']);
        return false;
    }
}
