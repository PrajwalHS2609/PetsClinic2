import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import cat from "@/Images/headerImg.png";
import bone from "@/Images/bone.png";
import "./SanityHeader.css"
interface headerProps {
  title: string;
}
const SanityHeader = ({ title }: headerProps) => {
  return (
    <div className="sanityHeader-container">
      <div className="sanityHeader-content">
        <Image src={bone} alt="bone" />
        <h2>{title}</h2>
        <div className="bread-container">
          <Link href="/">Home</Link>
          <IoIosArrowForward />
 <Link href="/services">Services</Link>        </div>
      </div>
      <Image src={cat} alt="cat" />
    </div>
  );
};

export default SanityHeader;
