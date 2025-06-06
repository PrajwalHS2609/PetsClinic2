import React from "react";
import ServiceTreatment from "../ServiceComponents/ServiceTreatment";
import "@/components/style.css";
import boarding from "@/Images/ServiceImg/boarding.png";
import Image from "next/image";
import ServiceNav from "../ServiceComponents/ServiceNav";
const BoardingMain = () => {
  return (
    <div className="servicesMain-container">
      <div className="servicesMain-content">
        <ServiceNav />
      </div>
      <div className="servicesMain-content">
        <div className="servicesMain-itemWrapper">
          <Image src={boarding} alt="boarding" />
          <h1>Pets Boarding in Bangalore</h1>
          <p>
            Finding the best pet boarding in Bangalore is a top priority for pet
            owners who want to ensure their furry friends are well cared for
            while they are away. At PetClinics.co.in, we understand the concerns
            and needs of pet parents looking for a reliable and trustworthy
            place for their pets. Pet boarding in Bangalore offers a safe and
            comfortable environment where pets receive personalized care, proper
            nutrition, and ample playtime to keep them happy and healthy.
          </p>
        </div>
        <ServiceTreatment />
      </div>
    </div>
  );
};

export default BoardingMain;
