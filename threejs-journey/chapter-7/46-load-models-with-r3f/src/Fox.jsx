/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

export default function Fox(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Fox/glTF-Binary/Fox.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Run.play();
    actions.Walk.play();
    actions.Walk.crossFadeFrom(actions.Run, 6);
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="root">
          <primitive object={nodes._rootJoint} scale={0.03} position-x={2} />
          <skinnedMesh
            name="fox"
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/Fox/glTF-Binary/Fox.glb');