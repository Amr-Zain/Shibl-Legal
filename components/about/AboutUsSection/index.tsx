import IMAGE from "@/assets/images/about/section1.png";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import AboutUsContent from "./AboutUsContent";

async function AboutSection({ isPage }: { isPage?: boolean }) {
  const T = await getTranslations("ABOUT_SECTIONS");

  return (
    <section
      data-aos="fade-down"
      className={`sec-px grid grid-cols-1 items-center gap-4 md:grid-cols-[1.5fr_1fr] ${isPage&&'my-12'}`}
    >
      <AboutUsContent isPage={isPage} />
      <div className="relative h-full w-full">
        <Image
          width={560}
          height={700}
          src={IMAGE}
          alt={T("heading")}
          className="mx-auto w-[560px] md:min-w-[400px]"
          data-wow-duration="1.3s"
          data-wow-delay="0s"
        />
      </div>
    </section>
  );
}

export default AboutSection;
