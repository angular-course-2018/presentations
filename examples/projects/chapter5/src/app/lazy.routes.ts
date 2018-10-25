import { Routes } from '@angular/router';

export const lazyRoutes: Routes = [
    {
        path: 'first',
        loadChildren: './simple-config/simple-config.module#SimpleConfigModule',
    },
    {
        path: 'second',
        loadChildren: './authorization/authz-example.module#AuthzExampleModule',
    },
    {
        path: 'third',
        loadChildren: './unsaved-changes/unsaved-changes.module#UnsavedChangesModule',
    },
    {
        path: '', pathMatch: 'full', redirectTo: '/first'
    }
];
