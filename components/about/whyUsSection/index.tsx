import IMAGE from "@/assets/images/about/section2.png";
import ICON1 from "@/assets/images/whyUs/scaler.png";
import ICON2 from "@/assets/images/whyUs/like.png";
import ICON3 from "@/assets/images/whyUs/avtar.png";
import ICON4 from "@/assets/images/whyUs/aword.png";
import { useTranslations } from "next-intl";
import StatItem from "./statItem";
import Image from "next/image";
import { ArrowLeft, WhyUsArrow } from "@/components/Icons";
import { Link } from "@/i18n/routing";
function WhyUsSection() {
  const T = useTranslations();

  const stats = [
    { number: "10", icon: ICON3, text: "team" },
    { number: "6", icon: ICON1, text: "experience" },
    { number: "90", icon: ICON2, text: "customers" },
    { number: "200", icon: ICON4, text: "success" },
  ];

  return (
    <>
      <div className={`sec-px relative mx-auto my-14 w-[95%] py-10`}>
        <div className={`overlay rounded-[30px]`}></div>
        <Image
          src={IMAGE}
          alt={"backgroud"}
          fill={true}
          objectFit="cover"
          className={"z-[2] rounded-[30px]"}
        />
        <div data-aos="fade-down" className="relative z-20">
          <div className={`title-wrapper sec-px mb-12`}>
            <h3 className="title mb-2 !text-lg !text-white md:!text-3xl">
              {T("WHY_US.heading")}
            </h3>
            <p className="desc">{T("WHY_US.subheading")}</p>
          </div>
          <div className="mb-8 grid grid-cols-2 items-start justify-center gap-4 px-4 md:grid-cols-4 md:items-center md:px-8 lg:px-14">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                icon={stat.icon}
                text={stat.text}
              />
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
