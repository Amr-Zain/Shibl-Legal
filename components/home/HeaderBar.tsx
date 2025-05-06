import Image from "next/image";
import AVTAR from "@/assets/icons/avater.svg";
import SCALER from "@/assets/icons/scaler.svg";
import HAMMER from "@/assets/icons/hammer.svg";
import { getTranslations } from "next-intl/server";

interface BarItem {
  icon: string;
  text: string;
}

const HeaderBar = async () => {
  const T = await getTranslations("HOME_HEADER");

  const items: BarItem[] = [
    { icon: AVTAR, text: T("team") },
    { icon: SCALER, text: T("experience") },
    { icon: HAMMER, text: T("success") },
  ];

  return (
    <div className="scrollbar-hide  gird absolute -bottom-10 z-20 mx-auto h-20 w-[95%] flex  overflow-x-auto rounded-3xl bg-white px-4 py-4 shadow-lg">
      <div className="flex items-center justify-center gap-4 w-fit mx-[4rem]">
        {items.map(({ icon, text }, index) => (
          <div
            key={index}
            className={`flex flex-shrink-0 items-center gap-2 px-4 sm:gap-4 md:px-6 lg:px-8 ${
              index > 0 && index < 3 ? "border-border-color border-r" : ""
            }`}
          >
            <div className="flex-shrink-0">
              <Image
                src={icon}
                alt=""
                role="presentation"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="h-fit w-fit whitespace-nowrap text-base font-medium text-text-dark md:whitespace-normal md:text-lg lg:w-[12rem] lg:pb-2 xl:w-fit xl:pb-0">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderBar;
