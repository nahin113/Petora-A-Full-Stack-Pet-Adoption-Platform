import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-transparent">
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6 container mx-auto">
          <div className="flex items-center gap-1">
            <Image
              className="w-15"
              src={"/assets/petora_logo.png"}
              height={60}
              width={60}
              alt="petora_logo"
            ></Image>
              <h4 className="bg-linear-to-br from-[#346bf1] to-[#4fa0ff] bg-clip-text text-transparent font-bold text-4xl">
                PeTora
              </h4>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link className="no-underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="no-underline" href="#">
                All Pets
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <Link className="no-underline">Log In</Link>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
