"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Globe } from "lucide-react";
import { navLinks } from "@/utils/constant";

const Header = ({ className }) => {
  return (
    <header className={`bg-sp-green ${className || ""}`}>
      <div className="flex h-12 items-center justify-between px-4 lg:px-6">
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 font-orbitron text-xl font-bold transition-colors rounded ${
                link.active
                  ? "text-sp-black border-2 border-sp-btn-primary"
                  : "text-sp-black/80 hover:text-sp-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/checkout">
            <button className="text-sm font-medium text-sp-black hover:text-sp-black/80 transition-colors">
              Top up
            </button>
          </Link>

          <button className="flex items-center gap-1 text-sm font-medium text-sp-black">
            <span>🇺🇸</span>
            <span>$USD</span>
            <ChevronDown className="size-4" />
          </button>

          <button className="flex items-center gap-1 text-sm font-medium text-sp-black">
            <Globe className="size-4" />
            <span>English</span>
            <ChevronDown className="size-4" />
          </button>

          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
            <ChevronRight className="size-4 text-sp-black" />
            <span className="text-sm font-medium text-sp-black">
              Balance: $0.00
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
