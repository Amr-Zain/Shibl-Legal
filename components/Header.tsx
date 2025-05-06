import Title from "@/components/general/Title";
import { getTranslations } from "next-intl/server";
import Image, { StaticImageData } from "next/image";

export default async function Header({
  page,
  image,
}: {
  page: string;
  image: StaticImageData;
}) {
  const T = await getTranslations(`${page.toUpperCase()}_HEADER`);
  return (
      <div className={`relative px-2 pb-[4rem] pt-[10rem] sm:px-6 lg:px-8`}>
        <span className={`overlay`}></span>
        <Image
          src={image}
          alt={"header image"}
          fill={true}
          objectFit="cover"
          className={"z-[2]"}
        />
        <div data-aos="fade-down" className="relative z-20">
          <Title title={T("heading")} desc={T("subheading")} />
        </div>
      </div>
  );
}
