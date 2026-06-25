import { CTAStrip } from "./CTAStrip";
import { PageHero } from "./PageHero";
import { Link } from "@tanstack/react-router";

type KeySystem = {
  code: string;
  name: string;
  description: string;
  href: string;
  icons: string[];
};

export type ProductPageProps = {
  index: string;
  eyebrow: string;
  title: string;
  lede: string;
  hero: string;
  overview: string;
  keySystemsLabel?: string;
  keySystems?: KeySystem[];
  applications: string[];
  specs: { label: string; value: string }[];
  downloads?: { label: string; file: string }[];
  gallery: { src: string; caption: string }[];
  related?: { href: string; number: string; title: string }[];
};

export function ProductPage(p: ProductPageProps) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} index={p.index} title={p.title} lede={p.lede} image={p.hero} />

      {/* Overview */}
      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Overview</span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="reveal max-w-3xl text-2xl font-light leading-snug text-ink md:text-3xl">
              {p.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Key Systems — Product Details */}
      {p.keySystems && p.keySystems.length > 0 && (
        <section className="border-t border-rule bg-[#111] text-white overflow-hidden">
          <div className="container-editorial py-20">
            <div className="flex items-baseline justify-between mb-14">
              <span className="eyebrow !text-white/40 !text-[10px]">
                {p.keySystemsLabel ?? "Product Details"}
              </span>
              <span className="num-mono text-[10px] text-white/30 uppercase tracking-[0.18em]">
                {String(p.keySystems.length).padStart(2, "0")} Systems
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {p.keySystems.map((sys, i) => (
                <Link
                  key={sys.code}
                  to={sys.href}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
                >
                  {/* Ghost number */}
                  <span
                    className="absolute top-6 right-8 text-[80px] font-black leading-none text-white/[0.04] select-none pointer-events-none transition-all duration-500 group-hover:text-white/[0.08]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Top: code + name */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
                        {sys.code}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-white leading-snug mb-4">
                      {sys.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/55 leading-relaxed">
                      {sys.description}
                    </p>
                  </div>

                  {/* Bottom: icons + CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sys.icons.map((icon) => (
                        <span
                          key={icon}
                          className="text-[11px] text-white/50 bg-white/5 rounded-full px-3 py-1 border border-white/10"
                        >
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/40 group-hover:text-white/80 transition-colors duration-300">
                      <span>Product Details</span>
                      <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      <section className="border-t border-rule bg-section">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Applications</span>
          </div>
          <ol className="col-span-12 divide-y divide-rule border-t border-rule md:col-span-9">
            {p.applications.map((a, i) => (
              <li key={a} className="reveal flex items-baseline gap-6 py-5 text-lg text-ink">
                <span className="num-mono w-10 shrink-0 text-[11px] text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Specifications */}
      <section className="border-t border-rule bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 py-24">
          <div className="col-span-12 md:col-span-3">
            <span className="eyebrow">Specifications</span>
            <p className="mt-4 text-sm text-ink-muted">
              Indicative values. Configurations are tailored to customer requirements and operating
              envelope.
            </p>
          </div>
          <dl className="col-span-12 divide-y divide-rule border-t border-rule md:col-span-9">
            {p.specs.map((s) => (
              <div
                key={s.label}
                className="reveal grid grid-cols-1 gap-2 py-5 md:grid-cols-[1fr_2fr]"
              >
                <dt className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  {s.label}
                </dt>
                <dd className="text-base text-ink md:text-lg">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-rule bg-section">
        <div className="container-editorial py-24">
          <div className="mb-12 flex items-baseline justify-between">
            <span className="eyebrow">Engineering</span>
            <span className="num-mono text-[11px] text-ink-muted">Plate / Gallery</span>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {p.gallery.map((g, i) => (
              <figure
                key={g.src}
                className={`reveal ${i % 3 === 0 ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"}`}
              >
                <div className="overflow-hidden bg-surface">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  <span>{g.caption}</span>
                  <span className="num-mono">
                    {String(i + 1).padStart(2, "0")}/{String(p.gallery.length).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads + related */}
      {(p.downloads?.length || p.related?.length) && (
        <section className="border-t border-rule bg-bg">
          <div className="container-editorial grid grid-cols-12 gap-8 py-24">
            {p.downloads && p.downloads.length > 0 && (
              <div className="col-span-12 md:col-span-6">
                <span className="eyebrow">Downloads</span>
                <ul className="mt-8 divide-y divide-rule border-t border-rule">
                  {p.downloads.map((d) => (
                    <li key={d.label} className="flex items-baseline justify-between py-5">
                      <span className="text-base text-ink">{d.label}</span>
                      <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                        {d.file}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {p.related && p.related.length > 0 && (
              <div className="col-span-12 md:col-span-6">
                <span className="eyebrow">Related Products</span>
                <ul className="mt-8 divide-y divide-rule border-t border-rule">
                  {p.related.map((r) => (
                    <li key={r.href}>
                      <a href={r.href} className="group flex items-baseline justify-between py-5">
                        <span className="text-lg text-ink group-hover:text-steel">{r.title}</span>
                        <span className="num-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <CTAStrip
        eyebrow="Enquire"
        title="Specify a configuration for your programme."
        cta="Contact engineering"
      />
    </>
  );
}
