"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { ThemeSwitch } from "./ThemeSwitch";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { FiGrid, FiLogOut } from "react-icons/fi";

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

          <ul className="flex items-center gap-4">
            <li>
              <NavLink className="no-underline text-white" href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="no-underline text-white" href="/all-pets">
                All Pets
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center gap-4">
            {user ? (
              <li>
                <Dropdown>
                  <Button className="bg-transparent min-w-0 w-auto h-auto p-0 rounded-full cursor-pointer hover:scale-105 transition-transform outline-hidden data-[hover=true]:bg-transparent data-[press=true]:bg-transparent">
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
                  </Button>

                  <Dropdown.Popover className="bg-[#F7F4EF] dark:bg-[#1E1611] border border-[#1E1611]/10 dark:border-white/10 shadow-2xl rounded-2xl p-1.5 min-w-[240px] z-50">
                    <Dropdown.Menu
                      onAction={(key) => {
                        if (key === "logout") handleLogout();
                      }}
                      className="outline-hidden flex flex-col gap-0"
                    >
                      <Dropdown.Item
                        id="profile"
                        textValue="Profile"
                        className="px-3 py-2 focus:bg-transparent cursor-default select-none opacity-100 outline-hidden"
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-[#1E1611] dark:text-[#F7F4EF] text-sm">
                            {user?.name}
                          </span>
                          <span className="text-xs text-[#1E1611]/60 dark:text-white/60 truncate">
                            {user?.email}
                          </span>
                        </div>
                      </Dropdown.Item>

                      <Dropdown.Item
                        id="dashboard"
                        textValue="Dashboard"
                        className="px-3 py-2.5 rounded-xl hover:bg-[#1E1611]/5 dark:hover:bg-white/5 transition-colors border-t border-[#1E1611]/10 dark:border-white/10 mt-1.5 pt-2.5 outline-hidden"
                      >
                        <Link
                          href="/dashboard"
                          className="w-full flex items-center gap-2.5 text-[#1E1611] dark:text-[#F7F4EF] font-medium text-sm no-underline"
                        >
                          <FiGrid
                            size={16}
                            className="text-[#1E1611]/70 dark:text-[#F7F4EF]/70"
                          />
                          <Label className="cursor-pointer">Dashboard</Label>
                        </Link>
                      </Dropdown.Item>

                      <Dropdown.Item
                        id="logout"
                        textValue="Logout"
                        className="px-3 py-2.5 rounded-xl hover:bg-[#C47C5D]/10 dark:hover:bg-[#C47C5D]/20 transition-colors border-t border-[#1E1611]/10 dark:border-white/10 mt-1 pt-2.5 outline-hidden"
                      >
                        <div className="w-full flex items-center gap-2.5 text-[#C47C5D] font-medium text-sm">
                          <FiLogOut size={16} />
                          <Label className="cursor-pointer">Logout</Label>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </li>
            ) : (
              <li>
                <NavLink href="/login" className="no-underline text-white">
                  Log In
                </NavLink>
              </li>
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
