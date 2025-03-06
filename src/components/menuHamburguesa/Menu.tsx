import Image from "next/image";
import React, { useState } from "react";

import { links } from "@/links";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relativa">
      <Image
        src="/icons8-menú.svg"
        alt="menu"
        width={32}
        height={32}
        className="cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-sky-800 shadow-lg transform *
            ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <Image
            src="/close.svg"
            alt="close menu"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="text-white flex flex-col items-center justify-center space-y-6 mt-10">
          {links.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={index}
                className="text-lg hover:text-gray-300 transition "
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Menu;
