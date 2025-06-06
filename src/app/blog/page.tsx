import BlogMain from "@/components/BlogPage/BlogMain";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";

export default function BlogPage() {
  return (
    <div>
      <ServicePageHeader title="Our Blog" breadCrumb="Blog" />
      <BlogMain />
    </div>
  );
}
