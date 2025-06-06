import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import TrainingMain from "@/components/Training/TrainingMain";
export default function Training() {
  return (
    <div>
      <ServicePageHeader title="Training" breadCrumb="Training" />
      <TrainingMain />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
    </div>
  );
}
