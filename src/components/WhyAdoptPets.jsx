import { FiHeart, FiSmile, FiShield, FiActivity } from "react-icons/fi";
import { ScrollReveal } from "./ScrollReveal";

const WhyAdoptPets = () => {
  const reasons = [
    {
      icon: <FiHeart className="text-[#C47C5D] text-xl" />,
      title: "Save a Deserving Life",
      description:
        "Millions of animals enter shelters every year. By choosing to adopt, you give a loving companion a second chance at a happy life.",
    },
    {
      icon: <FiSmile className="text-[#D9A05B] text-xl" />,
      title: "Unconditional Companionship",
      description:
        "Adopted pets recognize your care and return it with fierce loyalty, endless affection, and a unique emotional bond.",
    },
    {
      icon: <FiActivity className="text-[#C47C5D] text-xl" />,
      title: "Boost Your Mental & Physical Health",
      description:
        "Studies show that caring for a pet lowers stress levels, reduces blood pressure, and keeps you active and socially engaged.",
    },
    {
      icon: <FiShield className="text-[#D9A05B] text-xl" />,
      title: "Fight Against Overpopulation",
      description:
        "Adoption directly supports ethical treatment frameworks and reduces the demand for commercial, profit-driven breeding facilities.",
    },
  ];

  return (
 
      <div className="w-full bg-linear-to-br from-[#F7F4EF] to-[#EFEAE2] dark:from-[#1E1611] dark:to-[#160F0B] py-16 md:py-20 px-6 overflow-hidden transition-colors duration-300">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center h-full">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1611] dark:text-[#F7F4EF] tracking-tight leading-none transition-colors duration-300">
                Why should we <span className="text-[#C47C5D]">adopt</span>{" "}
                pets?
              </h2>
              <p className="text-base text-[#7A726A] dark:text-[#A1978F] max-w-xl transition-colors duration-300">
                Bringing a shelter pet into your home changes more than just
                their world, it reshapes yours. Here is how adoption creates a
                lasting impact:
              </p>
            </div>

            <div className="space-y-4 w-full">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-white/60 dark:bg-[#2A211C]/60 p-4 rounded-2xl border border-white/80 dark:border-white/5 shadow-sm transition-all duration-300"
                >
                  <div className="p-2.5 bg-[#F7F4EF] dark:bg-[#1E1611] text-[#C47C5D] rounded-xl shrink-0 shadow-xs transition-colors duration-300">
                    {reason.icon}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-[#1E1611] dark:text-[#F7F4EF] text-base leading-tight transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#7A726A] dark:text-[#A1978F] leading-relaxed transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 w-full flex items-center justify-center h-full">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-transparent dark:border-white/5 shadow-lg transition-colors duration-300">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1031637322?h=4da84e1897&autoplay=1&loop=1&muted=1&background=1"
                className="w-full h-full scale-117"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default WhyAdoptPets;
