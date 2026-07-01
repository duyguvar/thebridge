export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <p
          className={`text-xs font-medium uppercase tracking-[0.3em] mb-3 ${
            inverted ? "text-white/60" : "text-black/50"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-semibold uppercase tracking-wide ${
          inverted ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            inverted ? "text-white/70" : "text-black/60"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
