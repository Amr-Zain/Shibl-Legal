"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "../Icons";

function AccordionSection({
  children,
  questions,
}: {
  children?: React.ReactNode;
  questions: Question[];
}) {
  const [activeQuestion, setActiveQuestion] = useState("");

  const toggleQuestion = (id: string) => {
    setActiveQuestion((prev) => (prev === id ? "" : id));
  };
  return (
    <section className="my-8">
      {children}
      {questions.map((question,i) => (
        <div key={question.id} className="px-8 md:px-16">
          <button
            onClick={() => toggleQuestion(question.id)}
            className="flex w-full items-center justify-between py-4 transition-colors duration-200"
          >
            <h3 className="text-lg font-medium text-list-color">
              <span className="mx-2">{i+1}.</span>{question.question}
            </h3>
            <span className="shrink-0 text-primary">
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
