import Image from "next/image";
import { FiArrowUpRight, FiMoreHorizontal } from "react-icons/fi";

const AdoptionProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Connect",
      description:
        "Explore our rich catalogue of available pets ready for adoption. Find the ideal companion that matches your personal household dynamics and lifestyle seamlessly.",
      borderColor: "border-[#C47C5D]",
      numberColor: "text-[#C47C5D]",
    },
    {
      number: "2",
      title: "Screening",
      description:
        "Submit a simple, intuitive application. Our vetted support teams review compatibility details to guarantee a safe, happy environment for your new family member.",
      borderColor: "border-[#D9A05B]",
      numberColor: "text-[#D9A05B]",
    },
    {
      number: "3",
      title: "Make a deal",
      description:
        "Finalize standard adoption agreements cleanly. Our platform removes confusing administrative barriers, arranging safe document transfers efficiently.",
      borderColor: "border-[#7A726A]/30",
      numberColor: "text-[#7A726A]",
    },
    {
      number: "4",
      title: "Veterinary Exam",
      description:
        "Every companion receives a comprehensive medical screening. From general vaccinations to baseline physical reviews, health tracking starts off accurately.",
      borderColor: "border-[#7A726A]/30",
      numberColor: "text-[#7A726A]",
    },
    {
      number: "5",
      title: "Travel",
      description:
        "Coordinate premium travel or secure local handoffs easily. We prioritize comfortable transit conditions so your pet arrives completely decompressed.",
      borderColor: "border-[#D9A05B]",
      numberColor: "text-[#D9A05B]",
    },
  ];

  return (
    <section className="w-full bg-[#F7F4EF] dark:bg-[#1E1611] py-16 md:py-24 px-6 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto space-y-12">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1611] dark:text-[#F7F4EF] tracking-tight transition-colors duration-300">
            Adoption process
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
             
              className={`bg-[#F7F4EF] dark:bg-[#2A211C] rounded-[2.5rem] p-8 min-h-[260px] border-2 ${step.borderColor} dark:border-white/10 flex flex-col justify-between relative shadow-xs transition-all duration-300`}
            >
      
              <div className="flex justify-between items-start">
                <span
                  className={`text-5xl font-black tracking-tighter transition-colors duration-300 ${step.numberColor}`}
                >
                  {step.number}
                </span>
                <button className="text-[#7A726A] dark:text-[#A1978F] hover:text-[#1E1611] dark:hover:text-[#F7F4EF] p-1 transition-colors cursor-pointer">
                  <FiMoreHorizontal size={20} />
                </button>
              </div>

     
              <div className="space-y-3 mt-6">
                <h3 className="text-2xl font-black text-[#1E1611] dark:text-[#F7F4EF] tracking-tight transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-[#7A726A] dark:text-[#A1978F] leading-relaxed font-medium transition-colors duration-300">
                  {step.description}
                </p>
              </div>

      
              <div className="absolute bottom-6 right-6 text-[#1E1611]/40 dark:text-white/40 transition-colors duration-300">
                <FiArrowUpRight size={20} />
              </div>
            </div>
          ))}

  
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[280px] shadow-sm group border border-transparent dark:border-white/5 transition-all duration-300">
            <Image
              src="/assets/pet-1.jpg"
              alt="Cozy moment sharing affection with an adopted pet"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

      
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

 
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
              <div className="text-4xl font-black text-white/40 tracking-tighter">
                &
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase tracking-wider text-white">
                  Review
                </h3>
                <p className="text-xs md:text-sm text-[#F7F4EF]/80 leading-relaxed font-normal max-w-xs">
                  First and foremost, we’d like to thank you for entrusting us.
                  We ask of you to take a minute of your time to provide us with
                  your valuable feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;
