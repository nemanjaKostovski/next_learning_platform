"use client";

import JoinCard from "./components/joinCard";

const trainer = {
  imageSrc: "/trainer.png",
  alt: "trainer",
  title: "Register as Trainer",
  desc: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
  link: "/join/trainer",
};

const student = {
  imageSrc: "/student.png",
  alt: "student",
  title: "Register as Student",
  desc: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
  link: "/join/student",
};

export default function Join() {
  return (
    <section className="padlr mb-32">
      <h1 className="pt-28 text-center text-6xl font-bold">Join Us</h1>
      <JoinCard
        imageSrc={trainer.imageSrc}
        alt={trainer.alt}
        title={trainer.title}
        desc={trainer.desc}
        link={trainer.link}
      />
      <JoinCard
        imageSrc={student.imageSrc}
        alt={student.alt}
        title={student.title}
        desc={student.desc}
        link={student.link}
      />
    </section>
  );
}
