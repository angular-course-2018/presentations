import { Routes } from '@angular/router';
import { CrisisCenterComponent } from './components/crisis-center.component';
import { NotFoundComponent } from './components/not-found.component';
import { HeroComponent } from './components/hero.component';

export const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisCenterComponent },
    { path: 'hero/:id', component: HeroComponent },
    {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
    },
    { path: '**', component: NotFoundComponent }
];
