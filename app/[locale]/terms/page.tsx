import GeneralSection from "@/components/general/GeneralSection";
import Header from "@/components/Header";
import { getTerms } from "@/services/ApiHandler";

export async function generateMetadata() {
  const data = await getTerms();
  if (!data) return;

  return {
    title: data.banner.title,
    description: data.banner.description,
  };
}

async function ServicesPage() {
  const data = await getTerms();

  return (
    <>
      {data?.banner && data.banner.is_active&& (
        <Header
          title={data.banner.title}
          desc={data.banner.description}
          image={data.banner.image}
        />
      )}

      {data?.terms &&  data.banner.is_active && (
        <GeneralSection
          item={{
            heading: data.terms.title,
            title: data.terms.title,
            image: data.terms.image,
            desc: data.terms.description,
          }}
        />
      )}
    </>
  );
}

export default ServicesPage;
