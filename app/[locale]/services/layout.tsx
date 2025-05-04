import Header from "@/components/Header";
import SERVICES from "@/assets/images/header/services.png";

export default async function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header page="SERVICES" image={SERVICES} />
      {children}
    </>
  );
}
