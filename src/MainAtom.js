import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Atom from "./Atom";
import { usePosition } from "./usePosition";

function MainAtom({torusIndex, numOfAtoms}){
  const orbitRef = useRef();
  const clockRef = useRef(new THREE.Clock());
  const positions = usePosition(numOfAtoms, torusIndex);
  const [positionYZ, setPositionYZ] = useState({y:0, z:0})
  useFrame(() => {
    // atomRef.current[index].rotation.y += 0.01;
    // const elapsedTime = clockRef.current.getElapsedTime();
    // const angle = elapsedTime * 3;
    if(torusIndex % 2 == 0){ 
    orbitRef.current.rotation.x += 0.01;
    } else{
      orbitRef.current.rotation.x -= 0.01;
    }

    // Get the elapsed time in seconds
    const elapsedTime = clockRef.current.getElapsedTime();

    // Check if 5 seconds have passed (or any other desired duration)
    if (elapsedTime >= 5) {
      // Reset the elapsed time to make the rotation repeat
      clockRef.current.start();

      // Rotate the orbit around X and Z axes
      // orbitRef.current.rotation.y += 0.01;
      // orbitRef.current.rotation.z += 0.01;
    }
        // orbitRef.current.rotation.z += 0.01;
        // orbitRef.current.rotation.y += 0.01;

  });

  useEffect(() => {
    // Start the clock when the component mounts
    clockRef.current.start();
    setPositionYZ({y: orbitRef.current.position.y, z: orbitRef.current.position.z })
    // Clean up the clock when the component unmounts
    return () => {
      clockRef.current.stop();
    };
  }, []);

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