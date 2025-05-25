import GeneralSection from "@/components/general/GeneralSection";
import Header from "@/components/Header";
import { getPrivacy } from "@/services/ApiHandler";

export async function generateMetadata() {
  const data = await getPrivacy();
  if (!data.banner) return;

  return {
    title: data.banner.title,
    description: data.banner.description,
  };
}

async function ServicesPage() {
  const data = await getPrivacy();

  return (
    <>
      {data?.banner && data.banner.is_active && (
        <Header
          title={data.banner.title}
          desc={data.banner.description}
          image={data.banner.image}
        />
      )}

      {data?.privacy && data.privacy?.is_active && (
        <GeneralSection
          item={{
            heading: data.privacy.title,
            title: data.privacy.title,
            image: data.privacy.image,
            desc: data.privacy.description,
          }}
        />
      )}
    </>
  );
}

export default ServicesPage;
