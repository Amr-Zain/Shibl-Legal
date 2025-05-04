import ImageSection from "../general/ImageSection";
import IMAGE from "@/assets/images/about/section2.png";
import ICON1 from "@/assets/images/whyUs/scaler.png";
import ICON2 from "@/assets/images/whyUs/like.png";
import ICON3 from "@/assets/images/whyUs/avtar.png";
import ICON4 from "@/assets/images/whyUs/aword.png";
import Title from "../general/Title";
import { useTranslations } from "next-intl";
import Button from "../general/primaryButton";
import StatItem from "./statItem";
function WhyUsSection() {
  const T = useTranslations("WHY_US");
  
  const stats = [
    { number: "10", icon: ICON3, text: "team" },
    { number: "6", icon: ICON1, text: "experience" },
    { number: "90", icon: ICON2, text: "customers" },
    { number: "200", icon: ICON4, text: "success" },
  ];


  return (
    <ImageSection
      image={IMAGE}
      alt="why us image"
      className="mx-auto w-[95%] py-10 my-14"
      overlayClass="rounded-[30px]"
    >
      <Title title={T("heading")} desc={T("subheading")} />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start md:items-center justify-center mb-8 px-4 md:px-8 lg:px-14">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            number={stat.number}
            icon={stat.icon}
            text={stat.text}
          />
        ))}
      </div>

      <Button 
        text={T('button')} 
        url="/contact-us" 
        className="w-[16rem] mx-auto mt-4 max-w-[90%]" 
      />
    </ImageSection>
  );
}

export default WhyUsSection;