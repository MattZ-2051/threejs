import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// 3D Model Loader
const gltfLoader = new GLTFLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

// Update all Materials

const updateMaterials = () => {
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.envMap = envMap
    }
  })
}
// Environment Map
const envMap = cubeTextureLoader.load(['/textures/environmentMaps/0/px.jpg',
'/textures/environmentMaps/0/nx.jpg',
'/textures/environmentMaps/0/py.jpg',
'/textures/environmentMaps/0/ny.jpg',
'/textures/environmentMaps/0/pz.jpg',
'/textures/environmentMaps/0/nz.jpg'])

envMap.encoding = THREE.sRGBEncoding

scene.background = envMap



// Light
const directionalLight = new THREE.DirectionalLight('white', 3)
directionalLight.position.set(0.25, 3, -2.25)
scene.add(directionalLight)

// Models
gltfLoader.load('/models/FlightHelmet/glTF/FlightHelmet.gltf', (gltf) =>  {
  gltf.scene.scale.set(10, 10, 10)
  gltf.scene.position.set(0, -4, 0)
  gltf.scene.rotation.y = Math.PI * 0.5
  scene.add(gltf.scene)
  updateMaterials()
}
  )


gui.add(directionalLight, 'intensity').min(0).max(10).name('lightIntensity').step(0.001)
gui.add(directionalLight.position, 'x').min(-5).max(5).name('lightX').step(0.001)
gui.add(directionalLight.position, 'y').min(-5).max(5).name('lightY').step(0.001)
gui.add(directionalLight.position, 'z').min(-5).max(5).name('lightZ').step(0.001)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(4, 1, - 4)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding
/**
 * Animate
 */
const tick = () =>
{
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
