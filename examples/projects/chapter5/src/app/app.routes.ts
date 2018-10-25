import { Routes } from '@angular/router';
import { NotFoundComponent } from './simple-config/components/not-found.component';

export const appRoutes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/first'
    },
    {
        path: '**', component: NotFoundComponent,
    }
];
