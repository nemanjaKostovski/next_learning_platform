import Hero from "../components/common/Hero";
import PricingOptions from "./components/PricingOptions";
import Faq from "./components/Faq";

export default function Pricing() {
  const hero = {
    header: "Pricing",
    text: "At Learn Platform, we believe in providing high-quality education that's accessible and affordable. We offer diverse pricing plans designed to cater to individual learners, groups, and organizations. Let's explore each option below:",
  };

  const faqHero = {
    header: "Frequently Asked Questions",
    text: "Exercitation dolore reprehenderit fugi",
  };

  const faq = [
    {
      question:
        "Eiusmod id laboris nulla dolor veniam nisi consequat velit est?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Eiusmod id laboris nulla dolor nisi consequat velit est?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Eiusmod id laboris nulla dolor veniam consequat velit est?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Eiusmod id laboris nulla dolor veniam nisi c velit est?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Eiusmod id laboris nulla dolor veniam nisi consequat  est?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <section className="padlr mb-20">
      <Hero header={hero.header} text={hero.text} />
      <PricingOptions />
      <Hero header={faqHero.header} text={faqHero.text} />
      <Faq items={faq} />
    </section>
  );
}
