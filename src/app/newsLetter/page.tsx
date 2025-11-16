"use client";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <section className="min-h-screen relative w-full p-8 items-center justify-between flex mx-auto">
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

      <div className="pl-80 mt-50">
        <h1 className="text-7xl text-white ">
          Subscribe To Our <br />
          Newsletter
        </h1>
        <p className="text-xl mt-3 text-white ">
          Join our circle of timeckeepers and be the first to discover new{" "}
          <br />
          collections, exclusive releases,and refined insights from the <br />
          word of Ovulan.
        </p>
        <div className="bg-white py-3 rounded-2xl mt-3 flex">
          <input
            type="email"
            placeholder="Enter your email here"
            className="pl-2"
          />
          <div className="ps-50">
            <button className="text-white bg-black px-4 py-2 rounded-2xl text-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-30 pe-40">
        <Image
          src="/assets/gold-watch.jpeg"
          alt="watch hand"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default NewsLetter;
