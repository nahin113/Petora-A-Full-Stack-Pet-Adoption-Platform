"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FiFileText, FiPlus, FiHeart, FiLogOut } from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Updated layout mapping classes to adapt between light and dark backgrounds smoothly
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
      {/* Global Application Navigation Bar */}
      <Navbar />

      <div className="flex flex-1 relative">
        {/* Theme-Adaptive Sidebar Component */}
        <aside
          className={`
            fixed md:sticky top-[65px] left-0 z-30
            w-65 h-[calc(100vh-65px)] bg-white dark:bg-[#1E1611]/40 backdrop-blur-md
            flex flex-col justify-between border-r border-[#1E1611]/10 dark:border-white/5 px-4 py-6
            transition-transform duration-300 ease-in-out
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
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

          {/* Action Footer Wrapper Block */}
          <div className="pt-4 border-t border-[#1E1611]/10 dark:border-white/5 w-full">
            <button className="flex items-center gap-3 px-4 py-3 text-[#C47C5D] hover:bg-[#C47C5D]/10 dark:hover:bg-[#C47C5D]/20 font-black uppercase tracking-wider rounded-xl w-full transition-all text-xs cursor-pointer">
              <FiLogOut size={16} />
              <span>Logout Account</span>
            </button>
          </div>
        </aside>

        {/* Mobile View Sidebar Blur Backdrop Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-20 md:hidden top-[65px]"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Page Content Yield Injection Viewport */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
