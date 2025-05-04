import Header from "@/components/Header";
import CONTACT from '@/assets/images/header/contact.png'

export default async function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header page="CONTACT" image={CONTACT} />
      {children}
    </>
  );
}
