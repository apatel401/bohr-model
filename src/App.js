import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import MainAtom from "./MainAtom";

export default function App() {
  let sampleArr = [1,2,4,8,32];

  const _shells = sampleArr.map((atoms, index)=> {
    return (
    <>
    <mesh rotation={[0,Math.PI / 2,0]}>
      <torusGeometry args={[2 + (index*2), 0.05, 32, 32]} />
      <meshPhongMaterial color={"0xffffff4d"}/>
    </mesh>
    <MainAtom key={index} torusIndex={index} numOfAtoms={atoms}/>
    </>
    
    )
  })
  return (
    <Canvas camera={{ position: [10, 0, 0] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* Parent object representing the orbit */}
      {_shells}
      <OrbitControls />
    </Canvas>
  );
}
