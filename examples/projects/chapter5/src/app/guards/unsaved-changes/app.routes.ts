import { Routes } from '@angular/router';
import { SettingsComponent } from './components/settings.component';
import { ContactUsComponent } from './components/contact-us.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

export const appRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: '',
        canDeactivate: [CanDeactivateGuard],
        component: ContactUsComponent
    },
    { path: '**', redirectTo: '' }
];
