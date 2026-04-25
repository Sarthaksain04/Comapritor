"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


interface PupilProps {
  size?: number;
  maxDistance?: number;
  pupilColor?: string;
  forceLookX?: number;
  forceLookY?: number;
}

const Pupil = ({ 
  size = 12, 
  maxDistance = 5,
  pupilColor = "black",
  forceLookX,
  forceLookY
}: PupilProps) => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const pupilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePupilPosition = () => {
    if (!pupilRef.current) return { x: 0, y: 0 };

    // If forced look direction is provided, use that instead of mouse tracking
    if (forceLookX !== undefined && forceLookY !== undefined) {
      return { x: forceLookX, y: forceLookY };
    }

    const pupil = pupilRef.current.getBoundingClientRect();
    const pupilCenterX = pupil.left + pupil.width / 2;
    const pupilCenterY = pupil.top + pupil.height / 2;

    const deltaX = mouseX - pupilCenterX;
    const deltaY = mouseY - pupilCenterY;
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

    const angle = Math.atan2(deltaY, deltaX);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return { x, y };
  };

  const pupilPosition = calculatePupilPosition();

  return (
    <div
      ref={pupilRef}
      className="rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: pupilColor,
        transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  );
};




interface EyeBallProps {
  size?: number;
  pupilSize?: number;
  maxDistance?: number;
  eyeColor?: string;
  pupilColor?: string;
  isBlinking?: boolean;
  forceLookX?: number;
  forceLookY?: number;
}

const EyeBall = ({ 
  size = 48, 
  pupilSize = 16, 
  maxDistance = 10,
  eyeColor = "white",
  pupilColor = "black",
  isBlinking = false,
  forceLookX,
  forceLookY
}: EyeBallProps) => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePupilPosition = () => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    // If forced look direction is provided, use that instead of mouse tracking
    if (forceLookX !== undefined && forceLookY !== undefined) {
      return { x: forceLookX, y: forceLookY };
    }

    const eye = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eye.left + eye.width / 2;
    const eyeCenterY = eye.top + eye.height / 2;

    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;
    const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

    const angle = Math.atan2(deltaY, deltaX);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return { x, y };
  };

  const pupilPosition = calculatePupilPosition();

  return (
    <div
      ref={eyeRef}
      className="rounded-full flex items-center justify-center transition-all duration-150"
      style={{
        width: `${size}px`,
        height: isBlinking ? '2px' : `${size}px`,
        backgroundColor: eyeColor,
        overflow: 'hidden',
      }}
    >
      {!isBlinking && (
        <div
          className="rounded-full"
          style={{
            width: `${pupilSize}px`,
            height: `${pupilSize}px`,
            backgroundColor: pupilColor,
            transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      )}
    </div>
  );
};





function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [isPurpleBlinking, setIsPurpleBlinking] = useState(false);
  const [isBlackBlinking, setIsBlackBlinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isLookingAtEachOther, setIsLookingAtEachOther] = useState(false);
  const [isPurplePeeking, setIsPurplePeeking] = useState(false);
  const purpleRef = useRef<HTMLDivElement>(null);
  const blackRef = useRef<HTMLDivElement>(null);
  const yellowRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const [isSignup, setIsSignup] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);
  const pinRefs = useRef<HTMLInputElement[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showSendOtp, setShowSendOtp] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(30);
  const [shake, setShake] = useState(false);
  const [remember, setRemember] = useState(false);


  const getOtp = () => pin.join("");
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Blinking effect for purple character
  useEffect(() => {
    const getRandomBlinkInterval = () => Math.random() * 4000 + 3000; // Random between 3-7 seconds

    const scheduleBlink = () => {
      const blinkTimeout = setTimeout(() => {
        setIsPurpleBlinking(true);
        setTimeout(() => {
          setIsPurpleBlinking(false);
          scheduleBlink();
        }, 150); // Blink duration 150ms
      }, getRandomBlinkInterval());

      return blinkTimeout;
    };

    const timeout = scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);


  //  Timer to resend 
  useEffect(() => {
  let interval: any;
  if (otpRequested && timer > 0) {
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }
  return () => clearInterval(interval);
}, [otpRequested, timer]);

  // Blinking effect for black character
  useEffect(() => {
    const getRandomBlinkInterval = () => Math.random() * 4000 + 3000; // Random between 3-7 seconds

    const scheduleBlink = () => {
      const blinkTimeout = setTimeout(() => {
        setIsBlackBlinking(true);
        setTimeout(() => {
          setIsBlackBlinking(false);
          scheduleBlink();
        }, 150); // Blink duration 150ms
      }, getRandomBlinkInterval());

      return blinkTimeout;
    };

    const timeout = scheduleBlink();
    return () => clearTimeout(timeout);
  }, []);

  // Looking at each other animation when typing starts
  useEffect(() => {
    if (isTyping) {
      setIsLookingAtEachOther(true);
      const timer = setTimeout(() => {
        setIsLookingAtEachOther(false);
      }, 800); // Look at each other for 1.5 seconds, then back to tracking mouse
      return () => clearTimeout(timer);
    } else {
      setIsLookingAtEachOther(false);
    }
  }, [isTyping]);

  // Purple sneaky peeking animation when typing password and it's visible
  useEffect(() => {
    if (password.length > 0 && showPassword) {
      const schedulePeek = () => {
        const peekInterval = setTimeout(() => {
          setIsPurplePeeking(true);
          setTimeout(() => {
            setIsPurplePeeking(false);
          }, 800); // Peek for 800ms
        }, Math.random() * 3000 + 2000); // Random peek every 2-5 seconds
        return peekInterval;
      };

      const firstPeek = schedulePeek();
      return () => clearTimeout(firstPeek);
    } else {
      setIsPurplePeeking(false);
    }
  }, [password, showPassword, isPurplePeeking]);

  const calculatePosition = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return { faceX: 0, faceY: 0, bodyRotation: 0 };

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 3; // Focus on head area

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Face movement (limited range)
    const faceX = Math.max(-15, Math.min(15, deltaX / 20));
    const faceY = Math.max(-10, Math.min(10, deltaY / 30));

    // Body lean (skew for lean while keeping bottom straight) - negative to lean towards mouse
    const bodySkew = Math.max(-6, Math.min(6, -deltaX / 120));

    return { faceX, faceY, bodySkew };
  };

  const purplePos = calculatePosition(purpleRef);
  const blackPos = calculatePosition(blackRef);
  const yellowPos = calculatePosition(yellowRef);
  const orangePos = calculatePosition(orangeRef);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

    if (isSignup) {
    if (!name || !email || !phone || !password) {
      alert("Fill all fields");
      return;
    }
  } else {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }
  }

//  if (isSignup && !otpVerified) {
//   alert("Please verify OTP first");
//   return;
// }

  setIsLoading(true);

  try {
      // SIGNUP
      if (isSignup) {
  // 🔥 OPEN OTP MODAL (STOP NORMAL FLOW)
      setShowOtpModal(true);
      setIsLoading(false);
      return;
}

     else {
      // LOGIN
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {

        console.log("✅ Login success:", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", "true"); // ✅ ADD THIS

        window.dispatchEvent(new Event("loginStatusChanged"));
        navigate("/");
      } else {
        console.log("❌ Login failed:", data);
        alert(data.message || "Invalid credentials");
      }
    }
  } catch {
    alert("Server error");
  }

  setIsLoading(false);
};

  //  Function to send OTP - replace with real API call
  const handleSendOtp = async () => {
      setOtpRequested(true);
      setTimer(30);

  
      await fetch("http://localhost:5000/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, phone: "+91" + phone }),
    });
    toast.success("OTP sent to your email spam folder & phone");

  };

const handleVerifyOtp = async () => {
    const otp = pin.join("");

  
    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
  if (!res.ok) {
    setShake(true);
    setTimeout(() => setShake(false), 400);
    toast.error("Invalid OTP ❌");
    return false;
  }
  
  setOtpVerified(true);

  // 🔥 NOW DO ACTUAL SIGNUP
  await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      phone: "+91" + phone,
      password,
    }),
  });

 setSuccess(true);
  toast.success("Signup successful 🎉");

  // setTimeout(() => {
  //   setShowOtpModal(false);
  //   localStorage.setItem("justSignedUp", "true");
  //   navigate("/");
  // }, 2000);


  setTimeout(() => {
  setShowOtpModal(false);

  // 🔥 SWITCH TO LOGIN MODE
  setIsSignup(false);

  localStorage.setItem("justSignedUp", "true");
}, 2000);
  

  return true;
};

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Content Section */}
      <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-primary/90 via-primary to-primary/80 p-12 text-primary-foreground">
        <div className="relative z-20">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <div className="size-8 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
            </div>
          </div>
        </div>

        <div className="relative z-20 flex items-end justify-center h-[500px]">
          {/* Cartoon Characters */}
          <div className="relative" style={{ width: '550px', height: '400px' }}>
            {/* Purple tall rectangle character - Back layer */}
            <div 
              ref={purpleRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                left: '70px',
                width: '180px',
                height: (isTyping || (password.length > 0 && !showPassword)) ? '440px' : '400px',
                backgroundColor: '#6C3FF5',
                borderRadius: '10px 10px 0 0',
                zIndex: 1,
                transform: (password.length > 0 && showPassword)
                  ? `skewX(0deg)`
                  : (isTyping || (password.length > 0 && !showPassword))
                    ? `skewX(${(purplePos.bodySkew || 0) - 12}deg) translateX(40px)` 
                    : `skewX(${purplePos.bodySkew || 0}deg)`,
                transformOrigin: 'bottom center',
              }}
            >
              {/* Eyes */}
              <div 
                className="absolute flex gap-8 transition-all duration-700 ease-in-out"
                style={{
                  left: (password.length > 0 && showPassword) ? `${20}px` : isLookingAtEachOther ? `${55}px` : `${45 + purplePos.faceX}px`,
                  top: (password.length > 0 && showPassword) ? `${35}px` : isLookingAtEachOther ? `${65}px` : `${40 + purplePos.faceY}px`,
                }}
              >
                <EyeBall 
                  size={18} 
                  pupilSize={7} 
                  maxDistance={5} 
                  eyeColor="white" 
                  pupilColor="#2D2D2D" 
                  isBlinking={isPurpleBlinking}
                  forceLookX={(password.length > 0 && showPassword) ? (isPurplePeeking ? 4 : -4) : isLookingAtEachOther ? 3 : undefined}
                  forceLookY={(password.length > 0 && showPassword) ? (isPurplePeeking ? 5 : -4) : isLookingAtEachOther ? 4 : undefined}
                />
                <EyeBall 
                  size={18} 
                  pupilSize={7} 
                  maxDistance={5} 
                  eyeColor="white" 
                  pupilColor="#2D2D2D" 
                  isBlinking={isPurpleBlinking}
                  forceLookX={(password.length > 0 && showPassword) ? (isPurplePeeking ? 4 : -4) : isLookingAtEachOther ? 3 : undefined}
                  forceLookY={(password.length > 0 && showPassword) ? (isPurplePeeking ? 5 : -4) : isLookingAtEachOther ? 4 : undefined}
                />
              </div>
            </div>

            {/* Black tall rectangle character - Middle layer */}
            <div 
              ref={blackRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                left: '240px',
                width: '120px',
                height: '310px',
                backgroundColor: '#2D2D2D',
                borderRadius: '8px 8px 0 0',
                zIndex: 2,
                transform: (password.length > 0 && showPassword)
                  ? `skewX(0deg)`
                  : isLookingAtEachOther
                    ? `skewX(${(blackPos.bodySkew || 0) * 1.5 + 10}deg) translateX(20px)`
                    : (isTyping || (password.length > 0 && !showPassword))
                      ? `skewX(${(blackPos.bodySkew || 0) * 1.5}deg)` 
                      : `skewX(${blackPos.bodySkew || 0}deg)`,
                transformOrigin: 'bottom center',
              }}
            >
              {/* Eyes */}
              <div 
                className="absolute flex gap-6 transition-all duration-700 ease-in-out"
                style={{
                  left: (password.length > 0 && showPassword) ? `${10}px` : isLookingAtEachOther ? `${32}px` : `${26 + blackPos.faceX}px`,
                  top: (password.length > 0 && showPassword) ? `${28}px` : isLookingAtEachOther ? `${12}px` : `${32 + blackPos.faceY}px`,
                }}
              >
                <EyeBall 
                  size={16} 
                  pupilSize={6} 
                  maxDistance={4} 
                  eyeColor="white" 
                  pupilColor="#2D2D2D" 
                  isBlinking={isBlackBlinking}
                  forceLookX={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? 0 : undefined}
                  forceLookY={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? -4 : undefined}
                />
                <EyeBall 
                  size={16} 
                  pupilSize={6} 
                  maxDistance={4} 
                  eyeColor="white" 
                  pupilColor="#2D2D2D" 
                  isBlinking={isBlackBlinking}
                  forceLookX={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? 0 : undefined}
                  forceLookY={(password.length > 0 && showPassword) ? -4 : isLookingAtEachOther ? -4 : undefined}
                />
              </div>
            </div>

            {/* Orange semi-circle character - Front left */}
            <div 
              ref={orangeRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                left: '0px',
                width: '240px',
                height: '200px',
                zIndex: 3,
                backgroundColor: '#FF9B6B',
                borderRadius: '120px 120px 0 0',
                transform: (password.length > 0 && showPassword) ? `skewX(0deg)` : `skewX(${orangePos.bodySkew || 0}deg)`,
                transformOrigin: 'bottom center',
              }}
            >
              {/* Eyes - just pupils, no white */}
              <div 
                className="absolute flex gap-8 transition-all duration-200 ease-out"
                style={{
                  left: (password.length > 0 && showPassword) ? `${50}px` : `${82 + (orangePos.faceX || 0)}px`,
                  top: (password.length > 0 && showPassword) ? `${85}px` : `${90 + (orangePos.faceY || 0)}px`,
                }}
              >
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined} />
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined} />
              </div>
            </div>

            {/* Yellow tall rectangle character - Front right */}
            <div 
              ref={yellowRef}
              className="absolute bottom-0 transition-all duration-700 ease-in-out"
              style={{
                left: '310px',
                width: '140px',
                height: '230px',
                backgroundColor: '#E8D754',
                borderRadius: '70px 70px 0 0',
                zIndex: 4,
                transform: (password.length > 0 && showPassword) ? `skewX(0deg)` : `skewX(${yellowPos.bodySkew || 0}deg)`,
                transformOrigin: 'bottom center',
              }}
            >
              {/* Eyes - just pupils, no white */}
              <div 
                className="absolute flex gap-6 transition-all duration-200 ease-out"
                style={{
                  left: (password.length > 0 && showPassword) ? `${20}px` : `${52 + (yellowPos.faceX || 0)}px`,
                  top: (password.length > 0 && showPassword) ? `${35}px` : `${40 + (yellowPos.faceY || 0)}px`,
                }}
              >
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined} />
                <Pupil size={12} maxDistance={5} pupilColor="#2D2D2D" forceLookX={(password.length > 0 && showPassword) ? -5 : undefined} forceLookY={(password.length > 0 && showPassword) ? -4 : undefined} />
              </div>
              {/* Horizontal line for mouth */}
              <div 
                className="absolute w-20 h-[4px] bg-[#2D2D2D] rounded-full transition-all duration-200 ease-out"
                style={{
                  left: (password.length > 0 && showPassword) ? `${10}px` : `${40 + (yellowPos.faceX || 0)}px`,
                  top: (password.length > 0 && showPassword) ? `${88}px` : `${88 + (yellowPos.faceY || 0)}px`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 flex items-center gap-8 text-sm text-primary-foreground/60">
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute top-1/4 right-1/4 size-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 size-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Right Login Section */}
     {/* Right Login Section */}
            <div className="flex items-center justify-center bg-background">
              <div className="w-full max-w-[420px] mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold tracking-tight mb-2">
                    {isSignup ? "Create Account" : "Welcome back!"}
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    {isSignup ? "Fill details to continue" : "Please enter your details"}
                  </p>
                </div>

                {/* 🔥 PIN INPUT WITH ANIMATION */}

              

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* NAME (SIGNUP ONLY) */}
                  {isSignup && (
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                    </div>
                  )}

                  {/* EMAIL */}
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsTyping(true)}
                      onBlur={() => setIsTyping(false)}
                      className="h-12"
                    />
                  </div>

                  {/* PHONE (SIGNUP ONLY) */}
                  {isSignup && (
                    <div className="space-y-2">
                      <Label>Phone</Label>
                    <Input
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                    </div>
                  )}

                  {/* PASSWORD */}
              <div className="space-y-2">
              <Label>Password</Label>

              <div className="relative flex gap-2 items-center">
                <div className="relative w-full">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => {
                      setIsTyping(true);
                      if (isSignup && email && phone) setShowSendOtp(true);
                    }}
                    onBlur={() => setIsTyping(false)}
                    className="h-12 pr-10"
                  />

                  {/* 👁️ FIXED EYE BUTTON */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* OTP BUTTON */}
                {/* {isSignup && showSendOtp && !otpVerified && (
                  <button
                    type="button"
                    onClick={otpRequested ? handleVerifyOtp : handleSendOtp}
                    className="px-3 text-xs bg-black-200 text-white rounded-lg"
                  >
                    {otpRequested ? "Verify OTP" : "Send OTP"}
                  </button>
                )} */}
              </div>
            </div>
        

      {/* REMEMBER ONLY LOGIN */}
      {!isSignup && (
       <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }}
>
  {/* LEFT SIDE */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    }}
    onClick={() => setRemember(!remember)}
  >
    {/* CUSTOM CHECKBOX */}
    <div
      style={{
        width: "18px",
        height: "18px",
        borderRadius: "4px",
        border: "2px solid #6366f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: remember ? "#6366f1" : "transparent",
        transition: "all 0.2s ease",
      }}
    >
      {remember && (
        <span
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          ✓
        </span>
      )}
    </div>

    {/* LABEL */}
    <span
      style={{
        fontSize: "14px",
        color: "#d1d5db",
      }}
    >
      Remember
    </span>
  </div>

  {/* RIGHT SIDE */}
  <span
    style={{
      fontSize: "14px",
      color: "#6366f1",
      cursor: "pointer",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.textDecoration = "underline";
      e.currentTarget.style.color = "#818cf8";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.textDecoration = "none";
      e.currentTarget.style.color = "#6366f1";
    }}
    onClick={() => navigate("/forgot-password")}
  >
    Forgot password?
  </span>
</div>
      )}

      {/* BUTTON */}
     <button
  type="submit"
  style={{
    width: "100%",
    height: "48px",
    backgroundColor: "#d4d4d4",
    color: "black",
    borderRadius: "12px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    marginTop: "20px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#c0c0c0";
    e.currentTarget.style.transform = "scale(1.02)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#d4d4d4";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  {isLoading
    ? "Processing..."
    : isSignup
    ? "Sign Up"
    : "Log in"}
</button>

    </form>

    {/* GOOGLE (ONLY LOGIN) */}
    {!isSignup && (
      <div className="mt-6">
       
      </div>
    )}

    {/* TOGGLE */}
   <div
  style={{
    textAlign: "center",
    fontSize: "14px",
    marginTop: "24px",
    color: "#9ca3af", // muted gray
  }}
>
  {isSignup ? "Already have an account? " : "Don't have an account? "}

  <span
    onClick={() => setIsSignup(!isSignup)}
    style={{
      fontWeight: 600,
      color: "white",
      cursor: "pointer",
      marginLeft: "4px",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.textDecoration = "underline";
      e.currentTarget.style.color = "#d4d4d4";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.textDecoration = "none";
      e.currentTarget.style.color = "white";
    }}
  >
    {isSignup ? "Log in" : "Sign Up"}
  </span>
</div>

  </div>
</div>



{showOtpModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50">

    {/* BACKGROUND */}
    <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

    {/* MODAL */}
    <div
      className={`relative  bg-gray-1000 rounded-[20px] px-8 py-10 w-[400px] h-[245px]  text-center z-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] ${
        shake ? "animate-shake" : ""
      }`}
    >

      {/* CLOSE BUTTON */}
     <button
      onClick={() => setShowOtpModal(false)}
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        backgroundColor: "#020618", // gray-800
        color: "white",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}

    >
      ✕
    </button>

      {/* SUCCESS */}
      {success ? (
        <div className="text-white text-center py-10">
          <div className="text-5xl mb-4 animate-bounce">✔</div>
          <p className="text-lg font-medium">Verified Successfully</p>
        </div>
      ) : (
        <>
          {/* TITLE */}
          <h2
            style={{
              
              color: "white",
              fontSize: "20px",   // text-xl
              fontWeight: 600,    // font-semibold
              marginBottom: "20px", // mb-10
               marginTop: "6px",   // 👈 THIS MOVES IT DOWN
               display: "inline-block",
            }}
          >
            Enter OTP
          </h2>

          {/* PIN INPUT */}
          <div className="flex justify-center gap-5 mb-10 ">
            {pin.map((v, i) => (
              <input
                key={i}
                ref={(el) => (pinRefs.current[i] = el!)}
                value={v}
                maxLength={1}
                className="w-14 h-14 rounded-xl bg-white text-black text-center text-xl font-bold outline-none shadow-md focus:scale-105 transition"

                onChange={(e) => {
                  const val = e.target.value;
                  const newPin = [...pin];
                  newPin[i] = val;
                  setPin(newPin);

                  if (val && i < 3) {
                    pinRefs.current[i + 1]?.focus();
                  }
                }}

                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !pin[i] && i > 0) {
                    pinRefs.current[i - 1]?.focus();
                  }
                }}

                onPaste={(e) => {
                  const paste = e.clipboardData.getData("text").slice(0, 4);
                  if (!paste) return;

                  const arr = paste.split("");
                  setPin(arr);

                  arr.forEach((char, index) => {
                    if (pinRefs.current[index]) {
                      pinRefs.current[index].value = char;
                    }
                  });

                  pinRefs.current[arr.length - 1]?.focus();
                }}
              />
            ))}
          </div>

          {/* BUTTON */}
         <button
            onClick={async () => {
              if (!otpRequested) {
                await handleSendOtp();
              } else {
                await handleVerifyOtp();
              }
            }}
            style={{
              width: "40%",              // better than w-35
              height: "48px",             // h-12
              marginTop: "35px",          // spacing (mt-6)
              backgroundColor: "white",
              color: "black",             // ✅ FIXED
              borderRadius: "12px",       // rounded-xl
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // shadow-md
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {otpRequested ? "Verify OTP" : "Send OTP"}
          </button>


          {/* TIMER */}
          {otpRequested && (
            <p className="text-gray-400 text-sm mt-6">
              {timer > 0 ? (
                `Resend in ${timer}s`
              ) : (
               <span
                onClick={handleSendOtp}
                style={{
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                   marginTop: "16px",   // 👈 THIS MOVES IT DOWN
                   display: "inline-block",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                Resend OTP
              </span>
              )}
            </p>
          )}
        </>
      )}
    </div>
  </div>
)}  

</div>
  );
}



export const Component = LoginPage;


