import Register from "../components/register";

const studentInputs = [
  {
    inputType: "text",
    placeholder: "input text",
    h3: "First name",
  },
  {
    inputType: "text",
    placeholder: "input text",
    h3: "Last name",
  },
  {
    inputType: "text",
    placeholder: "input text",
    h3: "Email",
  },
  {
    inputType: "text",
    placeholder: "input text",
    h3: "Date of birth (optional)",
  },
  {
    inputType: "text",
    placeholder: "input text",
    h3: "Address (optional)",
  },
];
export default function Student() {
  return (
    <Register
      as="Student"
      imageSrc="/study.png"
      alt="student"
      inputs={studentInputs}
    />
  );
}
