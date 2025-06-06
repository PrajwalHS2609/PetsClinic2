import BoardingMain from "@/components/Boarding/BoardingMain";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";
import React from "react";

export default function Boarding() {
  return (
    <div>
      <ServicePageHeader title="Boarding" breadCrumb="Boarding" />
      <BoardingMain />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
    </div>
  );
}
