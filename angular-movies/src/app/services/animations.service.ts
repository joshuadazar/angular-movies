import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { Element } from '../models/IElement';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  clock!: THREE.Clock;


  constructor() { }

  animateGeometry = (element: Element) => {
    this.clock = new THREE.Clock();
    let elapsedTime = element.clock.getElapsedTime();
    elapsedTime = element.orientation ? elapsedTime : elapsedTime * -1;
    element.geometry.rotation.y = elapsedTime;
    //element.geometry.rotation.z = elapsedTime;

    element.scene.add(element.geometry);

    if (element.camera.animable) {
      element.camera.cam.position.z += element.zoomSpeed * element.zoomDirection;
      if (Math.abs(element.camera.cam.position.z - element.zoomLimit) < 20) {
        element.zoomDirection *= -1;
      }

      if (Math.abs(element.camera.cam.position.z - element.zoomTarget) > 9) {
        element.zoomDirection *= -1;
      }
    }
    element.renderer.render(element.scene, element.camera.cam);

    // Call animateGeometry again on the next frame
    window.requestAnimationFrame(() => this.animateGeometry(element));
  };


}
