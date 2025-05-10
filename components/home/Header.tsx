import { getTranslations } from "next-intl/server";
import Title from "@/components/general/Title";
import { ArrowLeft, Aword } from "@/components/Icons";
import HeaderBar from "./HeaderBar";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default async function HomeHeader({
  image,
  title,
  desc,
  features
}: {
  desc: string;
  title: string;
  image: string;
  features: Feature[]
}) {
  const T = await getTranslations();

  return (
    <div className={`sec-px relative h-[40rem] pt-[10rem]`}>
      <div className={`overlay`}></div>
      <Image
        src={image}
        alt={"backgroud"}
        fill={true}
        objectFit="cover"
        className={"z-[2]"}
      />
      <div data-aos="fade-down" className="relative z-20">
        <div className="title-wrapper !flex-row !items-center !justify-start gap-2">
          <Aword aria-label={T("HOME_HEADER.bestPlaceLabel")} />
          <p className="desc">{T("HOME_HEADER.bestPlaceLabel")}</p>
        </div>

        <Title
          title={title}
          desc={desc}
          className="!justify-start"
        />

        <div className="">
          <Link
            href="/contact-us"
            className={`base-btn animated flex items-centerflex items-center gap-2 w-fit mb-2`}
          >
            <span className="whitespace-nowrap text-sm md:text-lg">{T("HOME_HEADER.contactButton")}</span>
            <span
              className={`grid size-[1.25rem] items-center justify-center rounded-full bg-white/40 p-1 ${T("lang") === "ltr" ? "rotate-180" : ""}`}
            >
              <ArrowLeft />
            </span>
          </Link>

          <p className="text-sub">{T("HOME_HEADER.advicePrompt")}</p>
        </div>
      </div>
      <HeaderBar features={features} />
    </div>
  );
}
