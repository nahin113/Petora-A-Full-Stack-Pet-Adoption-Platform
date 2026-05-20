import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";
import NavLink from "./NavLink";
import { ThemeSwitch } from "./ThemeSwitch";
const Navbar = () => {
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
            ></Image>
            <h4 className="text-white font-bold text-4xl">
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
              <NavLink className="no-underline text-white" href="/allpets">
                All Pets
              </NavLink>
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink href="/login" className="no-underline text-white">Log In</NavLink>
            </li>
            <li>
              <ThemeSwitch></ThemeSwitch>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
