import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ThreeComponent } from './components/three/three.component';
import { ThreeExample2Component } from './components/three-example2/three-example2.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: ListComponent
  },
  {
    path: 'three',
    component: ThreeComponent
  },
  {
    path: 'three2',
    component: ThreeExample2Component
  }
];
