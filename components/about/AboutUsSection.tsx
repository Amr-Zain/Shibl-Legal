import GeneralSection from "../general/GeneralSection";
import IMAGE from "@/assets/images/about/section1.png";
import OVERLAPPED1 from "@/assets/images/about/overlapped1.png";
import OVERLAPPED2 from "@/assets/images/about/overlapped2.png";
import OVERLAPPED3 from "@/assets/images/about/overlapped3.png";
import { getTranslations } from "next-intl/server";
import Image, { StaticImageData } from "next/image";
import { Aword } from "../Icons";
import Button from "../general/primaryButton";
type Props = {
  item: {
    image: string | StaticImageData;
    title: string;
    heading: string;
    desc: string;
  };
  button?: boolean;
  welcome?: boolean;
  mainBg?: boolean;
};
async function AboutSection({ isAbout }: { isAbout?: boolean }) {
  const T = await getTranslations("ABOUT_SECTIONS");

  const props: Props = {
    item: {
      image: IMAGE,
      title: T("heading"),
      heading: T("heading"),
      desc: T("desc"),
    },
    button: true,
  };

  return (
    <GeneralSection {...props}>
      <div className="mb-12 grid grid-cols-1 lg:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="title-wrapper !mb-5 !flex-row !items-center !justify-start gap-2"
          >
            <span>
              <Aword />
            </span>
            <p className="desc min-w-fit whitespace-normal !text-list-color md:whitespace-nowrap">
              {T(`p${item}`)}
            </p>
          </div>
        ))}
      </div>
      <div>
        <div className="mb-12 flex items-center gap-2">
          <OverlappingImages
            images={[OVERLAPPED1, OVERLAPPED2, OVERLAPPED3]}
            size={40}
            overlap={20}
          />
          <p className="text-sub">{T("servicesCollection")}</p>
        </div>
      </div>
      {!isAbout && (
        <Button
          text={T("moreAbout")}
          url={"/about-us"}
          className="max-w-[12rem]"
        />
      )}
    </GeneralSection>
  );
}

export default AboutSection;

import React from "react";

interface OverlappingImagesProps {
  images: StaticImageData[];
  size?: number;
  overlap?: number;
}
const OverlappingImages: React.FC<OverlappingImagesProps> = ({
  images,
  size = 50,
  overlap = size * 0.2,
}) => {
  const containerWidth = size + (images.length - 1) * (size - overlap);

  return (
    <div
      className="relative"
      style={{
        width: containerWidth,
        height: size,
      }}
    >
      {images.map((imageSrc, index) => (
        <span
          key={index}
          className="absolute overflow-hidden rounded-full border-[3px] border-backgroud"
          style={{
            left: index * (size - overlap),
            width: size,
            height: size,
          }}
        >
          <Image
            src={imageSrc}
            width={size}
            height={size}
            className="h-full w-full object-cover"
            alt={`Image ${index + 1}`}
          />
        </span>
      ))}
    </div>
  );
};
