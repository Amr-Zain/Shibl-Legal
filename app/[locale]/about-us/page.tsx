import AboutSection from "@/components/about/AboutUsSection";
import WhyUsSection from "@/components/about/whyUsSection";
import OurGoalsSection from "@/components/about/ourGoalsSection";
import ValuesSection from "@/components/about/valuesSection";
import OurVistionSection from "@/components/about/vistionSections";
import Header from "@/components/Header";
import AOUBT from "@/assets/images/header/about.png";

export default async function AboutPage() {
  return (
    <>
      <Header page="ABOUT" image={AOUBT} />
      <AboutSection isPage />
      <OurGoalsSection />
      <WhyUsSection />
      <ValuesSection />
      <OurVistionSection />
    </>
  );
}
