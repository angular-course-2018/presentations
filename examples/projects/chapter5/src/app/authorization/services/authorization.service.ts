import { Injectable } from '@angular/core';
import { Roles } from '../user-roles.model';

@Injectable()
export class AuthzService  {
    userRoles = [Roles.ADMIN];

    isAuthorized(allowedRoles: Roles[]) {
        if (allowedRoles.includes(Roles.ALL)) {
            return true;
        }

        let valid = false;
        for (const role of this.userRoles) {
            if (allowedRoles.includes(role)) {
                valid = true;
                break;
            }
        }

        return valid;
    }
}
