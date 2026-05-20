"use client";
import Image from "next/image";
import NavLink from "./NavLink";
import { ThemeSwitch } from "./ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-transparent">
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <header className="flex h-20 items-center justify-between px-6 container mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-1">
            <Image
              className="w-15"
              src={"/assets/petora_logo.png"}
              height={60}
              width={60}
              alt="petora_logo"
            />
            <h4 className="text-white font-bold text-4xl tracking-tight">
              PeTora
            </h4>
          </div>

          {/* Center Navigation Links */}
          <ul className="flex items-center gap-4">
            <li>
              <NavLink className="no-underline text-white" href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="no-underline text-white" href="/allpets">
                All Pets
              </NavLink>
            </li>
          </ul>

          {/* Right Action Items */}
          <ul className="flex items-center gap-4">
            {user ? (
              <>
                <li>
                  {/* Styled Avatar with brand border and colors */}
                  <Avatar
                    className="border-2 border-[#C47C5D] bg-[#1E1611] text-[#F7F4EF]"
                    size="md"
                  >
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name?.charAt(0)}
                      src={user?.image}
                    />
                    <Avatar.Fallback className="bg-[#1E1611] text-[#F7F4EF] font-bold">
                      {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                </li>
                <li>
                  {/* Logout Button matching the "Adopt Now" design scheme but inverted */}
                  <Button
                    onClick={handleLogout}
                    className="bg-[#1E1611]/40 dark:bg-[#F7F4EF]/10 border border-white/20 hover:border-[#C47C5D]/50 text-[#C47C5D] font-black uppercase text-xs tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 transform active:scale-98 shadow-md cursor-pointer"
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink href="/login" className="no-underline text-white">
                    Log In
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
