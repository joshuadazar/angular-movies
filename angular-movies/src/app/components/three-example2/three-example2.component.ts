import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import * as THREE from 'three';
import { AnimationsService } from '../../services/animations.service';
import { Element } from '../../models/IElement';


@Component({
  selector: 'app-three-example2',
  standalone: true,
  imports: [],
  templateUrl: './three-example2.component.html',
  styles: [
    `
    #geometry {
      box-shadow: 0 0 4px red;
    }
  `
  ]
})
export class ThreeExample2Component implements OnInit {

  canvas!: any;
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  box!: THREE.Mesh;
  torus!: THREE.Mesh;
  plane!: THREE.Mesh;
  clock!: THREE.Clock;
  animationsService = inject(AnimationsService)

  zoomDirection = 1; // 1 for zoom in, -1 for zoom out
  zoomTarget = 10; // Target distance for zoom
  zoomSpeed = 0.03; // Speed of zoom animation
  zoomLimit = 30;

  ngOnInit(): void {
    this.createScene();
    this.resizeWindow();
    window.addEventListener("resize", () => this.resizeWindow())
  }

  getCube() {
    const textureLoader = new THREE.TextureLoader();
    const planeTexture = textureLoader.load('https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg');
    const planeMaterial = new THREE.MeshPhongMaterial({ map: planeTexture });
    const text = new THREE.MeshToonMaterial({ color: 0xfff555 });
    planeMaterial.color.setHex(0xaaaaaa);
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    this.box = new THREE.Mesh(geometry, planeMaterial);
    this.box.position.set(0, 2, 0);
    return this.box
  }

  getSphere() {
    const textureLoader = new THREE.TextureLoader();
    const planeTexture = textureLoader.load('https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg');
    const planeMaterial = new THREE.MeshPhongMaterial({ map: planeTexture });
    const geometry = new THREE.SphereGeometry(1)
    const sphere = new THREE.Mesh(geometry, planeMaterial);
    return sphere
  }

  resizeWindow() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  }

  createScene() {
    this.clock = new THREE.Clock();
    this.canvas = document.getElementById('geometry');
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
    this.camera.position.z = 3;
    this.scene = new THREE.Scene();
    this.scene.add(ambientLight, this.getCube());
    this.renderer.setClearColor(0x000992, .9);
    this.renderer.render(this.scene, this.camera);

    const element: Element = {
      geometry: this.getSphere(),
      orientation: true,
      camera: {
        cam: this.camera,
        animable: false,
      },
      scene: this.scene,
      renderer: this.renderer,
      clock: this.clock,
      zoomDirection: this.zoomDirection,
      zoomTarget: this.zoomTarget,
      zoomSpeed: this.zoomSpeed,
      zoomLimit: this.zoomLimit,
    }
    this.animationsService.animateGeometry(element);
  }

}
