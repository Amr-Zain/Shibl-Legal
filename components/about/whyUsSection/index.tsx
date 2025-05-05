import ImageSection from "@/components/general/ImageSection";
import IMAGE from "@/assets/images/about/section2.png";
import ICON1 from "@/assets/images/whyUs/scaler.png";
import ICON2 from "@/assets/images/whyUs/like.png";
import ICON3 from "@/assets/images/whyUs/avtar.png";
import ICON4 from "@/assets/images/whyUs/aword.png";
import Title from "@/components/general/Title";
import Button from "@/components/general/primaryButton";
import { useTranslations } from "next-intl";
import StatItem from "./statItem";
import { JSX } from "react";
function WhyUsSection() {
  const T = useTranslations("WHY_US");

  const stats = [
    { number: "10", icon: ICON3, text: "team" },
    { number: "6", icon: ICON1, text: "experience" },
    { number: "90", icon: ICON2, text: "customers" },
    { number: "200", icon: ICON4, text: "success" },
  ];

  return (
    <ImageSection
      image={IMAGE}
      alt="why us image"
      className="sec-px mx-auto my-14 w-[95%] py-10"
      overlayClass="rounded-[30px]"
      Element={Arrow as unknown as () => Promise<JSX.Element>}
    >
      <Title title={T("heading")} desc={T("subheading")} />

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

      <Button
        text={T("button")}
        url="/contact-us"
        className="mx-auto mt-4 w-[16rem] max-w-[90%]"
      />
    </ImageSection>
  );
}
const Arrow = () => (
  <span className="absolute right-2 top-6 z-20">
    <svg
      width="36"
      height="41"
      viewBox="0 0 36 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_311_19175)">
        <path
          d="M33.6372 0.789056C28.702 12.2995 21.2453 22.7523 11.9429 31.2467C9.31918 33.6417 6.54208 35.852 3.68548 37.9672C3.34473 38.219 3.41856 38.5827 3.79339 38.717C4.23636 38.8793 4.91217 38.7338 5.287 38.4764C15.8672 31.146 24.7437 21.2023 31.1384 10.1507C32.9444 7.0339 34.5516 3.80516 35.9657 0.498077C36.1758 0.0112475 35.2047 -0.0223269 34.9604 0.00565178C34.455 0.0672049 33.8473 0.291035 33.6372 0.78346V0.789056Z"
          fill="#F3EAE4"
        />
        <path
          d="M2.93622 31.9852C1.87422 34.6487 0.897413 37.3515 0.0114693 40.0766C-0.045322 40.2613 0.102335 40.418 0.249993 40.4963C1.6073 41.1734 3.13499 41.0727 4.58317 40.7705C6.23012 40.4235 7.84299 39.8584 9.45018 39.3827C12.8406 38.3755 16.2879 37.469 19.6329 36.3107C19.9452 36.2044 20.445 35.8686 20.2689 35.4937C20.0929 35.1188 19.3319 35.2307 19.0366 35.3034C16.0209 36.0533 13.0564 37.0381 10.0749 37.9222C8.62671 38.3531 7.18421 38.784 5.73603 39.2093C4.54341 39.5618 3.30536 39.9479 2.12411 39.3659L2.36263 39.7856C3.23721 37.0605 4.20267 34.3634 5.25899 31.6942C5.45208 31.2018 4.50366 31.1682 4.2481 31.2018C3.75402 31.2633 3.11795 31.4871 2.91918 31.9852H2.93622Z"
          fill="#F3EAE4"
        />
      </g>
      <defs>
        <clipPath id="clip0_311_19175">
          <rect width="36" height="41" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </span>
);
export default WhyUsSection;
