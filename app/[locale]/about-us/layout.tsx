import Header from "@/components/Header";
import AOUBT from "@/assets/images/header/about.png";

export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header page="ABOUT" image={AOUBT} />

      {children}
    </>
  );
}
