import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a as three } from "@react-spring/three";

export default function Mac({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");

  const scale =0.5;
  return (
    <group ref={group} {...props} dispose={null} scale={[scale, scale, scale]}>
      <group position={[0, 0, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube008"].geometry}
        />
        <mesh
          material={materials["matte.001"]}
          geometry={nodes["Cube008_1"].geometry}
        />
        <mesh
          material={materials["screen.001"]}
          geometry={nodes["Cube008_2"].geometry}
        />
      </group>
    </group>
  );
}
