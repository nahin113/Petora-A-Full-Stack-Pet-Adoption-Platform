"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  FiFileText,
  FiPlus,
  FiHeart,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getLinkClass = (path) => {
    const baseClass =
      "flex items-center gap-3 px-4 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition-all w-full";
    if (pathname === path) {
      return `${baseClass} bg-[#C47C5D] text-[#F7F4EF] shadow-sm`;
    }
    return `${baseClass} text-[#1E1611]/60 dark:text-[#F7F4EF]/60 hover:bg-[#1E1611]/5 dark:hover:bg-[#F7F4EF]/5`;
  };

  return (
    <div className="bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] min-h-screen flex flex-col font-sans transition-colors duration-300">
      <div className="md:hidden mt-[65px] flex items-center justify-between px-6 py-3 bg-[#F7F4EF] dark:bg-[#1E1611] border-b border-[#1E1611]/10 dark:border-white/5 transition-colors duration-300">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#1E1611]/50 dark:text-[#F7F4EF]/50">
          Dashboard Menu
        </span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-xl bg-[#1E1611]/5 dark:bg-white/5 hover:bg-[#1E1611]/10 text-[#C47C5D] transition-all cursor-pointer"
        >
          {isSidebarOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>


      <div className="flex flex-col md:flex-row flex-1 w-full">

        <aside
          className={`
            bg-white dark:bg-[#1E1611]/40 backdrop-blur-md
            flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#1E1611]/10 dark:border-white/5 px-4 py-6
            transition-all duration-300 ease-in-out w-full md:w-64
            ${isSidebarOpen ? "block" : "hidden md:flex"}
          `}
        >
          <div className="flex flex-col gap-6 w-full">
            <span className="text-[10px] font-black text-[#1E1611]/40 dark:text-[#F7F4EF]/40 tracking-widest uppercase pl-3">
              Menu Center
            </span>
            <nav
              className="flex flex-col gap-1 w-full"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Link
                href="/dashboard/my-requests"
                className={getLinkClass("/dashboard/my-requests")}
              >
                <FiFileText size={16} />
                <span>My Requests</span>
              </Link>

              <Link
                href="/dashboard/add-pet"
                className={getLinkClass("/dashboard/add-pet")}
              >
                <FiPlus size={16} />
                <span>Add Pet</span>
              </Link>

              <Link
                href="/dashboard/my-listings"
                className={getLinkClass("/dashboard/my-listings")}
              >
                <FiHeart size={16} />
                <span>My Listings</span>
              </Link>
            </nav>
          </div>

        </aside>
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
