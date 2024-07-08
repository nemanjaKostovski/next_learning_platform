import { InputRegister } from "../.././types/index";

export default function InputReg({
  inputType,
  placeholder,
  h3,
}: InputRegister) {
  return (
    <>
      <h3 className="font-semibold text-slate-700">{h3}</h3>
      <input
        className="input input-error input-valid"
        type={inputType}
        placeholder={placeholder}
      />
    </>
  );
}
