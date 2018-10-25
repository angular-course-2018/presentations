import { Routes } from '@angular/router';
import { SettingsComponent } from './components/settings.component';
import { ContactUsComponent } from './components/contact-us.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { UnsavedChangesComponent } from './unsaved-changes.component';

export const appRoutes: Routes = [
    {
        path: 'third',
        component: UnsavedChangesComponent,
        children: [
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
        ]
    }
];
