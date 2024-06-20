"use client";

import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

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

const Nav = ({ isUserAuthenticated }: { isUserAuthenticated: boolean }) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-6">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.path}
                className="font-bald text-[13px] uppercase tracking-[3px] hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* redirekcija pristupa na dashboard ako korisnik nije ulogovan
        
        */}
      {!isUserAuthenticated && pathname === "/dashboard" && redirect("/")}
    </nav>
  );
};

export default Nav;
