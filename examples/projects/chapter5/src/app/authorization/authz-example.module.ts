import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { ForbiddenComponent } from './components/forbidden.component';
import { SettingsComponent } from './components/settings.component';
import { AuthzExampleComponent } from './authz-example.component';
import { AuthGuard } from './services/authorization.guard';
import { AuthzService } from './services/authorization.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DashboardComponent,
        ForbiddenComponent,
        SettingsComponent,
        AuthzExampleComponent,
    ],
    exports: [AuthzExampleComponent],
    providers: [
        AuthzService,
        AuthGuard,
    ],
    imports: [
        // RouterModule.forRoot(appRoutes),
        RouterModule.forChild(appRoutes),
        CommonModule,
    ],
})
export class AuthzExampleModule {

}
