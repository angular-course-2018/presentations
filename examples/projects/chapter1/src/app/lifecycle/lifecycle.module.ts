import { NgModule } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';
import { LifecycleHeaderComponent } from './lifecycle-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LifecycleComponent,
        LifecycleHeaderComponent,
    ],
    exports: [LifecycleComponent],
    imports: [CommonModule]
})
export class LifecycleModule {}
