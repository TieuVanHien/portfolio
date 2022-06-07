import React from "react";

export const Box = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
      <gridHelper />
    </mesh>
  );
};
