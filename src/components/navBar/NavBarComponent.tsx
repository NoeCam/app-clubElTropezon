"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

import { links } from "@/links";
import MenuHamburguesa from "../menuHamburguesa/Menu";

export const NavBarComponent = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between p-3">
      <div className="flex items-center">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            className="h-[48px] w-[48px] md:h-[64px] md:w-[64px]"
            width={189}
            height={165}
          />
          <h1 className="text-xl ml-3">Club El Tropezón</h1>
        </Link>
      </div>

      <div className="flex items-center">
        <nav className="hidden md:flex flex-row justify-end">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "h-[48px] mx-5 text-sm font-medium hover:border-b-4 hover:border-blue-600 flex items-center justify-center",
                {
                  "border-b-4 border-blue-800": pathname === link.href,
                }
              )}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </nav>
        <MenuHamburguesa />
      </div>
    </header>
  );
};

export default NavBarComponent;
