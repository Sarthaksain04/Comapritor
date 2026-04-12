"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

export default function CenteredFeedbackDrawer() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Drawer>
      {/* Trigger Button */}
              <DrawerTrigger asChild>
                <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? "#e5e5e5" : "#ffffff", // 🤍 white → slight gray on hover
            color: "#000000", // 🖤 black text
            padding: "10px 18px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            marginTop: "10px",
            transition: "all 0.2s ease",
          }}
        >
          Give Feedback
        </Button>
      </DrawerTrigger>

      {/* Drawer */}
      <DrawerContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "32px 16px",
            backgroundColor: "#000000",   // 🔥 full black background
            border: "none",          // ❌ removes border
            outline: "none",         // ❌ removes outline
            boxShadow: "black", 

          }}
          
          
        >
          {/* Header */}
          <DrawerHeader
            style={{
              maxWidth: "420px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <DrawerTitle
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              We Value Your Feedback
            </DrawerTitle>

            <DrawerDescription
              style={{
                fontSize: "14px",
                color: "#a1a1aa",
              }}
            >
              Help us improve by sharing your thoughts.
            </DrawerDescription>
          </DrawerHeader>

          {/* Form */}
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textAlign: "left",
            }}
          >
            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Label>Name</Label>
              <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Label>Email</Label>
              <Input placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* Rating */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Label>Rate your experience</Label>
              <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    style={{
                      height: "24px",
                      width: "24px",
                      cursor: "pointer",
                      color: rating >= star ? "#eab308" : "#6b7280",
                      fill: rating >= star ? "#eab308" : "none",
                    }}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Label>Message</Label>
              <Textarea
                placeholder="Tell us about your experience..."
                style={{ minHeight: "110px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          {/* Footer Buttons (PERFECT MATCH) */}
         <DrawerFooter
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  width: "100%",
                  maxWidth: "420px",
                  marginTop: "28px",
                  alignSelf: "center",
                  backgroundColor: "#000000",   // 🔥 THIS is what you need
                  padding: "16px",              // gives proper spacing inside
                  borderRadius: "12px"          // smooth edges (matches UI feel)
                }}
              >
            {/* Submit */}
           <Button
              onClick={async () => {
                try {
                  const res = await fetch("http://localhost:5000/api/auth/feedback", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name,
                      email,
                      rating,
                      message,
                    }),
                  });

                  const data = await res.json();

                  if (res.ok) {
                    alert("✅ Feedback sent!");
                    setName("");
                    setEmail("");
                    setMessage("");
                    setRating(0);
                  } else {
                    alert(data.message || "Failed to send feedback");
                  }
                } catch (err) {
                  alert("Server error");
                }
              }}
              style={{
                flex: 1,
                backgroundColor: "#e5e5e5",
                color: "#000000",
                padding: "12px 0",
                borderRadius: "10px",
                border: "none",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Submit Feedback
            </Button>

            {/* Cancel */}
            <DrawerClose asChild>
              <Button
                style={{
                  flex: 1,
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  padding: "12px 0",
                  borderRadius: "10px",
                  border: "1px solid #2a2a2a",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}