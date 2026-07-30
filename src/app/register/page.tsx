import type { Metadata } from "next";
import LogoWatermark from "@/components/LogoWatermark";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Register | The Bridge Consulting Group",
  description:
    "Register your organization with The Bridge Consulting Group — for international companies, GCC organizations, and government institutions.",
};

export default function RegisterPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden flex items-center h-[280px] sm:h-[310px] lg:h-[340px]">
        <div className="w-full mx-auto max-w-8xl px-6 lg:px-10 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
            Register
          </p>
          <h1 className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-tight tracking-wide">
            Register Your Organization
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            Tell us who you are and what you are looking for — we will route
            your registration to the right starting point.
          </p>
        </div>
        <LogoWatermark
          inverted
          className="hidden lg:block right-[-40px] top-1/2 -translate-y-1/2 w-[380px] xl:w-[460px] h-auto"
        />
      </section>

      <section className="mx-auto max-w-8xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="max-w-3xl">
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
