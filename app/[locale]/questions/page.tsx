import Header from "@/components/Header";
import AccordionSection from "@/components/questions/Accordion";
import { getQuestions } from "@/services/ApiHandler";

export async function generateMetadata() {
  const data = await getQuestions();
  if (!data) return;

  return {
    title: data?.banner?.title,
    description: data?.banner?.description,
  };
}

async function QurestionsPage() {
  const data: FAQData = await getQuestions();
  return (
    <>
      {data?.banner && (
        <Header
          title={data.banner.title}
          desc={data.banner.description}
          image={data.banner.image}
        />
      )}
      {data?.faq && <AccordionSection questions={data.faq} isPage />}
    </>
  );
}

export default QurestionsPage;
