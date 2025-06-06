import React from "react";
import "./HomeAbout.css";
import Image from "next/image";
import homeAboutBanner from "@/Images/homeAboutImg.png";
import HomeAboutDetails from "./HomeAboutDetails";
const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-content">
        <HomeAboutDetails />
      </div>
      <div className="homeAbout-content">
        <div className="homeAbout-imgContainer">
          <Image src={homeAboutBanner} alt="homeAboutBanner" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
