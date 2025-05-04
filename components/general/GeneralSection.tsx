import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  item: {
    image: string | StaticImageData;
    title: string;
    heading: string;
    desc: string;
  };
  children?: React.ReactNode
};

const GeneralSection = ({ ...props }: Props) => {
  return (
    <div className="bg-right-bottom bg-no-repeat py-8 px-2 sm:px-6 lg:px-8">
      <div className="bg-[left_3rem_top] bg-no-repeat">
        <div>
        <h3
              className="animated wow fadeInRight text-[48px] font-extrabold"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
              dangerouslySetInnerHTML={{
                __html: props.item.title || props.item.heading,
              }}
            ></h3>
            <div
              className="animated wow fadeInRight text-sub"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
              dangerouslySetInnerHTML={{
                __html: props.item.desc || props.item.desc,
              }}
            ></div>
        </div>
        <div className="grid grid-cols-1 items-center gap-5 bg-left-top bg-no-repeat md:grid-cols-[minmax(300px,1fr)_620px] lg:grid-cols-[minmax(750px,1fr)_550px]">
          <div className="space-y-5 bg-right-bottom bg-no-repeat">
            {props.children}
           {/*  <Link
            href={'/'}
          className="base-btn animated wow fadeInUp w-fit"
          data-wow-duration="1.3s"
          data-wow-delay="0s"
          v-if="button"
        >
          btn
        </Link> */}
          </div>
          <div className="h-full w-full">
            <Image
              width={560}
              height={700}
              src={props.item.image}
              alt={props.item.title}
              className="max-w-full animated wow fadeInLeft mx-auto max-h-full w-[560px] rounded-b-[300px] rounded-t-[300px] relative bottom-0"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
