import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ThreeComponent } from './components/three/three.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: ListComponent
  },
  {
    path: 'three',
    component: ThreeComponent
  }
];
