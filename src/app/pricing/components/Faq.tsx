import { FAQType } from "../../types/index";

export default function Faq({ items }: FAQType) {
  return (
    <section className="w-full">
      {items.map((item) => (
        <div key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  );
}
