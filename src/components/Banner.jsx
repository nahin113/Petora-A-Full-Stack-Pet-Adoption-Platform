import Image from "next/image";
import Navbar from "./Navbar";
import { FaPaw } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";

const Banner = () => {
  
  const catCards = [
    {
      name: "Vincent",
      breed: "British Shorthair",
      src: "/assets/cats/vincent.jpg",
    },
    { name: "Groosha", breed: "Snowshoe cat", src: "/assets/cats/groosha.jpg" },
    { name: "Max", breed: "British Shorthair", src: "/assets/cats/max.jpg" },
    {
      name: "Vilhelmina",
      breed: "Abyssinian",
      src: "/assets/cats/vilhelmina.jpg",
    },
    {
      name: "Atilla",
      breed: "British Longhair",
      src: "/assets/cats/atilla.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-slate-900">
      <Navbar />

      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/petora_banner.jpg"
          alt="Petora Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 flex-1 container mx-auto w-full px-6 md:px-12 flex flex-col justify-center pt-24 pb-12">
        <div className="max-w-2xl space-y-6 text-white mb-16 md:mb-24">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
            Find your new
            <br />
            best friend
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl font-normal leading-relaxed">
            Explore our catalogue of pets available for adoption. Find the ideal
            companion that matches your preferences and lifestyle.
          </p>

          <div className="flex items-center w-full max-w-lg bg-[#4b475a]/40 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg mt-4">
            <input
              type="text"
              placeholder="Which breed are you looking for?"
              className="bg-transparent pl-5 pr-2 py-3 text-white placeholder-white/60 focus:outline-none w-full text-sm"
            />
            <button className="bg-[#C47C5D] hover:bg-[#A86446] text-[#F7F4EF] font-extrabold text-sm px-7 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 transform active:scale-98 shrink-0 tracking-tight shadow-xs group">
              <span>Adopt Now</span>
              <FaPaw className="text-xs transition-transform duration-300 group-hover:rotate-12" />
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-stretch">
            {catCards.map((cat, index) => (
              <div
                key={index}
                className="group bg-white/75 backdrop-blur-md rounded-2xl p-2.5 flex flex-col justify-between border border-white/40 shadow-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-slate-100">
                  <div className="absolute inset-0 bg-slate-300 animate-pulse z-0" />
                  <Image
                    src={cat.src}
                    alt={cat.name}
                    fill
                    sizes="(max-w-7xl) 15vw, 150px"
                    className="object-cover relative z-10"
                  />
                </div>

                <div className="flex items-end justify-between px-1 pb-1">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {cat.breed}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-200">
                    <FiArrowDownRight size={14} />
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#C47C5D] hover:bg-[#b56e4f] text-[#F7F4EF] rounded-2xl p-5 flex flex-col justify-between shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer ">
              <h3 className="font-extrabold text-xl leading-tight tracking-tight pt-2">
                View
                <br />
                entire
                <br />
                collection
              </h3>
              <div className="self-end w-7 h-7 rounded-full border border-slate-900/20 flex items-center justify-center">
                <FiArrowDownRight size={18} className="stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
