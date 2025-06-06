import React from "react";
import ServiceNav from "../ServiceComponents/ServiceNav";
import ServiceTreatment from "../ServiceComponents/ServiceTreatment";
import "@/components/style.css";
import grooming from "@/Images/ServiceImg/dogGrooming.png";
import Image from "next/image";
const DogsGroomingMain = () => {
  return (
    <div className="servicesMain-container">
      <div className="servicesMain-content">
        <ServiceNav />
      </div>
      <div className="servicesMain-content">
        <div className="servicesMain-itemWrapper">
          <Image src={grooming} alt="grooming" />
          <h1>Pets Grooming in Bangalore</h1>
          <p>
            Finding the best pet grooming in Bangalore is essential for pet
            owners who want their furry companions to look and feel their best.
            At PetClinics.co.in, we understand the importance of maintaining
            your pet's hygiene and appearance with high-quality grooming
            services tailored to their specific needs. Whether you own a dog,
            cat, or small pet, pet grooming in Bangalore offers a range of
            services to keep your pet healthy and happy.
          </p>
        </div>
        <ServiceTreatment />
      </div>
    </div>
  );
};

export default DogsGroomingMain;
