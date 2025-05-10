import WhyUsSection from "@/components/about/whyUsSection";
import OurGoalsSection from "@/components/about/ourGoalsSection";
import ValuesSection from "@/components/about/valuesSection";
import OurVistionSection from "@/components/about/vistionSections";
import Header from "@/components/Header";
import { getOverVeiw } from "@/services/ApiHandler";
import AboutSection from "@/components/about/AboutUsSection";


export async function generateMetadata() {
  const data = await getOverVeiw("about_banner");
  return {
    title: data.banner.title,
    description: data.banner.description,
  }
}
export default async function AboutPage() {
  const data = await getOverVeiw("about_banner");

  return (
    <>
      <Header
        title={data.banner.title}
        desc={data.banner.description}
        image={data.banner.image}
      />
      <AboutSection
        description={data.sections["about"]!.description}
        features={data.sections["about"]!.features}
        image={data.sections["about"]!.image}
      />
      <OurGoalsSection {...data.sections["goals"]!} />
      <WhyUsSection />
      <ValuesSection {...data.sections["core_values"]!} />
      <OurVistionSection
        description={data.sections["our_vision"]!.description}
        image={data.sections["our_vision"]!.image}
      />
    </>
  );
}
