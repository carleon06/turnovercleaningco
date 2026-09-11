import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { DocumentationShowcase } from "@/components/DocumentationShowcase";
import { Faq } from "@/components/Faq";
import { ContactSection } from "@/components/ContactSection";
import { Icon } from "@/components/Icon";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ProcessSteps />
        <DocumentationShowcase />

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-ink-900 text-brass-300">
              <Icon name="message-circle" className="size-6" />
            </span>
            <h2 className="mt-5 font-display text-3xl text-ink-900 sm:text-4xl">
              Ready to stop worrying about turnovers?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-500">
              Tell us about your listing and we&apos;ll put a plan together —
              cleaning, restocking, and documentation, all handled.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-ink-800"
            >
              Get a free quote
              <Icon name="arrow-right" className="size-4" />
            </a>
          </div>
        </section>

        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
