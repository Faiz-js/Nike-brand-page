import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="py-5 px-5 md:px-32 flex justify-between items-center shadow-lg lg:shadow-xl">
      <div className="flex items-center gap-2">
        <FaBars onClick={toggleMenu} className="md:hidden" />

        {isOpen && (
          <ul className="absolute top-20 left-0 w-full text-center space-y-2 bg-zinc-200">
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}

        <img src="/images/brand_logo.png" alt="Brand Logo" />
      </div>

      <ul className="hidden md:flex gap-5">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="rounded-md bg-red-500 text-white px-4 py-2">
        Login
      </button>
    </nav>
  );
}
