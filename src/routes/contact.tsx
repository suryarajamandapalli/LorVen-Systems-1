import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/PageHero";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LorVen Systems" },
      {
        name: "description",
        content: "Get in touch with LorVen Systems for engineering enquiries, supply or careers.",
      },
      { property: "og:title", content: "Contact — LorVen Systems" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <PageHero
        eyebrow="X — Contact"
        index="X/00"
        title="Tell us about the system you need to build."
        lede="The shortest route is a few sentences about your programme — operator, timeline, the subsystem you have in mind. An engineer will reply, not a salesperson."
      />

      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-12 py-24">
          {/* Offices */}
          <div className="col-span-12 md:col-span-5">
            <span className="eyebrow">Offices</span>
            <div className="mt-8 space-y-12">
              <div>
                <p className="num-mono text-[11px] text-ink-muted">Headquarters</p>
                <h3 className="mt-2 text-2xl font-light text-ink">
                  {COMPANY.hq.city}, {COMPANY.hq.country}
                </h3>
                <address className="mt-3 not-italic text-base leading-relaxed text-ink-muted">
                  {COMPANY.hq.address}
                  <br />
                  {COMPANY.hq.phone}
                  <br />
                  <a className="link-underline text-ink" href={`mailto:${COMPANY.hq.email}`}>
                    {COMPANY.hq.email}
                  </a>
                </address>
              </div>
              <div>
                <p className="num-mono text-[11px] text-ink-muted">Manufacturing</p>
                <h3 className="mt-2 text-2xl font-light text-ink">{COMPANY.plant.city}</h3>
                <address className="mt-3 not-italic text-base leading-relaxed text-ink-muted">
                  {COMPANY.plant.address}
                </address>
              </div>
              <div>
                <p className="num-mono text-[11px] text-ink-muted">Careers</p>
                <a
                  className="link-underline mt-2 inline-block text-2xl font-light text-ink"
                  href="mailto:careers@lorvensystems.com"
                >
                  careers@lorvensystems.com
                </a>
              </div>
            </div>

            <div className="mt-12 aspect-[4/3] w-full overflow-hidden border border-rule">
              <iframe
                title="LorVen Systems HQ on map"
                src="https://maps.google.com/maps?q=Hyderabad%20IDA%20Mallapur&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <span className="eyebrow">Enquiry</span>
            {sent ? (
              <div className="mt-10 border-t border-rule pt-10">
                <p className="num-mono text-[11px] text-ink-muted">Status — Received</p>
                <h3 className="mt-4 text-3xl font-light text-ink md:text-4xl">
                  Thank you. We will reply within two working days.
                </h3>
                <p className="mt-6 max-w-md text-base text-ink-muted">
                  An engineer in the relevant practice will read your note and respond directly. For
                  urgent matters, call {COMPANY.hq.phone}.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="link-underline mt-10 inline-flex items-center text-[12px] font-medium uppercase tracking-[0.16em] text-ink py-3 px-4 -my-3 -mx-4 min-h-[44px]"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule pt-10"
              >
                <Field id="name" label="Name" required />
                <Field id="company" label="Company" required />
                <Field id="email" label="Email" type="email" required />
                <Field id="phone" label="Phone" type="tel" />
                <div className="col-span-2">
                  <label
                    htmlFor="interest"
                    className="num-mono block text-[11px] uppercase tracking-[0.16em] text-ink-muted"
                  >
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-3 w-full border-0 border-b border-rule bg-transparent py-3 text-lg text-ink focus:border-ink focus:outline-none"
                  >
                    <option>SMT Electronics</option>
                    <option>Electric Locomotive</option>
                    <option>Coaches & Wagons</option>
                    <option>Electrical Systems</option>
                    <option>Design service</option>
                    <option>Installation service</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="num-mono block text-[11px] uppercase tracking-[0.16em] text-ink-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full resize-none border-0 border-b border-rule bg-transparent py-3 text-lg text-ink focus:border-ink focus:outline-none"
                  />
                </div>
                <div className="col-span-2 mt-4 flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    By submitting, you agree to our privacy policy.
                  </p>
                  <button
                    type="submit"
                    className="link-underline inline-flex items-center text-[12px] font-medium uppercase tracking-[0.16em] text-ink py-3 px-4 -my-3 -mx-4 min-h-[44px]"
                  >
                    Send enquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="col-span-2 md:col-span-1">
      <label
        htmlFor={id}
        className="num-mono block text-[11px] uppercase tracking-[0.16em] text-ink-muted"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-3 w-full border-0 border-b border-rule bg-transparent py-3 text-lg text-ink focus:border-ink focus:outline-none"
      />
    </div>
  );
}
