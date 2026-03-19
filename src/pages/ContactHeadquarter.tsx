import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Model Loader
function BlenderModel() {
  const { scene } = useGLTF("models/HeadQuarter.glb");
  return <primitive object={scene} scale={1.5} />;
}

// Camera Setup (FINAL)
function CameraSetup() {
  const { camera } = useThree();
  const controlsRef = useRef<any>();

  useEffect(() => {
    // ✅ Set camera position
    camera.position.set(
      0.7188237271613225,
      4.916100078590665,
      7.914598656265961
    );

    // ✅ Set where camera looks
    if (controlsRef.current) {
      controlsRef.current.target.set(
        -1.0994293258181982,
        3.6788000213135597,
        0.04722225475218038
      );

      controlsRef.current.update();
    }
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}   // you can change this
      enablePan={false}
      enableRotate={false}
    />
  );
}

// Main Component
export default function ContactHeadquarter() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ fov: 50 }}>
        
        {/* Lights */}
        <ambientLight intensity={2} />
        <directionalLight position={[5, 23, 5]} />

        {/* Model */}
        <Suspense fallback={null}>
          <BlenderModel />
        </Suspense>

        {/* Camera */}
        <CameraSetup />
      </Canvas>
    </div>
  );
}