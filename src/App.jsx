import "./App.css";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import OurTeam from "./components/OurTeam/OurTeam";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import { Search, Check } from "lucide-react";
import Disnmept from "./assets/DisNmept.png";
import google from "./assets/google.png";
import HubSpot_ from "./assets/HubSpot_Logo.png";
import Shopify from "./assets/Shopify_logo_2018.svg.png";
import slack from "./assets/Slack_Technologies_Logo.svg.png";
import YoutTube from "./assets/YouTube.svg.png";
import image from "./assets/image.svg";

function App() {
  return (
    <>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-list">
            <p className="nullBrains">nullBrains.</p>
            <div className="center-content">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
              <Search size={18} color="gray" />
            </div>
            <div className="login-and-singup">
              <a href="#login">Sign In</a>
              <button className="button">Sign Up</button>
            </div>
          </div>
        </nav>

        <div className="sen-container">
          <p className="start-craft-tex">Start Crafting Your</p>
          <p className="start-craft-text">Next Great Idea</p>
          <p className="description">
            Simplifying the creation of landing pages, blog page, application
            pages and so much more!
          </p>
          <div className="btn">
            <div className="on-top-purchase">only $15/mo</div>
            <button className="primary">Purchase Now</button>
            <p className="learn-more">Learn More</p>
          </div>
        </div>

        <div className="logo_container">
          <div className="trust_text">
            <p>TRUSTED BY TOP_LEADING COMPAINES</p>
          </div>
          <div className="logo">
            <img src={Disnmept} alt="DisNmept" />
            <img src={google} alt="google" />
            <img src={HubSpot_} alt="HubSpot" />
            <img src={YoutTube} alt="YoutTube" />
            <img src={slack} alt="slack" />
            <img src={Shopify} alt="Shopify" />
          </div>
        </div>

        <div className="third_section">
          <div className="container">
            <div className="frist_container">
              <div className="image_section">
                <img
                  src={image}
                  alt="Boost Productivity"
                  className="top-image"
                />
                {/* <div></div> */}
              </div>
              <div className="p_container">
                <h2>Boost Productivity</h2>
                <p className="subtext">
                  Build an atmosphere that fosters productivity in your
                  organization and personal projects.
                </p>
                <ul className="points">
                  <li>
                    <span className="check-icon">
                      <Check size={16} />
                    </span>
                    Streamline your productivity and workflow
                  </li>
                  <li>
                    <span className="check-icon">
                      <Check size={16} />
                    </span>
                    Build better task integrations
                  </li>
                  <li>
                    <span className="check-icon">
                      <Check size={16} />
                    </span>
                    Connect systems for a unified flow
                  </li>
                </ul>
              </div>
            </div>

            <div className="second_container">
              <div className="p_container">
                <h2>Automated Tasks</h2>
                <p className="subtext">
                  Save time and resources with our intuitive automation system.
                  No code required for setup.
                </p>
                <ul className="points">
                  <li>
                    <span className="check-icon">
                      <Check size={16} />
                    </span>
                    Automate routine processes
                  </li>
                  <li>
                    <span className="check-icon">
                      <Check size={16} />
                    </span>
                    Connect systems for a unified flow
                  </li>
                  <li>
                    <span className="check-icon">
                      <Check size={16} />
                    </span>
                    Build custom scripts for your needs
                  </li>
                </ul>
              </div>
              <div className="image_section">
                <img src={image} alt="Automated Tasks" />
              </div>
            </div>
          </div>
        </div>

        <FeatureSection />
        <div className="w-full">
          <OurTeam />
        </div>
        <div className="w-full project-section-container">
          <ProjectSection />
        </div>
      </div>
    </>
  );
}

export default App;
