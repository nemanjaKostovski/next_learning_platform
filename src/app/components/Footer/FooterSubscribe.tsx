import Image from "next/image";
export default function Subscribe() {
  return (
    <div className="mb-10 text-center sm:text-left">
      <h2 className="text-2xl font-bold text-indigo-500">
        Subscribe to our newsletter
      </h2>
      <p className="mb-10">For product announcements and exclusive insights</p>
      <div className="relative">
        <Image
          src="/envelope.png"
          width={16}
          height={16}
          alt="email-icon"
          className="absolute left-3 top-3 h-4 w-4"
        />
        <div className="flex">
          <input
            className="h-10 w-48 rounded-lg rounded-r-none border-[1px] border-gray-500 pl-8 sm:w-80"
            type="text"
            placeholder="Input your email"
          />
          <button className="btn btn--primary w-32 rounded-lg rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
