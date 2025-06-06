import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceCard from "@/components/ServicePage/ServiceCard";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";

export default function ServicePage() {
  return (
    <div>
      <ServicePageHeader title="Our Services" breadCrumb="Services" />
      <ServiceCard />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
    </div>
  );
}
