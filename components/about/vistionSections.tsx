import Image from "next/image";
import IMAGE from "@/assets/images/about/book.png";

function OurVistionSection() {
  return (
    <section className="bg-[url(@/assets/images/about/vision.svg)]">
      <div className="mx-auto h-[35rem] w-[35rem] rounded-full border border-white bg-[url(@/assets/images/about/bg.svg)]">
        <Image
          src={IMAGE}
          alt={""}
          objectFit="cover"
          className="border-6 h-full w-full rounded-full bg-cover"
        />
      </div>
    </section>
  );
}

export default OurVistionSection;
