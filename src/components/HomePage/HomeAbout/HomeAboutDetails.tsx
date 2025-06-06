import React from "react";
import { IoPaw } from "react-icons/io5";

const HomeAboutDetails = () => {
  return (
    <div className="homeAboutDetails-container">
      <img
        src="https://wordpress.zozothemes.com/petzorg/wp-content/uploads/sites/30/2024/10/shap-33.webp"
        alt=""
      />
      <div className="homeAboutDetails-content">
        <h6>About Us</h6>
        <h2>We Providing The Best Pet Care Services</h2>
      </div>
      <div className="homeAboutDetails-content">
        <div className="homeAboutDetails-item">
          <h4>Trust By Clients</h4>
          <h3>1000+</h3>
          <p>
            Educate owners on reading ingredient lists, choosing quality foods,
            and recognizing harmful ingredients.
          </p>
        </div>
      </div>
      <div className="homeAboutDetails-content">
        <ul>
          <li>
            <IoPaw className="paw-ico" /> Nutrition and Diet
          </li>
          <li>
            <IoPaw className="paw-ico" /> Exercise and Physical Activity
          </li>
          <li>
            <IoPaw className="paw-ico" /> Grooming and Hygiene
          </li>
          <li>
            <IoPaw className="paw-ico" /> Mental & Emotional Well-Being
          </li>
          <li>
            <IoPaw className="paw-ico" /> Preventive Health
          </li>
          <li>
            <IoPaw className="paw-ico" /> Special Needs Pets
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeAboutDetails;
