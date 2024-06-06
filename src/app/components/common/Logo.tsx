import Link from "next/link";
import Image from "next/image";

function Learn() {
  return (
    <Link href="/" className="flex">
      <Image
        src="/learn.png"
        alt="learn-logo"
        width={50}
        height={36}
        className="inline-block h-9"
      />
      <span className="-ml-1 text-4xl font-semibold">learn</span>
    </Link>
  );
}

export default Learn;
