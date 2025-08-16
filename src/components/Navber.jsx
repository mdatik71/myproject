'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:py-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-900 tracking-wide cursor-pointer">
            Idea to Project
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/projects" className="text-gray-700 hover:text-gray-900 md:font-semibold font-medium">
            Projects
          </Link>
          <Link href="/tutorials" className="text-gray-700 hover:text-gray-900 font-medium">
            Tutorials
          </Link>
          <Link href="/community" className="text-gray-700 hover:text-gray-900 font-medium">
            Community
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Button on desktop */}
     <div className="hidden md:block">
  <a
    href="https://wa.me/8801785607071"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-900 text-white px-4 md:py-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition duration-200"
  >
    Start Building
  </a>
</div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700">
            <li>
              <Link
                href="/projects"
                className="block hover:text-gray-900 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/tutorials"
                className="block hover:text-gray-900 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="block hover:text-gray-900 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-gray-900 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block hover:text-gray-900 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/start-building"
                className="block bg-gray-900 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-gray-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Start Building
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navber;
