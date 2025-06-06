import React from "react";
import "./HomeService.css";
import HomeServiceHead from "./HomeServiceHead";
import HomeServiceMain from "./HomeServiceMain";
import Button from "@/components/Button/Button";
const HomeService = () => {
  return (
    <div className="homeService-container">
      <HomeServiceHead />
      <HomeServiceMain />
      <div className="homeService-button">
        <Button text="View Services" link="/services"/>
      </div>
    </div>
  );
};

export default HomeService;
