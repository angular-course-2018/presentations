import { Route, Data } from '@angular/router';
import { Roles } from './user-roles.model';

// type safety roles for authorization
export type DataWithAuthz = Data | {roles: Roles[]};

export interface GuardedRoute extends Route {
    data?: DataWithAuthz;
}

export type GuardedRoutes = GuardedRoute[];
