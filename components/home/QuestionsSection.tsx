import AccordionSection from "@/components/questions/Accordion";
import QUESTIONS from "@/assets/images/header/questions.png";
import { ArrowLeft, StarIcon, StarIcon2 } from "@/components/Icons";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const HomeQuestions = async () => {
  const T = await getTranslations();
  const lang = T("lang");

  const questions = [1, 2, 3, 4].map((i) => ({
    id: String(i),
    question: T(`QUESTIONS.${i}.question`),
    answer: T(`QUESTIONS.${i}.answer`),
  }));

  return (
    <div className={`relative mx-auto my-14 w-[95%] py-10`}>
      <div className={`overlay rounded-[30px]`}></div>
      <Image
        src={QUESTIONS}
        alt={"backgroud"}
        fill={true}
        objectFit="cover"
        className={"z-[2] rounded-[30px]"}
      />
      <div data-aos="fade-down" className="relative z-20">
        <AccordionSection questions={questions}>
          <div
            className={`title-wrapper sec-px mb-12 !flex-row !justify-between md:!items-start`}
          >
            <h3 className="title mb-2 !text-white !text-lg md:!text-2xl">
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
                className={`grid size-[1.25rem] items-center justify-center rounded-full bg-primary/40 p-1 ${lang === "ltr" ? "rotate-180" : ""}`}
              >
                <ArrowLeft className="text-primary/90" />
              </span>
            </Link>
          </div>
        </AccordionSection>
      </div>
      <StarIcon className="absolute bottom-[30%] left-[30%] z-30" />
      <StarIcon2 className="absolute right-2 top-[-18px] z-30" />
    </div>
  );
};

export default HomeQuestions;
