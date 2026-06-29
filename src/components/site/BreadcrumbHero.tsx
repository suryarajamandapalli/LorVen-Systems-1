import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export type BreadcrumbPathItem = {
  label: string;
  to?: string;
};

export type BreadcrumbHeroProps = {
  category: string;          // e.g., "PRODUCTS"
  title: string;             // e.g., "RDPMS"
  description: string;       // e.g., "Remote Diagnostic & Predictive Maintenance System."
  backgroundImage: string;   // Cinematic industrial image
  path: BreadcrumbPathItem[]; // Navigation path
};

export function BreadcrumbHero({
  category,
  title,
  description,
  backgroundImage,
  path,
}: BreadcrumbHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Slow parallax/zoom on the background image
      gsap.fromTo(
        ".hero-bg-img",
        { scale: 1.15, yPercent: -5 },
        {
          scale: 1.05,
          yPercent: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // 2. Staggered text reveals
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.fromTo(
        ".reveal-category",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1.0, delay: 0.2 }
      );

      tl.fromTo(
        ".reveal-title > *",
        { yPercent: 105 },
        { yPercent: 0, duration: 1.2 },
        "-=0.8"
      );

      tl.fromTo(
        ".reveal-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=0.9"
      );

      tl.fromTo(
        ".reveal-breadcrumb",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.2 },
        "-=1.0"
      );
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-[55vh] min-h-[380px] max-h-[460px] bg-ink overflow-hidden flex flex-col justify-end pb-12 pt-[64px]"
    >
      {/* Background Image with 35%-40% Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt={title}
          className="hero-bg-img w-full h-[120%] object-cover object-center opacity-65 select-none pointer-events-none"
        />
        {/* Dark overlay: 35%-40% opacity */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Subtle bottom fade to transition to next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content Area */}
      <div className="container-editorial relative z-10 w-full">
        <div className="max-w-4xl">
          {/* 1. Small Category Label */}
          <span className="reveal-category block text-[11px] font-medium tracking-[0.25em] text-white/60 uppercase mb-3">
            {category}
          </span>

          {/* 2. Large Page Title */}
          <div className="reveal-title overflow-hidden mb-4 py-1">
            <h1 className="display-clamp font-light text-white uppercase tracking-tight leading-[0.95]">
              {title}
            </h1>
          </div>

          {/* 3. Supporting Description */}
          <p className="reveal-desc text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mb-8">
            {description}
          </p>

          {/* 4. Breadcrumb Component */}
          <nav
            aria-label="Breadcrumb"
            className="reveal-breadcrumb inline-flex items-center bg-black/30 border border-white/[0.08] backdrop-blur-md rounded-lg py-2.5 px-4"
          >
            <ol className="flex items-center flex-wrap gap-2.5 text-xs font-light text-white/50">
              {/* Home Icon */}
              <li className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center text-white/50 hover:text-white transition-colors duration-300 py-1"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M1.75 5.25L7 1.75L12.25 5.25V11.375C12.25 11.6071 12.1578 11.8296 11.9937 11.9937C11.8296 12.1578 11.6071 12.25 11.375 12.25H2.625C2.39294 12.25 2.17038 12.1578 2.00628 11.9937C1.84219 11.8296 1.75 11.6071 1.75 11.375V5.25Z" />
                    <path d="M4.375 12.25V7H9.625V12.25" />
                  </svg>
                  <span className="sr-only">Home</span>
                </Link>
              </li>

              {path.map((item, index) => {
                const isLast = index === path.length - 1;
                return (
                  <li key={index} className="flex items-center gap-2.5">
                    {/* Separator Chevron */}
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      className="opacity-40"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {isLast ? (
                      <span className="text-steel font-medium tracking-wide">
                        {item.label}
                      </span>
                    ) : item.to ? (
                      <Link
                        to={item.to}
                        className="relative hover:text-white transition-colors duration-300 py-1 group"
                      >
                        {item.label}
                        {/* Subtle Underline Hover Animation */}
                        <span className="absolute left-0 right-0 bottom-0.5 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
