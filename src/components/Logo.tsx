import Image from "next/image";
import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        src={inverted ? "/logo-lockup-white.png" : "/logo-lockup-black.png"}
        alt="The Bridge"
        width={1448}
        height={784}
        priority
        className="h-14 sm:h-16 w-auto"
      />
    </Link>
  );
}
