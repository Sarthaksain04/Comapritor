// import React, { Suspense, useEffect, useRef } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";

// // Model Loader
// function BlenderModel() {
//   const { scene } = useGLTF("models/HeadQuarter.glb");
//   const navigate = useNavigate();

// return (
//     <primitive
//       object={scene}
//       scale={1.5}
//       onClick={(e: any) => {
//         e.stopPropagation();

//         let obj = e.object;

//         // 🔥 Traverse UP to find parent group
//         while (obj.parent) {
//           if (obj.name === "Sarthak") {
//             console.log("Character clicked");
//             navigate("/contacts"); // 👉 change route
//             return;
//           }
//           obj = obj.parent;
//         }
//       }}
//     />
//   );
// }

// // Camera Setup (FINAL)
// function CameraSetup() {
//   const { camera } = useThree();
//   const controlsRef = useRef<any>();

//   useEffect(() => {
//     // ✅ Set camera position
//     camera.position.set(
//       0.7188237271613225,
//       4.916100078590665,
//       7.914598656265961
//     );

//     // ✅ Set where camera looks
//     if (controlsRef.current) {
//       controlsRef.current.target.set(
//         -1.0994293258181982,
//         3.6788000213135597,
//         0.04722225475218038
//       );

//       controlsRef.current.update();
//     }
//   }, [camera]);

//   return (
//     <OrbitControls
//       ref={controlsRef}
//       enableZoom={false}   // you can change this
//       enablePan={false}
//       enableRotate={false}
//     />
//   );
// }

// // Main Component
// export default function ContactHeadquarter() {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Canvas camera={{ fov: 50 }}>
        
//         {/* Lights */}
//         <ambientLight intensity={2} />
//         <directionalLight position={[185, 653, -85]} />

//         {/* Model */}
//         <Suspense fallback={null}>
//           <BlenderModel />
//         </Suspense>

//         {/* Camera */}
//         <CameraSetup />
//       </Canvas>
//     </div>
//   );
// }


// import React, { Suspense, useEffect, useRef, useState } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html, Billboard } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";
// import * as THREE from "three";
// import { Environment } from "@react-three/drei";

// // cube.005

// // Model Loader
// function BlenderModel() {
//   const { scene } = useGLTF("models/HeadQuarter.glb");
//   const navigate = useNavigate();
//   const [headPos, setHeadPos] = useState<THREE.Vector3 | null>(null);

//   useEffect(() => {
//     scene.traverse((child: any) => {
//       if (child.name === "Head") {
//         const pos = new THREE.Vector3();
//         child.getWorldPosition(pos);
//         pos.y += 0.8; // 👈 adjust height
//         setHeadPos(pos);
        
//       }
//     });
//   }, [scene]);

//   return (
//     <>
//       {/* Model */}
//       <primitive
//         object={scene}
//         scale={1.5}
//         onClick={(e: any) => {
//           e.stopPropagation();

//           let obj = e.object;
//           while (obj.parent) {
//             if (obj.name === "Sarthak") {
//               navigate("/sarthak");
//               return;
//             }
//             obj = obj.parent;
//           }
//         }}
//       />

//       {/* 💬 Speech Bubble */}
//       {headPos && (
//         <Billboard position={[headPos.x, headPos.y, headPos.z]}>
//           <Html center>
//             <div style={{ position: "relative", textAlign: "center" }}>
              
//               {/* Bubble */}
//               <div
//                 style={{
//                   background: "#fff",
//                   color: "#000",
//                   padding: "12px 20px",
//                   borderRadius: "30px",
//                   fontWeight: "600",
//                   fontSize: "16px",
//                   boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
//                   whiteSpace: "nowrap",
//                   marginTop: "-130px",
//                 }}
//               >
//                 Hey, Click me 👇
//               </div>

//               {/* Triangle Pointer */}
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "-10px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: 0,
//                   height: 0,
//                   borderLeft: "10px solid transparent",
//                   borderRight: "10px solid transparent",
//                   borderTop: "10px solid #fff",
//                 }}
//               />
//             </div>
//           </Html>
//         </Billboard>
//       )}
//     </>
//   );
// }

// // Camera Setup
// function CameraSetup() {
//   const { camera } = useThree();
//   const controlsRef = useRef<any>();

//   useEffect(() => {
//     camera.position.set(
//       0.7188237271613225,
//       4.916100078590665,
//       7.914598656265961
//     );

//     if (controlsRef.current) {
//       controlsRef.current.target.set(
//         -1.0994293258181982,
//         3.6788000213135597,
//         0.04722225475218038
//       );
//       controlsRef.current.update();
//     }
//   }, [camera]);

//   return (
//     <OrbitControls
//       ref={controlsRef}
//       enableZoom={false}
//       enablePan={false}
//       enableRotate={false}
//     />
//   );
// }

// // Main Component
// export default function ContactHeadquarter() {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Canvas camera={{ fov: 50 }}
// > 

//          {/* <Environment preset="city" /> */}

        
//         {/* Lights */}
//         <ambientLight intensity={2} />
//         <directionalLight position={[985, 1953, -105]} intensity={3} />

//         {/* Model */}
//         <Suspense fallback={null}>
//           <BlenderModel />
//         </Suspense>

//         {/* Camera */}
//         <CameraSetup />
//       </Canvas>
//     </div>
//   );
// }



import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Billboard } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

// Model Loader
function BlenderModel() {
  const { scene } = useGLTF("models/HeadQuarter.glb");
  const navigate = useNavigate();

  const [sarthakHead, setSarthakHead] = useState<THREE.Vector3 | null>(null);
  const [harshitaHead, setHarshitaHead] = useState<THREE.Vector3 | null>(null);

  useEffect(() => {
    scene.traverse((child: any) => {
      // 👉 Sarthak Head
      if (child.name === "Head") {
        const pos = new THREE.Vector3();
        child.getWorldPosition(pos);
        pos.y += 0.8;
        setSarthakHead(pos);
      }

      // 👉 Harshita Head (⚠️ change name if needed)
      if (child.name === "Harshita") {
        const pos = new THREE.Vector3();
        child.getWorldPosition(pos);
        pos.y += 0.8;
        setHarshitaHead(pos);
      }
    });
  }, [scene]);

  return (
    <>
      {/* Model */}
      <primitive
        object={scene}
        scale={1.5}
        onClick={(e: any) => {
          e.stopPropagation();

          let obj = e.object;

          while (obj.parent) {
            // 👉 Sarthak
            if (obj.name === "Sarthak") {
              navigate("/sarthak");
              return;
            }

            // 👉 Harshita
            if (obj.name === "Harshita") {
              navigate("/harshita");
              return;
            }

            obj = obj.parent;
          }
        }}
      />

      {/* 💬 Sarthak Bubble */}
      {sarthakHead && (
        <Billboard position={[sarthakHead.x, sarthakHead.y, sarthakHead.z]}>
          <Html center>
            <Bubble text="Hey, Click me 👇" />
          </Html>
        </Billboard>
      )}

      {/* 💬 Harshita Bubble */}
      {harshitaHead && (
        <Billboard position={[harshitaHead.x, harshitaHead.y, harshitaHead.z]}>
          <Html center>
            <HarshitaBubble text="Hey, Click me 💖" />
          </Html>
        </Billboard>
      )}
    </>
  );
}

// 🔥 Reusable Bubble Component
function Bubble({ text }: { text: string }) {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      
      <div
        style={{
          background: "#fff",
          color: "#000",
          padding: "12px 20px",
          borderRadius: "30px",
          fontWeight: "600",
          fontSize: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          whiteSpace: "nowrap",
          marginTop: "-130px",
        }}
      >
        {text}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "10px solid #fff",
        }}
      />
    </div>
  );
}
function HarshitaBubble({ text }: { text: string }) {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      
      <div
        style={{
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          color: "#fff",
          padding: "12px 22px",
          borderRadius: "25px",
          fontWeight: "600",
          fontSize: "15px",
          boxShadow: "0 10px 30px rgba(255,105,135,0.4)",
          whiteSpace: "nowrap",
          marginTop: "-20px",
          border: "2px solid rgba(255,255,255,0.5)",
        }}
      >
        {text}
      </div>

      {/* 💖 Triangle */}
      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "10px solid #ff9a9e",
        }}
      />
    </div>
  );
}
// Camera Setup
function CameraSetup() {
  const { camera } = useThree();
  const controlsRef = useRef<any>();

  useEffect(() => {
    camera.position.set(
      0.7188237271613225,
      4.916100078590665,
      7.914598656265961
    );

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
      enableZoom={false}
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
        <directionalLight position={[985, 1953, -105]} intensity={3} />

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