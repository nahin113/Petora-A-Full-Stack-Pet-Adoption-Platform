'use client'
import { useState } from "react";
import { FiPlus, FiMinus, FiStar } from "react-icons/fi";

const petCareTips = [
  {
    title: "Prioritize Balanced Nutrition",
    content:
      "Feed your pet high-quality food formulated for their specific species, age, and size. Keep portion sizes consistent to maintain a healthy weight, and ensure clean, fresh water is available 24/7.",
  },
  {
    title: "Establish a Routine Early",
    content:
      "Pets thrive on predictability. Set consistent daily times for feeding, bathroom breaks, exercise, and sleep. This builds confidence, lowers stress levels, and speeds up the house-training process.",
  },
  {
    title: "Create a Safe Decompression Space",
    content:
      "Bringing a new pet home can be overwhelming. Set up a quiet, low-traffic area with their bed, toys, and food where they can retreat and rest undisturbed during their first few weeks.",
  },
  {
    title: "Maintain Mental & Physical Exercise",
    content:
      "Keep boredom and anxiety away with daily activity. Use interactive puzzle toys, regular walks, or dedicated play sessions to stimulate their minds and keep their bodies healthy and limber.",
  },
  {
    title: "Schedule Regular Veterinary Care",
    content:
      "Preventative medicine is key. Beyond initial vaccinations and spaying/neutering, schedule annual wellness exams to track health baselines and catch any potential medical changes early.",
  },
  {
    title: "Practice Patient Positive Reinforcement",
    content:
      "Build a strong bond of trust by rewarding good behavior with treats, praise, or affection. Avoid punishment, as it causes fear; consistency and patience are the fastest ways to guide your new companion.",
  },
];
const PetCareTips = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleTip = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-[#F7F4EF] py-16 md:py-24 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
        <div className="flex-1 w-full space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1611] tracking-tight leading-tight">
              Essential tips for
              <br />
               Your New 
              <span className="text-[#C47C5D] ml-2.5">Pet</span>
            </h2>
          </div>

          <div className="w-full space-y-3">
            {petCareTips.map((tip, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white/60 rounded-2xl border border-[#1E1611]/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleTip(index)}
                    className="w-full flex items-center justify-between p-5 gap-4 text-left group"
                  >
                    <h3
                      className={`font-bold text-base transition-colors duration-200 ${
                        isOpen
                          ? "text-[#C47C5D]"
                          : "text-[#1E1611] group-hover:text-[#C47C5D]"
                      }`}
                    >
                      {tip.title}
                    </h3>

                    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#7A726A]/30 flex items-center justify-center text-[#7A726A] group-hover:border-[#C47C5D] group-hover:text-[#C47C5D] transition-colors">
                      {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                    </div>
                  </button>

                  <div
                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs md:text-sm text-[#7A726A] leading-relaxed max-w-xl font-medium">
                      {tip.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl lg:max-w-none">
          <div className="bg-white rounded-[2.5rem] p-5 space-y-5 border border-[#1E1611]/5 shadow-sm">
            <div className="relative aspect-4/3 w-full rounded-[2rem] overflow-hidden bg-[#1E1611]/5">
              <video
                src="https://media.istockphoto.com/id/1300987616/video/cat-relaxing-and-getting-massage-on-face.mp4?s=mp4-640x640-is&k=20&c=tKN9MmARTOPVB9DYAlc1IFkKcZFiK8WSsy25TqYAZZY="
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105"
              />

              <div className="absolute inset-0 bg-[#1E1611]/5 mix-blend-multiply" />

              <div className="absolute top-5 left-5 flex items-center gap-1.5 p-2 px-4 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-xs">
                <FiStar size={12} className="text-[#D9A05B]" />
                <span className="text-[10px] font-extrabold text-[#1E1611] tracking-wider uppercase">
                  Petora Verified
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2 pb-1">
              <div className="space-y-1">
                <h3 className="font-extrabold text-xl text-[#1E1611]">
                  Daily Care Standards
                </h3>
                <p className="text-xs text-[#7A726A] max-w-xs font-medium">
                  Verified structural health routines for multi-breed comfort.
                </p>
              </div>

              <div className="flex gap-2 shrink-0">
                <div className="bg-[#F7F4EF] rounded-xl p-3 px-4 text-center border border-[#1E1611]/5">
                  <span className="text-sm font-black text-[#1E1611] block leading-none">
                    2X
                  </span>
                  <span className="text-[9px] font-bold text-[#7A726A] uppercase tracking-wider block mt-1">
                    Grooming
                  </span>
                </div>
                <div className="bg-[#C47C5D] rounded-xl p-3 px-4 text-center text-white">
                  <span className="text-sm font-black block leading-none">
                    100%
                  </span>
                  <span className="text-[9px] font-bold text-[#F7F4EF]/90 uppercase tracking-wider block mt-1">
                    Organic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;