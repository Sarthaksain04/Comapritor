// import React, { useState, useEffect, useRef } from 'react';
// import { ShoppingShort } from "@/pages/shorts";
// import { Heart, ShoppingCart, Share2, ExternalLink } from 'lucide-react';

// interface ShortCardProps {
//   short: ShoppingShort;
//   isActive: boolean;
//   onLike: (id: string) => void;
//   onAddToCart: (short: ShoppingShort) => void;
//   onShare: (short: ShoppingShort) => void;
// }

// const ShortCard: React.FC<ShortCardProps> = ({
//   short,
//   isActive,
//   onLike,
//   onAddToCart,
//   onShare,
// }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   // Handle video autoplay when card becomes active
//   useEffect(() => {
//     if (short.media_type === 'video' && videoRef.current) {
//       if (isActive) {
//         videoRef.current.play().catch(() => {
//           // Autoplay was prevented
//           setIsPlaying(false);
//         });
//         setIsPlaying(true);
//       } else {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       }
//     }
//   }, [isActive, short.media_type]);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     onLike(short.id);
//   };

//   const handleVideoClick = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//         setIsPlaying(false);
//       } else {
//         videoRef.current.play();
//         setIsPlaying(true);
//       }
//     }
//   };

//  return (
//   <div
//     style={{
//       position: "relative",
//       height: "94vh",
//       width: "25%",
//       backgroundColor: "black",
//       overflow: "hidden",
//       marginLeft: "37%",  
//        top: "3%",  
//     }}
//   >
//     {/* MEDIA */}
//     {short.media_type === "video" ? (
//       <video
//         ref={videoRef}
//         src={short.media_url}
//         loop
//         muted
//         playsInline
//         onClick={handleVideoClick}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover", // 🔥 FULL SCREEN FIX
//           cursor: "pointer",
//         }}
//       />
//     ) : (
//       <img
//         src={short.media_url}
//         alt={short.product_name}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       />
//     )}

//     {/* GRADIENT OVERLAY */}
//     <div
//       style={{
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         right: 0,
//         height: "50%",
//         background:
//           "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
//       }}
//     />

//     {/* TOP GRADIENT */}
//     <div
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: "25%",
//         background:
//           "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)",
//       }}
//     />

//     {/* PRODUCT INFO */}
//     <div
//       style={{
//         position: "absolute",
//         bottom: 20,
//         left: 20,
//         right: 20,
//         color: "white",
//       }}
//     >
//       {/* TAGS */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
//         {short.tags.map((tag, i) => (
//           <span
//             key={i}
//             style={{
//               background: "rgba(255,255,255,0.2)",
//               padding: "4px 10px",
//               borderRadius: 20,
//               fontSize: 12,
//             }}
//           >
//             #{tag}
//           </span>
//         ))}
//       </div>

//       {/* NAME */}
//       <h2 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 5 }}>
//         {short.product_name}
//       </h2>

//       {/* PRICE */}
//       <div
//         style={{
//           fontSize: 32,
//           fontWeight: "bold",
//           color: "#22c55e",
//           marginBottom: 6,
//         }}
//       >
//         ${short.price.toFixed(2)}
//       </div>

//       {/* DESCRIPTION */}
//       <p style={{ fontSize: 14, opacity: 0.9, marginBottom: 12 }}>
//         {short.description}
//       </p>

//       {/* BUTTONS */}
//       <div style={{ display: "flex", gap: 10 }}>
//         <button
//           onClick={() => onAddToCart(short)}
//           style={{
//             flex: 1,
//             padding: "12px",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: 10,
//             fontWeight: "bold",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           🛒 Add to Cart
//         </button>

//         {short.product_link && (
//           <a
//             href={short.product_link}
//             target="_blank"
//             style={{
//               padding: "12px",
//               background: "rgba(255,255,255,0.2)",
//               borderRadius: 10,
//               color: "white",
//               textDecoration: "none",
//             }}
//           >
//             🔗 View
//           </a>
//         )}
//       </div>
//     </div>

//     {/* RIGHT SIDE ACTIONS */}
//     <div
//       style={{
//         position: "absolute",
//         right: 16,
//         bottom: 120,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: 18,
//       }}
//     >
//       {/* LIKE */}
//      <button
//   onClick={handleLike}
//   style={{
//     width: 56,                 // slightly bigger button
//     height: 56,
//     borderRadius: "50%",
//     background: "rgba(255,255,255,0.12)",
//     backdropFilter: "blur(10px)",
//     border: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//     transform: isLiked ? "scale(1.1)" : "scale(1)", // 🔥 subtle pop
//   }}
// >
//   <Heart
//     size={34}                  // 🔥 bigger icon (fills properly)
//     color="white"
//     fill={isLiked ? "#ff4d4f" : "none"}  // 🔥 clean red fill
//     strokeWidth={2.2}         // 🔥 slightly thicker = more visible
//   />
// </button>

// <span
//   style={{
//     color: "white",
//     fontSize: 13,
//     marginTop: 4,
//     fontWeight: 500,
//   }}
// >
//   {short.likes + (isLiked ? 1 : 0)}
// </span>
//       {/* SHARE */}
//        <button
//     onClick={() => onShare(short)}
//     style={{
//       width: 52,
//       height: 52,
//       borderRadius: "50%",
//       background: "rgba(255,255,255,0.12)",
//       backdropFilter: "blur(8px)",
//       border: "none",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       cursor: "pointer",
//     }}
//   >
//     <Share2 size={24} color="white" strokeWidth={2} />
//   </button>

//     <span style={{ color: "white", fontSize: 13 }}>
//     Share
//   </span>


//     </div>
//   </div>
// );
// };

// export default ShortCard;




import React, { useState, useEffect, useRef } from "react";
import { ShoppingShort } from "@/pages/shorts";
import { Heart, Share2 } from "lucide-react";

interface ShortCardProps {
  short: ShoppingShort;
  isActive: boolean;
  onLike: (id: string) => void;
  onAddToCart: (short: ShoppingShort) => void;
  onShare: (short: ShoppingShort) => void;
}

const ShortCard: React.FC<ShortCardProps> = ({
  short,
  isActive,
  onLike,
  onAddToCart,
  onShare,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [added, setAdded] = useState(false);

  // 🔥 Autoplay logic
  useEffect(() => {
    if (short.media_type === "video" && videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => setIsPlaying(false));
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive, short.media_type]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(short.id);
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAdd = () => {
  onAddToCart(short);
  setAdded(true);

  setTimeout(() => {
    setAdded(false); // reset after 1.5 sec
  }, 1500);
};

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#0f0f0f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 🔥 CENTER CONTAINER (PHONE STYLE) */}
      <div
        style={{
          width: "min(400px, 100%)",
          height: "92vh",
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "black",
          boxShadow: "0 0 40px rgba(0,0,0,0.6)",
        }}
      >
        {/* 🎥 MEDIA */}
        {short.media_type === "video" ? (
          <video
            ref={videoRef}
            src={short.media_url}
            loop
            muted
            playsInline
            onClick={handleVideoClick}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        ) : (
          <img
            src={short.media_url}
            alt={short.product_name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}

        {/* 🔥 CINEMATIC GRADIENT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), transparent 40%)",
          }}
        />

        {/* 🛍️ PRODUCT INFO */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 16,
            right: 16,
            color: "white",
          }}
        >
          {/* TAGS */}
          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 6,
            }}
          >
            {short.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  fontSize: 11,
                  background: "rgba(255,255,255,0.2)",
                  padding: "4px 8px",
                  borderRadius: 12,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* NAME */}
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>
            {short.product_name}
          </h2>

          {/* PRICE */}
          <div
            style={{
              fontSize: 24,
              color: "#22c55e",
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            Rs {short.price.toFixed(2)}
          </div>

          {/* DESCRIPTION */}
          <p style={{ fontSize: 13, opacity: 0.85, marginBottom: 10 }}>
            {short.description}
          </p>

          {/* CTA BUTTONS */}
          <div style={{ display: "flex", gap: 10 }}>
           <button
            onClick={handleAdd}
            style={{
              flex: 1,
              padding: "10px",
              background: added ? "#22c55e" : "white",   // 🔥 green when added
              color: added ? "white" : "black",
              borderRadius: "12px",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",              // 🔥 smooth animation
              transform: added ? "scale(0.96)" : "scale(1)", // 🔥 click effect
            }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
            {short.product_link && (
              <a
                href={short.product_link}
                target="_blank"
                style={{
                  padding: "12px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "12px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                View
              </a>
            )}
          </div>
        </div>

        {/* ❤️ RIGHT SIDE ACTIONS */}
       <div
              style={{
                position: "absolute",
                right: 2,
                bottom: 110,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
              }}
            >
  {/* LIKE */}
          <button
            onClick={handleLike}
            style={{
              background: "transparent",   // ❌ removed circle
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: isLiked ? "scale(1.15)" : "scale(1)", // 🔥 pop effect
              transition: "0.2s ease",
              outline: "none",
              boxShadow: "none",
            }}
                  >
            <Heart
              size={27}                   // 🔥 slightly bigger for visibility
              color="white"
              fill={isLiked ? "#ff4d4f" : "none"}
              strokeWidth={2.2}
            />
          </button>

          <span style={{ color: "white", fontSize: 13 }}>
            {short.likes + (isLiked ? 1 : 0)}
          </span>

  {/* SHARE */}
          <button
            onClick={() => onShare(short)}
            style={{
              background: "transparent",  // ❌ removed circle
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.2s ease",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <Share2 size={27} color="white" strokeWidth={2} />
          </button>

          <span style={{ color: "white", fontSize: 13 }}>
            Share
          </span>
        </div>

      </div>
    </div>
  );
};

export default ShortCard;