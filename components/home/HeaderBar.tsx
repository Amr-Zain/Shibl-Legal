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
    <section className="scrollbar-hide gird absolute -bottom-14 z-20 mx-auto h-20 w-[95%] grid-cols-[repeat(3,minmax(250px,l))] overflow-x-auto rounded-3xl bg-white px-4 py-4 shadow-lg">
      <div
        data-aos="fade-down"
        className="flex items-center justify-center gap-4"
      >
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
            <p className="h-fit w-fit whitespace-nowrap text-base font-medium text-text-dark md:whitespace-normal md:text-lg lg:w-[12rem] xl:w-fit">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeaderBar;
