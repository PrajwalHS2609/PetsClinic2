import React from "react";
import "./Button.css";
import { IoPaw } from "react-icons/io5";
import Link from "next/link";
interface buttonProps {
  text: string;
  link: string;
}
const Button = ({ text, link }: buttonProps) => {
  return (
    <div className="button-container">
      <Link href={link}>
        <button>
          {text}{" "}
          <span>
            <IoPaw className="button-ico" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
