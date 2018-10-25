import { NgModule } from '@angular/core';
import { SimpleConfigComponent } from './simple-config.component';
import { RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './components/crisis-center.component';
import { HeroComponent } from './components/hero.component';
import { NotFoundComponent } from './components/not-found.component';
import { routesWithChildren } from './app.routes';
import { HeroesService } from './services/heroes.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SimpleConfigComponent,
        CrisisCenterComponent,
        HeroComponent,
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        // RouterModule.forRoot(routesWithChildren)
        RouterModule.forChild(routesWithChildren)
    ],
    exports: [SimpleConfigComponent],
    providers: [HeroesService]
})
export class SimpleConfigModule { }
