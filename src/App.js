import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MainAtom from "./MainAtom";
import CenteralAtom from "./CenteralAtom";

export default function App() {
  const sphereRef = useRef();
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  })
  let sampleArr = [1,2,4,8,32, 32];

  const _shells = sampleArr.map((atoms, index)=> {
    return (
    <>
    <mesh rotation={[0,Math.PI / 2,0]} ref={meshRef}>
      <torusGeometry args={[8 + (index*2), 0.05, 32, 100]} />
      <meshPhongMaterial color={"0xffffff4d"}/>
    </mesh>
    <MainAtom key={index} torusIndex={index} numOfAtoms={atoms}/>
    </>
    
    )
  })
  return (
    <Canvas camera={{ position: [30, 0, 0] }}>
      <ambientLight /> 
      <pointLight position={[10, 10, 10]} />
      {/* Parent object representing the orbit */}
      {_shells}
      <CenteralAtom />
      <OrbitControls />
    </Canvas>
  );
}
