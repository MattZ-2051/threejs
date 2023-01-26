import { Environment, OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function Experience() {
  return (
    <>
      <Environment preset="city" />
      <color args={['#241a1a']} attach="background" />

      <OrbitControls makeDefault />
      <Model />
    </>
  );
}
