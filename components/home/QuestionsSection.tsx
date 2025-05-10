import AccordionSection from "@/components/questions/Accordion";
import { StarIcon, StarIcon2 } from "@/components/Icons";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const HomeQuestions = async ({
  questions,
  title,
  image
}: {
  questions: Question[];
  title?: string;
  image:string
}) => {
  const T = await getTranslations();
  return (
    <div className={`relative mx-auto my-14 w-[95%] py-10`}>
      <div className={`overlay rounded-[30px]`}></div>
      <Image
        src={image}
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
            <h3 className="title mb-2 !text-lg !text-white md:!text-2xl">
              {title}
            </h3>
            <Link
              href={"/questions"}
              className={`base-btn-white animated flex items-center !backdrop-blur-md`}
            >
              <span className="whitespace-nowrap text-sm md:text-lg">
                {T("NAV.showAll")}
              </span>
              <span
                className={`grid size-[1.25rem] items-center justify-center rounded-full bg-primary/40 p-1 hover:text-white ${T('lang') === "ltr" ? "rotate-180" : ""}`}
              >
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50043 3.25043H3.31043L5.03043 1.53043C5.32043 1.24043 5.32043 0.76043 5.03043 0.47043C4.74043 0.18043 4.26043 0.18043 3.97043 0.47043L0.97043 3.47043C0.68043 3.76043 0.68043 4.24043 0.97043 4.53043L3.97043 7.53043C4.12043 7.68043 4.31043 7.75043 4.50043 7.75043C4.69043 7.75043 4.88043 7.68043 5.03043 7.53043C5.32043 7.24043 5.32043 6.76043 5.03043 6.47043L3.31043 4.75043H8.50043C8.91043 4.75043 9.25043 4.41043 9.25043 4.00043C9.25043 3.59043 8.91043 3.25043 8.50043 3.25043Z"
                    fill="#C19877"
                  />
                </svg>
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
