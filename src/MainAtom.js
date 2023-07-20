import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Atom from "./Atom";
import { usePosition } from "./usePosition";

function MainAtom(){
  const orbitRef = useRef();
  const positions = usePosition(32, 5);
  useFrame(() => {
    // atomRef.current[index].rotation.y += 0.01;
    // const elapsedTime = clockRef.current.getElapsedTime();
    // const angle = elapsedTime * 3;
    orbitRef.current.rotation.x += 0.01;
    setTimeout(() => {
        orbitRef.current.rotation.z += 0.01;
        orbitRef.current.rotation.y += 0.01;
    }, 5000);

  });
  return (
    <group position={[0, 0, 0]} ref={orbitRef}>
        {positions &&
          positions.map((position, index) => {
            return <Atom key={index} index={index} position={position} />;
          })}
        {/* Atoms positioned on the orbit */}
      </group>
  )
}
export default MainAtom