import { Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { AttributeDirectiveComponent } from './attribute-directives/attribute-directive.component';
import { StructuralDirectiveComponent } from './structural-directives/structural-directive.component';
import { PipesComponent } from './pipes/pipes.component';

export const appRoutes: Routes = [
    {
        path: 'cd',
        component: ChangeDetectionComponent,
    },
    {
        path: 'attr-dir',
        component: AttributeDirectiveComponent,
    },
    {
        path: 'struct-dir',
        component: StructuralDirectiveComponent,
    },
    {
        path: 'pipes',
        component: PipesComponent,
    }
];
