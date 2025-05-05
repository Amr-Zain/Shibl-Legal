import { getTranslations } from "next-intl/server";
import SectionHeader from "../../SectionHeader";
import Image, { StaticImageData } from "next/image";
import { Aword } from "../../Icons";
import OVERLAPPED1 from "@/assets/images/about/overlapped1.png";
import OVERLAPPED2 from "@/assets/images/about/overlapped2.png";
import OVERLAPPED3 from "@/assets/images/about/overlapped3.png";
import Button from "../../general/primaryButton";

interface ContentSectionProps {
  isPage?: boolean;
}
const AboutUsContent = async ({ isPage }: ContentSectionProps) => {
  const T = await getTranslations("ABOUT_SECTIONS");

  return (
    <div>
      <SectionHeader heading={T("heading")} description={T("desc")} />

      <div className="space-y-5 bg-right-bottom bg-no-repeat">
        <div className="mb-12 grid grid-cols-1 items-start md:gap-x-8 lg:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <FeatureListItem key={item} text={T(`p${item}`)} />
          ))}
        </div>

        <TeamMembersPreview
          images={[OVERLAPPED1, OVERLAPPED2, OVERLAPPED3]}
          text={T("servicesCollection")}
        />

        {!isPage && (
          <Button
            text={T("moreAbout")}
            url="/about-us"
            className="max-w-[12rem]"
          />
        )}
      </div>
    </div>
  );
};
export default AboutUsContent;
interface FeatureListItemProps {
  text: string;
}

const FeatureListItem = ({ text }: FeatureListItemProps) => (
  <div className="title-wrapper !mb-5 !flex-row !items-start !justify-start gap-1">
    <span aria-hidden="true">
      <Aword />
    </span>
    <p className="desc  !text-list-color">{text}</p>
  </div>
);
interface TeamMembersPreviewProps {
  images: StaticImageData[];
  text: string;
}
const TeamMembersPreview = ({ images, text }: TeamMembersPreviewProps) => (
  <div className="mb-12 flex items-center gap-2">
    <OverlappingImages images={images} size={40} overlap={20} />
    <p className="text-sub">{text}</p>
  </div>
);

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
