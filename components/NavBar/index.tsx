"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/LocalePath";
import LangSwitcher from "@/components/LangSwitcher";
import LOGO from "@/assets/images/Logo2.png";
import { MenuIcon } from "../Icons";
import MobileMenu from "./MovileMenu";
import DesktopNavigation from "./DesktopNav";

function NavBar() {
  const T = useTranslations("NAV");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { value: T("about"), path: "/about-us" },
    { value: T("services"), path: "/services" },
    { value: T("questions"), path: "/questions" },
    { value: T("contact"), path: "/contact-us" },
  ];

  return (
    <div className="absolute top-0 z-30 h-[4.5rem] w-full text-sub backdrop-blur-md">
      <div className="mx-auto h-full px-2 sm:px-6 lg:px-8">
        <nav className="flex h-full items-center justify-between">
          <Link href="/">
            <Image src={LOGO} alt={"logo"} width={40} height={40} />
          </Link>

          <DesktopNavigation items={navItems} ariaLabel={T("mainNavigation")} />

          <div className="flex items-center gap-4">
            <LangSwitcher className="!text-text" />
            <button
              className="block rounded-full p-2 text-primary focus:outline-none focus:ring-1 focus:ring-primary md:hidden"
              onClick={() => setShowMobileMenu(true)}
            >
              <MenuIcon aria-hidden="true" />
            </button>
          </div>

          <MobileMenu
            show={showMobileMenu}
            items={navItems}
            title={T("menu")}
            onClose={() => setShowMobileMenu(false)}
          />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
