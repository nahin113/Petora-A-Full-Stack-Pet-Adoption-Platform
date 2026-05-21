import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] dark:bg-[#1E1611] transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
