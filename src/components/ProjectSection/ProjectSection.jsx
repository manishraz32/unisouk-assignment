import React from "react";
import "./ProjectSection.css";
import Facebook from "lucide-react/dist/esm/icons/facebook";
import Instagram from "lucide-react/dist/esm/icons/instagram";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import Github from "lucide-react/dist/esm/icons/github";
import Globe from "lucide-react/dist/esm/icons/globe";

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
              <div className="project-text-container borderRadiusBottom-16px">
                <div className="chip-container">RESOURCES</div>
                <div className="project-text-sub-container">
                  <div>
                    <h1 className="project-card-text-header">Refreshing</h1>
                    <h1 className="project-card-text-header negative-padding">
                      Designs
                    </h1>
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
        <div>
          <div className="top-cards-container">
            {[1, 2, 3].map(() => (
              <div className="project-card">
                <div className="project-image-container-2">
                  <img
                    src="https://img.freepik.com/premium-photo/laptop-cellphone-headphone-with-cactus-plant-beige-background_23-2147889270.jpg?w=996"
                    className="project-image borderTop-16px"
                  />
                </div>
                <div className="project-text-container2 borderRadiusBottom-16px">
                  <div className="chip-container2">RESOURCES</div>
                  <div className="project-text-sub-container">
                    <div className="project-text-header-2">
                      Best workstations of the year
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
        </div>
      </div>

      {/* foooter */}

      <div className="footer-container">
        <div className="link-container">
          <div className="anchor-text">About</div>
          <div className="anchor-text">Blog</div>
          <div className="anchor-text">Team</div>
          <div className="anchor-text">Pricing</div>
          <div className="anchor-text">Contacts</div>
          <div className="anchor-text">Terms</div>
        </div>
        <div className="icon-container2">
          <Facebook />
          <Instagram />
          <Twitter />
          <Github />
          <Globe />
        </div>
        <div>@ 2021 SomeCompany, Inc, All right reserved</div>
      </div>
    </div>
  );
};

export default ProjectSection;
