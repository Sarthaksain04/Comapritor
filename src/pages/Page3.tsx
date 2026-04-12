// import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Box, Hand, MousePointerClick } from "lucide-react";
// import { Suspense, useEffect, useRef, useState } from "react";
// import { Object3D } from "three";
// import "./Page3.css";
// import { TextAnimate } from "@/Components/ui/text-animate";


// function Model(props: { object?: Object3D }) {
//   const { scene } = useGLTF("/models/Shirt.glb");
//   return <primitive object={scene} {...props} />;
// }

// export default function Page3() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   // ✅ Detect when Page3 is in viewport
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setShowScrollBtn(entry.isIntersecting);
//       },
//       {
//         threshold: 1, // 50% of Page3 visible
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleScroll = () => {
//     window.scrollBy({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="gesture-section" ref={sectionRef}>
//       <div className="gesture-content">
        
//         {/* LEFT SIDE */}
//         <div className="text-container">
//           <div className="badge">
//             <Hand size={16} />
//             <span>New Feature</span>
//           </div>

//           <h1 className="Title">
//             Touch-Free <br />
//             <span className="Highlight">3D Shopping.</span>
//           </h1>

//           <TextAnimate animation="fadeIn" by="line" as="p" className="Subtitle">
//             Experience the future of e-commerce. Wave your hand to rotate,
//             zoom, and inspect products in real-time. No mouse or touchscreen required.
//           </TextAnimate>

//           <div className="features-grid">
//             <div className="feature-item">
//               <Box className="feature-icon" size={24} />
//               <div>
//                 <h3>360° Rotation</h3>
//                 <p>View every angle naturally.</p>
//               </div>
//             </div>

//             <div className="feature-item">
//               <MousePointerClick className="feature-icon" size={24} />
//               <div>
//                 <h3>Zero Contact</h3>
//                 <p>Hygienic and futuristic control.</p>
//               </div>
//             </div>
//           </div>

//           <button className="cta-button">
//             Try Gesture Mode
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="visual-container">
//           <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
//             <Suspense fallback={null}>
//               <Stage environment="city" intensity={0.6}>
//                 <Model />
//               </Stage>
//             </Suspense>
//             <OrbitControls autoRotate enableZoom={false} />
//           </Canvas>
//         </div>
//       </div>

//       {/* ✅ BUTTON APPEARS ONLY WHEN PAGE 3 IS VISIBLE */}
//       {showScrollBtn && (
//         <button className="continue-scroll-btn" onClick={handleScroll}>
//           <span className="arrow">↓</span>
//           <span className="text">CONTINUE TO SCROLL</span>
//           <span className="arrow">↓</span>
//         </button>
       
//       )}
//     </section>
    
//   );
// }




// import { TextAnimate } from "@/components/ui/text-animate";
// import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Box, Hand, MousePointerClick, X } from "lucide-react";
// import { Suspense, useEffect, useRef, useState } from "react";
// import { Object3D } from "three";
// import "./Page3.css";

// function Model(props: { object?: Object3D }) {
//   const { scene } = useGLTF("/models/Shirt.glb");
//   return <primitive object={scene} {...props} />;
// }

// export default function Page3() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   // ✅ NEW STATE (for zoom effect)
//   const [isExpanded, setIsExpanded] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setShowScrollBtn(entry.isIntersecting);
//       },
//       {
//         threshold: 1,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleScroll = () => {
//     window.scrollBy({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="gesture-section" ref={sectionRef}>
//       <div className="gesture-content">

//         {/* LEFT SIDE */}
//         <div className="text-container">
//           <div className="badge">
//             <Hand size={16} />
//             <span>New Feature</span>
//           </div>

//           <h1 className="Title">
//             Touch-Free <br />
//             <span className="Highlight">3D Shopping.</span>
//           </h1>

//           <TextAnimate animation="fadeIn" by="line" as="p" className="Subtitle">
//             Experience the future of e-commerce. Wave your hand to rotate,
//             zoom, and inspect products in real-time. No mouse or touchscreen required.
//           </TextAnimate>

//           <div className="features-grid">
//             <div className="feature-item">
//               <Box className="feature-icon" size={24} />
//               <div>
//                 <h3>360° Rotation</h3>
//                 <p>View every angle naturally.</p>
//               </div>
//             </div>

//             <div className="feature-item">
//               <MousePointerClick className="feature-icon" size={24} />
//               <div>
//                 <h3>Zero Contact</h3>
//                 <p>Hygienic and futuristic control.</p>
//               </div>
//             </div>
//           </div>

//           {/* ✅ BUTTON CLICK */}
//           <button
//             className="cta-button"
//             onClick={() => setIsExpanded(true)}
//           >
//             Try Gesture Mode
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className={`visual-container ${isExpanded ? "expanded" : ""}`}>
          
//           {/* ❌ CLOSE BUTTON */}
//           {isExpanded && (
//             <button
//               className="close-btn"
//               onClick={() => setIsExpanded(false)}
//             >
//               <X size={24} />
//             </button>
//           )}

//           <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
//             <Suspense fallback={null}>
//               <Stage environment="city" intensity={0.6}>
//                 <Model />
//               </Stage>
//             </Suspense>
//             <OrbitControls autoRotate enableZoom={false} />
//           </Canvas>
//         </div>
//       </div>

//       {/* SCROLL BUTTON */}
//       {showScrollBtn && !isExpanded && (
//         <button className="continue-scroll-btn" onClick={handleScroll}>
//           <span className="arrow">↓</span>
//           <span className="text">CONTINUE TO SCROLL</span>
//           <span className="arrow">↓</span>
//         </button>
//       )}
//     </section>
//   );
// }







import { TextAnimate } from "@/components/ui/text-animate";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box, Hand, MousePointerClick, X } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";
import { Object3D } from "three";
import * as THREE from "three";
import { MediaPipeHands } from "@/three/MediaPipeHands";
import "./Page3.css";
import ContactPage from "./ContactPage";


function Model({ modelRef }: { modelRef: any }) {
  const { scene } = useGLTF("/models/Shirt.glb");

  useEffect(() => {
    if (modelRef) modelRef.current = scene;
  }, [scene]);

  return <primitive object={scene} />;
}
  

export default function Page3() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // 🔥 NEW
  const modelRef = useRef<Object3D | null>(null);
  const scaleRef = useRef(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollBtn(entry.isIntersecting),
      { threshold: 1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  


  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // 🔥 GESTURE CONTROL
  useEffect(() => {
    if (!isExpanded) return;

    let video = document.createElement("video");
    video.style.display = "none";
    document.body.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();
    });

    const mp = new MediaPipeHands(video, (results: any) => {
      if (!results.multiHandLandmarks) return;

      const hands = results.multiHandLandmarks;

      // 🖐️ DRAG
      if (hands.length === 1 && modelRef.current) {
        const lm = hands[0];

        const x = (0.5 - lm[9].x) * 2;
        const y = (0.5 - lm[9].y) * 2;

        modelRef.current.position.x += x * 0.05;
        modelRef.current.position.y += y * 0.05;
      }

      // ✋✋ SCALE
      if (hands.length === 2 && modelRef.current) {
        const h1 = hands[0];
        const h2 = hands[1];

        const dx = h1[9].x - h2[9].x;
        const dy = h1[9].y - h2[9].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const targetScale = THREE.MathUtils.mapLinear(
          dist,
          0.1,
          0.5,
          0.5,
          2
        );

        scaleRef.current = THREE.MathUtils.lerp(
          scaleRef.current,
          targetScale,
          0.1
        );

        modelRef.current.scale.setScalar(scaleRef.current);
      }
    });

    mp.start();

    return () => {
      video.srcObject = null;
      video.remove();
    };
  }, [isExpanded]);

  return (
    <section className="gesture-section" ref={sectionRef}>
      <div className="gesture-content">

        {/* LEFT SIDE */}
        <div className="text-container">
          <div className="badge">
            <Hand size={16} />
            <span>New Feature</span>
          </div>

          <h1 className="Title">
            Touch-Free <br />
            <span className="Highlight">3D Shopping.</span>
          </h1>

          <TextAnimate animation="fadeIn" by="line" as="p" className="Subtitle">
            Experience the future of e-commerce. Wave your hand to rotate,
            zoom, and inspect products in real-time. No mouse or touchscreen required.
          </TextAnimate>

          <div className="features-grid">
            <div className="feature-item">
              <Box className="feature-icon" size={24} />
              <div>
                <h3>360° Rotation</h3>
                <p>View every angle naturally.</p>
              </div>
            </div>

            <div className="feature-item">
              <MousePointerClick className="feature-icon" size={24} />
              <div>
                <h3>Zero Contact</h3>
                <p>Hygienic and futuristic control.</p>
              </div>
            </div>
          </div>

          <button
            className="cta-button"
            onClick={() => setIsExpanded(true)}
          >
            Try Gesture Mode
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className={`visual-container ${isExpanded ? "expanded" : ""}`}>
          
          {isExpanded && (
            <button
              className="close-btn"
              onClick={() => setIsExpanded(false)}
            >
              <X size={24} />
            </button>
          )}

          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6}>
                <Model modelRef={modelRef} />
              </Stage>
            </Suspense>

            {/* 🔥 AUTO ROTATE CONTROL */}
            <OrbitControls autoRotate={!isExpanded} enableZoom={false} />
          </Canvas>
        </div>
      </div>

      {showScrollBtn && !isExpanded && (
        <button className="continue-scroll-btn" onClick={handleScroll}>
          <span className="arrow">↓</span>
          <span className="text">CONTINUE TO SCROLL</span>
          <span className="arrow">↓</span>
        </button>
      )}

    </section>

    

    
    
  );
}


