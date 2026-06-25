'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const reviews = [
    {
      name: "Marcus Vance",
      role: "Architect & Collector",
      initials: "MV",
      rating: 5,
      comment: "The weight, the finish, and the sheer presence of the Argentum on my wrist is unmatched. It represents the pinnacle of subtle design and mechanical reliability.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Sophia Sterling",
      role: "Creative Director",
      initials: "SS",
      rating: 5,
      comment: "A watch is a sculptural piece first and a timepiece second. Ovulan has managed to craft a true work of art. The dial detail under the sapphire crystal is breath-taking.",
      gradient: "from-amber-400 to-orange-600",
    },
    {
      name: "David Chen",
      role: "Financier",
      initials: "DC",
      rating: 5,
      comment: "The accuracy of the Swiss Automatic movement is flawless, but it's the compliments I receive during boardroom meetings that make it a truly essential accessory.",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="reviews" className="min-h-screen bg-black text-white py-24 flex items-center relative overflow-hidden">
      {/* Dynamic light effects */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Reflections of Excellence
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base font-light">
            Hear from our community of collectors and design enthusiasts about their journey with Ovulan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="relative group bg-white/5 border border-white/5 hover:border-white/15 rounded-3xl p-8 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Top glass reflection line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <svg
                      key={idx}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 italic text-base leading-relaxed mb-8 font-light">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center font-bold text-sm tracking-wider text-white shadow-md`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{review.name}</h4>
                  <p className="text-gray-400 text-xs tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
