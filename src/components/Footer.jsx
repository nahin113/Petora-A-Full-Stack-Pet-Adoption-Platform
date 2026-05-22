import Image from "next/image";
import Link from "next/link";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaYoutube,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTiktok,
  FaStar,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-[#1E1611] dark:text-[#A1978F] font-sans transition-colors duration-300">

      <div className="bg-[#EAE3D8] dark:bg-[#2A211C] px-6 py-10 md:py-12 lg:px-16 border-b border-[#1E1611]/10 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-[#1E1611] dark:text-[#F7F4EF] mb-2 tracking-tight">
              Be the first to know
            </h2>
            <p className="text-sm text-[#5C544E] dark:text-[#A1978F] font-medium">
              Don't miss your dream pet! Get updates on newly listed pets and
              deals directly to your inbox!
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
        
            <div className="bg-white dark:bg-[#1E1611]/40 p-1.5 rounded-full flex items-center justify-between border border-[#1E1611]/15 dark:border-white/10 shadow-sm transition-all duration-300">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent pl-5 pr-2 py-2 text-[#1E1611] dark:text-[#F7F4EF] placeholder-[#1E1611]/50 dark:placeholder-[#A1978F]/60 focus:outline-none w-full text-sm font-semibold"
              />
              <button className="px-8 py-3.5 bg-[#C47C5D] hover:bg-[#A86446] text-[#F7F4EF] text-xs font-black uppercase tracking-wider rounded-full shadow-md transition-all duration-300 transform active:scale-98 flex items-center gap-2 shrink-0 cursor-pointer">
                <span>Subscribe</span>
                <FaPaperPlane className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F3EDE2] dark:bg-[#1E1611] pt-16 pb-12 px-6 lg:px-16 border-b border-[#1E1611]/10 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
      
          <div className="flex flex-col gap-5">
            <div className="flex items-center text-[#1E1611] dark:text-[#F7F4EF] font-black text-3xl tracking-tight gap-2">
              <Image
                src="/assets/petora_logo.png"
                alt="Petora Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span>PeTora</span>
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-1 text-[#00a36c] font-extrabold text-sm">
                <span>Trustpilot</span>
                <span className="text-white bg-[#00a36c] text-[10px] px-1 rounded font-black ml-1">
                  4.4
                </span>
              </div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#00a36c] p-1 rounded-sm text-white text-[9px]"
                  >
                    <FaStar />
                  </div>
                ))}
                <div className="bg-[#1E1611]/15 dark:bg-white/10 p-1 rounded-sm text-[#1E1611]/60 dark:text-[#A1978F] text-[9px]">
                  <FaStar />
                </div>
              </div>
              <p className="text-xs text-[#5C544E] dark:text-[#A1978F]/70 mt-2 font-bold">
                240 reviews
              </p>
            </div>
          </div>

  
          <div>
            <h4 className="text-[#1E1611] dark:text-[#F7F4EF] font-black uppercase tracking-wider mb-5 text-xs">
              Adopt pets
            </h4>
            <ul className="space-y-3 text-xs font-bold text-[#5C544E] dark:text-[#A1978F] space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Up-sell proposals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Good for cats
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-[#1E1611] dark:text-[#F7F4EF] font-black uppercase tracking-wider mb-5 text-xs">
              Company
            </h4>
            <ul className="space-y-3 text-xs font-bold text-[#5C544E] dark:text-[#A1978F] space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Why us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1E1611] dark:text-[#F7F4EF] font-black uppercase tracking-wider mb-5 text-xs">
              Info
            </h4>
            <ul className="space-y-3 text-xs font-bold text-[#5C544E] dark:text-[#A1978F] space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Quality
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Guarantee
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Safety
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Adoption process
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  Shipping options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

  
          <div className="flex flex-col gap-6">
            <ul className="space-y-3.5 text-xs font-bold text-[#5C544E] dark:text-[#A1978F]">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C47C5D] text-xs shrink-0" />
                <span className="text-[#1E1611] dark:text-[#F7F4EF] hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition cursor-pointer">
                  (+88) 01714333624
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C47C5D] text-xs mt-0.5 shrink-0" />
                <span className="text-[#1E1611] dark:text-[#F7F4EF]">
                  Mirpur 12, Dhaka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#C47C5D] text-xs shrink-0" />
                <a
                  href="mailto:adopt@petora.com"
                  className="text-[#1E1611] dark:text-[#F7F4EF] hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
                >
                  adopt@petora.com
                </a>
              </li>
            </ul>

     
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1611]/10 dark:bg-white/5 hover:bg-[#ff0000] dark:hover:bg-[#ff0000] text-[#1E1611] dark:text-[#F7F4EF] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaYoutube size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1611]/10 dark:bg-white/5 hover:bg-[#1877f2] dark:hover:bg-[#1877f2] text-[#1E1611] dark:text-[#F7F4EF] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF size={12} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1611]/10 dark:bg-white/5 hover:bg-[#bd081c] dark:hover:bg-[#bd081c] text-[#1E1611] dark:text-[#F7F4EF] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaPinterestP size={12} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1611]/10 dark:bg-white/5 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-[#1E1611] dark:text-[#F7F4EF] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#1E1611]/10 dark:bg-white/5 hover:bg-[#000000] dark:hover:bg-white text-[#1E1611] dark:text-[#F7F4EF] hover:text-white dark:hover:text-[#1E1611] flex items-center justify-center transition-all duration-300 border border-[#1E1611]/10 dark:border-white/10"
              >
                <FaTiktok size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

  
      <div className="bg-[#EAE3D8] dark:bg-[#160F0B] py-6 px-6 lg:px-16 text-xs text-[#5C544E] dark:text-[#A1978F]/60 transition-colors duration-300">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p className="font-bold">© 2026 PeTora. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-[11px] text-[#5C544E]/80 dark:text-[#A1978F]/50 font-semibold">
              <Link
                href="#"
                className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
              >
                Copyright
              </Link>
              <span>•</span>
              <Link
                href="#"
                className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="#"
                className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
              >
                Terms of Use
              </Link>
              <span>•</span>
              <Link
                href="#"
                className="hover:text-[#C47C5D] dark:hover:text-[#C47C5D] transition"
              >
                Trademark
              </Link>
            </div>
          </div>

    
          <div className="flex items-center gap-1.5 transition-opacity">
            <div className=" p-1 px-2 rounded-lg flex items-center justify-center">
              <Image
                src="/assets/bkash.png"
                alt="bKash Portal"
                width={44}
                height={20}
                className="object-contain h-10 w-auto"
              />
            </div>
            <div className="p-1 px-2 rounded-lg  flex items-center justify-center">
              <Image
                src="/assets/nagad.png"
                alt="Nagad Portal"
                width={44}
                height={20}
                className="object-contain h-10 w-auto"
              />
            </div>
            <div className="p-1 px-2 rounded-lg flex items-center justify-center">
              <Image
                src="/assets/rocket.png"
                alt="Rocket Portal"
                width={44}
                height={20}
                className="object-contain h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
