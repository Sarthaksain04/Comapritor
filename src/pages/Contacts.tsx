import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "./Contacts.css";

function Contacts() {

  // Card 1 (rotating messages)
  const [showMsg1, setShowMsg1] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const messages1 = [
    "I am one of its developers 💻",
    "Hey, I am Sarthak 👋",

  ];

  useEffect(() => {
    if (!showMsg1) return;

    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showMsg1]);



  return (
    <div className="page-center">

      {/* CARD 1 */}
      <div
        className="spline-card"
        onMouseEnter={() => {
          setShowMsg1(true);
          setMsgIndex(messages1.indexOf("Hey, I am Sarthak 👋"));
        }}
        onMouseLeave={() => setShowMsg1(false)}
      >
        {showMsg1 && (
          <div className="speech-bubble">{messages1[msgIndex]}</div>
        )}

        <Spline
          className="static-spline"
        scene="https://prod.spline.design/hTBnxFWE73d5rKcG/scene.splinecode" 
        />
      </div>    
    </div>
  );
}

export default Contacts;
