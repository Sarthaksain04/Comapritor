import React, { useState, useEffect , useRef } from "react";
import Spline from "@splinetool/react-spline";
import "./Harshita.css";

function Harshita() {

  // Card 1 (rotating messages)
  const [showMsg1, setShowMsg1] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  const messages1 = [
    "I am one of its developers 💻",
    "Hey, I am Harshita 👋",

  ];

 useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume =1; // 🔥 smooth background sound
      audioRef.current.loop = true;  // 🔥 LOOP ENABLED

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay blocked → waiting for click");
        });
      }
    }
  }, []);

  useEffect(() => {
    const unlockAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      window.removeEventListener("click", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
    };
  }, []);

  useEffect(() => {
    if (!showMsg1) return;

    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showMsg1]);



  return (
<div
  style={{
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // 💖 pink gradient
  }}
>

       <audio
        ref={audioRef}
        src="src/assets/Hi Sound.ogg"
        preload="auto"
      />

      {/* CARD 1 */}
      <div
        className="spline-card1"
        onMouseEnter={() => {
          setShowMsg1(true);
          setMsgIndex(messages1.indexOf("Hey, I am Harshita 👋"));
        }}
        onMouseLeave={() => setShowMsg1(false)}
      >
        {showMsg1 && (
          <div className="speech-bubble">{messages1[msgIndex]}</div>
        )}

        <Spline
          className="static-spline1"
        scene="https://prod.spline.design/g0g2AEDxsoYpziKd/scene.splinecode" 
        />
      </div>    
    </div>
  );
}

export default Harshita;
