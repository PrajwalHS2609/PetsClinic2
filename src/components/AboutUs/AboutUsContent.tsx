import React from "react";
import Button from "../Button/Button";
import "./AboutUs.css"
const AboutUsContent = () => {
  return (
    <div className="aboutUsContent-container">
      <h6>About Us</h6>
      <h2>Making Your Home Good Nutrition</h2>
      <p>
        This is the most common type of veterinary practice, focusing on the
        health and well-being of pets like dogs and cats. Rabbits, guinea pigs,
        hamsters, ferrets, and other small pets. non-traditional pets such as
        birds, reptiles, and amphibians.
      </p>
      <Button text="Contact Us" link="/contact-us" />
    </div>
  );
};

export default AboutUsContent;
