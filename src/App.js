import { useRef } from "react";
import MainAtom from "./MainAtom";
import CenteralAtom from "./CenteralAtom";

// import { useControls } from "leva";

export default function App({ currentElement, currentShells }) {
  const meshRef = useRef();
  const _shells =
    currentShells &&
    currentShells.map((atoms, index) => {
      return (
        <>
          <mesh rotation={[0, Math.PI / 2, 0]} ref={meshRef}>
            <torusGeometry args={[8 + index * 2, 0.05, 32, 100]} />
            <meshPhongMaterial color={"0xffffff4d"} />
          </mesh>
          <MainAtom key={index} torusIndex={index} numOfAtoms={atoms} />
        </>
      );
    });
  return (
    <>
      {/* Parent object representing the orbit */}
      {_shells}
      {currentElement && <CenteralAtom currentElement={currentElement} />}
    </>
  );
}
