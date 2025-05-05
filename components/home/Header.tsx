"use server";
import { getTranslations } from "next-intl/server";
import Button from "../general/primaryButton";
import Title from "@/components/general/Title";
import ImageSection from "@/components/general/ImageSection";
import { Aword } from "@/components/Icons";
import HOME from "@/assets/images/header/home.jpg";
import HeaderBar from "./HeaderBar";


export default async function HomeHeader() {
  const T = await getTranslations("HOME_HEADER");

  return (
    <ImageSection
      image={HOME}
      alt="Home Header"
      className="sec-px h-[40rem] pt-[10rem]"
      Element={HeaderBar }
    >
      <div className="title-wrapper !flex-row !items-center !justify-start gap-2">
        <Aword aria-label={T("bestPlaceLabel")} />
        <p className="desc">{T("bestPlaceLabel")}</p>
      </div>

      <Title
        title={T("heading")}
        desc={T("subheading")}
        className="!justify-start"
      />

      <div className="flex items-center gap-2">
        <Button text={T("contactButton")} url="/contact-us" />
        <p className="text-sub">{T("advicePrompt")}</p>
      </div>
    </ImageSection>
  );
}
