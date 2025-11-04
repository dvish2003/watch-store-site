import Image from "next/image";

export default function ProductGrid() {
  const watchDetails = [
    {
      title:"Aureum Classics",
      description:" With a stainless-steel finish, minimalist markers, and refined craftsmanship, the Heritage Steel honors Ovalan's commitment to enduring style and reliability."
    },
    {
      title:"Midnight Chronograph",
      description:"Featuring deep navy detailing and chronograph functionality, the Midnight blends contemporary elegance with advanced performance for the modern professional."
    },
    {
      title:"Ovalan Argentum",
      description:"The Ovalan Argentum is a masterpiece of understated luxury. Its full stainless-steel design—from polished bezel to finely brushed bracelet—radiates modern elegance."
    }
  ]

  const watches = [
    { src: "/assets/watch1.jpeg", title: "Classic Watch" },
    { src: "/assets/watch2.jpeg", title: "Luxury Watch" },
    { src: "/assets/watch7.jpeg", title: "Elegant Watch" },
  ];

  return (
    <div className="min-h-screen bg-white py-10">
      <h1 className="text-3xl font-bold text-center mb-10 underline underline-offset-8 decoration-2">
        Top Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
        {watches.map((watch, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-lg rounded-2xl flex flex-col items-center justify-between text-center p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image container (same size for all) */}
            <div className="w-full max-w-[300px] h-[300px] flex items-center justify-center mb-4">
              <Image
                src={watch.src}
                alt={watch.title}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            
            {/* Product details */}
            <div className="flex flex-col items-center justify-center text-center w-full">
              <div className="w-full border-t border-gray-300 my-4"></div>
              <h2 className="font-bold text-black text-xl mb-2">{watchDetails[index].title}</h2>
              <p className="text-black text-sm">{watchDetails[index].description}</p>
              <button className="py-3 px-6 mt-3 border-2 hover:bg-black hover:text-white transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}