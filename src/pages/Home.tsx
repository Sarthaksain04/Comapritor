// // import Navbar from '../pages/Navbar';
// // import './Home.css';
// // import Page1 from './Page1';
// // import game from '../assets/game.png';
// // import headphone from '../assets/headphone.png'
// // import phones from '../assets/phones.png'
// // import earbuds from  '../assets/earbuds.png'
// // import study from '../assets/study.png'
// // import shop from '../assets/shop.png'
// // import book from '../assets/book.png'
// // import watch from '../assets/watch.png'
// // import './Page1.css';
// // import Page2 from './Page2';
// // import './Page2.css';
// // import { AnimatedText } from "../Components/AnimatedText";


// // const Home = () => {
// //   return (
    
// //     <div className="scroll-container">
// //       <section className="home-hero-section">
// //         <Navbar />
// //         <div className="home-hero">
// //           <div>
// //            <AnimatedText
// //             className="home-hero"
// //             textClassName="hero-text"
// //             gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
// //             gradientAnimationDuration={3}
// //             hoverEffect={true}
// //           >
// //             Compare Smarter<br />Shop Better
        
// //           </AnimatedText>
// //             <img src={phones} alt="Promotional2" className="promo-image3" />
 
// //             <div className="info-banner">
// //               <span role="img" aria-label="waving hand">👋</span>
// //               <p>
// //                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
// //               </p>
// //             </div>
// //           </div>    
// //         </div>
// //             <img src={game} alt="Promotional" className="promo-image" /> 
// //             <img src={headphone} alt="Promotional1" className="promo-image2" />
// //             {/* <img src={phones} alt="Promotional2" className="promo-image3" /> */}
// //              <img src={earbuds} alt="Promotional3" className="promo-image4" />
// //              <img src={study} alt="Promotional4" className="promo-image5" />
// //              <img src={shop} alt="Promotional5" className="promo-image6" />
// //               <img src={book} alt="Promotional6" className="promo-image7" />
// //               <img src={watch} alt="Promotional7" className="promo-image8" />
              


// //         <div className="floating-search-bar">
// //           <input type="text" placeholder="Search..." />
// //           <span className="search-icons"></span>
// //         </div>
// //       </section>

// //       <section className="page1-section">
// //         <Page1 />
// //       </section>

// //       <section className="page2-section">
// //         <Page2 />
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Navbar from '../pages/Navbar';
// import './Home.css';
// import Page1 from './Page1';
// import game from '../assets/game.png';
// import headphone from '../assets/headphone.png';
// import phones from '../assets/phones.png';
// import earbuds from  '../assets/earbuds.png';
// import study from '../assets/study.png';
// import shop from '../assets/shop.png';
// import book from '../assets/book.png';
// import watch from '../assets/watch.png';
// import './Page1.css';
// import Page2 from './Page2';
// import './Page2.css';
// import { AnimatedText } from "../Components/AnimatedText";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setTimeout(() => {
//       navigate(`/search?query=${encodeURIComponent(query.trim())}`);
//        }, 2000);
//     }
//   }

//   return (
//     <div className="scroll-container">
//       <section className="home-hero-section">
//         <Navbar />
//         <div className="home-hero">
//           <div>
//             <AnimatedText
//               className="home-hero"
//               textClassName="hero-text"
//               gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
//               gradientAnimationDuration={3}
//               hoverEffect={true}
//             >
//               Compare Smarter<br />Shop Better
//             </AnimatedText>
//             <img src={phones} alt="Promotional2" className="promo-image3" />

//             <div className="info-banner">
//               <span role="img" aria-label="waving hand">👋</span>
//               <p>
//                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
//               </p>
//             </div>
//           </div>
//         </div>
//         <img src={game} alt="Promotional" className="promo-image" />
//         <img src={headphone} alt="Promotional1" className="promo-image2" />
//         {/* <img src={phones} alt="Promotional2" className="promo-image3" /> */}
//         <img src={earbuds} alt="Promotional3" className="promo-image4" />
//         <img src={study} alt="Promotional4" className="promo-image5" />
//         <img src={shop} alt="Promotional5" className="promo-image6" />
//         <img src={book} alt="Promotional6" className="promo-image7" />
//         <img src={watch} alt="Promotional7" className="promo-image8" />

//         <div className="floating-search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//           />
//           <span className="search-icons"></span>
//         </div>
//       </section>

//       <section className="page1-section">
//         <Page1 />
//       </section>

//       <section className="page2-section">
//         <Page2 />
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Navbar from '../pages/Navbar';
// import './Home.css';
// import Page1 from './Page1';
// import Page2 from './Page2';

// import game from '../assets/game.png';
// import headphone from '../assets/headphone.png';
// import phones from '../assets/phones.png';
// import earbuds from '../assets/earbuds.png';
// import study from '../assets/study.png';
// import shop from '../assets/shop.png';
// import book from '../assets/book.png';
// import watch from '../assets/watch.png';

// import { AnimatedText } from "../Components/AnimatedText";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true); // trigger fade out
//       setTimeout(() => {
//         navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//       }, 800); // 800ms delay
//     }
//   }

//   return (
//     <div className={`scroll-container ${fadeOut ? "fade-out" : "fade-in"}`}>
//       <section className="home-hero-section">
//         <Navbar />
//         <div className="home-hero">
//           <div>
//             <AnimatedText
//               className="home-hero"
//               textClassName="hero-text"
//               gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
//               gradientAnimationDuration={3}
//               hoverEffect={true}
//             >
//               Compare Smarter<br />Shop Better
//             </AnimatedText>
//             <img src={phones} alt="Promotional2" className="promo-image3" />

//             <div className="info-banner">
//               <span role="img" aria-label="waving hand">👋</span>
//               <p>
//                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
//               </p>
//             </div>
//           </div>
//         </div>

//         <img src={game} alt="Promotional" className="promo-image" />
//         <img src={headphone} alt="Promotional1" className="promo-image2" />
//         <img src={earbuds} alt="Promotional3" className="promo-image4" />
//         <img src={study} alt="Promotional4" className="promo-image5" />
//         <img src={shop} alt="Promotional5" className="promo-image6" />
//         <img src={book} alt="Promotional6" className="promo-image7" />
//         <img src={watch} alt="Promotional7" className="promo-image8" />

//         <div className="floating-search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//           />
//           <span className="search-icons"></span>
//         </div>
//       </section>

//       <section className="page1-section">
//         <Page1 />
//       </section>

//       <section className="page2-section">
//         <Page2 />
//       </section>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Navbar from '../pages/Navbar';
// import './Home.css';
// import Page1 from './Page1';
// import Page2 from './Page2';

// import game from '../assets/game.png';
// import headphone from '../assets/headphone.png';
// import phones from '../assets/phones.png';
// import earbuds from '../assets/earbuds.png';
// import study from '../assets/study.png';
// import shop from '../assets/shop.png';
// import book from '../assets/book.png';
// import watch from '../assets/watch.png';

// import { AnimatedText } from "../Components/AnimatedText";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true); // trigger fade out
//       setTimeout(() => {
//         navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//       }, 800); // delay for animation
//     }
//   }

//   return (
//     <div className={`scroll-container ${fadeOut ? "fade-out" : "fade-in"}`}>
//       <section className="home-hero-section">
//         <Navbar />
//         <div className="home-hero">
//           <div>
//             <AnimatedText
//               className="home-hero"
//               textClassName="hero-text"
//               gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
//               gradientAnimationDuration={3}
//               hoverEffect={true}
//             >
//               Compare Smarter<br />Shop Better
//             </AnimatedText>
//             <img src={phones} alt="Promotional2" className="promo-image3" />

//             <div className="info-banner">
//               <span role="img" aria-label="waving hand">👋</span>
//               <p>
//                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Promotional Images */}
//         <img src={game} alt="Promotional" className="promo-image" />
//         <img src={headphone} alt="Promotional1" className="promo-image2" />
//         <img src={earbuds} alt="Promotional3" className="promo-image4" />
//         <img src={study} alt="Promotional4" className="promo-image5" />
//         <img src={shop} alt="Promotional5" className="promo-image6" />
//         <img src={book} alt="Promotional6" className="promo-image7" />
//         <img src={watch} alt="Promotional7" className="promo-image8" />

//         {/* Search Bar */}
//         <div className="floating-search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//           />
//           <span className="search-icons"></span>
//         </div>
//       </section>

//       <section className="page1-section">
//         <Page1 />
//       </section>

//       <section className="page2-section">
//         <Page2 />
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joyride from "react-joyride"; 

import Navbar from '../pages/Navbar';
import './Home.css';
import Page1 from './Page1';
import Page2 from './Page2';

import game from '../assets/game.png';
import headphone from '../assets/headphone.png';
import phones from '../assets/phones.png';
import earbuds from '../assets/earbuds.png';
import study from '../assets/study.png';
import shop from '../assets/shop.png';
import book from '../assets/book.png';
import watch from '../assets/watch.png';

import { AnimatedText } from "../Components/AnimatedText";

const Home = () => {
  const [query, setQuery] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔹 NEW
  const navigate = useNavigate();

  // ✅ Check login status (e.g. from localStorage)
  React.useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const steps = [
    {
      target: ".login-btn",
      content: "Sorry for the inconvenience! To continue using the comparator, you need to log in first.",
      placement: "left" as const,
      disableBeacon: true,
    },
  ];

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && query.trim()) {
      setFadeOut(true);
      setTimeout(() => {
        navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
      }, 800);
    }
  }

  return (
    <div className={`scroll-container ${fadeOut ? "fade-out" : "fade-in"}`}>
      {/* ✅ Joyride (only show if not logged in) */}
      {!isLoggedIn && (
        <Joyride
          steps={steps}
          run={!localStorage.getItem("isLoggedIn")}
          continuous
          showProgress
          disableCloseOnEsc={true}
          disableOverlayClose={true}
          spotlightClicks={true}
          hideBackButton={true}
          styles={{
            options: {
              zIndex: 10000,
            },
            buttonClose: {
              display: "none",
            },
            buttonNext: {
              display: "none",
            },
          }}
        />
      )}
      

      <section className="home-hero-section">
        <Navbar />
        <div className="home-hero">
          <div>
            <AnimatedText
              className="home-hero"
              textClassName="hero-text"
              gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
              gradientAnimationDuration={3}
              hoverEffect={true}
            >
              Compare Smarter<br />Shop Better
            </AnimatedText>
            <img src={phones} alt="Promotional2" className="promo-image3" />

            <div className="info-banner">
              <span role="img" aria-label="waving hand">👋</span>
              <p>
                Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
              </p>
            </div>
          </div>
        </div>

        <img src={game} alt="Promotional" className="promo-image" />
        <img src={headphone} alt="Promotional1" className="promo-image2" />
        <img src={earbuds} alt="Promotional3" className="promo-image4" />
        <img src={study} alt="Promotional4" className="promo-image5" />
        <img src={shop} alt="Promotional5" className="promo-image6" />
        <img src={book} alt="Promotional6" className="promo-image7" />
        <img src={watch} alt="Promotional7" className="promo-image8" />

        <div className="floating-search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <span className="search-icons"></span>
        </div>
      </section>

      <section className="page1-section">
        <Page1 />
      </section>

      <section className="page2-section">
        <Page2 />
      </section>
    </div>
  );
};

export default Home;
