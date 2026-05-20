"use client";
import ImageCard from "@/app/ui/ImageCard";
import { motion } from "framer-motion";

const row1Images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1761055924284-da329ba6923b?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with dog",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1601581617163-4e3601bf647b?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with cat",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1773171168506-4670065b4a66?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with bird",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1584332921686-5b7857adc1a3?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with rabbit",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1764175760241-29adb8c13e48?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with fish",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1597467300696-ce10c74bbaa1?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with puppy",
  },
];

const row2Images = [
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1778062864189-d71ca4b1d38a?auto=format&fit=crop&w=600&q=80",
    alt: "Happy family with pet",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1751402985402-d3f61c1b978d?auto=format&fit=crop&w=600&q=80",
    alt: "Happy person with kitten",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1658370223128-fb3c3adafb3e?auto=format&fit=crop&w=600&q=80",
    alt: "Happy owner with parrot",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1778097105734-a50a529d90b9?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with dog",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1768587575446-5b70b1494e2a?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with cat",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1577897113479-2efe3749ccc8?auto=format&fit=crop&w=600&q=80",
    alt: "Happy client with pet",
  },
];

const HappyClients = () => {
  return (
    <div className="w-full bg-[#F7F4EF] py-16 md:py-24 overflow-hidden flex flex-col gap-10">
      <div className="text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E1611] tracking-tight">
          Our happy clients
        </h2>
      </div>

      <div className="w-full flex flex-col gap-6 overflow-hidden">
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex flex-row shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...row1Images, ...row1Images].map((img, index) => (
              <ImageCard key={`r1-${index}`} img={img} />
            ))}
          </motion.div>
        </div>

        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex flex-row shrink-0"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...row2Images, ...row2Images].map((img, index) => (
              <ImageCard key={`r2-${index}`} img={img} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
