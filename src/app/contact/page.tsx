import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import LogoWatermark from "@/components/LogoWatermark";
import MapLink from "@/components/MapLink";

export const metadata: Metadata = {
  title: "Contact | The Bridge Consulting and Advisory Limited",
  description:
    "Request a consultation with The Bridge Consulting and Advisory Limited to discuss your GCC engineering, AI, aviation, or business consultancy priorities.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[280px] sm:h-[310px] lg:h-[340px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            Contact
          </p>
          <h1 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            Request a Consultation
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Tell us about your organization and objectives. Every engagement
            begins with a conversation, not a proposal.
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40 mb-5">
              Direct Contact
            </p>
            <div className="space-y-6 text-sm sm:text-base text-black/70">
              <div>
                <p className="font-semibold text-black">Email</p>
                <p>contact@thebridgeconsulting.ae</p>
              </div>
              <div>
                <p className="font-semibold text-black">Data Protection</p>
                <p>
                  For data protection inquiries or to exercise your data
                  subject rights, contact privacy@thebridgeconsulting.ae or
                  review our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-black">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div>
                <p className="font-semibold text-black">Response Time</p>
                <p>We respond to all inquiries within two business days.</p>
              </div>
              <div>
                <p className="font-semibold text-black">Confidentiality</p>
                <p>
                  All information shared is treated as confidential and used
                  solely to scope a potential engagement.
                </p>
              </div>
            </div>

            <div className="mt-8 w-2/3">
              <p className="font-semibold text-black text-sm sm:text-base">Address</p>
              <p className="text-sm sm:text-base text-black/70 mb-3">
                Masdar City, Abu Dhabi, UAE
              </p>
              <MapLink />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
