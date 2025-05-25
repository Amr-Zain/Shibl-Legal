import React from "react";
import Image from "next/image";

type Props = {
  item: {
    image: string;
    title: string;
    heading: string;
    desc: string;
  };
  button?: boolean;
  welcome?: boolean;
  mainBg?: boolean;
};

const GeneralSection = ({ ...props }: Props) => {
  return (
    <div className="bg-right-bottom bg-no-repeat">
      <div className="bg-[left_3rem_top] bg-no-repeat">
        <div className="container grid grid-cols-1 items-center gap-5 bg-left-top bg-no-repeat md:grid-cols-2">
          
          <div className="max-w-[600px] space-y-5 bg-right-bottom bg-no-repeat">
            
            <h3
              className="animated wow fadeInRight text-4xl font-extrabold dark:text-white"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
              dangerouslySetInnerHTML={{
                __html: props.item.title || props.item.heading,
              }}
            ></h3>
            <div
              className="animated wow fadeInRight font-thin text-third"
              data-wow-duration="1.3s"
              data-wow-delay="0s"
              dangerouslySetInnerHTML={{
                __html: props.item.desc || props.item.desc,
              }}
            ></div>
           
          </div>
          <div className="h-full w-full">
            <Image
              width={560}
              height={700}
              src={props.item.image}
              alt={props.item.title}
              className="max-w-full animated wow fadeInLeft mx-auto h-[700px] max-h-full w-[560px] rounded-sm object-cover"
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
