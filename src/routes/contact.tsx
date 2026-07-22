import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Asset imports
import engineers from "@/assets/engineers.jpg";
import depot from "@/assets/depot.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — LorVen Systems" },
      {
        name: "description",
        content:
          "Start your engineering enquiry with LorVen Systems. Direct consultation for railway products, signalling design, KAVACH installation, and electronics manufacturing.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    enquiryType: "Products",
    details: "",
  });

  useGSAP(() => {
    // GSAP ScrollTrigger reveals
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div ref={containerRef} className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      
      {/* ── SECTION 1: CINEMATIC HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={engineers}
            alt="LorVen Railway Engineering Team"
            className="w-full h-full object-cover opacity-65 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/10 z-10" />
        </div>

        {/* Content */}
        <div className="container-editorial relative z-20 w-full text-white">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumbs */}
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">Contact</li>
              </ol>
            </nav>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-[64px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Tell us about the system you need to build.
              </h1>
            </div>

            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light max-w-2xl border-l-2 border-steel pl-6 pt-2">
              Our engineering team collaborates with railway authorities, OEMs, and system integrators to deliver fail-safe solutions across India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center bg-white text-ink hover:bg-steel hover:text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm shadow-md"
              >
                Start Your Enquiry →
              </a>
              <a
                href="#office-location"
                className="inline-flex items-center justify-center border border-white/40 text-white hover:border-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm"
              >
                View Office Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SPLIT ENQUIRY FORM & CONTEXT ────────────────────────── */}
      <section id="enquiry-form" className="bg-bg py-20 md:py-28 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal space-y-8">
            <div className="space-y-4">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-extralight leading-tight text-ink uppercase">
                Start Your Engineering Enquiry
              </h2>
            </div>

            <p className="text-base text-ink-muted leading-relaxed font-light">
              LorVen Systems engineers review every project inquiry directly to evaluate technical feasibility, specification requirements, and implementation timelines.
            </p>

            {/* Reassuring Areas of Expertise */}
            <div className="border-t border-rule/20 pt-8 space-y-6">
              <h3 className="text-xs font-mono font-bold text-steel tracking-widest uppercase">
                Areas of Expertise
              </h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Products</h4>
                  <p className="text-xs text-ink-muted font-light leading-relaxed">
                    WLI, IFD, IPS, RDPMS, AHABD, MVIS, and Driving & KAVACH Training Simulators.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Services</h4>
                  <p className="text-xs text-ink-muted font-light leading-relaxed">
                    Electronic Product Development (EPD), Signalling Design, and KAVACH Installation & Commissioning.
                  </p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-ink uppercase tracking-wide">Manufacturing & System Integration</h4>
                  <p className="text-xs text-ink-muted font-light leading-relaxed">
                    SMT & Box-Build EMS at our Hyderabad facility, and multi-vendor S&T integration engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal">
            <div className="p-8 md:p-12 bg-section border border-rule/25 rounded shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-steel/10 text-steel mx-auto flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-ink uppercase">Enquiry Received</h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light max-w-md mx-auto">
                    Thank you for reaching out. A senior LorVen engineer will review your project requirements and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-mono font-bold text-steel hover:text-ink uppercase tracking-wider underline cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Organization / Railway Zone *
                      </label>
                      <input
                        id="organization"
                        type="text"
                        required
                        placeholder="e.g. South Central Railway / OEM"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="enquiryType" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                      Enquiry Category *
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-sm"
                    >
                      <option value="Products">Products (WLI, IFD, IPS, RDPMS, AHABD, Simulators)</option>
                      <option value="Services">Services (EPD, Signalling Design, KAVACH Installation)</option>
                      <option value="Manufacturing">Electronics Manufacturing Services (EMS)</option>
                      <option value="System Integration">S&T System Integration</option>
                      <option value="General">General Corporate Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-xs font-mono font-semibold uppercase tracking-wider text-ink block">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      id="details"
                      required
                      rows={5}
                      placeholder="Please outline system specifications, target deployment schedule, or technical queries..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel focus:outline-none transition-colors rounded-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-ink text-white hover:bg-steel py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm cursor-pointer shadow-md"
                  >
                    Submit Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: CLEAN HORIZONTAL CONTACT STRIP ──────────────────────── */}
      <section className="bg-bg py-16 border-t border-rule/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-rule/20 gsap-reveal">
            
            {/* Column 1 */}
            <div className="space-y-3 pt-6 md:pt-0 md:pr-8">
              <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase block">
                CORPORATE OFFICE
              </span>
              <h3 className="text-lg font-bold text-ink uppercase">LorVen Systems Pvt. Ltd.</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Plot 14, IDA Mallapur, Hyderabad 500076, Telangana, India
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-3 pt-6 md:pt-0 md:px-8">
              <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase block">
                ENGINEERING ENQUIRIES
              </span>
              <div className="space-y-1 text-sm text-ink-muted leading-relaxed font-light">
                <p>Email: <a href="mailto:contact@lorvensystems.com" className="text-ink font-semibold hover:text-steel transition-colors">contact@lorvensystems.com</a></p>
                <p>Phone: <a href="tel:+914027150000" className="text-ink font-semibold hover:text-steel transition-colors">+91 40 2715 0000</a></p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-3 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-mono font-bold text-steel tracking-widest uppercase block">
                BUSINESS ENQUIRIES
              </span>
              <div className="space-y-1 text-sm text-ink-muted leading-relaxed font-light">
                <p>Tenders: <a href="mailto:bids@lorvensystems.com" className="text-ink font-semibold hover:text-steel transition-colors">bids@lorvensystems.com</a></p>
                <p>Hours: Mon – Sat | 09:00 – 18:00 IST</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: OFFICE LOCATION & GOOGLE MAP ───────────────────────── */}
      <section id="office-location" className="bg-section py-20 border-t border-rule/20">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-3 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">FACILITY LOCATION</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Corporate Headquarters & Engineering Facility
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              Plot 14, IDA Mallapur, Hyderabad 500076, Telangana, India
            </p>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="relative w-full h-[450px] bg-surface rounded border border-rule/20 overflow-hidden shadow-sm gsap-reveal">
            <iframe
              title="LorVen Systems Corporate Headquarters - IDA Mallapur, Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.49573887163!2d78.57143977598822!3d17.436005701402284!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b4d1b74c4d5%3A0x6b29d4d54bd84bd0!2sIDA%20Mallapur%2C%20Hyderabad%2C%20Telangana%20500076!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ENTERPRISE CTA ──────────────────────────────────────── */}
      <section className="bg-ink text-on-dark py-16 md:py-20 border-t border-ink relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={depot}
            alt="Wayside Maintenance Depot"
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>
        
        <div className="container-editorial relative z-20 flex justify-center text-center">
          <div className="max-w-4xl space-y-6 gsap-reveal">
            <span className="eyebrow !text-white/40 block">DISCUSS REQUIREMENTS</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-white uppercase">
              Discuss your deployment requirements with our engineering team
            </h2>
            <div className="pt-8">
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-colors duration-300 rounded-sm shadow-md"
              >
                Consult Our Engineers →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
