import Image from "next/image";

const ServiceCard = ({
    icon,
    heading,
    subheading,
    colSpan,
  }: {
    icon: string;
    heading: string;
    subheading: string;
    colSpan?: boolean;
  }) => (
    <div data-aos="fade-down" className={`rounded-3xl bg-backgroud-sec p-8 ${colSpan && "col-span-2"} dark:bg-sec-dark`}>
      <div className="mb-6 size-16 bg-white dark:bg-icon-dark rounded-full p-3">
        <Image src={icon} width={64} height={64} alt="Service icon" />
      </div>
      <div>
        <h3 className="text-[48px] text-xl font-bold dark:text-white">{heading}</h3>
        <div className="text-sub" data-wow-duration="1.3s" data-wow-delay="0s">
          {subheading}
        </div>
      </div>
    </div>
  );
export default ServiceCard