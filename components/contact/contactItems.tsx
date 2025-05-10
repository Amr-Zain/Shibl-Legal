"use client";
import { ReactElement } from "react";
import { Address, Appoitnment, Email, ContactPhone } from "../Icons";
import { appStore, SocialKey } from "@/stores/app";

const items: { key: SocialKey; icon: ReactElement }[] = [
  { key: "email", icon: <Email /> },
  { key: "phone", icon: <ContactPhone /> },
  { key: "appoitnments", icon: <Appoitnment /> },
  { key: "address", icon: <Address /> },
];
function ContactItems() {
  const social = appStore((state) => state.settings);
  return (
    <ul className="mx-auto mb-12 grid w-fit grid-cols-1 justify-center gap-4 md:grid-cols-2">
      {items.map(
        (item) =>
          social[item.key] && (
            <li
              key={social[item.key]}
              className="flex max-w-[30rem] items-center gap-2 whitespace-nowrap rounded-full border bg-backgroud-sec p-4 text-sub dark:border-gray-600 dark:bg-sec-dark dark:text-white"
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {social[item.key]}
            </li>
          ),
      )}
    </ul>
  );
}

export default ContactItems;
