import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { PRODUCT_INDEX, SERVICE_INDEX } from "@/lib/site-data";

type Pane = "products" | "services" | null;

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [pane, setPane] = useState<Pane>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navReady, setNavReady] = useState(false);
  const [logoReady, setLogoReady] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setPane(null);
    setMobileOpen(false);
  }, [pathname]);

  // Logo fades in after preloader has fully faded out (~2000ms)
  useEffect(() => {
    const t = window.setTimeout(() => setLogoReady(true), 2000);
    return () => window.clearTimeout(t);
  }, []);

  // Nav items fade in just after logo appears
  useEffect(() => {
    const t = window.setTimeout(() => setNavReady(true), 2000);
    return () => window.clearTimeout(t);
  }, []);

  // transparent = on hero → show white logo + white text
  // solid = scrolled or non-transparent page → warm white bg, charcoal logo + text
  const solid = scrolled || !transparent || pane !== null;

  const openPane = (p: Pane) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setPane(p);
  };
  const schedClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPane(null), 150);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-none" onMouseLeave={schedClose}>
      
      {/* Smooth, composited background & blur overlay */}
      <div
        className={`absolute inset-0 z-[-1] bg-[#F5F5F7] border-b border-rule/30 transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      
      {/* Smooth, composited shadow overlay */}
      <div
        className={`absolute inset-0 z-[-1] shadow-sm transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <div className="container-editorial flex h-[56px] items-center justify-between lg:justify-center lg:gap-x-12">
        {/* Left nav links — slide in from center → left */}
        <nav className="hidden items-center gap-10 text-[11px] lg:text-[13px] font-medium tracking-[0.15em] lg:flex">
          {[
            <NavLink key="home" to="/" current={pathname} solid={solid}>HOME</NavLink>,
            <NavLink key="about" to="/about" current={pathname} solid={solid}>ABOUT</NavLink>,
            <NavTrigger key="products" label="PRODUCTS" active={pane === "products" || pathname.startsWith("/products")} onEnter={() => openPane("products")} onClick={() => setPane(pane === "products" ? null : "products")} solid={solid} />,
          ].map((item, i) => (
            <div
              key={i}
              style={{
                opacity: navReady ? 1 : 0,
                transform: navReady ? "translateX(0)" : "translateX(30px)",
                transition: `opacity 800ms cubic-bezier(0.22,1,0.36,1) ${i * 100}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
              }}
            >
              {item}
            </div>
          ))}
        </nav>

        {/* Centred logo — smooth color crossfade from black → white */}
        <Link
          to="/"
          aria-label="LorVen Systems — home"
          onMouseEnter={() => openPane(null)}
          className="relative shrink-0 flex items-center justify-center"
          style={{ width: "clamp(100px, 8vw, 120px)", height: "auto" }}
        >
          <Logo
            id="navbar-logo"
            idPrefix="nav"
            className={`w-full h-auto select-none overflow-visible transition-colors duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              solid ? "text-ink" : "text-on-dark"
            }`}
            style={{
              opacity: logoReady ? 1 : 0,
              transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), color 1000ms cubic-bezier(0.16,1,0.3,1)`,
            }}
          />
        </Link>

        {/* Right nav links — slide in from center → right */}
        <nav className="hidden items-center gap-10 text-[11px] lg:text-[13px] font-medium tracking-[0.15em] lg:flex">
          {[
            <NavTrigger key="services" label="SERVICES" active={pane === "services" || pathname.startsWith("/services")} onEnter={() => openPane("services")} onClick={() => setPane(pane === "services" ? null : "services")} solid={solid} />,
            <NavLink key="projects" to="/projects" current={pathname} solid={solid}>PROJECTS</NavLink>,
            <NavLink key="contact" to="/contact" current={pathname} solid={solid}>CONTACT</NavLink>,
          ].map((item, i) => (
            <div
              key={i}
              style={{
                opacity: navReady ? 1 : 0,
                transform: navReady ? "translateX(0)" : "translateX(-30px)",
                transition: `opacity 800ms cubic-bezier(0.22,1,0.36,1) ${i * 100}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
              }}
            >
              {item}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className={`lg:hidden p-1.5 rounded-md hover:bg-ink/5 dark:hover:bg-white/5 transition-colors duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid ? "text-ink" : "text-on-dark"
          }`}
        >
          <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group">
            <path
              d="M 2 4 H 20 A 6 6 0 0 1 26 10 V 20"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:translate-y-[1px]"
            />
            <path
              d="M 2 12 H 14 A 6 6 0 0 1 20 18 V 20"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="transition-transform duration-300 group-hover:translate-x-[0.5px] group-hover:translate-y-[0.5px]"
            />
          </svg>
        </button>
      </div>

      {/* Bottom hairline — only visible when solid */}
      <div
        className={`hairline transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mega panel */}
      <MegaPanel
        pane={pane}
        onMouseEnter={() => openPane(pane)}
        onMouseLeave={schedClose}
        onClose={() => setPane(null)}
      />

      {/* Mobile overlay */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </header>
  );
}

function NavLink({
  to,
  current,
  solid,
  children,
}: {
  to: string;
  current: string;
  solid: boolean;
  children: React.ReactNode;
}) {
  const active = to === "/" ? current === "/" : current.startsWith(to);
  const colorClass = solid ? "text-ink" : "text-on-dark";
  const opacityClass = solid
    ? "opacity-100"
    : active
      ? "opacity-100"
      : "opacity-100 hover:opacity-80";
  return (
    <Link
      to={to}
      className={`link-underline transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${colorClass} ${opacityClass}`}
    >
      {children}
    </Link>
  );
}

function NavTrigger({
  label,
  active,
  solid,
  onEnter,
  onClick,
}: {
  label: string;
  active: boolean;
  solid: boolean;
  onEnter: () => void;
  onClick: () => void;
}) {
  const colorClass = solid ? "text-ink" : "text-on-dark";
  const opacityClass = solid
    ? "opacity-100"
    : active
      ? "opacity-100"
      : "opacity-100 hover:opacity-80";
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onClick}
      className={`link-underline transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${colorClass} ${opacityClass}`}
    >
      {label}
    </button>
  );
}

function MegaPanel({
  pane,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: {
  pane: Pane;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}) {
  const open = pane !== null;
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-[56px] left-0 right-0 bg-[#F5F5F7] border-b border-rule/30 shadow-md transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
        open
          ? "max-h-[600px] opacity-100 pointer-events-auto"
          : "max-h-0 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="relative w-full">
        <style dangerouslySetInnerHTML={{ __html: `
          header {
            opacity: 1;
            transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1);
          }
          body.is-loading header {
            opacity: 0 !important;
            pointer-events: none !important;
          }
          @keyframes fadeInMenu {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-menu {
            animation: fadeInMenu 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}} />
        
        {/* Products Content Pane */}
        {pane === "products" && (
          <div className="animate-fade-in-menu container-editorial grid grid-cols-12 gap-8 py-8">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">PRODUCTS</p>
              <p className="mt-4 text-2xl font-light leading-snug text-ink">
                Hardware engineered for the railway operating envelope.
              </p>
              <Link
                to="/products"
                onClick={onClose}
                className="link-underline mt-8 inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-ink"
              >
                Index of all products
              </Link>
            </div>
            <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-3">
              {PRODUCT_INDEX.map((p) => (
                <div key={p.slug} className="flex flex-col">
                  <a href={`/products/${p.slug}`} onClick={onClose} className="group block">
                    <span className="mt-2 block text-lg font-medium text-ink group-hover:text-steel">
                      {p.title}
                    </span>
                  </a>
                  {p.children.length > 0 && (
                    <ul className="mt-4 space-y-3 border-l border-rule pl-4 text-[15px] text-ink-muted">
                      {p.children.map((c) => (
                        <li key={c.slug}>
                          <a
                            href={`/products/${p.slug}/${c.slug}`}
                            onClick={onClose}
                            className="link-underline hover:text-ink"
                          >
                            {c.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Content Pane */}
        {pane === "services" && (
          <div className="animate-fade-in-menu container-editorial grid grid-cols-12 gap-8 py-8">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">SERVICES</p>
              <p className="mt-4 text-2xl font-light leading-snug text-ink">
                End-to-end engineering, from drawing board to commissioning.
              </p>
            </div>
            <div className="col-span-12 md:col-span-9 grid grid-cols-1 gap-8 md:grid-cols-2">
              {SERVICE_INDEX.map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={onClose}
                  className="group block border-t border-rule pt-6"
                >
                  <div className="flex items-baseline justify-end">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                      Service
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-light text-ink group-hover:text-steel">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-ink-muted">{s.blurb}</p>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-bg text-ink transition-[clip-path] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
        open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
      }`}
      aria-hidden={!open}
    >
      <div className="container-editorial flex h-[64px] items-center justify-between">
        <Logo
          idPrefix="mobile-nav"
          className="select-none text-ink"
          style={{ width: "140px", height: "auto" }}
        />
        <button onClick={onClose} className="text-[13px] font-medium tracking-[0.08em]">
          Close
        </button>
      </div>
      <div className="hairline" />
      <nav className="container-editorial mt-10 flex flex-col gap-6 pb-12">
        {[
          { to: "/", label: "HOME" },
          { to: "/about", label: "ABOUT" },
          { to: "/products", label: "PRODUCTS" },
          { to: "/services", label: "SERVICES" },
          { to: "/projects", label: "PROJECTS" },
          { to: "/careers", label: "CAREERS" },
          { to: "/contact", label: "CONTACT" },
        ].map((l, i) => {
          const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
          return (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="group flex items-baseline justify-between border-t border-rule pt-4"
            >
              <span className={`text-4xl font-light ${active ? "text-ink" : "text-ink/70"}`}>
                {l.label}
              </span>
              <span className="num-mono text-[11px] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
