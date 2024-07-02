import * as THREE from 'three';


export interface Element {
  geometry: THREE.Mesh;
  orientation: boolean;
  camera: Camera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  clock: THREE.Clock;
  zoomDirection: number;
  zoomTarget: number;
  zoomSpeed: number;
  zoomLimit: number;
}

interface Camera {
  cam: THREE.PerspectiveCamera;
  animable: boolean;
}
