import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Turnover Cleaning Co.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl text-ink-900 sm:text-4xl">
            Privacy Policy
          </h1>

          <div className="mt-8 space-y-6 text-sm leading-7 text-ink-600">
            <p>
              NOTICE: Please read the Privacy Policy set forth below
              carefully, as it is designed to provide important information
              on how and why we collect, use, store and share your personal
              information. It also outlines the rights you can exercise
              regarding your personal information and how you can contact
              us if you have any questions or complaints.
            </p>

            <p>
              The Privacy Policy set forth below is legally binding. By
              visiting, viewing or using this website and/or by using any
              program, product, course or service from us, you agree to be
              bound by this Privacy Policy.
            </p>

            <p>
              Your privacy is important to Turnover Cleaning Co.,
              www.turnovercleaningco.com, which is operated by Turnover
              Cleaning Co.
            </p>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                What Information We Collect
              </h2>
              <p className="mt-3">
                We only collect your phone number for the purpose of
                sending you important updates and information. We will
                never sell or share your phone number with third-party
                marketers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                How We Use Your Information
              </h2>
              <p className="mt-3">
                We use your phone number to send you messages about our
                products and services, including promotions, offers, and
                important announcements. We may also share your phone
                number with trusted service providers who help us deliver
                these messages and provide customer support. These
                providers are obligated by contract to keep your
                information confidential.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                Controlling Your Information
              </h2>
              <p className="mt-3">
                You have the right to choose what information you receive
                from us. You can easily opt out of receiving messages at
                any time by replying &ldquo;STOP&rdquo; to any message you
                receive.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                Updates to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We
                will post any changes on our website and notify you via
                email if applicable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                Alternative Forms
              </h2>
              <p className="mt-3">
                You may print this Privacy Policy by using the
                &ldquo;Print&rdquo; function on your browser.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink-900">
                How to Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions or complaints related to this
                Privacy Policy, or would like to exercise any of your
                rights, please contact us using the information below.
              </p>
              <p className="mt-3">
                By email:{" "}
                <a
                  href="mailto:info@turnovercleaningco.com"
                  className="font-medium text-brass-600 underline"
                >
                  info@turnovercleaningco.com
                </a>
                <br />
                By phone:{" "}
                <a
                  href="tel:+17868700260"
                  className="font-medium text-brass-600 underline"
                >
                  (786) 870-0260
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
