import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"
export default function Atom({ position, index }) {
    const atomRef = useRef([]);
    const clockRef = useRef(new THREE.Clock());
  
    // Rotate the atom on each frame
    useFrame(() => {
      atomRef.current[index].rotation.y += 0.001;
    });
  
    return (
      <mesh
        ref={(element) => (atomRef.current[index] = element)}
        position={position}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshPhongMaterial color="#FF5353" shininess={1000} />
      </mesh>
    );
  }