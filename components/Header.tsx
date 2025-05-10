import Title from "@/components/general/Title";
import Image, { StaticImageData } from "next/image";

export default async function Header({
  image,
  title,
  desc
}: {
  desc: string;
  title: string;
  image: string |StaticImageData;
}) {
  return (
      <div className={`relative px-2 pb-[4rem] pt-[10rem] sm:px-6 lg:px-8`}>
        <span className={`overlay`}></span>
        <Image
          src={image}
          alt={"header image"}
          fill={true}
          objectFit="cover"
          className={"z-[2]"}
        />
        <div data-aos="fade-down" className="relative z-20">
          <Title title={title} desc={desc} />
        </div>
      </div>
  );
}
