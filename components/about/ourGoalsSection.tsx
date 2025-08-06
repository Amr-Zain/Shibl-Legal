import Image from "next/image";
import SectionHeader from "../SectionHeader";

async function OurGoalsSection({
  title,
  description,
  image,
  icon,
  features,
}: Section) {
  if(!features || ! image) return;
  return (
    <section
      data-aos="fade-down"
      className="sec-px mb-16 grid grid-cols-1 gap-4 lg:grid-cols-[380px_1fr]"
    >
      <div className="hidden h-full rounded-3xl md:relative lg:block dark:bg-sec-dark">
        <Image
          src={image}
          alt=""
          width={400}
          height={500}
          className="relative z-[1] h-full w-full max-w-[100%]"
        />
      </div>
      <div className="rounded-3xl bg-backgroud-sec bg-[url('../assets/images/goals_bg.svg')] bg-cover bg-no-repeat p-8 dark:bg-sec-dark">
        <Image src={icon!} alt="icon" width={55} height={55} />
        <SectionHeader heading={title} description={description} />
        {features && (
          <ul className="grid grid-cols-1 gap-x-2 pl-4 [list-style:initial] lg:grid-cols-2 lg:gap-x-8">
            {features?.map(({ value, id }) => (
              <li key={id} className="relative mx-2 pb-4 text-sub">
                {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default OurGoalsSection;
