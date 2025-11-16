"useClient";
import { Star } from "lucide-react";

const TestimonialsPage = () => {
  return (
    <section className="bg-white py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center relative">
  
        <div className="flex  mb-6 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} fill="black" stroke="black" />
          ))}
        </div>
        <div className="relative pl-200">
          <div className=" bg-gray-50 shadow-sm p-6 rounded-2xl text-left transform md:-translate-y-12 w-full max-w-md">
            <h1>(02)</h1>
            <p className="text-gray-600 leading-relaxed mb-4 text-1xl">
              &quot;My Owletun Autumn Classic is everything I wanted in a luxury
              watch. The two-tone design turns heads wherever I go, and it feels
              as if it was made just for me. From packaging to customer service,
              the experience was pure luxury from start to finish.&quot;
            </p>
            <p className="text-gray-800 font-semibold pl-65">– Daniel R.</p>
          </div>
        </div>

        <h2 className="text-7xl md:text-9xl font-semibold text-gray-800 italic mt-25">
          What Our People <br className="hidden md:block" /> Have To Say...
        </h2>

        <div>
          <div className="bg-gray-50 shadow-sm p-6 rounded-2xl text-left transform md:translate-y-12 w-full max-w-md">
            <h1>(01)</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              &quot;I purchased the Owletun Midnight Chronograph and was blown
              away by the craftsmanship, the weight, the precision, and the
              dedication to detail was second to none! The flawless bronze
              bracelet is not just a watch — it’s a statement piece I’m proud to
              wear daily.&quot;
            </p>
            <p className="text-gray-800 font-semibold pl-65">– Theresa K.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-end gap-10 text-gray-700">
          <div>
            <p className="text-5xl font-bold">1200+</p>
            <p className="text-sm tracking-wide text-gray-500">Reviews</p>
          </div>
          <div>
            <p className="text-5xl font-bold">10,000+</p>
            <p className="text-sm tracking-wide text-gray-500">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
