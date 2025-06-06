import "./Footer.css";
import FooterAddress from "./FooterAddress";
import FooterBio from "./FooterBio";
import FooterLink from "./FooterLinks";
import FooterService from "./FooterService";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <FooterBio />
        <FooterLink />
        <FooterService />
        <FooterAddress />
      </div>
      <div className="footer-wrapper">
        <div className="footer-copyright">
          <strong>
            © Copyright 2024. <span>All rights reserved</span>
          </strong>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="">
                {" "}
                <FaInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook className="social-icon" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FaYoutube className="social-icon" />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
