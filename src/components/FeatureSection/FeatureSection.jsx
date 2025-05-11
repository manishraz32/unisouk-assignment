import React from "react";
import {
  Award,
  Clock,
  MessageCircle,
  Computer,
  Code,
  Lightbulb,
} from "lucide-react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <div className="feature-section-container">
      <div className="top-container">
        <div className="title-text">Our Features</div>
        <div className="body-text">
          Check out our list of awesome features below
        </div>
      </div>
      <div className="feature-card-container">
        <div className="card-container">
          <div className="top-card-container">
            <div className="icon-container">
              <Award className="feature-icon" />
            </div>
            <div className="card-header-text">Certifications</div>
          </div>
          <div className="text-container card-body-text">
            Each of our plan will provide you and your team with Certifications
          </div>
        </div>
        <div className="card-container">
          <div className="top-card-container">
            <div className="icon-container">
              <Award className="feature-icon" />
            </div>
            <div className="card-header-text">Certifications</div>
          </div>
          <div className="text-container card-body-text">
            Each of our plan will provide you and your team with Certifications
          </div>
        </div>
        <div className="card-container">
          <div className="top-card-container">
            <div className="icon-container">
              <Award className="feature-icon" />
            </div>
            <div className="card-header-text">Certifications</div>
          </div>
          <div className="text-container card-body-text">
            Each of our plan will provide you and your team with Certifications
          </div>
        </div>
        <div className="card-container">
          <div className="top-card-container">
            <div className="icon-container">
              <Award className="feature-icon" />
            </div>
            <div className="card-header-text">Certifications</div>
          </div>
          <div className="text-container card-body-text">
            Each of our plan will provide you and your team with Certifications
          </div>
        </div>
        <div className="card-container">
          <div className="top-card-container">
            <div className="icon-container">
              <Award className="feature-icon" />
            </div>
            <div className="card-header-text">Certifications</div>
          </div>
          <div className="text-container card-body-text">
            Each of our plan will provide you and your team with Certifications
          </div>
        </div>
        <div className="card-container">
          <div className="top-card-container">
            <div className="icon-container">
              <Award className="feature-icon" />
            </div>
            <div className="card-header-text">Certifications</div>
          </div>
          <div className="text-container card-body-text">
            Each of our plan will provide you and your team with Certifications
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
