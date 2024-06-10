"use client";
import { useState } from "react";
import Image from "next/image";
import { VisibilityStateType } from "../../types/index";
import { FAQType } from "../../types/index";

export default function Faq({ items }: FAQType) {
  const [visibility, setVisibility] = useState<VisibilityStateType>({});

  const handleToggle = (question: string) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [question]: !prevVisibility[question],
    }));
  };
  return (
    <section className="mt-10 w-full">
      {items.map((item) => (
        <div key={item.question} className="border-t border-gray-300">
          <div className="relative flex flex-row">
            <h3 className="p-10 text-xl font-bold">{item.question}</h3>
            <button
              className="absolute right-1 top-8 inline-block rounded-lg bg-slate-200 p-4"
              onClick={() => handleToggle(item.question)}
            >
              <Image
                src={
                  visibility[item.question]
                    ? "/chevron-up.png"
                    : "/chevron-down.png"
                }
                alt="down"
                width={24}
                height={24}
              />
            </button>
          </div>
          <p
            className={`${visibility[item.question] ? "" : "hidden"} p-5 pl-10`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </section>
  );
}
