import Navbar from '../pages/Navbar';
import './Home.css';
import Page1 from './Page1';
import png1 from '../assets/png 1.png';
import './Page1.css';
import Page2 from './Page2';
import './Page2.css';
import { AnimatedText } from "../Components/AnimatedText";


const Home = () => {
  return (
    <div className="scroll-container">
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
            
 
            <div className="info-banner">
              <span role="img" aria-label="waving hand">👋</span>
              <p>
                Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
              </p>
            </div>
          </div>
          
        </div>
            {/* <img src={png1} alt="Promotional" className="promo-image" /> */}

        <div className="floating-search-bar">
          <input type="text" placeholder="Search..." />
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
