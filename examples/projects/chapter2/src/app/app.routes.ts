import { Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AttributeDirectiveComponent } from './attribute-directives/attribute-directive.component';

export const appRoutes: Routes = [
    {
        path: 'cd',
        component: ChangeDetectionComponent,
    },
    {
        path: 'attr-dir',
        component: AttributeDirectiveComponent,
    }
];
