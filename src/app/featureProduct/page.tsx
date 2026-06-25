'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureProduct = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const specs = [
    { label: "Case Diameter", value: "41 mm" },
    { label: "Movement", value: "Swiss Automatic" },
    { label: "Power Reserve", value: "68 Hours" },
    { label: "Water Resistance", value: "100 Meters / 10 ATM" },
    { label: "Material", value: "904L Oystersteel" },
    { label: "Dial Color", value: "Ocean Sunburst Blue" },
  ];

  return (
    <section id="features" className="min-h-screen bg-black text-white py-20 flex items-center relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            Featured Masterpiece
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            The Nebula Chrono
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
            Engineered with uncompromising precision, the Nebula Chrono combines high-frequency mechanics with a striking blue dial designed to catch the light.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Watch Display Area */}
          <div className="lg:col-span-6 flex justify-center" data-aos="fade-right">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-8 flex items-center justify-center backdrop-blur-md shadow-2xl group overflow-hidden">
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.div
                className="relative z-10 w-full h-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Image
                  src="/assets/watch3.jpeg"
                  alt="Nebula Chrono Premium Watch"
                  width={400}
                  height={400}
                  className="object-contain max-h-[340px] rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>

          {/* Details & Specs Area */}
          <div className="lg:col-span-6 space-y-8" data-aos="fade-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Technical Specifications</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-white to-gray-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-white/15 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">{spec.label}</div>
                  <div className="text-sm font-medium text-white">{spec.value}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-white hover:bg-gray-200 text-black py-4 px-8 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-white/10 hover:scale-105 active:scale-95 text-center">
                Configure Design
              </button>
              <button className="flex-1 bg-black hover:bg-white/5 text-white border border-white/20 py-4 px-8 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 text-center">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
