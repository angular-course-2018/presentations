import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './store/app-reducers';
import { environment } from '../environments/environment';
import { AppSelectors } from './store/app.selectors';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    AppSelectors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
