import React from "react";
import "./HomeFaq.css";
import HomeFaqHead from "./HomeFaqHead";
import HomeFaqAcc from "./HomeFaqAcc";
const HomeFaq = () => {
  return (
    <div className="homeFaq-container">
      <div className="homeFaq-wrapper">
        <HomeFaqHead />
      </div>
      <div className="homeFaq-wrapper">
        <HomeFaqAcc />
      </div>{" "}
    </div>
  );
};

export default HomeFaq;
