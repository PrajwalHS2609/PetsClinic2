import React from "react";
import ServiceTreatment from "../ServiceComponents/ServiceTreatment";
import "@/components/style.css";
import training from "@/Images/ServiceImg/training.png";
import Image from "next/image";
import ServiceNav from "../ServiceComponents/ServiceNav";
const TrainingMain = () => {
  return (
    <div className="servicesMain-container">
      <div className="servicesMain-content">
        <ServiceNav />
      </div>
      <div className="servicesMain-content">
        <div className="servicesMain-itemWrapper">
          <Image src={training} alt="training" />
          <h1>Pets Training in Bangalore</h1>
          <p>
            Finding the best pets training in Bangalore is a top priority for
            pet owners who want to ensure their furry friends are well-behaved
            and properly trained. At PetClinics.co.in, we understand the
            concerns and needs of pet parents looking for a reliable and
            trustworthy place for their pets to receive professional training.
            Pets training in Bangalore offers a structured and effective
            approach to teaching obedience, socialization, and essential skills
            that keep pets happy and disciplined.
          </p>
        </div>
        <ServiceTreatment />
      </div>
    </div>
  );
};

export default TrainingMain;
