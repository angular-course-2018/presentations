import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { appRoutes } from './app.routes';
import { ContactUsComponent } from './components/contact-us.component';
import { SettingsComponent } from './components/settings.component';
import { UnsavedChangesComponent } from './unsaved-changes.component';

@NgModule({
    declarations: [
        UnsavedChangesComponent,
        ContactUsComponent,
        SettingsComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule,
    ],
    exports: [UnsavedChangesComponent],
    providers: [CanDeactivateGuard]
})
export class UnsavedChangesModule {}
