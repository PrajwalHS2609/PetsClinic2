import React from "react";
import "./AboutUs.css";

const AboutUsImg = () => {
  return (
    <div className="aboutUsImg-container">
      <div className="aboutUsImg-content">
        <img
          src="https://wordpress.zozothemes.com/petzorg/wp-content/uploads/sites/30/2024/10/dog-human-9.webp"
          alt=""
        />
        <h4>Personal Care</h4>
        <p>This is the most common type of veterinary practice.</p>
      </div>
      <div className="aboutUsImg-content">
        <img
          src="https://wordpress.zozothemes.com/petzorg/wp-content/uploads/sites/30/2024/10/shap-22.webp"
          alt=""
        />
        <h4>Special Care</h4>
      </div>
    </div>
  );
};

export default AboutUsImg;
