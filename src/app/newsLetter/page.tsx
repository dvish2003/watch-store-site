'use client'
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-black text-white relative flex items-center justify-center overflow-hidden">
      {/* Decorative layout ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full flex justify-center">
        <div 
          className="relative w-full bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-16 text-center shadow-2xl overflow-hidden"
          data-aos="zoom-in"
        >
          {/* Subtle gradient divider line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <span className="text-xs uppercase tracking-widest text-gray-400 font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            Exclusive Access
          </span>

          <h2 className="text-3xl sm:text-5xl font-black mt-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Join the Inner Circle
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto mt-4 text-sm sm:text-base font-light leading-relaxed">
            Subscribe to receive private invitations to product launches, early access to limited edition releases, and behind-the-scenes engineering updates.
          </p>

          <div className="mt-10 max-w-md mx-auto">
            {subscribed ? (
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-md animate-fade-in">
                <svg className="w-8 h-8 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-white text-lg">Welcome to the Club</h4>
                <p className="text-gray-400 text-xs mt-1">An invitation details link has been sent to your email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <p className="text-xs text-gray-500 mt-6 font-light">
            We value your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
