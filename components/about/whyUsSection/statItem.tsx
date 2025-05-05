import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

const StatItem = ({
  number,
  icon,
  text,
}: {
  number: string;
  icon: StaticImageData;
  text: string;
}) => {
  const T = useTranslations("WHY_US");

  return (
    <div className="mx-auto w-fit">
      <div dir="rtl" className="text-center text-[3rem] md:text-[4rem] font-bold text-primary">
        <span className="relative">
          +
          <span className="absolute -right-7 bottom-[-0.45rem] h-14 w-14">
            <Image
              src={icon}
              alt=""
              width={56}
              height={56}
              className="w-full"
            />
          </span>
        </span>
        {number}
      </div>
      <p className="text-sub">{T(text)}</p>
    </div>
  );
};
export default StatItem;
