import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import CustomObject from "./CustomObject";

const Experience = () => {

  const groupRef = useRef()
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta
  })
  return (
    <>
      <directionalLight position={[1, 2, 3]}/>
      <ambientLight intensity={0.5}/>
      <group ref={groupRef}>
        <mesh position-x={-2} rotation-y={Math.PI * -0.25}>
          <sphereBufferGeometry  />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
          <boxBufferGeometry/>
          <meshStandardMaterial color={'purple'}/>
        </mesh>
      </group>
        <mesh position-y={-1} rotation-x={ - Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={'green'} />
        </mesh>
        <CustomObject />
    </>
  )
}

export default Experience;
