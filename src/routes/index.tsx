import { createFileRoute, Link } from "@tanstack/react-router";
import heroLocomotive from "@/assets/hero-locomotive.jpg";
import newBulletTrain from "@/assets/new-bullet-train.png";
import heroVideo from "@/assets/hero-bg.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import aboutVideo from "@/assets/about-video.mp4";
import factoryHall from "@/assets/factory-hall.jpg";
import smtLine from "@/assets/smt-line.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import engineers from "@/assets/engineers.jpg";
import simulator from "@/assets/simulator.jpg";
import coachBuild from "@/assets/coach-build.jpg";
import electrical from "@/assets/electrical-cabinet.jpg";
import wagons from "@/assets/wagons.jpg";
import depot from "@/assets/depot.jpg";
import logo1 from "@/assets/logo-1.svg";
import { useState, useEffect, useRef } from "react";
import { PRODUCT_INDEX } from "@/lib/site-data";
import serviceDesign from "@/assets/service-design.png";
import serviceInstallation from "@/assets/service-installation.png";
import sntHero from "@/assets/snt-hero-real.jpg";
import locoHero from "@/assets/loco-hero-real.jpg";
import wagonsHero from "@/assets/wagons-hero-real.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LorVen Systems — Railway electronics, manufacturing and integration" },
      {
        name: "description",
        content:
          "Electronics, electrical systems and rolling-stock components engineered for railway service. Design, manufacturing and installation under one roof.",
      },
      { property: "og:title", content: "LorVen Systems" },
      {
        property: "og:description",
        content: "Railway electronics, manufacturing and integration.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  useGSAP(() => {
    // 1. Hero text parallax scrolling
    gsap.to(".hero-parallax-content", {
      scrollTrigger: {
        trigger: "section.relative.h-\\[100svh\\]",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 30,
      opacity: 0.1,
      ease: "none",
    });

    // 2. About Preview layout parallax
    gsap.fromTo(
      ".about-video-card",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 40,
        ease: "none",
      }
    );

    gsap.fromTo(
      ".about-float-card",
      { y: 30 },
      {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -60,
        ease: "none",
      }
    );

    // 3. Products section background parallax
    gsap.fromTo(
      ".products-parallax-bg",
      { y: -30 },
      {
        scrollTrigger: {
          trigger: ".products-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 30,
        ease: "none",
      }
    );

    // 4. Services section visual column parallax
    gsap.fromTo(
      ".services-parallax-col",
      { y: 40 },
      {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -40,
        ease: "none",
      }
    );

    // 5. HomeCTA background image parallax
    gsap.fromTo(
      ".cta-parallax-img",
      { yPercent: -10 },
      {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 10,
        ease: "none",
      }
    );

    // 6. Global GSAP scroll reveals for eyebrows, headings and body matter
    gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        }
      );
    });

    // 7. Backup refresh timer to guarantee offsets are correct after layout hydrates and unblocks
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ProductsSection />
      <ServicesSection />
      <HomeCTA />
    </>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const slides = [
    {
      type: "video",
      src: heroVideo,
      title: (
        <>
          Engineered for the
          <br />
          long run of the railway.
        </>
      ),
      description:
        "We design, manufacture and integrate the electronics, electrical systems and sub-assemblies that keep modern rail networks moving — quietly, precisely, for decades.",
    },
    {
      type: "image",
      src: factoryHall,
      alt: "State-of-the-art railway manufacturing facility",
      title: (
        <>
          World-class manufacturing
          <br />
          under one roof.
        </>
      ),
      description:
        "Our state-of-the-art facilities house advanced SMT assembly lines, cleanrooms, and testing bays certified to global railway standards.",
    },
    {
      type: "image",
      src: smtLine,
      alt: "High-precision SMT assembly line",
      title: (
        <>
          Precision electronics
          <br />
          built for the environment.
        </>
      ),
      description:
        "From circuit layout to final sealing, we engineer printed circuit boards that withstand extreme temperature, vibration, and duty cycles.",
    },
    {
      type: "image",
      src: depot,
      alt: "Railway maintenance depot",
      title: (
        <>
          System integration
          <br />
          and turnkey installation.
        </>
      ),
      description:
        "We assemble and commission complex electrical cabinets, driver display systems, and rolling stock controls directly in national depots.",
    },
    {
      type: "image",
      src: heroLocomotive,
      alt: "Electric locomotive",
      title: (
        <>
          Safety-critical systems
          <br />
          for modern rolling stock.
        </>
      ),
      description:
        "Designing simulator systems, train protective devices, and auxiliary electrical integration trusted by operators and OEMs alike.",
    },
  ];

  // 1. Play/Pause the background video
  useEffect(() => {
    if (activeSlide === 0) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      videoRef.current?.pause();
    }
  }, [activeSlide]);

  // 2. Manage image slides duration and progress updates
  useEffect(() => {
    if (activeSlide === 0) return;

    setProgress(0);
    const duration = 6000;
    const startTime = Date.now();
    let animFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);

      if (elapsed < duration) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }
    };

    animFrame = requestAnimationFrame(updateProgress);
    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [activeSlide, slides.length]);

  // 3. Smooth video progress tracking
  useEffect(() => {
    if (activeSlide !== 0) return;

    let animFrame: number;
    const updateVideoProgress = () => {
      const video = videoRef.current;
      if (video && video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
      animFrame = requestAnimationFrame(updateVideoProgress);
    };

    animFrame = requestAnimationFrame(updateVideoProgress);
    return () => cancelAnimationFrame(animFrame);
  }, [activeSlide]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink text-on-dark">
      <style dangerouslySetInnerHTML={{ __html: `
        /* Morph-blend Transition */
        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.04);
          filter: brightness(0.5) blur(6px);
          transition:
            opacity 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            filter 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
          pointer-events: none;
        }
        
        .hero-slide.active {
          opacity: 0.92;
          transform: scale(1);
          filter: brightness(1) blur(0px);
          z-index: 2;
          pointer-events: auto;
        }

        .hero-slide-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Ken Burns only triggers on the active slide */
        .hero-slide.active img.hero-slide-media {
          animation: kenburns 8s ease-out forwards;
        }

        /* Text Focus Reveal (Fade + Blur, No sliding) */
        .hero-text-item {
          opacity: 0;
          filter: blur(10px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .active-text-container .hero-text-item {
          opacity: 1;
          filter: blur(0);
        }
        
        /* Staggered delay offsets for text components */
        .active-text-container .delay-0 { transition-delay: 50ms; }
        .active-text-container .delay-1 { transition-delay: 200ms; }
        .active-text-container .delay-2 { transition-delay: 350ms; }
        .active-text-container .delay-3 { transition-delay: 500ms; }
        .active-text-container .delay-4 { transition-delay: 580ms; }

        /* Navigation buttons curved edge radial hover gradients */
        .hero-prev-btn, .hero-next-btn {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 9rem; /* 144px width for wider, sleeker hover zone */
          z-index: 30;
          outline: none;
          cursor: pointer;
        }
        
        .hero-prev-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at left center, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 70%);
          opacity: 0;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .hero-prev-btn:hover::before {
          opacity: 1;
        }

        .hero-next-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at right center, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 70%);
          opacity: 0;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .hero-next-btn:hover::before {
          opacity: 1;
        }
      `}} />

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => {
          const isActive = idx === activeSlide;
          return (
            <div
              key={idx}
              className={`hero-slide ${isActive ? "active" : ""}`}
            >
              {slide.type === "video" ? (
                <video
                  ref={videoRef}
                  src={slide.src}
                  muted
                  playsInline
                  onEnded={() => setActiveSlide(1)}
                  className="hero-slide-media"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="hero-slide-media"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/95 pointer-events-none" />

      {/* Progress bar — subtle, not distracting */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/8">
        <div
          className="relative h-full bg-white/40 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Arrows on Left/Right */}
      <button
        onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="hero-prev-btn left-0 flex items-start justify-start pt-[36vh] px-4 md:px-8 group"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-16 md:h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="hero-next-btn right-0 flex items-start justify-end pt-[36vh] px-4 md:px-8 group"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-16 md:h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Text Content perfectly synced with slides */}
      <div className="container-editorial hero-parallax-content relative z-10 flex h-full flex-col justify-end pt-[96px] pb-16 pointer-events-none">
        {/* auto height — never clip typography */}
        <div className="relative w-full">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={idx}
                className={`absolute bottom-0 left-0 right-0 transition-opacity duration-[400ms] ease-in-out ${
                  isActive ? "active-text-container pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <p className="eyebrow !text-on-dark/70 hero-text-item delay-0">LorVen Systems Pvt. Ltd.</p>
                
                <h1 className="mt-4 max-w-5xl text-[clamp(2rem,4.5vw,5rem)] font-light leading-[1.06] tracking-[-0.03em] overflow-visible hero-text-item delay-1">
                  <span>{slide.title}</span>
                </h1>

                <div className="mt-8 md:mt-12 grid grid-cols-12 items-end gap-8">
                  <p className="col-span-12 max-w-xl text-base leading-relaxed text-on-dark/85 md:col-span-6 md:text-lg hero-text-item delay-2">
                    {slide.description}
                  </p>
                  <div className="col-span-12 flex items-end justify-start md:justify-end gap-8 text-[12px] uppercase tracking-[0.16em] md:col-span-6">
                    <Link
                      to="/products"
                      className="link-underline opacity-90 hover:opacity-100 transition-all hero-text-item delay-3"
                    >
                      View products →
                    </Link>
                    <Link
                      to="/about"
                      className="link-underline opacity-90 hover:opacity-100 transition-all hero-text-item delay-4"
                    >
                      About us →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="border-t border-rule bg-bg pt-10 pb-20 md:pt-12 md:pb-28 overflow-hidden about-section">
      <div className="container-editorial">
        <div className="relative w-full">
          
          {/* Left side: 16:9 Video banner (occupies 72% width on desktop, aligned left) */}
          <div className="w-full xl:w-[72%] xl:mr-auto xl:ml-0 aspect-video overflow-hidden rounded-xl bg-transparent border border-rule/20 shadow-lg about-video-card">
            <video
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              className="block w-full h-full object-cover scale-[1.02] bg-transparent"
            />
          </div>
 
          {/* Right side: Floating glassmorphism text card (overlaps the video on desktop, aligned right) */}
          <div className="w-full xl:w-[36%] xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:z-10 mt-8 xl:mt-0 p-6 md:p-8 xl:p-10 bg-[#F5F5F7] border border-white/50 dark:border-white/10 rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5 about-float-card">
            <span className="eyebrow block gsap-reveal">About</span>
            
            <div className="mt-6 space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-ink font-light gsap-reveal">
                For over fifteen years, LorVen Systems has built the unseen layer
                of India's rolling stock — circuit boards that survive a million
                cycles, cabinets that earn certification on the first attempt,
                installations that hand over on time.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-ink-muted gsap-reveal">
                We work with national operators, OEMs and integrators across
                mainline, metro and freight. Our discipline is patience: every
                assembly is engineered for the operating envelope it will actually
                serve.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-rule/30 gsap-reveal">
              <Link
                to="/about"
                className="link-underline inline-block text-[12px] font-medium uppercase tracking-[0.16em] text-ink"
              >
                About LorVen →
              </Link>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}

const PRODUCTS_LIST = [
  {
    n: "01",
    label: "Signalling & Telecom",
    img: sntHero,
    slug: "snt",
    systems: [
      {
        code: "RDPMS",
        name: "Remote Diagnostics",
        desc: "Intelligent IoT platform continuously monitoring railway signalling equipment health, analyzing anomalies and generating predictive alerts before failures occur.",
        img: sntHero,
        href: "/products/snt/rdpms",
      },
      {
        code: "IPS",
        name: "Integrated Power Supply",
        desc: "Microprocessor-controlled power system delivering uninterrupted, stable, and redundant electricity to critical railway signalling networks.",
        img: electrical,
        href: "/products/snt/ips",
      }
    ],
  },
  {
    n: "02",
    label: "Electric Locomotive",
    img: locoHero,
    slug: "electric-locomotive",
    systems: [
      {
        code: "Simulator",
        name: "Driving Simulator",
        desc: "High-fidelity driving simulation platform providing realistic training, route familiarization, and emergency scenarios for locomotive drivers.",
        img: simulator,
        href: "/products/electric-locomotive/simulators",
      },
      {
        code: "IFT",
        name: "Integrated Functional Tester",
        desc: "Comprehensive diagnostic platform verifying the electrical and electronic performance of locomotives during commissioning and overhauls.",
        img: pcbMacro,
        href: "/products/electric-locomotive/ift",
      }
    ],
  },
  {
    n: "03",
    label: "Coaches & Wagons",
    img: wagonsHero,
    slug: "wagons",
    systems: [
      {
        code: "WLI",
        name: "Wagon Load Indicator",
        desc: "On-board load monitoring system accurately measuring wagon weight to prevent overloading and ensure railway safety compliance.",
        img: wagons,
        href: "/products/wagons/wli",
      },
      {
        code: "AHABD",
        name: "Acoustic Hot Axle Box Detector",
        desc: "Wayside acoustic detector identifying abnormal bearing temperatures and signatures early to reduce derailment risks.",
        img: wagonsHero,
        href: "/products/wagons/ahabd",
      }
    ],
  },
];

function ProductsSection() {
  const [active, setActive] = useState(0);
  const [subActive, setSubActive] = useState(0);

  return (
    <section className="relative bg-ink text-on-dark overflow-hidden py-20 md:py-28 flex lg:items-center products-section">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 600ms cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
        }
        @keyframes slowZoom {
          from {
            transform: scale(1.0);
          }
          to {
            transform: scale(1.03);
          }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate;
        }
      `}} />

      {/* Full-screen cinematic background images — crossfade on active and subActive changes */}
      {PRODUCTS_LIST.map((it, i) =>
        it.systems.map((sys, idx) => (
          <div
            key={`${it.label}-${sys.code}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out products-parallax-bg ${
              active === i && subActive === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={sys.img}
              alt={sys.code}
              className="absolute inset-0 h-[108%] w-full -top-[4%] object-cover filter brightness-[0.8] animate-slow-zoom"
            />
            {/* Clean gradients for maximum image clarity and text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        ))
      )}

      {/* Content layer */}
      <div className="relative z-10 container-editorial w-full flex flex-col lg:flex-row lg:items-center justify-between gap-12">

        {/* Left column — label list */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 lg:pr-8">
          <span className="eyebrow !text-on-dark/50 gsap-reveal">Products</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-on-dark gsap-reveal">
            What we build.
          </h2>

          <ul className="mt-10 border-t border-white/15 gsap-reveal">
            {PRODUCTS_LIST.map((it, i) => (
              <li key={it.label} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setSubActive(0);
                  }}
                  onMouseEnter={() => {
                    setActive(i);
                    setSubActive(0);
                  }}
                  className="group w-full text-left py-6 flex items-center justify-between gap-6"
                >
                  {/* Label — scales up when active */}
                  <span
                    className={`flex-1 font-light transition-all duration-400 ${
                      active === i
                        ? "text-[clamp(1.5rem,3vw,2.5rem)] text-white"
                        : "text-[clamp(1.25rem,2vw,1.85rem)] text-white/35 group-hover:text-white/60"
                    }`}
                  >
                    {it.label}
                  </span>

                  {/* Arrow — only visible when active */}
                  <span
                    className={`num-mono text-[13px] shrink-0 transition-all duration-300 ${
                      active === i ? "opacity-100 translate-x-0 text-white" : "opacity-0 -translate-x-3"
                    }`}
                  >
                    →
                  </span>
                </button>

                {/* Mobile blurb — expands under the active item */}
                <div
                  className={`overflow-hidden transition-all duration-500 lg:hidden ${
                    active === i ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-9 space-y-5 pt-3 border-t border-white/5">
                    {/* Display both core solutions with description on mobile */}
                    {it.systems.map((sys) => (
                      <div key={sys.code} className="space-y-2 border-l border-white/10 pl-3">
                        <div className="text-xs font-semibold text-white/95 uppercase tracking-wide">{sys.code}</div>
                        <p className="text-xs leading-relaxed text-white/60 font-light max-w-md">{sys.desc}</p>
                        <div className="pt-1">
                          <Link
                            to={sys.href as any}
                            className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors"
                          >
                            Explore Product →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              to="/products"
              className="link-underline inline-flex items-center text-[12px] uppercase tracking-[0.16em] text-white/50 hover:text-white transition-colors py-3 px-4 -my-3 -mx-4 min-h-[44px]"
            >
              All products →
            </Link>
          </div>
        </div>

        {/* Right column — Single clean translucent information card (desktop only) */}
        <div
          className="hidden lg:flex relative w-full lg:w-[44%] min-h-[380px] h-auto border border-white/10 rounded-xl flex-col justify-between p-10 backdrop-blur-md"
          style={{
            background: "linear-gradient(135deg, rgba(20, 20, 20, 0.3) 0%, rgba(5, 5, 5, 0.15) 100%)"
          }}
        >
          {/* Specification Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <span className="eyebrow !text-white/40 block mb-1">Product Details</span>
              <h3
                key={`title-${active}-${subActive}`}
                className="text-2xl md:text-3xl font-light text-white tracking-tight mb-4 animate-fade-in-up"
              >
                {PRODUCTS_LIST[active].systems[subActive].code}
              </h3>
              
              <p
                key={`desc-${active}-${subActive}`}
                className="text-sm md:text-base leading-relaxed text-white font-light tracking-wide max-w-md animate-fade-in-up min-h-[72px]"
              >
                {PRODUCTS_LIST[active].systems[subActive].desc}
              </p>
            </div>

            <div className="space-y-6">
              {/* Core Products interactive selectors */}
              <div className="border-t border-white/10 pt-4 z-20">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40 block mb-3">
                  Core Products
                </span>
                <div className="flex gap-8">
                  {PRODUCTS_LIST[active].systems.map((sys, idx) => (
                    <Link
                      key={sys.code}
                      to={sys.href as any}
                      onMouseEnter={() => setSubActive(idx)}
                      className="cursor-pointer group/item block"
                    >
                      <div
                        className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${
                          subActive === idx ? "text-white" : "text-white/40 group-hover/item:text-white/70"
                        }`}
                      >
                        {sys.code}
                      </div>
                      {/* Minimal underline active indicator */}
                      <div
                        className={`h-[2px] bg-white transition-all duration-300 ${
                          subActive === idx ? "w-full opacity-100" : "w-0 opacity-0 group-hover/item:opacity-50 group-hover/item:w-1/2"
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Explore Link */}
              <div className="pt-1 z-20">
                <Link
                  key={`link-${active}-${subActive}`}
                  to={PRODUCTS_LIST[active].systems[subActive].href as any}
                  className="link-underline inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:text-white transition-colors pb-0.5 animate-fade-in-up"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ServicesSection() {
  const [active, setActive] = useState(0);

  const SERVICES_LIST = [
    {
      title: "Design",
      img: serviceDesign,
      desc: "Schematic capture, PCB layout, mechanical packaging, and validation testing for rolling stock and trackside electronics under one roof.",
      to: "/services/design",
    },
    {
      title: "Installation",
      img: serviceInstallation,
      desc: "Turnkey installation, cabin integration, commissioning, and depot-level maintenance services deployed directly on the field.",
      to: "/services/installation",
    },
  ];

  return (
    <section className="relative bg-ink text-on-dark overflow-hidden py-12 md:py-16 border-t border-white/5 services-section">
      
      {/* Content layer */}
      <div className="container-editorial w-full flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-16">

        {/* Left column — vertical services menu list */}
        <div className="flex flex-col justify-center w-full lg:w-[56%]">
          <span className="eyebrow !text-on-dark/50 gsap-reveal">Services</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-on-dark mb-10 gsap-reveal">
            Our Services
          </h2>

          <ul className="space-y-6 border-t border-white/10 pt-6 gsap-reveal">
            {SERVICES_LIST.map((it, i) => (
              <li key={it.title} className="border-b border-white/5 pb-4 last:border-0">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group w-full text-left flex items-center justify-between py-1"
                >
                  <div className="flex items-center gap-4">
                    {/* Label */}
                    <span
                      className={`font-light transition-all duration-400 ${
                        active === i
                          ? "text-[clamp(1.25rem,2vw,1.85rem)] text-white"
                          : "text-[clamp(1.1rem,1.5vw,1.5rem)] text-white/35 group-hover:text-white/60"
                      }`}
                    >
                      {it.title}
                    </span>
                  </div>

                  {/* Arrow */}
                  <span
                    className={`num-mono text-[13px] shrink-0 transition-all duration-300 ${
                      active === i ? "opacity-100 translate-x-0 text-white" : "opacity-0 -translate-x-3"
                    }`}
                  >
                    →
                  </span>
                </button>

                {/* Mobile blurb — accordion style details */}
                <div
                  className={`overflow-hidden transition-all duration-500 lg:hidden ${
                    active === i ? "max-h-[500px] opacity-100 pb-2 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-9 space-y-3 pt-3 border-t border-white/5">
                    <p className="text-xs leading-relaxed text-white/60 font-light max-w-md">{it.desc}</p>
                    <div className="pt-1">
                      <Link
                        to={it.to as any}
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-white/80 hover:text-white transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — Single cinematic photo + placard below (desktop only) */}
        <div className="hidden lg:flex w-full lg:w-[36%] flex-col justify-between services-parallax-col">
          <div className="space-y-6">
            {/* Cinematic Image Container */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/25">
              {SERVICES_LIST.map((it, i) => (
                <div
                  key={it.title}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover filter brightness-[0.8] animate-slow-zoom"
                  />
                  {/* Subtle grading vignette gradient over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Placard details below the image */}
            <div className="pt-2">
              <h3
                key={`service-title-${active}`}
                className="text-2xl md:text-3xl font-light text-white tracking-tight mb-3 animate-fade-in-up"
              >
                {SERVICES_LIST[active].title}
              </h3>
              
              <p
                key={`service-desc-${active}`}
                className="text-sm md:text-base leading-relaxed text-white/70 font-light tracking-wide max-w-md animate-fade-in-up min-h-[72px] mb-6"
              >
                {SERVICES_LIST[active].desc}
              </p>

              <div className="z-20">
                <Link
                  key={`service-link-${active}`}
                  to={SERVICES_LIST[active].to as any}
                  className="link-underline inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:text-white transition-colors pb-0.5 animate-fade-in-up"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white border-t border-white/5 w-full py-20 md:py-28 flex items-center cta-section">
      {/* Background bullet train image (100% visible landscape cover) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
        <img
          src={newBulletTrain}
          alt="High-speed bullet train"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-100 scale-110 cta-parallax-img"
        />
        {/* Soft elegant gradient shading on the left & bottom to hold white text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 container-editorial w-full">
        <div className="max-w-2xl">
          <span className="eyebrow !text-white/60 gsap-reveal">Contact Us</span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] text-white tracking-tight gsap-reveal">
            Tell us about the system you need to build.
          </h2>
          <div className="mt-8 gsap-reveal">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none min-h-[44px]"
            >
              Begin an enquiry →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
