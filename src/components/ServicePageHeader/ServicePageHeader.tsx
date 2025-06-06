import React from "react";
import "./ServicePageHeader.css";
import Image from "next/image";
import cat from "@/Images/headerImg.png";
import bone from "@/Images/bone.png";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
interface headerProps {
  title: string;
  breadCrumb: string;
}
const ServicePageHeader = ({ title, breadCrumb }: headerProps) => {
  return (
    <div className="header-container">
      <div className="header-content">
        <Image src={bone} alt="bone" />
        <h2>{title}</h2>
        <div className="bread-container">
          <Link href="/">Home</Link>
          <IoIosArrowForward />
          {breadCrumb}
        </div>
      </div>
      <Image src={cat} alt="cat" />
    </div>
  );
};

export default ServicePageHeader;
