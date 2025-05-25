import Header from "@/components/Header";
import ServicesSection from "@/components/services/servicesSection";
import { getServices } from "@/services/ApiHandler";

export async function generateMetadata() {
  const data = await getServices();
  if(!data) return;

  return {
    title: data.banner.title,
    description: data.banner.description,
  };
}

async function ServicesPage() {
  const data = await getServices();
  console.log("services",data);

  return (
    <>
      {data?.banner && (
        <Header
          title={data.banner.title}
          desc={data.banner.description}
          image={data.banner.image}
        />
      )}
      {data?.our_services && <ServicesSection features={data.our_services} />}
    </>
  );
}

export default ServicesPage;
