import React from "react";
import { Physics } from "@react-three/cannon";
import Pointer from "./Pointer";
import Clump from "./Clump";

const CenteralAtom = ({currentElement}) => {
  return (
    <Physics gravity={[0, 2, 0]} iterations={10}>
      <Pointer />
      <Clump currentElement={currentElement}/>
    </Physics>
  );
};

export default CenteralAtom;
