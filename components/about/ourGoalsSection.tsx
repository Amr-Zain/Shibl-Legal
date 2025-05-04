import Image from "next/image";
import HAMMER from "@/assets/images/hammer.png";
import ICON from '@/assets/icons/hammer.svg'
import JUST from "@/assets/images/just.png";
import { getTranslations } from "next-intl/server";

async function OurGoalsSection() {
  const T = await getTranslations("OUR_GOALS");
  console.log("heading", T("heading"));
  return (
    <section data-aos="fade-down" className="mb-16 grid lg:h-[26rem] grid-cols-1 lg:grid-cols-[380px_1fr] gap-4 px-2 sm:px-6 lg:px-8">
      <div  className="hidden lg:block md:relative rounded-3xl bg-backgroud-sec py-4 bg-[url('@/assets/images/goals_bg2.svg')] bg-cover bg-no-repeat">
        <Image
          src={HAMMER}
          alt=""
          className="relative z-[1] w-full max-w-[100%]"
        />
        <Image
          src={JUST}
          alt=""
          className="absolute left-[50%] top-0 max-w-[100%] translate-x-[-50%]"
        />
      </div>
      <div className="rounded-3xl bg-backgroud-sec bg-[url('@/assets/images/goals_bg.svg')] p-8">
        <Image src={ICON} alt="icon" width={55} height={55} />
        <div
          className={`title-wrapper mb-12 !justify-start`}
        >
          <h3 className="title !text-black">{T("heading")}</h3>
          <p className="desc">{T("subheading")}</p>
        </div>
        <ul className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-x-2 lg:gap-x-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              key={i}
              className="text-sub pb-4 relative mx-2"
            >
              <span className="bg-sub inline-block w-[3px] h-[3px] rounded-full absolute top-[0.9rem] -start-2"></span>{T(`p${i}`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurGoalsSection;
