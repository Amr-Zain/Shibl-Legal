interface SectionHeaderProps {
  heading: string;
  description?: string;
}

const SectionHeader = ({ heading, description }: SectionHeaderProps) => (
  <div
    data-aos="fade-down"
    className="title-wrapper title-wrapper mb-12 md:!items-start md:!justify-start"
  >
    <h3 className="title mb-2 !text-black lg:!text-3xl dark:!text-white">
      {heading}
    </h3>
    {description && <p className="desc">{description}</p>}
  </div>
);
export default SectionHeader;
