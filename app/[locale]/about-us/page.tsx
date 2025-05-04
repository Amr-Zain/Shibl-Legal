import AboutSection from "@/components/about/AboutUsSection";
import WhyUsSection from "@/components/about/whyUsSection";
import OurGoalsSection from "@/components/about/ourGoalsSection";
import ValuesSection from "@/components/about/valuesSection";
import OurVistionSection from "@/components/about/vistionSections";
export default async function AboutPage() {
  return (
    <>
      <AboutSection isAbout />
      <OurGoalsSection />
      <WhyUsSection />
      <ValuesSection />
      <OurVistionSection />
    </>
  );
}
