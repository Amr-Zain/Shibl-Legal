import bookIcon from "@/assets/icons/services/book.svg";
import contractIcon from "@/assets/icons/services/contract.svg";
import hammerIcon from "@/assets/icons/services/hammer.svg";
import scalerIcon from "@/assets/icons/services/scaler.svg";
import tableIcon from "@/assets/icons/services/table.svg";
import { getTranslations } from "next-intl/server";
import ServiceCard from "./serviesCard";

const services = [
  { id: "1", icon: tableIcon },
  { id: "2", icon: contractIcon },
  { id: "3", icon: hammerIcon },
  { id: "4", icon: bookIcon, colSpan: "md:col-span-2" },
  { id: "5", icon: scalerIcon },
];

async function ServicesSection({ isPage }: { isPage?: boolean }) {
  const T = await getTranslations();

  return (
    <section className="px-4 py-10 md:px-8 lg:px-14">
      {!isPage && (
        <div data-aos="fade-down" className={`title-wrapper mb-12`}>
          <h3 className="title !text-black">{T("SERVICES_HEADER.heading")}</h3>
          <p className="desc">{T("SERVICES_HEADER.subheading")}</p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            heading={T(`SERVICES_CARDS.${service.id}.heading`)}
            subheading={T(`SERVICES_CARDS.${service.id}.subheading`)}
            colSpan={service.colSpan}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
