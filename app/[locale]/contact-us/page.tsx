import ContactSection from "@/components/contact/contactSection";
import Header from "@/components/Header";
import { getOverVeiw } from "@/services/ApiHandler";


export async function generateMetadata() {
  const data = await getOverVeiw("contact_banner");
  return {
    title: data.banner.title,
    description: data.banner.description,
  }
}

async function ContactPage() {
  const data = await getOverVeiw('contact_banner');

  return (
    <>
      <Header title={data.banner.title} desc={data.banner.description} image={data.banner.image} />
      <ContactSection image={data.sections['contact_info']!.image} />
    </>
  );
}

export default ContactPage;
