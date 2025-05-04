//import { getHomeData } from "@/services/ApiHandler";

import AboutSection from "@/components/about/AboutUsSection";
import WhyUsSection from "@/components/about/whyUsSection";
import ContactSection from "@/components/contact/contactSection";
import ServicesSection from "@/components/services/servicesSection";

export default async function HomePage() {
  //const data: HomeType = await getHomeData();

  return (
    <div className="mt-16 space-y-12">
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
