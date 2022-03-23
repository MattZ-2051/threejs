import { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './App.scss';

function Box({ position, args, color }) {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={position} castShadow={true}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 60 }}
        shadowMap
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          castShadow={true}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            receiveShadow={true}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>
        <Box position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
        <Box position={[-2, 1, -5]} color="red" />
        <Box position={[5, 1, -2]} color="green" />
      </Canvas>
    </>
  );
}

export default App;
