import Image, { StaticImageData } from "next/image";
import { JSX } from "react";

type Props = {
  image: string | StaticImageData;
  alt: string;
  className: string;
  overlayClass?: string;
  children: React.ReactNode;
  Element?: () => Promise<JSX.Element> ;
};

function ImageSection({ image, alt, className, children, overlayClass, Element }: Props) {
  return (
    <div className={`relative ${className}`}>
      <span className={`absolute inset-0 z-10 bg-secondary/80 ${overlayClass}`}></span>
      <Image src={image} alt={alt} fill={true} objectFit="cover" className={overlayClass+" z-[2]"} />
      <div data-aos="fade-down" className="relative z-20">
        {children}
      </div>
      {Element&&<Element />}
    </div>
  );
}

export default ImageSection;
