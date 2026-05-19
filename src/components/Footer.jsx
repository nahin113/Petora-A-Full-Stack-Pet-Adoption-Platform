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
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
  FaCcDinersClub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-slate-300 font-sans">

      <div className="bg-[#323142] px-6 py-10 md:py-12 lg:px-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Be the first to know
            </h2>
            <p className="text-sm text-slate-400">
              Don't miss your dream pet! Get updates on newly listed pets and
              deals to your inbox!
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
            <div className="bg-[#414054] p-1.5 rounded-2xl flex items-center justify-between shadow-inner">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent pl-4 pr-2 py-2 text-white placeholder-slate-400 focus:outline-none w-full text-sm"
              />
              <button
                className="bg-linear-to-br from-[#346bf1] to-[#4fa0ff] 
            hover:from-[#1e52cc] hover:to-[#2b82eb] 
            text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition duration-200 shrink-0"
              >
                Subscribe <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#21202e] pt-16 pb-12 px-6 lg:px-16 border-b border-slate-800">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">

          <div className="flex flex-col gap-5">
            <div className="flex items-center text-white font-bold text-3xl">

              <Image
                src={"/assets/petora_logo.png"}
                alt="petora logo"
                width={60}
                height={60}
              ></Image>
              <span>PeTora</span>
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-1 text-[#00b67a] font-bold text-sm">
                <span>Trustpilot</span>
                <span className="text-white bg-[#00b67a] text-[10px] px-1 rounded ml-1">
                  4.4
                </span>
              </div>
              <div className="flex gap-0.5 mt-1.5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#00b67a] p-1 rounded-sm text-white text-[10px]"
                  >
                    <FaStar />
                  </div>
                ))}
                <div className="bg-slate-600 p-1 rounded-sm text-white text-[10px]">
                  <FaStar />
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2">240 reviews</p>
            </div>
          </div>

          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Adopt pets
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Up-sell proposals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Good for cats
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Why us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Info
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Guarantee
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Adoption process
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Shipping options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>


          <div className="flex flex-col gap-5">
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-slate-500 text-sm" />
                <span className="hover:text-white transition cursor-pointer">
                  (+88) 01714333624
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-slate-500 text-sm mt-0.5" />
                <span>Mirpur 12, Dhaka</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-slate-500 text-sm" />
                <a
                  href="mailto:adopt@purebredkitties.com"
                  className="hover:text-white transition"
                >
                  adopt@petora.com
                </a>
              </li>
            </ul>


            <div className="flex items-center gap-2 mt-2">
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-[#ff0000] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <FaYoutube size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-[#1877f2] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-[#bd081c] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <FaPinterestP size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <FaInstagram size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center hover:opacity-90 transition border border-slate-800"
              >
                <FaTiktok size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#1a1924] py-6 px-6 lg:px-16 text-xs text-slate-500">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>© 2026 PeTora. ALL rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 divider-links">
              <Link
                href="#"
                className="hover:text-slate-400 transition underline"
              >
                Copyright
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="hover:text-slate-400 transition underline"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="hover:text-slate-400 transition underline"
              >
                Terms of Use
              </Link>
              <span>|</span>
              <Link
                href="#"
                className="hover:text-slate-400 transition underline"
              >
                Trademark
              </Link>
            </div>
          </div>


          <div className="flex items-center">
            <Image
              src={"/assets/bkash.png"}
              alt="bkash"
              width={60}
              height={60}
            ></Image>
            <Image
              className="w-20"
              src={"/assets/nagad.png"}
              alt="nagad"
              width={60}
              height={60}
            ></Image>
            <Image
              src={"/assets/rocket.png"}
              alt="rocket"
              width={60}
              height={60}
            ></Image>
          </div>
        </div>
      </div>
    </footer>
  );
}
