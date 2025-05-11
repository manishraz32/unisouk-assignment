import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import OurTeam from "./components/OurTeam/OurTeam";
import ProjectSection from "./components/ProjectSection/ProjectSection";

function App() {
  return (
    <>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-list">
            <a href="#nullBrains">nullBrains.</a>
            <div className="center-content">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="login-and-singup">
              <a href="#login">Login</a>
              <button className="button">Sign</button>
            </div>
          </div>
        </nav>

        <div className="sen-container">
          <p className="start-craft-tex">Start Crafting Your</p>
          <p className="start-craft-text">Next Great Idea</p>
          <p className="description">
            nullBrains is the solution to all those projects that never get
            created. Stop wasting your time now and let's get started.
          </p>
          <div className="btn">
            <button className="primary">Purchase Now</button>
            <button className="secondary">Learn More</button>
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
