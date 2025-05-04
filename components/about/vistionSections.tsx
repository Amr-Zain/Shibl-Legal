import Image from "next/image";
import IMAGE from "@/assets/images/about/book.png";
import { getTranslations } from "next-intl/server";

async function OurVistionSection() {
  const T = await getTranslations("ABOUT_SECTIONS");
  return (
    <section className="relative mb-8 bg-[url(@/assets/images/about/vision.svg)] bg-top bg-no-repeat pt-[7rem]">
      <div className="mx-auto aspect-square w-[35rem] max-w-[90%] rounded-full border border-white bg-[url(@/assets/images/about/bg.svg)]">
        <Image
          src={IMAGE}
          alt={""}
          objectFit="cover"
          className="border-6 h-full w-full rounded-full bg-cover"
        />
      </div>
      <div className="absolute bottom-[10%] left-[10%] hidden max-h-fit w-[450px] max-w-[90%] rounded-3xl bg-white/70 backdrop-blur-md sm:block lg:bottom-[20%]">
        <p className="mx-auto my-4 w-[70%] text-text-dark">{T("vision")}</p>
      </div>
    </section>
  );
}

export default OurVistionSection;
