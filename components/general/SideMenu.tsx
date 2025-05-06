"use client";
import React, { useState, PropsWithChildren, useCallback, useEffect, useRef } from "react";
import "@/styles/side-menu.scss";
import { TimesIcon } from "@/components/Icons";

type Props = {
  title?: string;
  close: () => void;
};

const SideMenu = ({ title = "", children, close }: PropsWithChildren<Props>) => {
  const [closing, setClosing] = useState(false);
  const isClosingRef = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    setClosing(true);
    setTimeout(() => {
      close();
      isClosingRef.current = false;
    }, 300);
  }, [close]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMenu]);

  // Handle scroll and keyboard events
  useEffect(() => {
    const handleScroll = () => closeMenu();
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [closeMenu]);

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen gap-5 bg-[#00000071]">
      <div 
        className={`side_menu relative ${closing ? "closing" : ""}`}
        ref={menuRef}
      >
        <header className="bg-website_white flex h-[90px] items-center justify-between px-3">
          {title && (
            <h3 className="px-2 text-3xl font-bold capitalize">{title}</h3>
          )}
          <button
            className="text-3xl font-normal"
            type="button"
            onClick={closeMenu}
          >
            <TimesIcon />
          </button>
        </header>
        <div 
          className="side_menu_content" 
          onClick={(e) => e.stopPropagation()}
          onScroll={(e) => e.stopPropagation()} // Prevent bubbling if needed
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;