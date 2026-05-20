import Image from "next/image";
import Navbar from "./Navbar";
import { FaPaw } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";
import { ScrollReveal } from "./ScrollReveal";

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
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-[#F7F4EF] dark:bg-[#1E1611] transition-colors duration-300">


      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/petora_banner.jpg"
          alt="Petora Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-[#F7F4EF] dark:to-[#1E1611] transition-colors duration-300" />
      </div>


      <div className="relative z-10 flex-1 container mx-auto w-full px-6 md:px-12 flex flex-col justify-center pt-28 pb-12">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-2xl space-y-6 text-white mb-16 md:mb-20">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none drop-shadow-md">
              Find your new
              <br />
              best friend
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-xl font-normal leading-relaxed drop-shadow-sm">
              Explore our catalogue of pets available for adoption. Find the
              ideal companion that matches your preferences and lifestyle.
            </p>

          
            <div className="flex items-center w-full max-w-lg bg-[#1E1611]/30 dark:bg-[#F7F4EF]/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-lg mt-4 transition-all duration-300">
              <input
                type="text"
                placeholder="Which breed are you looking for?"
                className="bg-transparent pl-5 pr-2 py-3 text-white placeholder-white/70 focus:outline-none w-full text-sm font-medium"
              />
              <button className="bg-[#C47C5D] hover:bg-[#A86446] text-[#F7F4EF] font-black uppercase text-xs tracking-wider px-7 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 transform active:scale-98 shrink-0 shadow-md group cursor-pointer">
                <span>Adopt Now</span>
                <FaPaw className="text-xs transition-transform duration-300 group-hover:rotate-12" />
              </button>
            </div>
          </div>
        </ScrollReveal>

 
        <ScrollReveal direction="up" delay={0.1}>
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-stretch">
              {catCards.map((cat, index) => (
                <div
                  key={index}
                  className="group bg-white/80 dark:bg-[#2A211C]/90 backdrop-blur-md rounded-2xl p-2.5 flex flex-col justify-between border border-white/40 dark:border-white/5 shadow-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
   
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-[#1E1611]/5 dark:bg-white/5">
              
                    <div className="absolute inset-0 bg-[#1E1611]/10 dark:bg-white/10 animate-pulse z-0" />
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
                      <h3 className="font-bold text-[#1E1611] dark:text-[#F7F4EF] text-sm leading-tight transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-[#1E1611]/60 dark:text-[#F7F4EF]/60 font-medium transition-colors duration-300">
                        {cat.breed}
                      </p>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-[#1E1611]/20 dark:border-white/20 flex items-center justify-center text-[#1E1611] dark:text-[#F7F4EF] group-hover:bg-[#1E1611] dark:group-hover:bg-[#F7F4EF] group-hover:text-white dark:group-hover:text-[#1E1611] transition-all duration-200">
                      <FiArrowDownRight size={14} />
                    </div>
                  </div>
                </div>
              ))}


              <div className="bg-[#C47C5D] hover:bg-[#b56e4f] text-[#F7F4EF] rounded-2xl p-5 flex flex-col justify-between shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <h3 className="font-black text-lg uppercase tracking-wider leading-snug pt-2">
                  View
                  <br />
                  entire
                  <br />
                  collection
                </h3>
                <div className="self-end w-7 h-7 rounded-full border border-[#F7F4EF]/30 flex items-center justify-center group-hover:bg-[#F7F4EF] group-hover:text-[#C47C5D] transition-all duration-200">
                  <FiArrowDownRight size={18} className="stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Banner;
