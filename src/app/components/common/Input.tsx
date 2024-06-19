import Image from "next/image";
import { InputType } from "../../types/index";

export default function Input({
  imageSrc,
  inputType,
  h3,
  placeholder,
  alt,
  children,
}: InputType) {
  return (
    <div className="relative mb-10">
      <Image
        src={imageSrc}
        width={16}
        height={16}
        alt={alt}
        className="absolute left-3 top-9 h-4 w-4"
      />
      {children}
      <h3 className="font-semibold text-slate-700">{h3}</h3>
      <input
        className="h-10 w-48 rounded-lg border-gray-500 bg-slate-100 pl-8 sm:w-80"
        type={inputType}
        placeholder={placeholder}
      />
    </div>
  );
}
