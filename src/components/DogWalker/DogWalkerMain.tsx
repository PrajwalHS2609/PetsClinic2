import React from "react";
import ServiceNav from "../ServiceComponents/ServiceNav";
import Image from "next/image";
import ServiceTreatment from "../ServiceComponents/ServiceTreatment";
import "@/components/style.css";
import dogWalker from "@/Images/ServiceImg/DogWalker.png";
const DogWalkerMain = () => {
  return (
    <div className="servicesMain-container">
      <div className="servicesMain-content">
        <ServiceNav />
      </div>
      <div className="servicesMain-content">
        <div className="servicesMain-itemWrapper">
          <Image src={dogWalker} alt="dog Walker" />
          <h1>Dog Walkers in Bangalore</h1>
          <p>
            Finding the best dog walkers in Bangalore is essential for pet
            owners who want to ensure their furry friends receive regular
            exercise and care. At PetClinics.co.in, we understand the needs of
            pet parents looking for reliable and professional dog walking
            services. Dog walkers in Bangalore provide comprehensive pet care
            solutions, including regular walks, playtime, and companionship to
            keep dogs healthy and happy.
          </p>
        </div>
        <ServiceTreatment />
      </div>
    </div>
  );
};

export default DogWalkerMain;
