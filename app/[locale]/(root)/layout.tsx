import Header from "@/components/home/Header";

export default async function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
    <Header />
      {children}
    </>
  );
}
