import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import SmoothScrollProvider from "@/app/ui/SmoothScrollProvider";
import NextThemeProvider from "@/providers/NextThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Petora",
  description: "Pet Adoption Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-[#F7F4EF] dark:bg-[#1E1611] text-[#1E1611] dark:text-[#F7F4EF] min-h-full transition-colors duration-300">
        <NextThemeProvider>
          {/* <SmoothScrollProvider> */}
            <Toaster position="top-center" />
            <Navbar />
            {children}
          {/* </SmoothScrollProvider> */}
        </NextThemeProvider>
      </body>
    </html>
  );
}
