import Image from "next/image";

const HeroBar = async ({ features }: { features: Feature[] }) => {
  return (
    <div className="scrollbar-hide gird dark:bg-sec-dark absolute -bottom-12 z-20 mx-auto flex max-h-24 w-[95%] overflow-x-auto rounded-3xl bg-white p-4 shadow-lg">
      <div className="mx-auto flex w-fit items-center justify-center gap-4">
        {features.map(({ icon, id, value }, index) => (
          <div
            key={id}
            className={`flex flex-shrink-0 items-center gap-2 px-4 sm:gap-4 md:px-6 lg:px-8 ${
              index > 0 && index < 3 ? "border-s dark:border-gray-500" : ""
            }`}
          >
            <div className="flex-shrink-0 size-14 p-3 bg-backgroud-sec dark:bg-icon-dark rounded-full">
              <Image
                src={icon}
                alt="icon"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="h-fit w-fit whitespace-nowrap text-base font-medium text-text-dark dark:text-white">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBar;
