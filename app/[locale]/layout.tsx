import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { Metadata } from "next";

import AosWrapper from "@/components/layout/AosWrapper";
import ScrollBtn from "@/components/layout/ScrollBtn";
import ToastProvider from "@/utils/providers/toastProvider";
import "animate.css";
import "aos/dist/aos.css";
import "../globals.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getSocial } from "@/services/ApiHandler";
import AppStateProvider from "@/utils/providers/AppStateProvider";

export async function generateMetadata(): Promise<Metadata> {
  //const data = await getPrivacy();
  return {
    title:  "Shibl Legal",
    description: "Shibl Legal",
    icons: {
      icon: "/logo.png",
    },
    openGraph: {
      title:"Shibl Legal",
      description:"Shibl Legal",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale: locale });
  const data = await getSocial();
 

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="overflow-x-hidden bg-backgroud dark:bg-secondary/100">
        <NextIntlClientProvider messages={messages}>
          <AppStateProvider initialData={data} />
          <div className="flex min-h-[100vh] flex-col justify-between">
            <ToastProvider>
              <AosWrapper>
                <div className="app_wrapper flex min-h-[100vh] flex-col justify-between" id="app_wrapper">
                  <NavBar />
                  {children}
                  <Footer />
                </div>
              </AosWrapper>
              <ScrollBtn />
            </ToastProvider>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
