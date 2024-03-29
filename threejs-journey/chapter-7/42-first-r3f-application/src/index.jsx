import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <>
    <Canvas
      camera={{ zoom: 100, near: 0.1, far: 200, position: [3, 2, 6] }}
      orthographic
    >
      <Experience />
    </Canvas>
  </>
);
