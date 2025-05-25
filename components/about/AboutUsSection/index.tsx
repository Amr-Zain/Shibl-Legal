import Image from "next/image";
import AboutUsContent from "./AboutUsContent";

async function AboutSection({
  title,
  description,
  image,
  features,
}: Pick<Section, 'description'| 'image'| 'features'>&{title?: string}) {
  if(!image || !features?.length) return;
  return (
    <section
      data-aos="fade-down"
      className={`sec-px grid grid-cols-1 items-center gap-4 md:grid-cols-[1.5fr_1fr] ${!!title && "my-12"}`}
    >
      <AboutUsContent title={title} desc={description} features={features} />
      <div className="relative h-full w-full">
        <Image
          width={560}
          height={700}
          src={image}
          alt={'about image'}
          className="mx-auto w-[560px] md:min-w-[400px]"
          data-wow-duration="1.3s"
          data-wow-delay="0s"
        />
      </div>
    </section>
  );
}

export default AboutSection;
