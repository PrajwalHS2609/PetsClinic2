"use client";
import React from "react";
import "./HomeKey.css";
import CountUp from "react-countup";
import Button from "@/components/Button/Button";
const HomeKey = () => {
  return (
    <div className="homeKey-container">
      <div className="homeKey-content">
        <h3>
          <CountUp
            start={0}
            end={86}
            duration={2.75}
            separator=""
            // decimals={4}
            decimal=","
            // prefix="EUR "
            suffix="+"
          />
        </h3>
        <p>Adopted Pets</p>
      </div>
      <div className="homeKey-content">
        <h3>
          <CountUp
            start={0}
            end={10}
            duration={2.75}
            separator=" "
            // decimals={4}
            decimal=","
            // prefix="EUR "
            suffix="K"
          />
        </h3>
        <p>Happy Customers Who Trusted</p>
      </div>
      <div className="homeKey-content">
        <h3>
          <CountUp
            start={0}
            end={450}
            duration={2.75}
            separator=" "
            // decimals={4}
            decimal=","
            // prefix="EUR "
            suffix="+"
          />
        </h3>
        <p>Awards For Success Projects</p>
      </div>
      <div className="homeKey-content">
        <Button text="Contact Us" link="contact-us" />
      </div>
    </div>
  );
};

export default HomeKey;
