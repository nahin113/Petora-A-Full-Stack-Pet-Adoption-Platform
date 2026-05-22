import { getPetData } from "@/lib/actions";
import { Card } from "@heroui/react";
import Link from "next/link";
import { FiFileText, FiHeart } from "react-icons/fi";

export default async function DashboardHomePage() {

  const pets = (await getPetData()) || [];


  const adoptedCount = pets.filter((pet) => pet.status === "Adopted").length;
  const activeCount = pets.filter((pet) => pet.status !== "Adopted").length;

  const stats = [
    {
      title: "Adopted",
      value: adoptedCount,
      icon: <FiFileText size={22} />,
      link: "/dashboard/my-requests",
      color: "text-[#C47C5D] bg-[#C47C5D]/10 dark:bg-[#C47C5D]/20",
    },
    {
      title: "Active Listings",
      value: activeCount,
      icon: <FiHeart size={22} />,
      link: "/dashboard/my-listings",
      color:
        "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/20",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col justify-center min-h-[75vh] space-y-10 text-[#1E1611] dark:text-[#F7F4EF] selection:bg-[#C47C5D]/20">

      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-none text-[#1E1611] dark:text-[#F7F4EF]">
          Welcome back!
        </h1>
        <p className="text-sm font-semibold text-[#1E1611]/60 dark:text-[#F7F4EF]/60 max-w-xl leading-relaxed">
          Monitor your pet adoption parameters, overview pending request
          lifecycles, and handle active document repository configurations
          directly below.
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {stats.map((stat, index) => (
          <Link href={stat.link} key={index} className="block group">
            <Card className="p-6 bg-white dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] shadow-xs transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                  <p className="text-[11px] font-black uppercase tracking-wider text-[#1E1611]/60 dark:text-[#F7F4EF]/60 pl-0.5">
                    {stat.title}
                  </p>
                  <p className="text-4xl font-black tracking-tight text-[#1E1611] dark:text-[#F7F4EF]">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`p-3.5 rounded-2xl ${stat.color} transition-transform duration-300 group-hover:scale-105 shrink-0`}
                >
                  {stat.icon}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
