"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const desktopVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-16 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {!isMobile && (
        <div className="absolute inset-0 z-2 pointer-events-none">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      )}

      {!isMobile && (
        <div className="absolute inset-0 z-5 overflow-hidden hidden lg:flex flex-col justify-center text-white opacity-[0.02] select-none">
          {["TIMELESS", "ELEGANCE"].map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: i * 0.4 }}
              className="w-full"
            >
              <h1 className="text-[25vh] xl:text-[30vh] font-black leading-[0.7]">
                {word}
              </h1>
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-20 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={isMobile ? mobileVariants : desktopVariants}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-2/5 space-y-4 lg:space-y-6 border border-white/10 bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl relative overflow-hidden mt-4 lg:mt-0"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? mobileVariants : desktopVariants}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="font-bold tracking-tight leading-[0.9]">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[3.5vw] bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  LUXURY
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[1.8vw] bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent mt-2">
                  THAT LASTS A LIFETIME
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={isMobile ? mobileVariants : desktopVariants}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed"
            >
              Experience timeless sophistication with our Luxury Chronograph Watch—a perfect blend of craftsmanship, precision, and style.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={isMobile ? mobileVariants : desktopVariants}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-4"
            >
              {[
                { value: "5-YEAR", label: "WARRANTY" },
                { value: "4.9★", label: "RATINGS" },
                { value: "250+", label: "HOURS" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-2 sm:p-3 border border-white/10 bg-black/40 rounded-lg"
                >
                  <div className="font-bold text-lg sm:text-xl bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={isMobile ? mobileVariants : desktopVariants}
            transition={{ 
              duration: 1, 
              delay: 0.1,
              type: isMobile ? "tween" : "spring",
              stiffness: isMobile ? undefined : 50
            }}
            className="w-full lg:w-3/5 flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-4xl aspect-square">
              <motion.div
                animate={
                  isMobile 
                    ? { y: [0, -5, 0] }
                    : { y: [0, -15, 0], rotate: [0, 1, 0] }
                }
                transition={{
                  duration: isMobile ? 4 : 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/assets/main-watch-removebg.png"
                  alt="Luxury Chronograph Watch"
                  width={800}
                  height={800}
                  className={`object-contain w-full h-full transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  priority
                  quality={isMobile ? 75 : 90}
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-full" />
                )}
              </motion.div>

              {!isMobile && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-white/5"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-amber-500/5 rounded-full blur-xl scale-105 -z-10"></div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-1 overflow-hidden">
        {!isMobile && (
          <>
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-amber-500/5 rounded-full blur-2xl"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default HeroPage;