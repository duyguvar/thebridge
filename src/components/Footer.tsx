import Link from "next/link";
import Logo from "./Logo";
import { serviceBoundaryStatement, tagline } from "@/lib/data";

const columns = [
  {
    heading: "Segments",
    links: [
      { href: "/segments/international", label: "International Companies" },
      { href: "/segments/gcc-organizations", label: "GCC Organizations" },
      { href: "/segments/government", label: "Government & Public Sector" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/register", label: "Register" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-8xl px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {tagline}
            </p>
            <p className="mt-5 text-sm text-white/50">
              Masdar City, Abu Dhabi, UAE
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/15">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-3">
            Service Boundary
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-white/70">
            {serviceBoundaryStatement}
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} The Bridge Consulting and Advisory Limited. All rights reserved.</p>
          <p>Engineering, AI, Aviation &amp; Business Consultancy &mdash; GCC</p>
        </div>
      </div>
    </footer>
  );
}
