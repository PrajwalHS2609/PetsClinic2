import React from "react";
import "./Footer.css";
const FooterAddress = () => {
  return (
    <div className="footerAddress-container">
      <ul>
        <h4>Address</h4>
        <li>
          <a href="https://www.google.com/maps/place/Twirl+Lifestyle+%7C+HAIR+%26+BEAUTY+SALON/@12.8857261,74.8428603,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba35b8ceb3f1c37:0x2ad8a35b91863b11!8m2!3d12.8857261!4d74.8454352!16s%2Fg%2F11x2psm6my?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D">
            1st floor, KG commercial complex, Pais Garden, opp. Inland Business
            Park, Bejai, Mangalore, Karnataka 575004{" "}
          </a>
        </li>
        <li>
          <a href="tel:9876543210">+91 9876543210</a>
        </li>
        <li>
          <a href="mailto:booking@twirlsalon.com">booking@twirlsalon.com</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAddress;
