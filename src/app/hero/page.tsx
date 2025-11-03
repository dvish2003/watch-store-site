"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeroPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-16 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/assets/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-black/90 to-black" />
      </div>

      <div className="absolute inset-0 z-1 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[80px_80px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="absolute inset-0 z-2 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-5 overflow-hidden hidden lg:flex flex-col justify-center text-white opacity-[0.02] select-none">
        {["TIMELESS", "ELEGANCE", "PRECISION", "CRAFT"].map((word, i) => (
          <div
            key={i}
            className={`w-full transition-all duration-1000 ease-out ${
              isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-48"
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <h1 className="text-[25vh] xl:text-[30vh] 2xl:text-[35vh] font-black leading-[0.7] tracking-[-0.02em]">
              {word}
            </h1>
          </div>
        ))}
      </div>

      <div className="relative z-20 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          <div
            className={`w-full lg:w-2/5 space-y-6 lg:space-y-8 border border-white/10 bg-black/20 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl relative overflow-hidden mt-8 lg:mt-0 transition-all duration-700 ease-out ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30"></div>

            <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/5 to-transparent"></div>
            <div className="absolute right-4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/5 to-transparent"></div>

            <div
              className={`transition-all duration-700 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <h1 className="font-bold tracking-tight leading-[0.9]">
                <span className="block text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw] bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  LUXURY
                </span>
                <span className="block text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mt-2">
                  THAT LASTS A LIFETIME
                </span>
              </h1>
            </div>

            <p
              className={`text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] text-gray-300 leading-relaxed font-light transition-all duration-700 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Experience timeless sophistication with our Luxury Chronograph Watch—a perfect blend of craftsmanship, precision, and style. Designed for those who appreciate the finer things in life.
            </p>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 relative transition-all duration-700 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="absolute -left-2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
              <div className="absolute -right-2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
              <div className="absolute left-0 right-0 -top-2 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="absolute left-0 right-0 -bottom-2 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

              {[
                { value: "5-YEAR", label: "WARRANTY" },
                { value: "4.9★", label: "4300 RATINGS" },
                { value: "250+", label: "CRAFT HOURS" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative text-center p-3 sm:p-4 border border-white/10 bg-black/30 backdrop-blur-sm rounded-xl hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-xl"></div>
                  <div className="font-bold text-[5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-[2vw] sm:text-[1.2vw] md:text-[1vw] lg:text-[0.9vw] text-gray-400 mt-1 font-medium relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`w-full lg:w-3/5 flex items-center justify-center relative -mt-8 lg:mt-0 transition-all duration-1000 ease-out ${
              isMounted ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl aspect-square">
              <div className="absolute inset-0 border border-white/10 rounded-full opacity-30"></div>
              <div className="absolute inset-4 sm:inset-8 border border-white/5 rounded-full opacity-20"></div>

              <div className="relative w-full h-full watch-float">
                <Image
                  src="/assets/main-watch-removebg.png"
                  alt="Luxury Chronograph Watch"
                  width={1600}
                  height={1600}
                  className="object-contain w-full h-full drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] sm:drop-shadow-[0_0_60px_rgba(255,255,255,0.2)]"
                  priority
                  quality={100}
                />
              </div>

              <div className="absolute inset-0 rounded-full border border-white/5 spin-slow" />

              <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-amber-500/10 rounded-full blur-2xl sm:blur-3xl scale-105 sm:scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-1 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl opacity-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-amber-500/5 rounded-full blur-2xl sm:blur-3xl opacity-pulse-delayed"></div>
      </div>

      <style jsx>{`
        .watch-float {
          animation: float 6s ease-in-out infinite;
          transform-origin: center;
        }
        
        .spin-slow {
          animation: spin 25s linear infinite;
        }
        
        .opacity-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .opacity-pulse-delayed {
          animation: pulse 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .watch-float,
          .spin-slow,
          .opacity-pulse,
          .opacity-pulse-delayed {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroPage;