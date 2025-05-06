import Image, { StaticImageData } from "next/image";

const ServiceCard = ({
    icon,
    heading,
    subheading,
    colSpan,
  }: {
    icon: StaticImageData;
    heading: string;
    subheading: string;
    colSpan?: string;
  }) => (
    <div data-aos="fade-down" className={`rounded-3xl bg-backgroud-sec p-8 ${colSpan || ""} `}>
      <div className="mb-6">
        <Image src={icon} width={64} height={64} alt="Service icon" />
      </div>
      <div>
        <h3 className="text-[48px] text-xl font-bold">{heading}</h3>
        <div className="text-sub" data-wow-duration="1.3s" data-wow-delay="0s">
          {subheading}
        </div>
      </div>
    </div>
  );
export default ServiceCard