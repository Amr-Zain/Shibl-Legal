import Header from "@/components/Header";
import ServicesSection from "@/components/services/servicesSection";
import SERVICES from "@/assets/images/header/services.png";

function ServicesPage() {
  return (
    <>
      <Header page="SERVICES" image={SERVICES} />
      <ServicesSection isPage />
    </>
  );
}

export default ServicesPage;
