
import ServiceCard from "./serviesCard";
import SectionHeader from "../SectionHeader";


async function ServicesSection({ features, title, description }:  {features: Feature[]; title?:string; description?: string}) {
  
  return (
    <section className="px-4 py-10 md:px-8 lg:px-14">
      {title && (
        <SectionHeader
          heading={title}
          description={description}
        />
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map(({ id, title, description, icon}) => (
          <ServiceCard
            key={id}
            icon={icon}
            heading={title!}
            subheading={description!}
            colSpan={id ===5}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
