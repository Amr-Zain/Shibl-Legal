import Header from "@/components/Header";
import QUESTIONS from "@/assets/images/header/questions.png";

export default async function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header page="QUESITONS" image={QUESTIONS} />
      {children}
    </>
  );
}
