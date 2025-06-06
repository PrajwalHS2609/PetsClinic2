import React from "react";
import "./ContactUs.css"
const ContactUsMap = () => {
  return (
    <div className="contactMap-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9193453868374!2d77.60080447454762!3d13.040805713358298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16e4ac876e23%3A0x23ba42658b0abebd!2s8th%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1748797775896!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactUsMap;
