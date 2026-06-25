import { Link } from "@tanstack/react-router";
import { COMPANY, PRODUCT_INDEX, SERVICE_INDEX } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-0 bg-ink text-on-dark border-t border-white/5">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-12 gap-8 text-sm">
          {/* Column 1: Logo & Address */}
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <Logo id="footer-logo" idPrefix="footer" className="text-white w-36 md:w-44 h-auto" />
            <address className="mt-5 not-italic text-sm leading-relaxed opacity-70 max-w-xs">
              <strong>{COMPANY.legal}</strong>
              <br />
              {COMPANY.hq.address}
            </address>
          </div>

          {/* Column 2: Products & Services */}
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow !text-on-dark/60 !text-[11px] !tracking-[0.12em]">Products & Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PRODUCT_INDEX.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/products/${p.slug}`}
                    className="link-underline opacity-80 hover:opacity-100"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
              {SERVICE_INDEX.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="link-underline opacity-80 hover:opacity-100"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-span-6 md:col-span-2">
            <p className="eyebrow !text-on-dark/60 !text-[11px] !tracking-[0.12em]">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="link-underline opacity-80 hover:opacity-100">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="link-underline opacity-80 hover:opacity-100">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="link-underline opacity-80 hover:opacity-100">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline opacity-80 hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Enquiry & Legal */}
          <div className="col-span-12 md:col-span-3 flex flex-col justify-between">
            <div>
              <p className="eyebrow !text-on-dark/60 !text-[11px] !tracking-[0.12em]">Enquiries</p>
              <div className="mt-4 text-sm space-y-1.5 opacity-80">
                <p>{COMPANY.hq.phone}</p>
                <p>
                  <a href={`mailto:${COMPANY.hq.email}`} className="link-underline">
                    {COMPANY.hq.email}
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom row: copyright & legal links */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.12em] text-on-dark/50">
          <span>
            © {year} LorVen Systems Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="link-underline">
              Privacy
            </Link>
            <Link to="/terms" className="link-underline">
              Terms
            </Link>
            <span className="opacity-40 tracking-[0.08em]">Designed by Areneaden</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
