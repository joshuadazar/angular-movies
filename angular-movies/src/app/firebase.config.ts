import { EnvironmentProviders, importProvidersFrom } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";

const firebaseConfig = {
  projectId: 'movies-1e4c2',
  appId: '1:1022008625447:web:89ac249324005d8112c102',
  storageBucket: 'movies-1e4c2.appspot.com',
  apiKey: 'AIzaSyB3qO8O4oaNQO24rXjufWSXGctsQl35Oj4',
  authDomain: 'movies-1e4c2.firebaseapp.com',
  messagingSenderId: '1022008625447',
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseProviders = [
  provideFirebaseApp(() => firebaseApp),
  provideFirestore(() => getFirestore(firebaseApp)),
  provideStorage(() => getStorage(firebaseApp)),
];

export { firebaseProviders };
