import Image from "next/image";

const StatItem = ({
  number,
  icon,
  text,
}: {
  number: string;
  icon: string;
  text: string;
}) => {

  return (
    <div className="mx-auto w-fit">
      <div dir="rtl" className="text-center text-5xl md:text-6xl font-bold text-primary">
        <span className="relative">
          +
          <span className="absolute right-[-1.5rem] bottom-[-.35rem] md:right-[-1.6rem] md:bottom-[-0.25rem] size-9 md:size-10  p-2 bg-icon-dark rounded-full flex justify-center items-center">
            <Image
              src={icon}
              alt="icon"
              width={25}
              height={25}
              className="max-h-full"
            />
          </span>
        </span>
        {number}
      </div>
      <p className="text-sub mt-6">{text}</p>
    </div>
  );
};
export default StatItem;
