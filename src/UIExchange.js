import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import App from "./App";
import { OrbitControls } from "@react-three/drei";
import { elements } from "./Elements";

const UIExchange = (props) => {
  const [currentElement, setCurrentElement] = useState(1);
  const [currentShells, setCurrentShells] = useState(
    elements[currentElement].shells
  );
  // let updatedElements = elements.map(({name, number, shells}) => ({name, number, shells}));
  // console.log(JSON.stringify(updatedElements))

  const handleChang = (e) => {
    e.preventDefault();
    setCurrentElement(Number(e.target.value));
    setCurrentShells(elements[e.target.value].shells);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to Atomic bohr model App</h1>
        <p>
          This app is developed specifically to load atomic bohr model of each{" "}
        </p>
        <select onChange={(e) => handleChang(e)}>
          {elements.map((ele, index) => {
            return (
              index !== 0 && (
                <option key={ele.number} value={ele.number}>
                  {ele.name}
                </option>
              )
            );
          })}
        </select>
      </div>
      {currentElement && <Canvas camera={{ position: [30, 0, 0] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <App
          config={props.config}
          currentElement={currentElement}
          currentShells={currentShells}
        />
        <OrbitControls />
      </Canvas>}
    </>
  );
};

export default UIExchange;
