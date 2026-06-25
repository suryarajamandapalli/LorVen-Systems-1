import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});

  // Lock scrolling on document body and html during loading
  useEffect(() => {
    if (!visible) return;
    document.body.classList.add("scroll-locked", "preloader-active", "is-loading");
    document.documentElement.classList.add("scroll-locked", "preloader-active");
    return () => {
      document.body.classList.remove("scroll-locked", "preloader-active", "is-loading");
      document.documentElement.classList.remove("scroll-locked", "preloader-active");
    };
  }, [visible]);

  // Timed transition sequence
  useEffect(() => {
    // 1. Trigger the background fade and logo flight at 1.0s (faster load)
    const exitTimer = setTimeout(() => {
      const navLogo = document.getElementById("navbar-logo");
      const preloaderLogo = document.getElementById("preloader-logo");
      
      if (navLogo && preloaderLogo) {
        const navRect = navLogo.getBoundingClientRect();
        const preRect = preloaderLogo.getBoundingClientRect();
        
        const scale = navRect.width / preRect.width;
        
        const navCenterX = navRect.left + navRect.width / 2;
        const navCenterY = navRect.top + navRect.height / 2;
        const preCenterX = preRect.left + preRect.width / 2;
        const preCenterY = preRect.top + preRect.height / 2;
        
        const translateX = navCenterX - preCenterX;
        const translateY = navCenterY - preCenterY;
        
        setTransformStyle({
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
          // Fade the preloader logo OUT during the flight - the navbar logo fades in separately
          opacity: 0,
          color: "var(--on-dark, #fafaf7)",
        });
      } else {
        // Fallback CSS calculation if DOM elements are not found
        setTransformStyle({
          transform: "translateY(calc(-50vh + 40px)) scale(0.36)",
        });
      }
      setExit(true);
    }, 1000);

    // 2. Remove is-loading at 1000ms (exactly when the flight starts) so the header fades in synchronously
    const classTimer = setTimeout(() => {
      document.body.classList.remove("is-loading");
    }, 1000);

    // 3. Fallback unmount timer (in case transitionend is blocked by the browser)
    const destroyTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(classTimer);
      clearTimeout(destroyTimer);
    };
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // Docking completes exactly when the transform transition completes
    if (e.propertyName === "transform" && exit) {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden ${
        exit ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Background panel that fades out smoothly */}
      <div
        className={`absolute inset-0 bg-[#F5F5F7] transition-opacity duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          exit ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 
        Centered wrapper for the logo.
        When exiting, it flies up to the top and scales down to dock into the navbar logo slot.
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        <div
          className={`logo-container ${
            exit ? "flying" : ""
          }`}
          style={transformStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          <Logo
            id="preloader-logo"
            animated={true}
            idPrefix="preloader"
            className="logo-svg w-[320px] md:w-[440px] h-auto select-none overflow-visible text-[#1b1b1b]"
          />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Main SVG opacity reveal */
        .logo-svg {
          animation: revealLogo 0.6s ease-out forwards;
        }
        @keyframes revealLogo {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Generic path drawing animation base */
        .logo-path {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          fill: rgba(27, 27, 27, 0);
          stroke: rgba(27, 27, 27, 0.75);
          stroke-width: 1.5px;
          animation: drawSinglePath 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes drawSinglePath {
          0% {
            stroke-dashoffset: 1500;
            fill: rgba(27, 27, 27, 0);
            stroke: rgba(27, 27, 27, 0.75);
          }
          60% {
            stroke-dashoffset: 0;
            fill: rgba(27, 27, 27, 0);
            stroke: rgba(27, 27, 27, 0.75);
          }
          85%, 100% {
            stroke-dashoffset: 0;
            fill: currentColor;
            stroke: rgba(27, 27, 27, 0);
          }
        }

        /* Logo scale & translate flight animation to dock into the header navbar logo slot */
        .logo-container {
          transform-origin: center center;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            transform 700ms cubic-bezier(0.16, 1, 0.3, 1),
            opacity 500ms cubic-bezier(0.16, 1, 0.3, 1) 100ms,
            color 400ms ease;
        }
        
        /* Fallback transitions in case JS does not execute */
        .logo-container.flying:not([style]) {
          transform: translateY(calc(-50vh + 40px)) scale(0.44);
        }
        
        @media (min-width: 1024px) {
          .logo-container.flying:not([style]) {
            transform: translateY(calc(-50vh + 40px)) scale(0.36);
          }
        }

        /* Staggered Delay offsets representing electrical signals propagating from left to right */
        .path-1 { animation-delay: 0ms; }
        .path-2 { animation-delay: 50ms; }
        .path-3 { animation-delay: 100ms; }
        .path-4 { animation-delay: 150ms; }
        .path-5 { animation-delay: 200ms; }
        .path-6 { animation-delay: 250ms; }
        .path-7 { animation-delay: 300ms; }
        .path-8 { animation-delay: 350ms; }
        .path-9 { animation-delay: 400ms; }
        
        .path-systems { 
          animation-delay: 480ms; 
          animation-duration: 0.6s;
        }
      `,
        }}
      />
    </div>
  );
}
