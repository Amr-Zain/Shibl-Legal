"use client";
import Image from "next/image";
import LOGO from "@/assets/images/Logo2.png";
import { useTranslations } from "next-intl";
import Link from "@/components/LocalePath";
import LangSwitcher from "@/components/LangSwitcher";
import { MenuIcon } from "./Icons";
import SideMenu from "./general/SideMenu";
import { useState } from "react";
import Teleport from "./Teleport";

function NavBar() {
  const T = useTranslations("NAV");
  const navItems = [
    { value: T("about"), path: "/about-us" },
    { value: T("services"), path: "/services" },
    { value: T("questions"), path: "/questions" },
    { value: T("contact"), path: "/contact-us" },
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="backdrop-blur-xs fixed top-0 z-20 h-[4.5rem] w-[100%] bg-transparent/40 text-sub">
      <div className="mx-auto h-full px-2 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between md:justify-between">
          <Link href="/" aria-label={T("homepage")}>
            <Image src={LOGO} alt={T("companyLogo")} width={40} height={40} />
          </Link>
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label={T("mainNavigation")}
          >
            <ul className="flex list-none items-center gap-7">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm font-light transition-colors hover:text-gray-400"
                  >
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <LangSwitcher
              className="!text-sub"
              aria-label={T("languageSwitcher")}
            />
            <button
              className="block rounded-full p-2 text-primary focus:outline-none focus:ring-1 focus:ring-primary md:hidden"
              onClick={() => setShowModal(true)}
              aria-label={T("openMenu")}
              aria-expanded={showModal}
            >
              <MenuIcon aria-hidden="true" />
            </button>
            {showModal && (
              <Teleport to="body">
                <SideMenu close={() => setShowModal(false)} title={T("menu")}>
                  <nav aria-label={T("mobileNavigation")}>
                    <ul className="flex list-none flex-col px-4">
                      {navItems.map((item) => (
                        <li key={item.path} onClick={() => setShowModal(false)}>
                          <Link
                            href={item.path}
                            className="block py-2 text-sm font-light text-text transition-colors hover:text-gray-400"
                          >
                            {item.value}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SideMenu>
              </Teleport>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
