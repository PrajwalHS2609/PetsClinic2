import CareMain from "@/components/Care/CareMain";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
export default function Care() {
  return (
    <div>
      <ServicePageHeader title="Care" breadCrumb="Care" />
      <CareMain />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
    </div>
  );
}
