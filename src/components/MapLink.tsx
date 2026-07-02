const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Masdar+City%2C+Abu+Dhabi%2C+UAE";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Masdar+City,+Abu+Dhabi,+UAE&output=embed";

export default function MapLink() {
  return (
    <div className="border border-black/15 rounded-xl overflow-hidden">
      <iframe
        src={MAPS_EMBED_URL}
        title="Masdar City, Abu Dhabi, UAE"
        className="w-full h-40 sm:h-48"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] border-t border-black/15 hover:bg-black hover:text-white transition-colors"
      >
        Get Directions &rarr;
      </a>
    </div>
  );
}
