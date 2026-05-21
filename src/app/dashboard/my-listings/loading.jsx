"use client";
import React from "react";
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F7F4EF] dark:bg-[#1E1611] transition-colors duration-300">
      <div className="flex flex-col items-center gap-6 p-8 rounded-[2.5rem] bg-white/40 dark:bg-[#1E1611]/40 backdrop-blur-md border border-[#1E1611]/5 dark:border-white/5 shadow-sm">
        <Spinner
          size="lg"
          className={{
            wrapper: "w-14 h-14",
            circle1: "border-b-[#C47C5D]",
            circle2: "border-b-[#C47C5D]",
          }}
        />
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#C47C5D] animate-pulse">
            Fetching Paws
          </span>
          <span className="flex gap-0.5">
            <span
              className="w-1 h-1 rounded-full bg-[#C47C5D] animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></span>
            <span
              className="w-1 h-1 rounded-full bg-[#C47C5D] animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              className="w-1 h-1 rounded-full bg-[#C47C5D] animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
}
