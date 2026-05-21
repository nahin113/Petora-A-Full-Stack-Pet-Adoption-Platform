"use client";

import { Card } from "@heroui/react";
import Link from "next/link";
import { FiFileText, FiHeart } from "react-icons/fi";

export default function DashboardHomePage() {
  const stats = [
    {
      title: "Adoption Requests",
      value: "0",
      icon: <FiFileText size={22} />,
      link: "/dashboard/my-requests",
      color: "text-[#C47C5D] bg-[#C47C5D]/10 dark:bg-[#C47C5D]/20",
    },
    {
      title: "Active Listings",
      value: "0",
      icon: <FiHeart size={22} />,
      link: "/dashboard/my-listings",
      color:
        "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/20",
    },
  ];

  return (
    <div className="space-y-8 text-[#1E1611] dark:text-[#F7F4EF]">
      {/* Header Info Banner */}
      <div className="space-y-1">
        <h1 className="text-3xl font-black tracking-tight leading-none text-[#1E1611] dark:text-[#F7F4EF]">
          Welcome back!
        </h1>
        <p className="text-sm font-semibold text-[#1E1611]/60 dark:text-[#F7F4EF]/60 max-w-2xl">
          Monitor your pet adoption parameters, overview pending request
          lifecycles, and handle active document repository configurations
          directly below.
        </p>
      </div>

      {/* Metrics Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <Link href={stat.link} key={index} className="block group">
            <Card className="p-6 bg-white dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/10 dark:border-white/5 rounded-[2rem] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden">
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
