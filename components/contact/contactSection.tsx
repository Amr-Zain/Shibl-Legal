import { getTranslations } from "next-intl/server";
import LOGO from "@/assets/images/Logo2.png";
import STATUE from "@/assets/images/statue.png";
import Low from "@/assets/images/law.png";
import Image from "next/image";
import LOCATION from "@/assets/icons/contact/location.svg";
import CALL from "@/assets/icons/contact/call.svg";
import CLOCK from "@/assets/icons/contact/clock.svg";
import EMAIL from "@/assets/icons/contact/sms.svg";

async function ContactSection({ isPage }: { isPage?: boolean }) {
  const T = await getTranslations();
  const items = [
    { text: "Sheblforlawfirm@gmail.com", icon: EMAIL },
    { text: "+966 18637 1873", icon: CALL },
    { text: T("CONTACT_HEADER.schedule"), icon: CLOCK },
    { text: T("CONTACT_HEADER.location"), icon: LOCATION },
  ];
  return (
    <section className={`${isPage ? "mt-12" : ""}`}>
      {!isPage && (
        <div
          data-aos="fade-down"
          className={`title-wrapper mb-12 !justify-start`}
        >
          <h3 className="title !text-black">{T("CONTACT_HEADER.heading")}</h3>
          <p className="desc">{T("CONTACT_HEADER.subheading")}</p>
        </div>
      )}
      <div className="grid grid-cols-1 items-center lg:grid-cols-[minmax(650px,1fr)_1fr]">
        <div>
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
            <h3 className="mb-2 text-3xl font-semibold">{`"${T("title")}"`}</h3>
            <p className="text-base text-sub">{T("partner")}</p>
          </div>
          <ul className="mx-auto mb-8 grid w-fit grid-cols-1 justify-center gap-4 md:grid-cols-2">
            {items.map((item) => (
              <li
                key={item.text}
                className="bg-backgroud-sec flex max-w-[30rem] items-center gap-2 whitespace-nowrap rounded-full border p-4 text-text-dark"
              >
                <span className="flex-shrink-0">
                  <Image src={item.icon} alt={"logo"} width={20} height={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <Image
            src={STATUE}
            alt="statue"
            height={450}
            width={500}
            className="mx-auto"
          />
          <Image
            src={Low}
            alt="statue"
            width={400}
            className="absolute left-[25%] top-0 -z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
