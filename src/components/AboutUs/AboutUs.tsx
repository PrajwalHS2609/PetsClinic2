import React from "react";
import AboutUsImg from "./AboutUsImg";
import AboutUsContent from "./AboutUsContent";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-content">
        <AboutUsImg />
      </div>
      <div className="aboutUs-content">
        <AboutUsContent />
      </div>
    </div>
  );
};

export default AboutUs;
