import React from "react";
import "./HomeFaq.css";
import Image from "next/image";
import faqImg from "@/Images/faqImg.png"
const HomeFaqHead = () => {
  return (
    <div className="homeFaqHead-container">
      <div className="homeFaqHead-content">
        <h6>Feel free to ask details?</h6>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="homeFaqHead-content">
        <Image src={faqImg} alt="faq Img"/>
      </div>
    </div>
  );
};

export default HomeFaqHead;
