import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

const scene: Scene = new Scene();
const camera: PerspectiveCamera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer: THREE.WebGLRenderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry: BoxGeometry = new BoxGeometry(1, 1, 1);
const material: MeshBasicMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
const cube: Mesh = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate =  () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
