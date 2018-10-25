import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { appRoutes } from './app.routes';
import { ContactUsComponent } from './components/contact-us.component';
import { SettingsComponent } from './components/settings.component';
import { UnsavedChangesComponent } from './unsaved-changes.component';
import { AppService } from './app.service';

@NgModule({
    declarations: [
        UnsavedChangesComponent,
        ContactUsComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        // RouterModule.forRoot(appRoutes),
        RouterModule.forChild(appRoutes),
    ],
    exports: [UnsavedChangesComponent],
    providers: [
        CanDeactivateGuard,
        AppService,
    ]
})
export class UnsavedChangesModule {}
