import AboutUs from "@/components/AboutUs/AboutUs";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";

export default function AboutUsPage() {
  return (
    <div>
      <ServicePageHeader title="About Us" breadCrumb="About Us" />
      <AboutUs/>
      <HomeDoc />
      <HomeFaq />
      <HomeTestimonial />
    </div>
  );
}
