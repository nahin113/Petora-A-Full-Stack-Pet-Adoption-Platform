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
      color: "text-rose-500 bg-rose-50",
    },
    {
      title: "Active Listings",
      value: "0",
      icon: <FiHeart size={22} />,
      link: "/dashboard/my-listings",
      color: "text-cyan-500 bg-cyan-50",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Welcome back!
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt distinctio quas id veritatis placeat alias ab. Sit, sint repudiandae.
        </p>
      </div>
    </div>
  );
}
