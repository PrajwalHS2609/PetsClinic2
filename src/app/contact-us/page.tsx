import ContactUsAddress from "@/components/ContactUs/ContactUsAddress";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";
import ServicePageHeader from "@/components/ServicePageHeader/ServicePageHeader";

export default function ContactUs() {
  return (
    <div>
      <ServicePageHeader title="Contact Us" breadCrumb="Contact Us" />
      <ContactUsAddress />
      <ContactUsForm />
      <ContactUsMap />
    </div>
  );
}
