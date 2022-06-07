import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Universe } from "./Universe";

export const Scene = () => {
  const style = {
    width: "100%",
    height: "100vh",
  };
  return (
    <>
      <Canvas style={style} className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Universe />
        </Suspense>
      </Canvas>
    </>
  );
};
