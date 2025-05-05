//import { getHomeData } from "@/services/ApiHandler";

import AboutSection from "@/components/about/AboutUsSection";
import WhyUsSection from "@/components/about/whyUsSection";
import ContactSection from "@/components/contact/contactSection";
import ImageSection from "@/components/general/ImageSection";
import AccordionSection from "@/components/questions/Accordion";
import ServicesSection from "@/components/services/servicesSection";
import QUESTIONS from "@/assets/images/header/questions.png";
import { getTranslations } from "next-intl/server";
import { JSX } from "react";
import { ArrowLeft } from "@/components/Icons";
import { Link } from "@/i18n/routing";

export default async function HomePage() {
  //const data: HomeType = await getHomeData();
  const T = await getTranslations();
  const lang = T("lang");

  const questions = [1, 2, 3, 4].map((i) => ({
    id: String(i),
    question: T(`QUESTIONS.${i}.question`),
    answer: T(`QUESTIONS.${i}.answer`),
  }));
  return (
    <div className="mt-16 space-y-12">
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <ImageSection
        image={QUESTIONS}
        alt="question image"
        className="mx-auto my-14 w-[95%] py-10"
        overlayClass="rounded-[30px]"
        Element={Icons as unknown as () => Promise<JSX.Element>}
      >
        <AccordionSection questions={questions}>
          <div
            className={`title-wrapper title-wrapper sec-px mb-12 !flex-row !justify-between md:!items-start`}
          >
            <h3 className="title mb-2 !text-white lg:!text-3xl">
              {T("NAV.questions")}
            </h3>
            <Link
              href={"/questions"}
              className={`base-btn-white animated flex items-center !backdrop-blur-md`}
            >
              <span className="whitespace-nowrap text-sm md:text-lg">
                {T("NAV.showAll")}
              </span>
              <span
                className={`grid h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full bg-primary/40 p-1 ${lang === "ltr" ? "rotate-180" : ""}`}
              >
                <ArrowLeft />
              </span>
            </Link>
          </div>
        </AccordionSection>
      </ImageSection>
      <ContactSection />
    </div>
  );
}
const Icons = () => (
  <>
    <span className="absolute bottom-[30%] left-[30%] z-30">
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3118 17.1703C25.0045 17.1676 32 17.0535 32 16.9131C32 16.7749 25.2193 16.6621 16.7142 16.6561C20.9086 12.452 24.1653 9.08263 24.0966 9.01388C24.0268 8.94406 20.5526 12.3043 16.2572 16.5931C16.2544 7.90425 16.1403 0.913086 16 0.913086C15.8596 0.913086 15.7455 7.90875 15.7428 16.6015C11.4435 12.3086 7.96488 8.94402 7.89501 9.01388C7.82626 9.08263 11.0831 12.452 15.2774 16.6561C6.77623 16.6622 0 16.7749 0 16.9131C0 17.0534 6.99104 17.1675 15.6798 17.1703C11.2933 21.56 7.82408 25.1445 7.89501 25.2155C7.96488 25.2853 11.4436 21.9206 15.743 17.6277C15.749 26.1326 15.8618 32.9131 16 32.9131C16.1382 32.9131 16.2509 26.1371 16.257 17.636C20.5525 21.925 24.0268 25.2853 24.0966 25.2155C24.1675 25.1445 20.6984 21.56 16.3118 17.1703Z"
          fill="#C19877"
        />
      </svg>
    </span>
    <span className="absolute right-2 top-[-18px] z-30">
      <svg
        width="40"
        height="40"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 16.9131C25.7233 17.4837 22.117 18.0087 19.903 19.7433C17.301 21.7747 16.6847 25.4951 16 32.9359C15.2924 25.2212 14.6534 21.5236 11.8003 19.5379C9.58631 17.9858 6.00285 17.4837 0 16.9359C6.25392 16.3653 9.88302 15.8403 12.0742 14.1285C14.699 12.0743 15.3153 8.37671 16 0.913086C16.6391 7.78327 17.2097 11.458 19.3324 13.5807C21.4551 15.7034 25.1526 16.2968 32 16.9131Z"
          fill="#F3EAE4"
        />
      </svg>
    </span>
  </>
);
