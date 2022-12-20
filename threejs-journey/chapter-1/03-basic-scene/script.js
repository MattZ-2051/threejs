// // code from tut

// const scene = new THREE.Scene();

// // Blue Cube
// const geo = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial( {color: 'blue'})
// const cube = new THREE.Mesh(geo, material)
// scene.add(cube)

// // Camera sizes
// const sizes = {
//   width: 800,
//   height: 600
// }
// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
// camera.position.z = 3
// camera.position.x = 4
// camera.position.y = 1

// scene.add(camera)

// const canvas = document.querySelector(".webgl")
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize( sizes.width, sizes.height );

// renderer.render(scene, camera)

// code from docs

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();
