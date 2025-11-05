"use client"
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ArtOfTime = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="min-h-screen relative w-full flex items-center justify-center py-8 lg:py-0">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/bg.jpg"
          alt="background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Left Image */}
          <div 
            className="w-full lg:w-1/3 flex justify-center order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative group">
              <div className="transform -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-in-out origin-bottom">
                <Image
                  src="/assets/wear1.jpeg"
                  alt="Ovular Watch"
                  width={400}
                  height={500}
                  className="object-contain w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className="w-full lg:w-1/3 text-center order-2 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight lg:leading-[1.2] mb-6 lg:mb-8">
              Where Time <br />
              <span>Becomes Art</span>
            </h1>

            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-6 lg:mb-8 px-4 sm:px-8 lg:px-0">
              At Ovular, we believe a watch is more than a way to tell
              time—it&apos;s a reflection of character, heritage, and
              aspiration. Our timepieces are crafted with meticulous attention
              to detail, blending timeless design with modern precision. From
              boardroom to evening, Ovular watches embody sophistication for
              those who value elegance in every second.
            </p>

            <button 
              className="bg-white text-black px-8 py-4 rounded-md hover:scale-105 transform transition-all duration-300 font-semibold text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div 
            className="w-full lg:w-1/3 flex justify-center order-3"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative group">
              <div className="hover:scale-105">
                <Image
                  src="/assets/wear2.jpeg"
                  alt="Ovular Watch"
                  width={400}
                  height={500}
                  className="object-contain w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtOfTime;