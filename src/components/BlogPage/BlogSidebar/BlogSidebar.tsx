import React from "react";
import "@/components/BlogPage/Blog.css";
import BlogPost from "./BlogPost";
import BlogCategories from "./BlogCategories";
// import NewsPost from "./NewsPost";
const BlogSidebar = () => {
  return (
    <div className="blogSideBar-container">
      <BlogPost />
      {/* <NewsPost /> */}
      <BlogCategories />
    </div>
  );
};

export default BlogSidebar;
