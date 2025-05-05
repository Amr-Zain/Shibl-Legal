import AccordionSection from "@/components/questions/Accordion";
import { getTranslations } from "next-intl/server";
async function QurestionsPage() {
  const T = await getTranslations("QUESTIONS");

  const questions = [1, 2, 3, 4, 5, 6, 7].map((i) => ({
    id: String(i),
    question: T(`${i}.question`),
    answer: T(`${i}.answer`),
  }));
  return (
    <>
      <AccordionSection questions={questions} isPage />
    </>
  );
}

export default QurestionsPage;
