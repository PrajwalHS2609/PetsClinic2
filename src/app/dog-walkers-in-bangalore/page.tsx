import DogWalkerMain from "@/components/DogWalker/DogWalkerMain";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";

export default function DogWalker() {
  return (
    <div>
      <ServicePageHeader title="Dog Walker" breadCrumb="Dog Walker" />
      <DogWalkerMain />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
    </div>
  );
}
