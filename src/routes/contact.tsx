import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

// Asset imports
import depot from "@/assets/depot.jpg";
import engineers from "@/assets/engineers.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — LorVen Systems" },
      {
        name: "description",
        content:
          "Get in touch with our engineering team for technical consultations and project inquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully. Our engineering team will review and reply within 24 hours.");
  };

  return (
    <div className="bg-bg text-ink min-h-screen selection:bg-ink selection:text-on-dark antialiased font-sans">
      {/* Navigation offset */}
      <div className="pt-[56px]" />

      {/* ── 1. HERO SECTION ─────────────────────── */}
      <section className="relative w-full h-[360px] md:h-[400px] bg-ink overflow-hidden flex items-center">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={engineers}
            alt="LorVen Engineers"
            className="w-full h-full object-cover object-center opacity-45 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/55 z-10" />
        </div>

        {/* Content Area */}
        <div className="relative z-20 w-full max-w-[1320px] mx-auto px-4 md:px-8 text-white space-y-4">
          {/* Breadcrumb */}
          <nav className="text-sm font-normal text-white/90">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50 font-light">&gt;</li>
              <li className="text-white font-semibold">Contact</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light uppercase tracking-tight leading-none text-white pt-2">
            Contact Us
          </h1>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#form-section"
              className="inline-flex items-center justify-center bg-white text-ink border border-white hover:bg-transparent hover:text-white py-3 px-6 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-none"
            >
              Contact Engineering Team
            </a>
            <a
              href="#locations-section"
              className="inline-flex items-center justify-center border border-white/40 text-white hover:border-white py-3 px-6 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-none"
            >
              View Locations
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. CONTACT INFORMATION ──────────────── */}
      <section className="pt-16 pb-12 max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-rule/20 bg-white p-8 flex flex-col justify-between rounded-none min-h-[220px]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-steel">
                {/* Office Icon */}
                <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
                <h3 className="text-xl md:text-2xl font-light text-ink uppercase tracking-wide">
                  Corporate Office
                </h3>
              </div>
              <div className="space-y-2 text-base text-ink-muted font-light leading-relaxed">
                <p>LorVen Systems Pvt. Ltd.</p>
                <p>Bengaluru High-Tech Industrial Zone, Karnataka, India</p>
                <p>Phone: +91 80 4912 3000</p>
                <p>Email: contact@lorvensystems.com</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-rule/20 bg-white p-8 flex flex-col justify-between rounded-none min-h-[220px]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-steel">
                {/* Support Icon */}
                <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.79 1.79 0 1114.7 18.5l-5.83-5.83M11.42 15.17L9.2 12.95M11.42 15.17l2.22-2.22M9.2 12.95L3.375 7.125A1.79 1.79 0 115.925 4.575L11.75 10.4M9.2 12.95L11.42 10.73M11.75 10.4l2.22-2.22m0 0L19.8 2.35a1.79 1.79 0 112.55 2.55L16.5 10.75m-2.525-.35L11.75 12.625" />
                </svg>
                <h3 className="text-xl md:text-2xl font-light text-ink uppercase tracking-wide">
                  Engineering Support
                </h3>
              </div>
              <div className="space-y-2 text-base text-ink-muted font-light leading-relaxed">
                <p>24/7 Priority Assistance Line</p>
                <p>Hotline: +91 80 4912 3099</p>
                <p>Support: support@lorvensystems.com</p>
                <p>Working Hours: Mon - Sat | 08:00 - 20:00 IST</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-rule/20 bg-white p-8 flex flex-col justify-between rounded-none min-h-[220px]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-steel">
                {/* Enquiries Icon */}
                <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.045 9.045 0 003-7.24 9 9 0 10-18 0 9.045 9.045 0 003 7.24M12 11.25v5m0 0h.008v.008H12v-.008zM12 7.5h.008v.008H12V7.5z" />
                </svg>
                <h3 className="text-xl md:text-2xl font-light text-ink uppercase tracking-wide">
                  Business Enquiries
                </h3>
              </div>
              <div className="space-y-2 text-base text-ink-muted font-light leading-relaxed">
                <p>For custom configurations & bids</p>
                <p>Tenders: bids@lorvensystems.com</p>
                <p>Partnerships: partner@lorvensystems.com</p>
                <p>Project Planning: design@lorvensystems.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="border-t border-rule/20" />
      </div>

      {/* ── 3. OFFICE LOCATIONS ─────────────────── */}
      <section id="locations-section" className="py-16 max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
              LOCATIONS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-light text-ink uppercase tracking-wide">
              Office Locations & Facilities
            </h2>
            
            <div className="space-y-6 pt-4 border-t border-rule/10">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-ink uppercase tracking-wide">Corporate HQ</h4>
                <p className="text-base text-ink-muted font-light">Block B, Industrial Integration Hub, Outer Ring Road, Bengaluru, KA</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-ink uppercase tracking-wide">Manufacturing Facility</h4>
                <p className="text-base text-ink-muted font-light">Plot 24, Electronics City Phase II, Bengaluru, KA</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-ink uppercase tracking-wide">Regional Office</h4>
                <p className="text-base text-ink-muted font-light">Sector V, Salt Lake, Kolkata, West Bengal</p>
              </div>
            </div>
          </div>

          {/* Right Column: Details without map */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-rule/15 p-8">
            <h3 className="text-xl font-light text-ink uppercase tracking-wide border-b border-rule/10 pb-3">
              Visitor Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <div className="space-y-2">
                <span className="font-semibold text-ink uppercase text-xs tracking-wider block">Office Hours</span>
                <p className="text-ink-muted font-light">Mon - Fri | 09:00 - 18:00 IST</p>
                <p className="text-ink-muted font-light">Closed on national holidays</p>
              </div>
              <div className="space-y-2">
                <span className="font-semibold text-ink uppercase text-xs tracking-wider block">Security Access</span>
                <p className="text-ink-muted font-light">Visitor badge registration required at the reception desk.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-rule/10 text-base">
              <div className="space-y-2">
                <span className="font-semibold text-ink uppercase text-xs tracking-wider block">Parking</span>
                <p className="text-ink-muted font-light">Allocated visitor parking spaces available in Block B garage.</p>
              </div>
              <div className="space-y-2">
                <span className="font-semibold text-ink uppercase text-xs tracking-wider block">Transit Routes</span>
                <p className="text-ink-muted font-light">10 minutes drive from Outer Ring road metro station access.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="border-t border-rule/20" />
      </div>

      {/* ── 4. CONTACT FORM (Centered) ─────────── */}
      <section id="form-section" className="py-16 max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
              INQUIRIES
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-light text-ink uppercase tracking-wide">
              Submit Consultation Form
            </h2>
          </div>

          {/* Form */}
          <div className="bg-white border border-rule/15 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-bg border border-rule/20 px-4 py-3 text-sm focus:border-ink outline-none transition-colors rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-bg border border-rule/20 px-4 py-3 text-sm focus:border-ink outline-none transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-bg border border-rule/20 px-4 py-3 text-sm focus:border-ink outline-none transition-colors rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-bg border border-rule/20 px-4 py-3 text-sm focus:border-ink outline-none transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="country" className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                    Country / Region
                  </label>
                  <input
                    id="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-bg border border-rule/20 px-4 py-3 text-sm focus:border-ink outline-none transition-colors rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                    Subject / Division
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-bg border border-rule/20 px-4 py-3 text-sm focus:border-ink outline-none transition-colors rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                  Message / Requirements Description
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-bg border border-rule/20 px-4 py-3 text-sm focus:border-ink outline-none transition-colors rounded-none resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-ink-muted font-light leading-relaxed select-none">
                  I consent to sharing this project data. LorVen Systems protects personal data and engineering schematics under strict confidentiality agreements.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-ink text-on-dark hover:bg-steel py-4 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-300 rounded-none cursor-pointer"
              >
                Submit Consultation Form
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
