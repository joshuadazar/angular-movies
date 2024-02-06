import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"movies-1e4c2","appId":"1:1022008625447:web:89ac249324005d8112c102","storageBucket":"movies-1e4c2.appspot.com","apiKey":"AIzaSyB3qO8O4oaNQO24rXjufWSXGctsQl35Oj4","authDomain":"movies-1e4c2.firebaseapp.com","messagingSenderId":"1022008625447"}))), importProvidersFrom(provideStorage(() => getStorage()))]
};
