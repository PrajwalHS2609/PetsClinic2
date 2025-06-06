import React from "react";
import ServiceTreatment from "../ServiceComponents/ServiceTreatment";
import "@/components/style.css";
import food from "@/Images/ServiceImg/HealthFood.png";
import Image from "next/image";
import ServiceNav from "../ServiceComponents/ServiceNav";
const HealthFoodMain = () => {
  return (
    <div className="servicesMain-container">
      <div className="servicesMain-content">
        <ServiceNav />
      </div>
      <div className="servicesMain-content">
        <div className="servicesMain-itemWrapper">
          <Image src={food} alt="food" />
          <h1>Pets Food in Bangalore</h1>
          <p>
            Finding the best pets food in Bangalore is crucial for pet owners
            who want to ensure their furry companions receive the right
            nutrition for a healthy and happy life. At PetClinics.co.in, we
            understand the importance of providing high-quality and nutritious
            food that meets the specific dietary needs of pets. Pets food in
            Bangalore is available in a variety of options, including dry
            kibble, wet food, raw diets, and specialized nutrition plans
            tailored to different breeds and life stages.
          </p>
        </div>
        <ServiceTreatment />
      </div>
    </div>
  );
};

export default HealthFoodMain;
