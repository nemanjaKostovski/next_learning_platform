import Register from "../components/register";

const trainerInputs = [
  {
    inputType: "text",
    placeholder: "Input text",
    h3: "First name",
  },
  {
    inputType: "text",
    placeholder: "Input text",
    h3: "Last name",
  },
  {
    inputType: "text",
    placeholder: "Input text",
    h3: "Email",
  },
];
export default function Trainer() {
  return (
    <Register
      as="Trainer"
      imageSrc="/train.png"
      alt="trainer"
      inputs={trainerInputs}
    />
  );
}
