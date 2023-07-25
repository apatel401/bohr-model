import React from "react";
import { Physics } from "@react-three/cannon";
import Pointer from "./Pointer";
import Clump from "./Clump";

const CenteralAtom = () => {
  return (
    <Physics gravity={[0, 2, 0]} iterations={10}>
      <Pointer />
      <Clump />
    </Physics>
  );
};

export default CenteralAtom;
