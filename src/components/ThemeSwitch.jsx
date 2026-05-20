"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({ isSelected }) => (
        <>
      
          <Switch.Control
            className={`h-[31px] w-[51px] rounded-full border border-white/20 transition-all duration-300 flex items-center ${
              isSelected
                ? "bg-[#F7F4EF]/90 shadow-[0_0_12px_rgba(247,244,239,0.3)]" 
                : "bg-[#1E1611]/80 shadow-inner" 
            }`}
          >
         
            <Switch.Thumb
              className={`size-[27px] bg-[#C47C5D] rounded-full flex items-center justify-center transition-all duration-300 ${
                isSelected ? "ms-[22px] shadow-md" : "ms-[2px] shadow-sm"
              }`}
            >
              {/* ICONS */}
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-[14px] text-[#F7F4EF]" />
                ) : (
                  <Moon className="size-[14px] text-[#F7F4EF]" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}
