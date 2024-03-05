import { EnvironmentProviders, importProvidersFrom } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";

const firebaseProviders: EnvironmentProviders = importProvidersFrom(
  provideFirebaseApp(() =>
    initializeApp({
      projectId: 'movies-1e4c2',
      appId: '1:1022008625447:web:89ac249324005d8112c102',
      storageBucket: 'movies-1e4c2.appspot.com',
      apiKey: 'AIzaSyB3qO8O4oaNQO24rXjufWSXGctsQl35Oj4',
      authDomain: 'movies-1e4c2.firebaseapp.com',
      messagingSenderId: '1022008625447',
    })
  ),
  provideStorage(() => getStorage()),
  provideFirestore(() => getFirestore())
)

export { firebaseProviders }
