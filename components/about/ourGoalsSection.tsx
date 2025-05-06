import Image from "next/image";
import HAMMER from "@/assets/images/hammer.png";
import ICON from "@/assets/icons/hammer.svg";
import JUST from "@/assets/images/just.png";

import { getTranslations } from "next-intl/server";
import SectionHeader from "../SectionHeader";

async function OurGoalsSection() {
  const T = await getTranslations("OUR_GOALS");
  return (
    <section
      data-aos="fade-down"
      className="sec-px mb-16 grid grid-cols-1 gap-4 lg:grid-cols-[380px_1fr]"
    >
      <div className="hidden h-full rounded-3xl bg-backgroud-sec bg-[url('@/assets/images/goals_bg.svg')] bg-cover bg-no-repeat md:relative lg:block">
        <Image
          src={HAMMER}
          alt=""
          className="relative z-[1] h-full w-full max-w-[100%]"
        />
        <Image
          src={JUST}
          alt="just"
          className="absolute left-[50%] top-0 max-w-[100%] translate-x-[-50%]"
        />
      </div>
      <div className="rounded-3xl bg-backgroud-sec bg-[url('@/assets/images/goals_bg.svg')] bg-cover bg-no-repeat p-8">
        <Image src={ICON} alt="icon" width={55} height={55} />
        <SectionHeader heading={T('heading')} description={T('subheading')} />
        <ul className="grid grid-cols-1 gap-x-2 pl-4 lg:grid-cols-2 lg:gap-x-8 [list-style:initial] ">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="relative mx-2 pb-4 text-sub">
              {T(`p${i}`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurGoalsSection;
