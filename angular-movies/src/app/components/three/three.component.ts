import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Element } from '../../models/IElement';
import * as THREE from 'three';
import { AnimationsService } from '../../services/animations.service';

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
  plane!: THREE.Mesh;
  clock!: THREE.Clock;
  element!: Element;
  animationsService = inject(AnimationsService);

  zoomDirection = 1; // 1 for zoom in, -1 for zoom out
  zoomTarget = 10; // Target distance for zoom
  zoomSpeed = 0.2; // Speed of zoom animation
  zoomLimit = 30;

  ngOnInit(): void {
    this.createThreeJsBox();
    this.resizeWindow();
    window.addEventListener('resize', this.resizeWindow.bind(this));
  }

  changeColor() {
    this.renderer.setClearColor(0xeAF5252, .9);
  }

  createTorus() {
    const textureLoader = new THREE.TextureLoader();
    const torusTexture = textureLoader.load('https://images.pexels.com/photos/4498792/pexels-photo-4498792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    const materialTorus = new THREE.MeshLambertMaterial({ map: torusTexture });
    materialTorus.color.setHex(0x888888);

    this.torus = new THREE.Mesh(
      new THREE.TorusGeometry(5, 1.5, 16, 100),
      materialTorus
    );
    return this.torus;
  }

  createBox() {
    const textureLoader = new THREE.TextureLoader();
    const torusTexture = textureLoader.load('https://images.pexels.com/photos/4498792/pexels-photo-4498792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    const materialBox = new THREE.MeshPhongMaterial({ map: torusTexture });
    materialBox.color.setHex(0x444444);
    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 2.5, 2.5),
      materialBox
    );
    this.box.position.y = 10;
    return this.box;
  }

  createBox2() {
    const box2 = this.createBox();
    box2.scale.set(20, .2, 20);
    box2.position.y = 20;
    return box2;
  }

  createPlane() {
    const textureLoader = new THREE.TextureLoader();
    const planeTexture = textureLoader.load('https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg');
    const planeMaterial = new THREE.MeshPhongMaterial({ map: planeTexture });
    planeMaterial.color.setHex(0xaaaaaa);
    const planeGeometry = new THREE.PlaneGeometry(40, 80);
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    this.plane.translateY(-10)
    this.plane.rotation.x = -Math.PI / 1.8;
    return this.plane;
  }

  resizeWindow() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  }

  get3DHouse() {
    const loader = new ColladaLoader();
    /*
    loader.load('House/model.dae', (collada) => {
      console.log(collada, 'collada');
      this.scene.add(collada.scene);
    })
    */

  }

  createPointLight() {
    const pointLight = new THREE.PointLight(0x5500004, 150, 190, 1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 2;
    return pointLight;
  }

  createThreeJsBox(): void {
    this.canvas = document.getElementById('canvas-box');
    this.scene = new THREE.Scene();
    const ambientLight = new THREE.AmbientLight(0xffffff, 4);
    this.clock = new THREE.Clock();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.z = 35;
    this.camera.position.y = 5;
    this.camera.rotateX(0.1);

    const sceneObjects = {
      pointLight: this.createPointLight(),
      ambientLight: ambientLight,

      box2: this.createBox2(),
      box: this.createBox(),
      plane: this.createPlane(),
      camera: this.camera,
    }

    Object.values(sceneObjects).forEach(val => this.scene.add(val));

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    const element: Element = {
      geometry: this.createTorus(),
      orientation: true,
      camera: {
        cam: this.camera,
        animable: true,
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
    this.get3DHouse();
  }


}
