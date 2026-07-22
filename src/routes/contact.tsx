import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Asset imports
import depot from "@/assets/depot.jpg";
import locoHeroReal from "@/assets/loco-hero-real.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — LorVen Systems" },
      {
        name: "description",
        content:
          "Start your engineering enquiry with LorVen Systems for railway products, signalling design, electronics manufacturing, and field commissioning.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    projectCategory: "Railway Products",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(() => {
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
    setIsSubmitted(true);
  };

  const supportCards = [
    {
      title: "Products",
      desc: "Questions about railway products, technical datasheets, and equipment specifications.",
      email: "contact@lorvensystems.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-steel">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Services",
      desc: "Engineering consultation, signalling design, KAVACH deployment, and project execution.",
      email: "contact@lorvensystems.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-steel">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Business",
      desc: "OEM partnerships, tender participation, contract manufacturing, and procurement.",
      email: "contact@lorvensystems.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-steel">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const whyContact = [
    {
      title: "Engineering Consultation",
      desc: "Direct technical dialogue with experienced railway systems and electronics engineers."
    },
    {
      title: "Custom Development",
      desc: "Tailored hardware, firmware, and software engineering for specialized railway applications."
    },
    {
      title: "Manufacturing Support",
      desc: "In-house SMT assembly, box-build, and IPC Class 3 qualified manufacturing at our Hyderabad facility."
    },
    {
      title: "Project Execution",
      desc: "Turnkey installation, field verification, and commissioning support across zonal railways."
    }
  ];

  return (
    <div ref={containerRef} className="bg-bg text-ink min-h-screen selection:bg-ink selection:text-on-dark antialiased font-sans">
      
      {/* ── 1. HERO SECTION ─────────────────────── */}
      <section className="relative min-h-[85vh] bg-ink overflow-hidden flex flex-col justify-center pb-20 pt-28">
        {/* Full-width Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={locoHeroReal}
            alt="LorVen Railway Engineering"
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 z-10" />
        </div>

        {/* Content */}
        <div className="container-editorial relative z-20 w-full text-white">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumb */}
            <nav className="text-xs uppercase tracking-wider text-white/50">
              <ol className="flex items-center gap-2 flex-wrap font-semibold">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="text-white/20 font-light">&gt;</li>
                <li className="text-white">Contact</li>
              </ol>
            </nav>

            <div className="space-y-3">
              <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">CONTACT</span>
              <h1 className="text-4xl md:text-6xl lg:text-[64px] font-light uppercase tracking-tight leading-tight text-white max-w-4xl">
                Tell us about the system you need to build.
              </h1>
            </div>

            <p className="text-base md:text-xl text-white/90 leading-relaxed font-light max-w-3xl border-l-2 border-steel pl-6 pt-2">
              Whether you're planning a signalling system, rolling stock solution, electronic product, manufacturing project or engineering service, our team is ready to help.
            </p>

            {/* Three Clean Contact Items (Matching Inspiration Image) */}
            <div className="pt-8 border-t border-white/15 space-y-4 max-w-3xl">
              <div className="flex items-start gap-4 text-sm text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-steel flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="leading-relaxed pt-1">
                  LorVen Systems Pvt. Ltd. · Plot 14, IDA Mallapur, Hyderabad 500076, Telangana, India
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-steel flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <a href="mailto:contact@lorvensystems.com" className="hover:text-steel transition-colors pt-0.5">
                  contact@lorvensystems.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-steel flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c.135.263.409.76.908 1.458.554.776 1.258 1.624 2.11 2.476.852.852 1.7 1.556 2.476 2.11.698.499 1.195.773 1.458.908l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C9.03 22.5 1.5 14.97 1.5 5.25V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <a href="tel:+914027150000" className="hover:text-steel transition-colors pt-0.5">
                  +91 40 2715 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROJECT ENQUIRY (Two-Column Layout) ──────── */}
      <section className="bg-bg py-20 md:py-28 border-t border-rule/20">
        <div className="container-editorial grid grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-5 gsap-reveal space-y-6">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">ENQUIRY</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-ink uppercase">
              Start Your Engineering Enquiry
            </h2>
            <div className="border-t border-rule/20 pt-6 space-y-4 text-base md:text-lg text-ink-muted font-light leading-relaxed">
              <p>
                LorVen Systems supports custom product development, engineering services, electronics manufacturing, and turnkey railway projects.
              </p>
              <p className="text-sm text-ink-muted">
                Tell us about your technical requirements, specifications, or tender details. Our senior engineering team will review your enquiry and respond promptly.
              </p>
            </div>
          </div>

          {/* Right Column: Large Premium Form */}
          <div className="col-span-12 lg:col-span-7 gsap-reveal">
            <div className="bg-section border border-rule/25 p-8 md:p-12 rounded shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-steel/20 text-steel flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-light text-ink uppercase">Enquiry Received</h3>
                  <p className="text-sm text-ink-muted max-w-md mx-auto font-light">
                    Thank you for contacting LorVen Systems. Our engineering team will review your enquiry and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel outline-none transition-colors rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                        Company / Organization *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Railway Unit / Enterprise"
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel outline-none transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                        Official Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel outline-none transition-colors rounded-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel outline-none transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectCategory" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                        Project Category *
                      </label>
                      <select
                        id="projectCategory"
                        value={formData.projectCategory}
                        onChange={(e) => setFormData({ ...formData, projectCategory: e.target.value })}
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel outline-none transition-colors rounded-sm cursor-pointer"
                      >
                        <option value="Railway Products">Railway Products</option>
                        <option value="Signalling & Telecom">Signalling & Telecom</option>
                        <option value="KAVACH ATP">KAVACH ATP</option>
                        <option value="Electronics Manufacturing">Electronics Manufacturing Services</option>
                        <option value="Product Development">Custom Product Development</option>
                        <option value="Testing & Field Commissioning">Testing & Field Commissioning</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief summary of requirements"
                        className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel outline-none transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                      Project Description & Requirements *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share technical scope, specifications, timelines, or tender details..."
                      className="w-full bg-bg border border-rule/30 px-4 py-3.5 text-sm text-ink focus:border-steel outline-none transition-colors rounded-sm resize-none"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="attachment" className="text-xs font-mono font-bold uppercase tracking-wider text-ink block">
                      Optional Attachment (PDF, DOCX, ZIP)
                    </label>
                    <input
                      id="attachment"
                      type="file"
                      className="w-full text-xs text-ink-muted file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-mono file:font-bold file:uppercase file:bg-ink file:text-white hover:file:bg-steel file:cursor-pointer transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-ink text-white hover:bg-steel py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm cursor-pointer shadow-md"
                  >
                    Submit Engineering Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ENGINEERING SUPPORT (3 Horizontal Cards) ─── */}
      <section className="bg-section border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-16">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">SUPPORT</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Engineering Support Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportCards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 bg-bg border border-rule/25 rounded shadow-sm hover:border-steel transition-all duration-300 gsap-reveal flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded bg-section border border-rule/20 flex items-center justify-center group-hover:border-steel transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ink uppercase tracking-tight group-hover:text-steel transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
                <div className="border-t border-rule/15 pt-4">
                  <a
                    href={`mailto:${card.email}`}
                    className="text-xs font-mono font-bold text-steel hover:text-ink transition-colors uppercase tracking-wider block"
                  >
                    {card.email} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR LOCATION (Google Map + Verified Office Info) ─ */}
      <section className="bg-bg border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial grid grid-cols-12 gap-12 items-center">
          {/* Left: Embedded Google Map */}
          <div className="col-span-12 lg:col-span-6 gsap-reveal">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-rule/20 shadow-md">
              <iframe
                title="LorVen Systems Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.319762410884!2d78.5638!3d17.4447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bbf1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sIDA%20Mallapur%2C%20Hyderabad%2C%20Telangana%20500076!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Right: Verified Corporate Info */}
          <div className="col-span-12 lg:col-span-6 gsap-reveal space-y-8">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">OUR LOCATION</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-ink uppercase">
              Corporate Headquarters & Manufacturing Plant
            </h2>

            <div className="space-y-6 border-t border-rule/20 pt-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-steel uppercase tracking-wider block">ADDRESS</span>
                <p className="text-base text-ink font-light leading-relaxed">
                  LorVen Systems Pvt. Ltd.<br />
                  Plot 14, IDA Mallapur, Hyderabad 500076, Telangana, India
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-steel uppercase tracking-wider block">TELEPHONE</span>
                  <a href="tel:+914027150000" className="text-sm text-ink hover:text-steel transition-colors font-light">
                    +91 40 2715 0000
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-steel uppercase tracking-wider block">EMAIL</span>
                  <a href="mailto:contact@lorvensystems.com" className="text-sm text-ink hover:text-steel transition-colors font-light">
                    contact@lorvensystems.com
                  </a>
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-xs font-mono font-bold text-steel uppercase tracking-wider block">WORKING HOURS</span>
                <p className="text-sm text-ink-muted font-light">
                  Monday – Saturday: 09:00 AM – 06:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHY CONTACT LORVEN ───────────────── */}
      <section className="bg-section border-t border-rule/20 py-20 md:py-28">
        <div className="container-editorial space-y-12">
          <div className="gsap-reveal space-y-4 max-w-3xl">
            <span className="eyebrow block text-steel font-bold tracking-widest text-xs uppercase">WHY LORVEN</span>
            <h2 className="text-3xl md:text-4xl font-light leading-snug text-ink uppercase">
              Partnering with LorVen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyContact.map((item, idx) => (
              <div key={idx} className="p-8 bg-bg border border-rule/20 rounded space-y-3 gsap-reveal hover:border-steel transition-colors duration-300">
                <h3 className="text-base font-bold text-ink uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ENTERPRISE CTA ────────────────────── */}
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
                href="#form-section"
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
