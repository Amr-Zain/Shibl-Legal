import { getTranslations } from "next-intl/server";
import LOGO from "@/assets/images/Logo2.png";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { StarIcon } from "../Icons";
import ContactItems from "./contactItems";
async function ContactSection({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  const T = await getTranslations();
  if(!image || !description) return
  return (
    <section className={`sec-px ${!title ? "mt-12" : ""}`}>
      {!!title && <SectionHeader heading={title} description={description} />}
      <div
        data-aos={"fade-down"}
        className="grid grid-cols-1 items-end lg:grid-cols-[minmax(650px,1fr)_1fr]"
      >
        <div className="relative">
          <div className="mb-4 text-center">
            <Image
              src={LOGO}
              alt={"logo"}
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-3xl font-semibold dark:text-white">{`"${T("title")}"`}</h3>
            <p className="text-base text-sub">{T("partner")}</p>
          </div>
          <ContactItems />
          <span className="absolute end-0 top-0">
            <StarIcon />
          </span>
        </div>
        <div className="bg-[url('@/assets/images/statue-bg.svg')] bg-contain bg-no-repeat">
          <Image
            src={image!}
            alt="statue"
            height={450}
            width={500}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
