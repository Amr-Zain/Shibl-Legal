import Image from "next/image";

async function OurVistionSection({
  description,
  image,
}: {
  description: string;
  image: string;
}) {
  return (
    <section data-aos={"fade-down"} className="relative mb-8 pt-[7rem]">
      <Image
        src={image}
        alt={"our vision"}
        width={2000}
        height={2000}
        className="border-6 min-w-72 rounded-full"
      />
      <div className="absolute bottom-[10%] left-[10%] hidden max-h-fit w-[450px] max-w-[90%] rounded-3xl bg-white/70 backdrop-blur-md sm:block lg:bottom-[20%]">
        <p className="mx-auto my-4 w-[70%] text-sub">{description}</p>
      </div>
    </section>
  );
}

export default OurVistionSection;
