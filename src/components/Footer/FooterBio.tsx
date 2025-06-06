import Image from "next/image";
import "./Footer.css";
import logo from "@/Images/footerLogo.png";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
export default function FooterBio() {
  return (
    <div className="footerBio-container">
      <div className="footerBio-content">
        <Image src={logo} alt="logo" />
      </div>
      <div className="footerBio-content">
        <p>
          We’re here to care for your pets and answer all your questions!
          Whether you’re a new pet parent or want to schedule an appointment.
        </p>
      </div>
      {/* <div className="footerBio-content">
        <a href="">
          123, Mahatma Gandhi Rd, FM Cariappa Colony, Sivanchetti Gardens,
          Bengaluru, Karnataka 560025
        </a>
      </div>
      <div className="footerBio-content">
        <a href="tel:9876543210">+91 9876543210</a>

        <a href="mailto:">info@xyz.com</a>
      </div>
      <div className="footerBio-socialContainer">
        <FaInstagram className="footerSocial-icon" />
        <FaFacebook className="footerSocial-icon" />
        <FaXTwitter className="footerSocial-icon" />
        <FaYoutube className="footerSocial-icon" />
      </div> */}
    </div>
  );
}
