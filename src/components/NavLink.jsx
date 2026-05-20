"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ href, children, className = "" }) => {
  const pathName = usePathname();
  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`relative inline-block group px-1 py-1 outline-none ${className}`}
    >
    
      <motion.span
        className={`block text-sm font-black uppercase tracking-widest drop-shadow-md transition-colors duration-300
          ${
            isActive
              ? "text-[#C47C5D]"
              : "text-white group-hover:text-[#F7F4EF]"
          }
        `}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>


      {isActive ? (
  
        <motion.div
          layoutId="navbar-active-indicator"
          className="absolute left-0 bottom-0 h-0.5 w-full bg-[#C47C5D]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      ) : (

        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C47C5D]/40 transition-all duration-300 ease-out group-hover:w-full" />
      )}
    </Link>
  );
};

export default NavLink;
