import Image from "next/image";
import React from "react";
import ServiceTreatment from "../ServiceComponents/ServiceTreatment";
import ServiceNav from "../ServiceComponents/ServiceNav";
import "@/components/style.css";
import care from "@/Images/ServiceImg/veterinaryCare.png";
const CareMain = () => {
  return (
    <div className="servicesMain-container">
      <div className="servicesMain-content">
        <ServiceNav />
      </div>
      <div className="servicesMain-content">
        <div className="servicesMain-itemWrapper">
          <Image src={care} alt="care" />
          <h1>Pets Clinic in Bangalore</h1>
          <p>
            Finding the best pets clinics in Bangalore is essential for pet
            owners who want to ensure their furry friends receive the highest
            standard of healthcare. At PetClinics.co.in, we understand the needs
            of pet parents looking for reliable and professional veterinary
            services. Pets clinics in Bangalore provide comprehensive healthcare
            solutions, including routine check-ups, vaccinations, emergency
            care, and specialized treatments to keep pets healthy and happy.
          </p>
        </div>
        <ServiceTreatment />
      </div>
    </div>
  );
};

export default CareMain;
