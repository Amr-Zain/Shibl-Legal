import { getTranslations } from "next-intl/server";
import LOGO from "@/assets/images/Logo2.png";
import STATUE from "@/assets/images/statue.png";
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
    <section className={`sec-px ${isPage ? "mt-12" : ""}`}>
      {!isPage && (
        <div
          data-aos="fade-down"
          className={`title-wrapper title-wrapper mb-12 md:!items-start md:!justify-start`}
        >
          <h3 className="title mb-2 !text-black lg:!text-3xl">
            {T("CONTACT_HEADER.heading")}
          </h3>
          <p className="desc">{T("CONTACT_HEADER.subheading")}</p>
        </div>
      )}
      <div className="grid grid-cols-1 items-center lg:grid-cols-[minmax(650px,1fr)_1fr]">
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
            <h3 className="mb-2 text-3xl font-semibold">{`"${T("title")}"`}</h3>
            <p className="text-base text-sub">{T("partner")}</p>
          </div>
          <ul className="mx-auto mb-8 grid w-fit grid-cols-1 justify-center gap-4 md:grid-cols-2">
            {items.map((item) => (
              <li
                key={item.text}
                className="flex max-w-[30rem] items-center gap-2 whitespace-nowrap rounded-full border bg-backgroud-sec p-4 text-text-dark"
              >
                <span className="flex-shrink-0">
                  <Image src={item.icon} alt={"logo"} width={20} height={20} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
          <span className="absolute top-0 end-0">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3118 17.1693C25.0045 17.1666 32 17.0525 32 16.9121C32 16.7739 25.2193 16.6611 16.7142 16.6551C20.9086 12.4511 24.1653 9.08165 24.0966 9.01291C24.0268 8.94309 20.5526 12.3033 16.2572 16.5921C16.2544 7.90328 16.1403 0.912109 16 0.912109C15.8596 0.912109 15.7455 7.90777 15.7428 16.6005C11.4435 12.3077 7.96488 8.94304 7.89501 9.0129C7.82626 9.08165 11.0831 12.4511 15.2774 16.6551C6.77623 16.6612 0 16.7739 0 16.9121C0 17.0525 6.99104 17.1666 15.6798 17.1693C11.2933 21.559 7.82408 25.1436 7.89501 25.2145C7.96488 25.2844 11.4436 21.9196 15.743 17.6267C15.749 26.1316 15.8618 32.9121 16 32.9121C16.1382 32.9121 16.2509 26.1361 16.257 17.635C20.5525 21.924 24.0268 25.2843 24.0966 25.2145C24.1675 25.1436 20.6984 21.559 16.3118 17.1693Z"
                fill="#C19877"
              />
            </svg>
          </span>
        </div>
        <div className="bg-[url('@/assets/images/statue-bg.svg')] bg-contain bg-no-repeat">
          <Image
            src={STATUE}
            alt="statue"
            height={450}
            width={500}
            className="mx-auto"
          />
          {/* <Image
            src={Low}
            alt="statue"
            width={400}
            className="absolute left-[25%] top-0 -z-10"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
