"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import path from "path";

import { FaBars } from "react-icons/fa";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Restaurant",
    path: "/restaurant",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About us",
    path: "/aboutus",
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-2xl text-black flex items-center">
        <FaBars />
      </SheetTrigger>
      <SheetContent side="left" className="flex justify-center items-center">
        <nav className="flex flex-col gap-8 text-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className="text-2xl font-primary text-black hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
