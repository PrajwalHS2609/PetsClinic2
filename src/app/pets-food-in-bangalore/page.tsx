import HealthFoodMain from "@/components/HealthFood/HealthFoodMain";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";

export default function HealthFood() {
  return (
    <div>
      <ServicePageHeader title="Health Food" breadCrumb="Health Food" />
      <HealthFoodMain />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
    </div>
  );
}
