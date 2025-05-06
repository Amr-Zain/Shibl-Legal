import { getTranslations } from "next-intl/server";
import SectionHeader from "../../SectionHeader";
import { ArrowLeft, Aword } from "../../Icons";
import OVERLAPPED1 from "@/assets/images/about/overlapped1.png";
import OVERLAPPED2 from "@/assets/images/about/overlapped2.png";
import OVERLAPPED3 from "@/assets/images/about/overlapped3.png";
import OverlappingImages from "./OverlappingImages";
import { Link } from "@/i18n/routing";

interface ContentSectionProps {
  isPage?: boolean;
}
const AboutUsContent = async ({ isPage }: ContentSectionProps) => {
  const T = await getTranslations();

  return (
    <div>
      <SectionHeader
        heading={T("ABOUT_SECTIONS.heading")}
        description={T("ABOUT_SECTIONS.desc")}
      />
      <div className="space-y-5 bg-right-bottom bg-no-repeat">
        <div className="mb-12 grid grid-cols-1 items-start md:gap-x-8 lg:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <FeatureListItem key={item} text={T(`ABOUT_SECTIONS.p${item}`)} />
          ))}
        </div>

        <div className="mb-12 flex items-center gap-2">
          <OverlappingImages
            images={[OVERLAPPED1, OVERLAPPED2, OVERLAPPED3]}
            size={40}
            overlap={20}
          />
          <p className="text-sub">{T("ABOUT_SECTIONS.servicesCollection")}</p>
        </div>

        {!isPage && (
          <Link
            href={"/about-us"}
            className={`base-btn animated flex w-fit max-w-[12rem] items-center`}
          >
            <span className="whitespace-nowrap text-sm md:text-lg">
              {T("ABOUT_SECTIONS.moreAbout")}
            </span>
            <span
              className={`grid h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full bg-white/40 p-1 ${T("lang") === "ltr" ? "rotate-180" : ""}`}
            >
              <ArrowLeft />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
export default AboutUsContent;

interface FeatureListItemProps {
  text: string;
}

const FeatureListItem = ({ text }: FeatureListItemProps) => (
  <div className="title-wrapper !mb-5 !flex-row !items-start !justify-start gap-1">
    <span aria-hidden="true">
      <Aword />
    </span>
    <p className="desc !text-list-color">{text}</p>
  </div>
);
