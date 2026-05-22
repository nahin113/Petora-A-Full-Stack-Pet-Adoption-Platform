"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Home } from "lucide-react";

export default function NotFound () {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative inline-block">
          <span className="text-[120px] leading-none drop-shadow-xl">🐾</span>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white/90 dark:bg-[#1E1611]/90 backdrop-blur-md rounded-full px-4 py-2 border border-[#1E1611]/10 dark:border-white/5 shadow-sm transform rotate-12">
            <span className="text-xl font-black text-[#C47C5D]">404</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Looks like you're lost
          </h1>
          <p className="text-sm font-semibold text-[#1E1611]/60 dark:text-[#F7F4EF]/60">
            The page you are looking for seems to have wandered off. Let's get
            you back to the available pets.
          </p>
        </div>
    <Link href='/'>
        <Button
          className="rounded-full bg-[#C47C5D] text-[#F7F4EF] hover:bg-[#A86446] h-12 px-8 text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md mx-auto"
        >
          <Home size={15} />
          <span>Return to Homepage</span>
        </Button>
    </Link>
      </div>
    </div>
  );
};
