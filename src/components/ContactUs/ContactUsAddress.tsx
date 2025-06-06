import React from "react";
import "./ContactUs.css";
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const ContactUsAddress = () => {
  return (
    <div className="contactAddress-container">
      <img src="https://wordpress.zozothemes.com/petzorg/wp-content/uploads/sites/30/2024/10/shap-26.webp" alt="" />
      <div className="contactAddress-content">
        <h6>We Love Your Pets</h6>
        <h2>Get in Touch</h2>
        <p>
          We're excited to hear from you and let's start something special
          together. call us for any inquiry.
        </p>
      </div>
      <div className="contactAddress-content">
        <div className="contactAddress-item">
          <FiPhone className="contactAddress-icon" />
          <h4>Phone</h4>
          <span>
            {" "}
            <a href="tel:9876543210">+91 9876543210</a>
            <a href="tel:1234567890">+91 1234567890</a>
          </span>
        </div>
        <div className="contactAddress-item">
          <IoMailOpenOutline className="contactAddress-icon" />
          <h4>Email</h4>
          <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
        </div>
        <div className="contactAddress-item">
          <IoLocationOutline className="contactAddress-icon" />
          <h4>Location</h4>
          <a href="https://maps.app.goo.gl/jpjbL1Vo9DagJe1G6">
            8th Cross, Malleswaram, Bangalore
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAddress;
