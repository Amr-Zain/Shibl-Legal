import { Link } from "@/i18n/routing";
import { ArrowLeft } from "../Icons";
import { useTranslations } from "next-intl";

function Button({ text, url, className}: { text: string, url: string, className?:string}) {
    const lang = useTranslations()("lang");
    return (
        <Link href={url} className={`base-btn animated flex items-center ${className}`}>
            <span className="whitespace-nowrap text-sm md:text-lg">{text}</span>
            <span
              className={`grid h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full bg-white/40 p-1 ${lang === "ltr" ? "rotate-180" : ""}`}
            >
              <ArrowLeft />
            </span>
        </Link>);
}

export default Button;