import Image from "next/image";

export default function PricingOptions() {
  const pricingOption1 = {
    title: "Group",
    desc: "Perfect for side or hobby projects",
    price: "$50",
    interval: "/month",
    features: [
      "Up to 5 users",
      "Collaboration features",
      "Smart analytics",
      "30-day free trial",
    ],
  };

  const pricingOption2 = {
    title: "Personal",
    desc: "Perfect for small teams",
    price: "$100",
    interval: "/team/month",
    features: [
      "Up to 50 users",
      "Collaboration features",
      "Smart analytics",
      "30-day free trial",
    ],
  };

  const pricingOption3 = {
    title: "Organization",
    desc: "Perfect for organizations",
    price: "$150",
    interval: "/user/month",
    features: [
      "Unlimited users",
      "Collaboration features",
      "Smart analytics",
      "30-day free trial",
    ],
  };
  return (
    <article className="mt-20 flex h-full w-full flex-col sm:flex-row">
      <div
        id="option-1"
        className="h-[25rem] flex-1 rounded-l-lg bg-gray-100 p-5 sm:mb-4 sm:mt-4"
      >
        <h2 className="mb-1 text-2xl font-bold sm:text-xl lg:text-3xl xl:text-5xl">
          {pricingOption1.title}
        </h2>
        <p>{pricingOption1.desc}</p>
        <p className="relative mb-2 mt-2 py-2 text-2xl font-bold sm:text-xl lg:text-3xl xl:text-5xl">
          {pricingOption1.price}
          <span className="left-30 absolute top-0 z-10 text-sm font-light text-gray-500">
            {pricingOption1.interval}
          </span>
        </p>
        <div className="flex h-10 items-baseline">
          <Image src="/check.png" alt="check" width={16} height={16} />
          <p className="mb-5 pl-2">{pricingOption1.features[0]}</p>
        </div>
        <div className="flex h-10 items-baseline">
          <Image src="/check.png" alt="check" width={16} height={16} />
          <p className="mb-5 pl-2">{pricingOption1.features[1]}</p>
        </div>
        <div className="flex h-10 items-baseline">
          <Image src="/closeblack.png" alt="check" width={16} height={16} />
          <p className="mb-5 pl-2">{pricingOption1.features[2]}</p>
        </div>
        <div className="flex h-10 items-baseline">
          <Image src="/closeblack.png" alt="check" width={16} height={16} />
          <p className="mb-5 pl-2">{pricingOption1.features[3]}</p>
        </div>
        <button className="ml-[10%] mt-2 h-10 w-4/5 rounded border border-indigo-400 bg-white p-2 text-base font-medium text-indigo-400">
          Upgrade
        </button>
      </div>

      <div
        id="option-2"
        className="relative h-[27rem] flex-1 basis-4 rounded-lg border p-5 shadow-xl"
      >
        <p className="absolute right-4 rounded-full bg-pink-500 p-2 text-white">
          Popular
        </p>
        <h2 className="mb-1 text-2xl font-bold text-indigo-500 sm:text-xl lg:text-3xl xl:text-5xl">
          {pricingOption2.title}
        </h2>
        <p>{pricingOption2.desc}</p>
        <p className="relative mb-2 mt-2 py-2 text-2xl font-bold sm:text-xl lg:text-3xl xl:text-5xl">
          {pricingOption2.price}
          <span className="left-30 absolute top-0 z-10 text-sm font-light text-gray-500">
            {pricingOption2.interval}
          </span>
        </p>
        <div>
          {pricingOption2.features.map((feature) => (
            <div key={feature} className="flex h-10 items-baseline">
              <Image src="/check.png" alt="check" width={16} height={16} />
              <p className="mb-5 pl-2">{feature}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="btn btn--primary ml-[10%] mt-2 h-10 w-4/5 rounded">
            Upgrade
          </button>
        </div>
      </div>

      <div
        id="option-3"
        className="h-[25rem] flex-1 rounded-r-lg bg-gray-100 p-5 sm:mt-4"
      >
        <h2 className="mb-1 text-2xl font-bold sm:text-xl lg:text-3xl xl:text-5xl">
          {pricingOption3.title}
        </h2>
        <p>{pricingOption3.desc}</p>
        <p className="relative mb-2 mt-2 py-2 text-2xl font-bold sm:text-xl lg:text-3xl xl:text-5xl">
          {pricingOption3.price}
          <span className="left-30 absolute top-0 z-10 text-sm font-light text-gray-500">
            {pricingOption3.interval}
          </span>
        </p>
        <div>
          {pricingOption3.features.map((feature) => (
            <div key={feature} className="flex h-10 items-baseline">
              <Image src="/check.png" alt="check" width={16} height={16} />
              <p className="mb-5 pl-2">{feature}</p>
            </div>
          ))}
        </div>
        <button className="ml-[10%] mt-2 h-10 w-4/5 rounded border border-indigo-400 bg-white p-2 text-base font-medium text-indigo-400">
          &#9993; Contact sale
        </button>
      </div>
    </article>
  );
}
