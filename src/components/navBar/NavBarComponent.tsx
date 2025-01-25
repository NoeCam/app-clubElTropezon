"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

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
    <header className="flex justify-end ">
      <nav>
        <ul>
          {links.map((link) => {
            // const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "h-[48px] grow rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2",
                  {
                    "bg-sky-100 text-blue-600": pathname === link.href,
                  }
                )}
              >
                {/* <LinkIcon className="w-6" /> */}
                <p className="text-sm">{link.name}</p>
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
      </ul>
      </nav>
    </header>
  );
};

export default NavBarComponent;
