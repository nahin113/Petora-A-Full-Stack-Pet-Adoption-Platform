"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className = "" }) => {
  const pathName = usePathname();
  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`relative inline-block group px-1 py-1 outline-none transition-transform duration-200 active:scale-95 ${className}`}
    >
      <span
        className={`block text-sm font-black uppercase tracking-widest drop-shadow-md transition-all duration-300 transform group-hover:-translate-y-0.5
          ${
            isActive
              ? "text-[#C47C5D]"
              : "text-white group-hover:text-[#F7F4EF]"
          }
        `}
      >
        {children}
      </span>

      {isActive ? (
        <div className="absolute left-0 bottom-0 h-0.5 w-full bg-[#C47C5D] transition-opacity duration-300" />
      ) : (
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#C47C5D]/40 transition-all duration-300 ease-out group-hover:w-full" />
      )}
    </Link>
  );
};

export default NavLink;