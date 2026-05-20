import { FiArrowDownRight } from "react-icons/fi";

const SuccessStories = () => {
  
  const gridBlocks = [

    {
      id: 1,
      type: "text",
      author: "Brooklyn Simmons",
      rating: 5,
      text: "Pet transportation rules can vary depending on the country or region you are traveling to or from. It's essential to research.",
      colSpan: "lg:col-span-3",
    },
    {
      id: 2,
      type: "video",
      videoUrl:
        "https://media.istockphoto.com/id/1944364924/video/a-young-caucasian-woman-and-her-gentle-gray-cat-are-relaxing-lying-in-bed.mp4?s=mp4-640x640-is&k=20&c=3wwejZVPIGessXJaaLoYsQtPkMJWL4KX3fpy1JYMMGI=",
      colSpan: "lg:col-span-3",
    },
    {
      id: 3,
      type: "text",
      author: "Wade Warren",
      rating: 5,
      text: "We love our baby... she is so adorable and cuddly. Vet check was perfect. She is entertaining and so smart.",
      colSpan: "lg:col-span-3",
    },
    {
      id: 4,
      type: "text",
      author: "Leslie Alexander",
      rating: 5,
      text: "We've adopted two Maine Coons from Mari and have been blessed with two wonderful additions to our household...",
      colSpan: "lg:col-span-3",
    },


    {
      id: 5,
      type: "text",
      author: "Wade Warren",
      rating: 5,
      text: "We love our baby... she is so adorable and cuddly. Vet check was perfect. She is entertaining and so smart.",
      colSpan: "lg:col-span-3",
    },
    {
      id: 6,
      type: "text",
      author: "Cindie Pappas",
      rating: 5,
      text: "That everyone was in contact with me they were all nice not rude they were a scam which I've experienced.",
      colSpan: "lg:col-span-3",
    },
    {
      id: 7,
      type: "video",
      videoUrl:
        "https://media.istockphoto.com/id/1406188507/video/sad-young-woman-sitting-alone-on-the-bed.mp4?s=mp4-640x640-is&k=20&c=t45bb-psEfOMPCX3zytYMu_PzJ486r0T92hXdPDTmVk=",
      colSpan: "lg:col-span-3",
    },
    {
      id: 8,
      type: "text",
      author: "Leslie Alexander",
      rating: 5,
      text: "We've adopted two Maine Coons from Mari and have been blessed with two wonderful additions to our household...",
      colSpan: "lg:col-span-3",
    },

   
    {
      id: 9,
      type: "video",
      videoUrl:
        "https://media.istockphoto.com/id/1474186586/video/happy-female-pets-owner-spending-her-evening-at-home-in-the-living-room-playful-dog-and-cute.mp4?s=mp4-640x640-is&k=20&c=Tt4O_6ucKtbXjQFaJ9neLrZeXT_cwYXPshPp7VVsPh4=",
      colSpan: "lg:col-span-3",
    },
    {
      id: 10,
      type: "text",
      author: "Wade Warren",
      rating: 5,
      text: "We love our baby... she is so adorable and cuddly. Vet check was perfect. She is entertaining and so smart.",
      colSpan: "lg:col-span-3",
    },
    {
      id: 11,
      type: "text",
      author: "Brooklyn Simmons",
      rating: 5,
      text: "Pet transportation rules can vary depending on the country or region you are traveling to or from. It's essential to research.",
      colSpan: "lg:col-span-3",
    },
  ];

  return (
    <section className="w-full bg-[#F7F4EF] dark:bg-[#1E1611] py-16 md:py-24 px-6 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto space-y-12">
      
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1611] dark:text-[#F7F4EF] tracking-tight transition-colors duration-300">
            Success Stories
          </h2>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-fr">
          {gridBlocks.map((block) => {
     
            if (block.type === "text") {
              return (
                <div
                  key={block.id}
                  className={`bg-white dark:bg-[#2A211C] rounded-[2rem] p-6 md:p-7 flex flex-col justify-between border border-[#1E1611]/5 dark:border-white/5 shadow-xs transition-all duration-300 ${block.colSpan}`}
                >
                  <div className="space-y-4">
               
                    <div className="flex items-center gap-3">
          
                      <div className="w-9 h-9 rounded-full bg-[#1E1611]/10 dark:bg-white/10 flex items-center justify-center font-bold text-xs text-[#1E1611] dark:text-[#F7F4EF] transition-colors duration-300">
                        {block.author.charAt(0)}
                      </div>
                      <h4 className="font-extrabold text-[#1E1611] dark:text-[#F7F4EF] text-sm tracking-tight transition-colors duration-300">
                        {block.author}
                      </h4>
                    </div>

               
                    <div className="flex items-center gap-0.5 text-[#D9A05B]">
                      {[...Array(block.rating)].map((_, i) => (
                        <span key={i} className="text-base">
                          ★
                        </span>
                      ))}
                    </div>

           
                    <p className="text-xs md:text-sm text-[#7A726A] dark:text-[#A1978F] leading-relaxed font-medium transition-colors duration-300">
                      {block.text}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={block.id}
                className={`relative min-h-[180px] md:min-h-[200px] rounded-[2rem] overflow-hidden bg-[#1E1611]/5 dark:bg-white/5 border border-transparent dark:border-white/5 shadow-xs transition-all duration-300 ${block.colSpan}`}
              >
                <video
                  src={block.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover scale-105 border-0 m-0 p-0"
                />
              </div>
            );
          })}

   
          <div className="bg-[#C47C5D] hover:bg-[#b56e4f] text-[#F7F4EF] rounded-[2rem] p-7 flex flex-col justify-between shadow-sm transition-all duration-300 cursor-pointer min-h-[200px] lg:col-span-3 group">
            <div className="space-y-2">
              <h3 className="font-black text-2xl uppercase tracking-wider leading-none">
                All
                <br />
                Reviews
              </h3>
              <p className="text-xs text-[#F7F4EF]/80 font-normal max-w-[170px] leading-relaxed">
                Comprehensive answers about adoption
              </p>
            </div>

            <div className="self-end w-9 h-9 rounded-full border border-[#F7F4EF]/20 flex items-center justify-center bg-white/10 group-hover:bg-[#F7F4EF] group-hover:text-[#C47C5D] transition-colors duration-300">
              <FiArrowDownRight
                size={16}
                className="transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
