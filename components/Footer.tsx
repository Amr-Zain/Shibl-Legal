import { Link } from "@/i18n/routing";
import Image from "next/image";
import LOGO from "@/assets/images/Logo2.png";
import FOOTER from "@/assets/images/footer.png";
import { getTranslations } from "next-intl/server";
import ImageSection from "./general/ImageSection";
import SocialLinks from "./general/SocialLinks";

async function Footer() {
  const T = await getTranslations();

  return (
    <ImageSection image={FOOTER} alt="footer image" className="">
      <footer className="px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start py-6 gap-4 border-b border-sub">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={LOGO} alt={'logo'} width={75} height={75} />
            </Link>
          </div>
          <div data-aos="fade-down">
            <h3 className="text-[1.5rem] text-text">{T("title")}</h3>
            <p className="text-sub">{T("ABOUT_SECTIONS.desc")}</p>
          </div>
        </div>
        <div className="flex sm:justify-between  gap-4 flex-col items-center py-4">
            <div className="text-text flex gap-4 text-sm" >
                <span>{T('termsAndConditions')}</span>
                <span>{T('privacyPolicy')}</span>
            </div>
            <SocialLinks />
        </div>
      </footer>
    </ImageSection>
  );
}

export default Footer;
