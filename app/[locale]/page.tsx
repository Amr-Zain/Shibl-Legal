//import { getHomeData } from "@/services/ApiHandler";

import AboutSection from "@/components/about/AboutUsSection";
import WhyUsSection from "@/components/about/whyUsSection";
import ContactSection from "@/components/contact/contactSection";
import ServicesSection from "@/components/services/servicesSection";
import Header from "@/components/home/Header";
import HomeQuestions from "@/components/home/QuestionsSection";

export default async function HomePage() {
  //const data: HomeType = await getHomeData();
 
  return (
    <>
      <Header />
      <div className="mt-16 space-y-12">
        <AboutSection />
        <WhyUsSection />
        <ServicesSection />
        <HomeQuestions />
        <ContactSection />
      </div>
    </>
  );
}