import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";
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
              <Link className="no-underline text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="no-underline text-white" href="#">
                All Pets
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <Link className="no-underline text-white">Log In</Link>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
