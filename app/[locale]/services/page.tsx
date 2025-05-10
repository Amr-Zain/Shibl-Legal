import Header from "@/components/Header";
import ServicesSection from "@/components/services/servicesSection";
import { getServices } from "@/services/ApiHandler";




export async function generateMetadata() {
  const data = await getServices();
  return {
    title: data.banner.title,
    description: data.banner.description,
  }
}


async function ServicesPage() {

  const data = await getServices();

  return (
    <>
      <Header title={data.banner.title} desc={data.banner.description} image={data.banner.image} />
      <ServicesSection features={data.our_services} />
    </>
  );
}

export default ServicesPage;
