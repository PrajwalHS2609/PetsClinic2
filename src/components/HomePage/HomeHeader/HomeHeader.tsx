"use client";
import React from "react";
import "./HomeHeader.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "@/components/Button/Button";

const HomeHeader = () => {
  return (
    <div className="homeHeader-container">
      <Carousel fade className="carousel-container">
        <Carousel.Item>
          <div className="homeHeader-cover">
            <div className="homeHeader-coverContainer">
              <h6>Welcome To Pet Clinic</h6>
              <h2>Taking Care of Pets as if they were our Own</h2>
              <Button text="Contact Us" link={"/"} />
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/6234618/pexels-photo-6234618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="homeHeader-cover">
            <div className="homeHeader-coverContainer">
              <h6>Welcome To Pet Clinic</h6>
              <h2>Taking Care of Pets as if they were our Own</h2>
              <Button text="Contact Us" link="/" />
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/7468978/pexels-photo-7468978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="homeHeader-cover">
            <div className="homeHeader-coverContainer">
              <h6>Welcome To Pet Clinic</h6>
              <h2>Taking Care of Pets as if they were our Own</h2>
              <Button text="Contact Us" link="/" />
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/6131099/pexels-photo-6131099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeHeader;
