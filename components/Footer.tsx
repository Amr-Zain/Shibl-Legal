
'use client'
import { Link } from "@/i18n/routing";
import Image from "next/image";
import LOGO from "@/assets/images/Logo2.png";
import FOOTER from "@/assets/images/footer.png";
import SocialLinks from "./general/SocialLinks";
import { useTranslations } from "next-intl";
import { appStore } from "@/stores/app";

 function Footer() {
  const T =  useTranslations();
  const description = appStore(state=>state.settings.desc)
  return (
    <footer className={`relative bottom-0`}>
      <div className={`overlay`}></div>
      <Image
        src={FOOTER}
        alt={"footer image"}
        fill={true}
        className={"z-[2]"}
      />
      <div data-aos="fade-down" className="relative z-20">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-4 border-b border-sub py-6">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={LOGO} alt={"logo"} width={75} height={75} />
              </Link>
            </div>
            <div data-aos="fade-down">
              <h3 className="text-[1.5rem] text-text">{T("title")}</h3>
              <p className="text-sub">{description}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between">
            <div className="flex gap-4 text-sm text-text">
              <Link href={'/terms'}>{T("termsAndConditions")}</Link>
              <Link href={'/privacy'}>{T("privacyPolicy")}</Link>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
