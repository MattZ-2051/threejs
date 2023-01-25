import { useFrame } from '@react-three/fiber';
import {
  useHelper,
  OrbitControls,
  ContactShadows,
  Environment,
} from '@react-three/drei';
import { useRef } from 'react';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';

export default function Experience() {
  const cube = useRef();
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 2);
  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
    // const time = state.clock.elapsedTime;
    // cube.current.position.x = 2 + Math.sin(time);
  });

  return (
    <>
      <Environment
        files={[
          './environmentMaps/2/px.jpg',
          './environmentMaps/2/nx.jpg',
          './environmentMaps/2/py.jpg',
          './environmentMaps/2/ny.jpg',
          './environmentMaps/2/pz.jpg',
          './environmentMaps/2/nz.jpg',
        ]}
        background
      />
      <color args={['ivory']} attach="background" />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={'blue'}
        opacity={0.5}
        blur={5}
        frames={1}
      />
      {/* <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        ref={directionalLight}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={[1, 2, 3]} /> */}
      <mesh position-x={-2} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="orange" envMapIntensity={4} />
      </mesh>

      <mesh ref={cube} position-x={2} scale={1.5} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" envMapIntensity={4} />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" envMapIntensity={4} />
      </mesh>
    </>
  );
}
