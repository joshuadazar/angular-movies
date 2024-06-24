import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent implements OnInit {

  // Global variables for scene, camera, objects, etc.
  canvas!: any;
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  box!: THREE.Mesh;
  torus!: THREE.Mesh;
  clock!: THREE.Clock;

  ngOnInit(): void {
    this.createThreeJsBox();
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow.bind(this));
  }

  changeColor() {
    this.renderer.setClearColor(0xeAF5252, 1);
    // You might want to update the scene or objects here if needed
  }

  resizeWindow() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    // Update renderer size
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  }

  createThreeJsBox(): void {
    // Initialize global variables
    this.canvas = document.getElementById('canvas-box');
    this.scene = new THREE.Scene();

    const material = new THREE.MeshToonMaterial();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.9);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 2;
    this.scene.add(pointLight);

    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 1.5, 1.5),
      material
    );

    const textureLoader = new THREE.TextureLoader();
    const torusTexture = textureLoader.load('https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg');
    const materialTorus = new THREE.MeshBasicMaterial({ map: torusTexture });

    this.torus = new THREE.Mesh(
      new THREE.TorusGeometry(5, 1.5, 16, 100),
      materialTorus
    );

    this.scene.add(this.torus, this.box);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    this.clock = new THREE.Clock();

    this.camera.position.z = 30;
    this.scene.add(this.camera);

    // ... (canvas setup) ...
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });
    // animation
    const animateGeometry = () => {
      const elapsedTime = this.clock.getElapsedTime();

      // Update animation objects
      this.box.rotation.x = elapsedTime;
      this.box.rotation.y = elapsedTime;
      this.box.rotation.z = elapsedTime;

      this.torus.rotation.x = -elapsedTime;
      this.torus.rotation.y = -elapsedTime;
      this.torus.rotation.z = -elapsedTime;

      // Render
      this.renderer.render(this.scene, this.camera);

      // Call animateGeometry again on the next frame
      window.requestAnimationFrame(animateGeometry);
    };

    animateGeometry();
  }
}
