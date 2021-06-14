import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/first',

    },
    {
      path: 'second', loadChildren: () => import('./authorization/authz-example.module')
      .then(m => m.AuthzExampleModule)
    }
];
