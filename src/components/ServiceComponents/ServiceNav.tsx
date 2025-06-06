import Link from "next/link";
import React from "react";
import { IoPaw } from "react-icons/io5";

const ServiceNav = () => {
  return (
    <div className="serviceNav-container">
      <h3>Our Services</h3>
      <ul>
        <li>
          <Link href="/pets-boarding-in-bangalore">
            <IoPaw className="pawServiceIco"/>
            Boarding
          </Link>
        </li>
        <li>
          <Link href="pets-training-in-bangalore">
            <IoPaw className="pawServiceIco"/>
            Training
          </Link>
        </li>
        <li>
          <Link href="/dog-walkers-in-bangalore">
            <IoPaw className="pawServiceIco"/>
            Dog Walker
          </Link>
        </li>
        <li>
          <Link href="/pets-food-in-bangalore">
            <IoPaw className="pawServiceIco"/>
            Health Food
          </Link>
        </li>
        <li>
          <Link href="/pets-grooming-in-bangalore">
            <IoPaw className="pawServiceIco"/>
            Grooming
          </Link>
        </li>
        <li>
          <Link href="/pets-clinic-in-bangalore">
            <IoPaw className="pawServiceIco"/>
            Care
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServiceNav;
