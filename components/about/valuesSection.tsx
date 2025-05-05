import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ICON from "@/assets/icons/scaler.svg";
import IMAGE from "@/assets/images/footer.png";

async function ValuesSection() {
  const T = await getTranslations("OUR_VALUES");
  return (
    <section className="relative rounded-3xl bg-[url('@/assets/images/about/Rectangle.svg')]  bg-right-top [background-size:1200px_auto] bg-no-repeat w-[95%] mx-auto my-12 py-6">
      <Image src={ICON} alt={""} width={50} height={50} className="hidden sm:block mx-auto" />
      <span  className="">
        <Image
          src={IMAGE}
          alt={""}
          width={152}
          height={48}
          className="absolute right-0 top-0 rounded-full max-w-[9.5rem] max-h-[3rem] bg-cover bg-no-repeat border-6 border-backgroud"
        />
      </span>
      <div className={`title-wrapper mb-12 !justify-start !items-center sec-px mt-10 sm:mt-2`}>
        <h3 className="title !text-black ">{T("heading")}</h3>
        <p className="desc relative !text-text-dark px-6 m-2">
          {T("subheading")}
          <span className="absolute -start-1 top-0 opacity-50">
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.69999 10.3692C4.205 11.6142 3.42501 12.8442 2.38251 14.0292C2.05251 14.4042 2.00751 14.9442 2.2775 15.3642C2.48752 15.6942 2.83249 15.8742 3.20749 15.8742C3.3125 15.8742 3.41751 15.8667 3.52252 15.8292C5.72748 15.1842 10.88 12.8967 11.0225 5.56166C11.075 2.73419 9.00502 0.304198 6.3125 0.0266981C4.82001 -0.123309 3.33502 0.364161 2.2325 1.35417C1.13002 2.35168 0.5 3.7767 0.5 5.26168C0.5 7.73668 2.25502 9.90419 4.69999 10.3692Z"
                fill="#C19877"
              />
              <path
                d="M18.2826 0.0266981C16.7975 -0.123309 15.3126 0.364161 14.2101 1.35417C13.1076 2.35168 12.4775 3.7767 12.4775 5.26168C12.4775 7.73668 14.2326 9.90418 16.6776 10.3692C16.1825 11.6142 15.4026 12.8442 14.36 14.0292C14.03 14.4042 13.985 14.9442 14.2551 15.3642C14.4651 15.6942 14.8101 15.8742 15.1851 15.8742C15.29 15.8742 15.3951 15.8667 15.5001 15.8292C17.7051 15.1842 22.8576 12.8967 23.0001 5.56165V5.45669C23.0001 2.67418 20.9526 0.304198 18.2826 0.0266981Z"
                fill="#C19877"
              />
            </svg>
          </span>
          <span className="absolute end-0  -botton-4 opacity-50">
            <svg
              width="23"
              height="16"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3 5.63082C18.795 4.38584 19.575 3.15582 20.6175 1.97081C20.9475 1.59581 20.9925 1.05583 20.7225 0.635832C20.5125 0.305832 20.1675 0.125839 19.7925 0.125839C19.6875 0.125839 19.5825 0.133301 19.4775 0.170838C17.2725 0.815831 12.12 3.10332 11.9775 10.4383C11.925 13.2658 13.995 15.6958 16.6875 15.9733C18.18 16.1233 19.665 15.6358 20.7675 14.6458C21.87 13.6483 22.5 12.2233 22.5 10.7383C22.5 8.26332 20.745 6.09581 18.3 5.63082Z"
                fill="#C19877"
              />
              <path
                d="M4.71742 15.9733C6.20245 16.1233 7.68744 15.6358 8.78992 14.6458C9.89244 13.6483 10.5225 12.2233 10.5225 10.7383C10.5225 8.26332 8.76744 6.09582 6.32243 5.63082C6.81745 4.38584 7.59744 3.15582 8.63995 1.97082C8.96995 1.59582 9.01495 1.05584 8.74492 0.635839C8.53494 0.305839 8.18992 0.125846 7.81492 0.125846C7.70996 0.125846 7.60495 0.133308 7.49994 0.170845C5.29494 0.815838 0.142439 3.10332 -6.10352e-05 10.4383V10.5433C-6.10352e-05 13.3258 2.04742 15.6958 4.71742 15.9733Z"
                fill="#C19877"
              />
            </svg>
          </span>
        </p>
      </div>
    </section>
  );
}

export default ValuesSection;
