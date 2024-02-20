import * as THREE from "three"
import {  useFrame, useThree } from "@react-three/fiber"
import {  useSphere } from "@react-three/cannon"



export default function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
  const [ref, api] = useSphere(() => ({ args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(10), rfs(10), rfs(10)] }))
  const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
let baubleMaterial = new THREE.MeshStandardMaterial({ color: "#703AFF", roughness: 10, envMapIntensity: 10 })

  useFrame(async(state) => {
    if(props.currentElement){
      for (let i = 0; i < props.currentElement; i++) {

        // Get current whereabouts of the instanced sphere
        ref.current.getMatrixAt(i, mat)
          // console.log(ref.current)
        // Normalize the position and multiply by a negative force.
        // This is enough to drive it towards the center-point.
        await api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-props.currentElement).toArray(), [0, 0, 0])
      }
    }
  })
  return <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, props.currentElement]} geometry={sphereGeometry} material={baubleMaterial} />
}
