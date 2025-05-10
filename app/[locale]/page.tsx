//import { getHomeData } from "@/services/ApiHandler";

import AboutSection from "@/components/about/AboutUsSection";
import WhyUsSection from "@/components/about/whyUsSection";
import ContactSection from "@/components/contact/contactSection";
import ServicesSection from "@/components/services/servicesSection";
import Header from "@/components/home/Header";
import HomeQuestions from "@/components/home/QuestionsSection";
import { getOverVeiw } from "@/services/ApiHandler";

export default async function HomePage() {
  const data = await getOverVeiw("main_banner");
  return (
    <>
      <Header
        title={data.banner?.title}
        desc={data.banner.description}
        image={data.banner.image}
        features={data.banner.features}
      />

      <div className="mt-16 space-y-12">
        <AboutSection {...data.sections["about"]!} />

        <WhyUsSection />

        <ServicesSection {...data.sections["our_services"]!} />

        <HomeQuestions
          questions={data.faq}
          title={data.sections["qa_banner"]!.title}
          image={data.sections["qa_banner"]!.image}
        />

        <ContactSection
          title={data.sections["contact_info"]?.title}
          description={data.sections["contact_info"]?.description}
          image={data.sections["contact_info"]!.image}
        />
      </div>
    </>
  );
}
