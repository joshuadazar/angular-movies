import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { firebaseProviders } from './firebase.config';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './Store/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //firebaseProviders,
    provideStore({ counter: counterReducer })
  ],
};
