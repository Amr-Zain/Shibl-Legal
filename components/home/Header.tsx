import ImageSection from "@/components/general/ImageSection";
import HOME from "@/assets/images/header/home.jpg";
import Title from "@/components/general/Title";
import { Aword } from "@/components/Icons";
import { getTranslations } from "next-intl/server";
import AVTAR from "@/assets/icons/avater.svg";
import SCALER from "@/assets/icons/scaler.svg";
import HAMMER from "@/assets/icons/hammer.svg";
import Image from "next/image";
import Button from "../general/primaryButton";
async function HomeHeader() {
  const T = await getTranslations("HOME_HEADER");

  return (
    <ImageSection
      image={HOME}
      alt="Home Header"
      className="h-[40rem] px-2 pt-[10rem] sm:px-6 lg:px-8"
      Element={Bar}
    >
      <div className="title-wrapper !flex-row !items-center !justify-start gap-2">
        <span>
          <Aword />
        </span>
        <p className="desc">{T("bestPlaceLabel")}</p>
      </div>
      <Title
        title={T("heading")}
        desc={T("subheading")}
        className="!justify-start"
      />
      <div className="flex items-center gap-2">
        <Button text={T("contactButton")} url="/contact-us" />
        <p className="text-sub">{T("advicePrompt")}</p>
      </div>
    </ImageSection>
  );
}

export default HomeHeader;

const Bar = async () => {
  const T = await getTranslations("HOME_HEADER");

  return (
    <div className="scrollbar-hide absolute -bottom-14 z-20 mx-auto flex h-20 w-[95%] overflow-x-auto rounded-3xl bg-white px-4 py-4 shadow-lg">
      {[
        { icon: AVTAR, text: T("team") },
        { icon: SCALER, text: T("experience") },
        { icon: HAMMER, text: T("success") },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-shrink-0 items-center gap-2 px-4 sm:gap-4 md:px-6 lg:px-8"
        >
          <div className="flex-shrink-0">
            <Image
              src={item.icon}
              alt="icon"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, 40px"
            />
          </div>
          <p className="text-text-dark whitespace-nowrap text-base font-medium md:text-lg lg:whitespace-normal">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};
