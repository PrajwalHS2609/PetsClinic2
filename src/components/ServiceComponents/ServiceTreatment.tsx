import Image from "next/image";
import React from "react";
import grooming from "@/Images/ServiceTreatment/grooming.png";
import drips from "@/Images/ServiceTreatment/treatment.png";
import critical from "@/Images/ServiceTreatment/syringe.png";
import treatment from "@/Images/ServiceTreatment/pet-shampoo.png";
import "./ServiceComponents.css"

const ServiceTreatment = () => {
  return (
    <div className="serviceTreatment-container">
      <div className="serviceTreatment-content">
        <Image src={treatment} alt="treatment" />
        <h3>Routine Veterinary</h3>
        <p>Especially important for breeds with fast-growing.</p>
      </div>
      <div className="serviceTreatment-content">
        <Image src={grooming} alt="grooming" />
        <h3>Grooming Services</h3>
        <p>For dehydration, poisoning, or other emergencies.</p>
      </div>
      <div className="serviceTreatment-content">
        <Image src={drips} alt="drips" />
        <h3>Critical Care</h3>
        <p>Helps with stress relief and muscle relaxation.</p>
      </div>
      <div className="serviceTreatment-content">
        <Image src={critical} alt="critical" />
        <h3>Holistic Treatments</h3>
        <p>Essential for preventing diseases like rabies.</p>
      </div>
    </div>
  );
};

export default ServiceTreatment;
