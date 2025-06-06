import React from "react";
import "./ContactUs.css";
const ContactUsForm = () => {
  return (
    <div className="form-container">
      <form className="contact-form">
        <div className="form-group">
          <input type="text" name="name" required placeholder="Name"/>
        </div>

        <div className="form-group">
          <input type="tel" name="phone" required placeholder="Phone"/>
        </div>

        <div className="form-group">
          <input type="email" name="email" required placeholder="Email"/>
        </div>

        <div className="form-group">
          <input type="text" name="subject" placeholder="Subject"/>
        </div>

        <div className="form-text">
          <textarea name="message" required placeholder="Message"/>
        </div>

        <button type="submit" className="submit-btn">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
