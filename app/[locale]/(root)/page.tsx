//import { getHomeData } from "@/services/ApiHandler";

import AboutSection from "@/components/about/AboutUsSections";
import WhyUsSection from "@/components/about/whyUsSection";
import ContactSection from "@/components/contact/contactSection";
import ServicesSection from "@/components/services/servicesSection";



export default async function HomePage() {
  //const data: HomeType = await getHomeData();

  return (
    <div className="space-y-12 mt-16">
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
