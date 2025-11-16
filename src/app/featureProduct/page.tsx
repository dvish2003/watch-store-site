"useClient";
import Image from "next/image";

const FeatureProduct = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-80 mt-20 overflow-hidden">
        <div>
          <Image
            src="/assets/w1.jpeg"
            alt="Watch on wrist"
            width={700}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col items-start">
          <div className="flex  gap-5 items-center justify-center mb-30 mx-auto">
            <Image
              src="/assets/watchNew.jpeg"
              alt="Midnight Chronograph"
              width={300}
              height={300}
              className="rounded-md object-contain"
            />

            <div className="mb-5 gap-32 mx-auto px-7 py-4 z-50 md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 ">
                Midnight Chronograph
              </h2>
              <p className="text-gray-600 text-xl mt-3 leading-relaxed ">
                Featuring deep navy detalling, the Midnight Chronograph combines
                heritage design with advanced performance for the modern
                professional.
              </p>
            </div>
          </div>

          <div className="flex-1 mb-5 gap-32 mx-auto px-7 py-4 z-50 bg-white shadow">
            <h2 className="text-4xl font-bold text-gray-900">
              The Icon of Ovulan
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed text-xl">
              The Midnight Chronograph stands as our most sought-after
              timepiece, seamlessly blending sophistication and professional
              class. With its high-grade stainless steel casing, ceramic bezel,
              and sapphire crystal, the watch becomes a symbol of prestige for
              those who demand both style and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
