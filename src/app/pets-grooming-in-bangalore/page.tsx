import DogsGroomingMain from "@/components/DogsGrooming/DogsGroomingMain";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";

export default function Grooming() {
  return (
    <div>
      <ServicePageHeader title="Dog  Grooming" breadCrumb="Grooming" />
      <DogsGroomingMain />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
    </div>
  );
}
