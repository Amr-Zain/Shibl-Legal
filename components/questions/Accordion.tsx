"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "../Icons";

function AccordionSection({
  children,
  questions,
  isPage,
}: {
  children?: React.ReactNode;
  questions: Question[];
  isPage?: boolean;
}) {
  const [activeQuestion, setActiveQuestion] = useState("");

  const toggleQuestion = (id: string) => {
    setActiveQuestion((prev) => (prev === id ? "" : id));
  };
  return (
    <section data-aos="fade-down" className="my-8">
      {children}
      {questions.map((question, i) => (
        <div key={question.id} className="px-2 md:px-16">
          <button
            onClick={() => toggleQuestion(question.id)}
            className={`flex w-full items-center justify-between py-4 transition-colors duration-200 ${!isPage&&"border-b border-gray-500 last:border-0"}`}
          >
            <div
              className={`flex items-start justify-start text-sm font-medium md:text-lg ${isPage ? "text-list-color" : "text-text"}`}
            >
              <span className="mx-2">{i + 1}.</span>
              <h3>{question.question}</h3>
            </div>
            <span
              className={`shrink-0 ${isPage ? "text-primary" : "text-text"}`}
            >
              {activeQuestion === question.id ? <MinusIcon /> : <PlusIcon />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeQuestion === question.id
                ? "max-h-[20rem] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-6 pt-2">
              <p className="text-sub">{question.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AccordionSection;
