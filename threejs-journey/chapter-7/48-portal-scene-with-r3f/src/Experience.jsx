import {
  Center,
  OrbitControls,
  useGLTF,
  useTexture,
  Sparkles,
  shaderMaterial,
} from '@react-three/drei';
import * as THREE from 'three';
import portalVertexShader from './shaders/portal/vertex.glsl';
import fragmentShader from './shaders/portal/fragment.glsl';
import { extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000'),
  },
  portalVertexShader,
  fragmentShader
);

extend({ PortalMaterial });

export default function Experience() {
  const { nodes, materials, animations } = useGLTF('./model/portal.glb');
  const bakedTexture = useTexture('/model/baked.jpg');
  const portalRef = useRef();
  bakedTexture.flipY = false;

  useFrame((state, delta) => {
    portalRef.current.uTime += delta;
  });
  return (
    <>
      <OrbitControls makeDefault />
      <color args={['#030202']} attach={'background'} />
      <Center>
        {/* <mesh geometry={nodes.poleLightA.geometry} /> */}
        <group dispose={null}>
          <mesh geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>
          <mesh
            geometry={nodes.portalLight.geometry}
            position={nodes.portalLight.position}
            rotation={nodes.portalLight.rotation}
          >
            <portalMaterial ref={portalRef} />
          </mesh>
          <mesh
            geometry={nodes.poleLightA.geometry}
            position={nodes.poleLightA.position}
          >
            <meshBasicMaterial color="#ffffe5" />
          </mesh>

          <mesh
            geometry={nodes.poleLightB.geometry}
            position={nodes.poleLightB.position}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <meshBasicMaterial color="#ffffe5" />
          </mesh>
        </group>
        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  );
}
