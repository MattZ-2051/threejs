import * as THREE from 'three'

const CustomObject = () => {

  const verticesCount = 10 * 3;
  const positions = new Float32Array(verticesCount * 3);

  for (let i = 0; i < verticesCount; i++) {
    positions[i] = (Math.random() - 0.5) * 3
  }
  return (
    <>
    <mesh>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} count={verticesCount} itemSize={3} array={positions}/>
      </bufferGeometry>
      <meshBasicMaterial color={'cyan'} side={THREE.DoubleSide}/>
    </mesh>
    </>
  )
}

export default CustomObject;
