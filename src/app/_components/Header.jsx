"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "DIGITAL MARKETING", href: "/degital-marketing" },
    { name: "BRANDING", href: "/branding" },
    { name: "MEDIA PRODUCTION", href: "/media-production" },
  ];

  const menuLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "OUR SERVICES", href: "#" },
    { name: "CAREERS", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <header className="relative w-full bg-[#1f1c1a] z-50 overflow-hidden">
      <div className="mx-auto px-4 sm:px-10 py-4">
        {/* Mobile Header */}
        <div className="flex items-center justify-between md:hidden">
          {/* Telephone */}
          <div className="flex flex-col items-center text-xs">
            <a
              href="tel:01277731729"
              className="flex items-center gap-1 text-white"
            >
              <Image
                src="/images/phone-nav.svg"
                alt="Phone"
                width={18}
                height={18}
              />
            </a>
            <a href="tel:01277731729" className="text-primary-500">
              012 777 31 729
            </a>
          </div>

          {/* Logo */}
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Be-Bold Marketing Agency"
              width={93}
              height={65}
              className="object-cover"
            />
          </Link>

          {/* Menu Button */}
          <div
            className="w-7 h-5 flex flex-col items-center justify-center gap-2 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="w-full h-0.5 bg-primary-500"></span>
            <span className="w-full h-0.5 bg-primary-500"></span>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/images/logo.png"
              alt="Be-Bold Marketing Agency"
              width={93}
              height={65}
              className="object-cover"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-10 text-sm font-sans">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-white hover:text-white/80 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Telephone & Menu */}
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-center text-xs">
              <a
                href="tel:01277731729"
                className="flex items-center gap-2 text-white"
              >
                <span className="w-6 h-0.5 bg-white" />
                <Image
                  src="/images/phone-nav.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <span className="w-6 h-0.5 bg-white" />
              </a>
              <a href="tel:01277731729" className="text-primary-500">
                012 777 31 729
              </a>
            </div>

            <div
              className="w-7 h-5 flex flex-col items-center justify-center gap-2 cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="w-full h-0.5 bg-primary-500"></span>
              <span className="w-full h-0.5 bg-primary-500"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Border under container only */}
      <div className="mx-auto px-4 sm:px-10">
        <div className="border-b border-[#413732] w-full" />
      </div>

      <>
        {/* Overlay for outside click */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[15] bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full bg-[#1f1c1a] text-white z-20 overflow-hidden transition-all duration-500 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          w-full md:w-3/4 lg:w-1/2`}
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-[100] pointer-events-auto">
            <Image
              src="/images/close.png"
              alt="Close"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Lamp */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
            <Image
              src="/images/lamp-menu.png"
              alt="Lamp"
              width={350}
              height={270}
              className="object-contain"
            />
          </div>

          {/* Menu Links */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center pt-[50px] gap-6">
            <nav className="flex flex-col items-center gap-14 text-sm font-300">
              {menuLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary-500 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Logo */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={70}
              className="object-contain filter grayscale opacity-20"
            />
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;
