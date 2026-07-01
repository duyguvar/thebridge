import Image from "next/image";

export default function LogoWatermark({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={inverted ? "/logo-mark-white.png" : "/logo-mark-black.png"}
      alt=""
      aria-hidden="true"
      width={432}
      height={396}
      className={`pointer-events-none select-none absolute opacity-100 ${className}`}
    />
  );
}
