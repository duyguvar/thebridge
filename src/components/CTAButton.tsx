import Link from "next/link";

export default function CTAButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outline-light";
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200";

  const styles: Record<string, string> = {
    solid: "bg-black text-white hover:bg-bridge-charcoal",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    "outline-light":
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
