import { Routes } from '@angular/router';
import { Roles } from './user-roles.model';
import { SettingsComponent } from './components/settings.component';
import { DashboardComponent } from './components/dashboard.component';
import { AuthGuard } from './services/authorization.guard';
import { ForbiddenComponent } from './components/forbidden.component';
import { GuardedRoutes } from './guarded-routes';

export const appRoutes: GuardedRoutes = [
    {
        path: 'settings',
        canActivate: [AuthGuard],
        component: SettingsComponent,
        data: {
            roles: [Roles.ADMIN]
        }
    },
    {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        data: { roles: [Roles.ALL] }
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent,
    },
    { path: '**', redirectTo: '' }
];
