import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative max-w-[960px] mx-auto flex items-center justify-center w-full h-9">
      <Link
        href="https://github.com/6km/react-quran-website"
        target="_blank"
        className="absolute left-0 transition-opacity opacity-80 hover:opacity-100"
      >
        <Image src="/github.svg" alt="" width={24} height={24} />
      </Link>
      <Image src="/logo.svg" alt="" width={148} height={148} />
    </nav>
  );
}
