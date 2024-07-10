import Register from "../components/register";

const studentInputs = [
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
  {
    inputType: "text",
    placeholder: "Input text",
    h3: "Date of birth (optional)",
  },
  {
    inputType: "text",
    placeholder: "Input text",
    h3: "Address (optional)",
  },
];
export default function Student() {
  return (
    <Register
      role="Student"
      imageSrc="/study.png"
      alt="student"
      inputs={studentInputs}
    />
  );
}
