export const usePosition = (numOfAtom, torusIndex) => {
  console.log(numOfAtom)
    // const radius = 5; // Radius of the orbit
  
    const thetaIncrement = (2 * Math.PI) / numOfAtom; // Divide the circle into four equal parts
    const phiOffset = Math.PI / 2; // Offset the points to start on the y-axis
  
    const positions = [];
    let radius;
    if(torusIndex === 0){
      radius = 2
    }
    else{
      radius = 2 + (2*torusIndex)
    }
    for (let i = 0; i < numOfAtom ; i++) {
      const theta = i * thetaIncrement;
      const phi = phiOffset;
  
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
  
      positions.push([x, y, z]);
    }
    return positions;
  };