"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-500">
          Fuel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">
            Features
          </Link>
          <Link href="#screenshots" className="text-gray-600 hover:text-gray-900 transition">
            Screenshots
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition">
            Portfolio
          </Link>
          <Link
            href="#waitlist"
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            Get Notified
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#screenshots" className="text-gray-600 hover:text-gray-900">
              Screenshots
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900">
              Portfolio
            </Link>
            <Link
              href="#waitlist"
              className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition text-center"
            >
              Get Notified
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
