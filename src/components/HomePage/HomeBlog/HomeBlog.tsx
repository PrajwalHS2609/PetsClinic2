import React from "react";
import "./HomeBlog.css";
import HomeBlogHead from "./HomeBlogHead";
import HomeBlogMain from "./HomeBlogMain";
const HomeBlog = () => {
  return (
    <div className="homeBlog-container">
      <HomeBlogHead />
      <HomeBlogMain />
    </div>
  );
};

export default HomeBlog;
