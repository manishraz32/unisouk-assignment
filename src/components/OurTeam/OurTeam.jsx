import React from "react";
import "./OurTeam.css";
import { Twitter } from "lucide-react";
import { Github } from "lucide-react";

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <div className="team-header1">OUR TEAM</div>
      <div>
        <div className="team-header2">An encredible team of</div>
        <div className="team-header2">amazing amazing individuals</div>
      </div>
      <div className="team-card-container">
        {[1, 10, 15, 20, 5, 12, 18, 22].map((item) => (
          <div key={item} className="team-card">
            <div className="image-container">
              <img
                src={`https://randomuser.me/api/portraits/men/${item}.jpg`}
                alt={`Team Member ${item}`}
                className="profile-pic"
              />
            </div>
            <div className="bottom-container">
              <div className="team-name">Freddy Smith</div>
              <div className="team-role">CEO and Founder</div>
              <div className="social-media-container">
                <Twitter stroke="gray" />
                <Github stroke="gray" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
