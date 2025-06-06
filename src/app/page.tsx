import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeBlog from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";

export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      <HomeAbout />
      <HomeService />
      <HomeFaq />
      <HomeDoc />
      <HomeTestimonial />
      <HomeBlog />
    </div>
  );
}
