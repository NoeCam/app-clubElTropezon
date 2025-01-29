"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import logo from "../../../public/logo.jpg";
import Image from "next/image";

// import {
//   HomeIcon,
//   HistoryIcon,
//   AboutIcon,
//   ContactIcon,
// } from "@heroicons/react/24/outline";

const links = [
  { name: "Actividades", href: "/" }, //, icon: HomeIcon
  { name: "Historia", href: "/history" }, //, icon: HistoryIcon
  { name: "Nosotros", href: "/about" }, //, icon: AboutIcon
  { name: "Contacto y horarios", href: "/contact" }, //, icon: ContactIcon
];

export const NavBarComponent = () => {
  const pathname = usePathname();
  return (
    <header className="flex  pb-3">
      <Link href="/" className="flex-grow">
        <Image
          src={logo}
          alt="logo"
          className="h-[48px] w-[48px] md:h-[64px] md:w-[64px]"
        />
      </Link>
      <nav className="flex flex-row justify-end">
          {links.map((link) => {
            // const LinkIcon = link.icon;
            return (
              
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "h-[48px] grow mx-2 text-sm font-medium hover:border-b-4 hover:border-blue-600 flex items-center justify-center",
                  {
                    "border-b-4 border-blue-800": pathname === link.href,
                  }
                )}
              >
                {/* <LinkIcon className="w-6" /> */}
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
      </nav>
    </header>
  );
};

export default NavBarComponent;
