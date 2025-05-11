import React from "react";
import "./ProjectSection.css";
const ProjectSection = () => {
  return (
    <div className="project-container-section">
      <div className="project-header-container">
        <h1 className="project-header">The Project Blog</h1>
        <div className="project-sub-header">
          Designs and layouts to help you with your app.
        </div>
      </div>
      <div className="project-card-container">
        <div className="top-cards-container">
          {[1, 2, 3].map(() => (
            <div className="project-card">
            <div className="project-image-container">
              <img
                src="https://img.freepik.com/premium-photo/purple-aluminum-cans-with-water-droplets-purple-background_167862-6039.jpg?w=740"
                className="project-image"
              />
            </div>
            <div className="project-text-container">
              <div className="chip-container">RESOURCES</div>
              <div className="project-text-sub-container">
                <div>
                  <h1 className="project-card-text-header">Refreshing</h1>
                  <h1 className="project-card-text-header negative-padding">Designs</h1>
                </div>
                <div className="project-card-desc">
                  Quench satisfying designs to help you stear up emotion and
                  tell a story
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectSection;
