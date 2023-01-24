import { useEffect } from 'react';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { MeshStandardMaterial } from 'three';

const CustomObject = () => {
  const verticesCount = 10 * 3;
  const geoRef = useRef();

  useEffect(() => {
    if (geoRef) {
      geoRef.current.computeVertexNormals();
    }
  }, [geoRef]);
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  return (
    <>
      <mesh>
        <bufferGeometry ref={geoRef}>
          <bufferAttribute
            attach={'attributes-position'}
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshStandardMaterial color={'cyan'} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default CustomObject;
