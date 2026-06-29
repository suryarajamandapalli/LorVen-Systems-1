import { Link } from "@tanstack/react-router";

export type Advantage = {
  title: string;
  desc: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type GalleryItem = {
  src: string;
  caption: string;
  type: "wide" | "portrait" | "landscape";
};

export type RelatedItem = {
  href: string;
  title: string;
  description: string;
  image: string;
};

export type ProductPageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  // Overview
  overview: string;
  overviewSpecs: { label: string; value: string }[];
  // Feature Image
  featureImage: string;
  // Key Advantages
  advantages: Advantage[];
  // Tech Specs
  specs: Spec[];
  // Gallery
  gallery: GalleryItem[];
  // Related
  related: RelatedItem[];
};

export function ProductPage(p: ProductPageProps) {
  return (
    <div className="bg-bg text-ink selection:bg-ink selection:text-on-dark antialiased">
      {/* 1. HERO SECTION (35-45vh, Dark Overlay, Precise Breadcrumbs) */}
      <section className="relative flex flex-col justify-end h-[40vh] min-h-[320px] max-h-[420px] overflow-hidden bg-black pt-24 pb-10">
        <div className="absolute inset-0 z-0">
          <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>

        <div className="container-editorial relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
            <ol className="flex items-center space-x-2.5">
              <li>
                <Link to="/" className="transition-colors hover:text-white">HOME</Link>
              </li>
              <li>
                <svg width="4" height="6" viewBox="0 0 4 6" fill="none" className="opacity-40">
                  <path d="M1 1L3 3L1 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-white">PRODUCTS</Link>
              </li>
              <li>
                <svg width="4" height="6" viewBox="0 0 4 6" fill="none" className="opacity-40">
                  <path d="M1 1L3 3L1 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li aria-current="page">
                <span className="text-white">{p.title}</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-wide uppercase">
            {p.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-white/80 font-light leading-relaxed">
            {p.subtitle}
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION (Title, Medium Paragraph, Engineering Specifications Sidebar) */}
      <section className="py-20 md:py-24 bg-bg border-b border-rule">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Title & Overview */}
          <div className="col-span-12 lg:col-span-8">
            <span className="eyebrow block mb-6">SYSTEM OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl font-light leading-snug text-ink mb-6">
              Engineering safety and reliability into mainline operations.
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-ink-muted">
              {p.overview}
            </p>
          </div>

          {/* Right Column: Engineering Specs Sidebar */}
          <div className="col-span-12 lg:col-span-4 border-l border-rule pl-8 lg:pl-12">
            <span className="eyebrow block mb-6">ENGINEERING PROFILE</span>
            <div className="space-y-6">
              {p.overviewSpecs.map((spec) => (
                <div key={spec.label} className="border-b border-rule/10 pb-4">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-ink-muted mb-1">
                    {spec.label}
                  </span>
                  <span className="text-sm md:text-base font-medium text-ink">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LARGE FEATURE IMAGE (Full width, parallax style, rounded corners, soft shadows) */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="container-editorial">
          <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-2xl shadow-xl border border-rule/10">
            <img 
              src={p.featureImage} 
              alt="System details" 
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]" 
            />
          </div>
        </div>
      </section>

      {/* 4. KEY ADVANTAGES (Minimal cards with reveal animation) */}
      <section className="py-20 md:py-24 bg-section border-t border-b border-rule">
        <div className="container-editorial">
          <div className="mb-12">
            <span className="eyebrow block mb-4">KEY ADVANTAGES</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase tracking-wide">
              Operational Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.advantages.map((adv, i) => (
              <div 
                key={adv.title}
                className="bg-white border border-rule/15 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                style={{
                  animation: `revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms forwards`
                }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rule/10 text-rule text-xs font-semibold">
                    ✓
                  </span>
                  <h3 className="text-lg font-medium text-ink">
                    {adv.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS (Premium two-column layout) */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="container-editorial grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow block mb-4">TECHNICAL SPECIFICATIONS</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase tracking-wide mb-4">
              System Parameters
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Standard operating parameters. Custom configurations are engineered according to specific rolling stock and trackside infrastructure requirements.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-rule divide-y divide-rule/50">
              {p.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-1 md:grid-cols-3 gap-2 py-5 items-baseline">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted md:col-span-1">
                    {spec.label}
                  </span>
                  <span className="text-sm md:text-base text-ink font-light md:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATION GALLERY (Alternating layouts for rhythm) */}
      <section className="py-20 bg-section border-t border-b border-rule">
        <div className="container-editorial">
          <div className="mb-12 flex justify-between items-baseline">
            <div>
              <span className="eyebrow block mb-2">APPLICATIONS</span>
              <h2 className="text-2xl md:text-3xl font-light text-ink uppercase tracking-wide">
                System Deployments
              </h2>
            </div>
            <span className="num-mono text-[11px] text-ink-muted">
              Plates 01 – {String(p.gallery.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {p.gallery.map((item, i) => {
              let colSpan = "col-span-12";
              let aspectClass = "aspect-[16/9]";
              if (item.type === "portrait") {
                colSpan = "col-span-12 md:col-span-4";
                aspectClass = "aspect-[3/4]";
              } else if (item.type === "landscape") {
                colSpan = "col-span-12 md:col-span-8";
                aspectClass = "aspect-[4/3]";
              }

              return (
                <figure key={item.src} className={`${colSpan} flex flex-col`}>
                  <div className={`overflow-hidden rounded-xl border border-rule/10 bg-surface ${aspectClass}`}>
                    <img 
                      src={item.src} 
                      alt={item.caption} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                    <span>{item.caption}</span>
                    <span className="num-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. RELATED PRODUCTS (3 premium cards with hover zoom and animations) */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="container-editorial">
          <div className="mb-12">
            <span className="eyebrow block mb-4">COMPLEMENTARY SYSTEMS</span>
            <h2 className="text-2xl md:text-3xl font-light text-ink uppercase tracking-wide">
              Related Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {p.related.map((rel) => (
              <Link
                key={rel.href}
                to={rel.href as any}
                className="group/card flex flex-col bg-white overflow-hidden border border-rule/15 hover:border-rule/30 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <img 
                    src={rel.image} 
                    alt={rel.title} 
                    className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-[600ms] group-hover/card:bg-black/[0.02]" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-ink group-hover/card:text-rule transition-colors duration-300">
                    {rel.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-grow">
                    {rel.description}
                  </p>

                  <div className="mt-6 pt-4 flex items-center justify-between border-t border-rule/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 group-hover/card:text-rule transition-colors duration-300">
                      View System
                    </span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="text-rule opacity-0 -translate-x-3 transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:opacity-100 group-hover/card:translate-x-0"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION (Dark background, minimalist B2B consultation CTA) */}
      <section className="bg-ink text-on-dark py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="container-editorial relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="eyebrow !text-white/40 block mb-6">ENGINEERING CONSULTATION</span>
          <h2 className="text-3xl md:text-4xl font-light leading-snug text-white uppercase tracking-wide mb-6">
            Need a tailored configuration?
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-10">
            Our engineers can customize these systems to align with your specific railway program, rolling stock interfaces, and local standards.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink transition-all duration-500 rounded-sm shadow-md"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
