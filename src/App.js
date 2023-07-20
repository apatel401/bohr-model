import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import MainAtom from "./MainAtom";

export default function App() {
  return (
    <Canvas camera={{ position: [10, 0, 0] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* Parent object representing the orbit */}
      <MainAtom />
      <OrbitControls />
    </Canvas>
  );
}
