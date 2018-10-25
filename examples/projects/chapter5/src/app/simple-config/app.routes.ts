import { Routes } from '@angular/router';
import { CrisisCenterComponent } from './components/crisis-center.component';
import { NotFoundComponent } from './components/not-found.component';
import { HeroComponent } from './components/hero.component';
import { SimpleConfigComponent } from './simple-config.component';

// routes config with children
export const routesWithChildren: Routes = [
    {
        path: 'first',
        component: SimpleConfigComponent,
        children: [
            { path: 'crisis-center', component: CrisisCenterComponent},
            { path: 'hero/:id', component: HeroComponent},
            { path: '', pathMatch: 'full', redirectTo: '/first/crisis-center' },
            { path: '**', component: NotFoundComponent },
        ],
    },
];
