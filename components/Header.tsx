
import ImageSection from "@/components/general/ImageSection";
import Title from "@/components/general/Title";
import { getTranslations } from "next-intl/server";
import { StaticImageData } from "next/image";

export default async function Header({ page, image  }: {page: string, image: StaticImageData}) {

  const T = await getTranslations(`${page.toUpperCase()}_HEADER`);
  return (
    <div className="space-y-12">
      <ImageSection
        image={image}
        alt="About"
        className="px-2 pt-[10rem] pb-[4rem] sm:px-6 lg:px-8"
      >
        <Title
          title={T("heading")}
          desc={T("subheading")}
        />
      </ImageSection>
    </div>
  );
}
