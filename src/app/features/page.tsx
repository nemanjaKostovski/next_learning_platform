import Hero from "../components/common/Hero";
import Feature from "./components/Feature";

const hero = {
  header: "Learning",
  text: "Nisi irure nisi mollit exercitation cupidatat excepteur. Lorem in ullamco reprehenderit exercitation sunt non tempor exercitation exercitation ",
};

export default function Features() {
  return (
    <section className="padlr mb-32">
      <h1 className="pt-28 text-center text-7xl font-bold">Features</h1>
      <Hero header={hero.header} text={hero.text} />
      <Feature imageFirst={false} imageSrc="/feature1.png" />
      <Feature imageFirst={true} imageSrc="/feature2.png" />
    </section>
  );
}
