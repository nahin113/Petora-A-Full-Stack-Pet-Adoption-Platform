"use client";

import Navbar from "@/components/Navbar";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiFileText,
  FiPlus,
  FiHeart,
  FiLogOut,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getLinkClass = (path) => {
    const baseClass =
      "flex items-center gap-3 px-4 py-3 font-medium rounded-xl transition-all text-sm w-full";
    if (pathname === path) {
      return `${baseClass} bg-linear-to-br from-[#346bf1] to-[#4fa0ff] text-white shadow-md shadow-rose-100`;
    }
    return `${baseClass} text-slate-500 hover:bg-slate-50`;
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen flex flex-col font-sans">

      <Navbar></Navbar>

      <div className="flex flex-1 relative">
        <aside
          className={`
          fixed md:sticky top-16.25 left-0 z-30
          w-65 h-[calc(100vh-65px)] bg-white 
          flex flex-col justify-between border-r border-slate-100 px-4 py-6
          transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
        >
          <div className="flex flex-col gap-6 w-full">
            <span className="text-xs font-bold text-slate-400 tracking-wider uppercase pl-3">
              Menu
            </span>
            <nav
              className="flex flex-col gap-1 w-full"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Link
                href="/dashboard/my-requests"
                className={getLinkClass("/dashboard/my-requests")}
              >
                <FiFileText size={18} />
                <span>My Requests</span>
              </Link>

              <Link
                href="/dashboard/add-pet"
                className={getLinkClass("/dashboard/add-pet")}
              >
                <FiPlus size={18} />
                <span>Add Pet</span>
              </Link>

              <Link
                href="/dashboard/my-listings"
                className={getLinkClass("/dashboard/my-listings")}
              >
                <FiHeart size={18} />
                <span>My Listings</span>
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-100 w-full">
            <button className="flex items-center gap-3 px-4 py-3 text-[#346bf1] hover:bg-[#4fa0ff]-50 font-semibold rounded-xl w-full transition-all text-sm">
              <FiLogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </aside>


        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-20 md:hidden top-16.25"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}


        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
