import StatItem from "./statItem";
import Image from "next/image";
import { ArrowLeft, WhyUsArrow } from "@/components/Icons";
import { Link } from "@/i18n/routing";
import { getWhyUs } from "@/services/ApiHandler";
import { getTranslations } from "next-intl/server";
async function WhyUsSection() {
  const T = await getTranslations();

  const data = await getWhyUs();
  return (
    <>
      <div className={`sec-px relative mx-auto my-14 w-[95%] py-10`}>
        <div className={`overlay rounded-[30px]`}></div>
        <Image
          src={data.image}
          alt={"backgroud"}
          fill={true}
          objectFit="cover"
          className={"z-[2] rounded-[30px]"}
        />
        <div data-aos="fade-down" className="relative z-20">
          <div className={`title-wrapper sec-px mb-12`}>
            <h3 className="title mb-2 !text-lg !text-white md:!text-3xl">
              {data.title}
            </h3>
            <p className="desc">{data.description}</p>
          </div>
          <div className="mb-8 grid grid-cols-2 items-start justify-center gap-4 px-4 md:grid-cols-4 md:items-center md:px-8 lg:px-14">
            {data.features?.map(({ id, icon, value, key }) => (
              <StatItem key={id} number={value} icon={icon} text={key!} />
            ))}
          </div>
          <Link
            href="/contact-us"
            className={`base-btn animated mx-auto mt-4 flex w-[16rem] max-w-[90%] items-center`}
          >
            <span className="whitespace-nowrap text-sm md:text-lg">
              {T("WHY_US.button")}
            </span>
            <span
              className={`grid size-[1.25rem] items-center justify-center rounded-full bg-white/40 p-1 ${T("lang") === "ltr" ? "rotate-180" : ""}`}
            >
              <ArrowLeft />
            </span>
          </Link>
        </div>
        <WhyUsArrow />
      </div>
    </>
  );
}

export default WhyUsSection;
