"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Globe } from "lucide-react";
import { navLinks } from "@/utils/constant";

const Header = ({ className }) => {
  return (
    <header className={`bg-sp-green ${className || ""}`}>
      <div className="flex h-9 sm:h-10 md:h-12 items-center justify-between px-1.5 sm:px-2 md:px-3 lg:px-6 overflow-x-auto gap-1 sm:gap-2">
        <nav className="flex items-center gap-0 sm:gap-0.5 md:gap-1 min-w-0 shrink">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-1 sm:px-1.5 md:px-2 lg:px-3 py-0.5 sm:py-1 font-orbitron text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl font-bold transition-colors rounded whitespace-nowrap ${
                link.active
                  ? "text-sp-black border border-sp-btn-primary sm:border-2"
                  : "text-sp-black/80 hover:text-sp-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-4 shrink-0">
          <Link href="/checkout" className="hidden sm:block">
            <button className="text-[10px] sm:text-xs md:text-sm font-medium text-sp-black hover:text-sp-black/80 transition-colors whitespace-nowrap px-1 sm:px-2">
              Top up
            </button>
          </Link>

          <button className="hidden md:flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs md:text-sm font-medium text-sp-black whitespace-nowrap">
            <span className="text-xs sm:text-sm">🇺🇸</span>
            <span className="hidden lg:inline">$USD</span>
            <ChevronDown className="size-2.5 sm:size-3 md:size-4" />
          </button>

          <button className="hidden md:flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs md:text-sm font-medium text-sp-black whitespace-nowrap">
            <Globe className="size-2.5 sm:size-3 md:size-4" />
            <span className="hidden lg:inline">English</span>
            <ChevronDown className="size-2.5 sm:size-3 md:size-4" />
          </button>

          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 bg-white rounded-full px-1.5 sm:px-2 md:px-3 lg:px-4 py-0.5 sm:py-1 md:py-2">
            <ChevronRight className="size-2.5 sm:size-3 md:size-4 text-sp-black" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium text-sp-black whitespace-nowrap">
              <span className="hidden sm:inline">Balance: </span>$0.00
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
