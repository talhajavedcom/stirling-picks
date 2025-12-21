"use client";

import Link from "next/link";
import Topbar from "@/theme/topbar/Topbar";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const CheckoutLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-sp-gray-700 flex flex-col">
      <Topbar />
      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-sp-gray-600 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4">
            <Link
              href="/cookies"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Cookies Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Privacy & Policy
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://instagram.com/stirlingpicks"
              target="_blank"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://facebook.com/stirlingpicks"
              target="_blank"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/stirlingpicks"
              target="_blank"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com/stirlingpicks"
              target="_blank"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutLayout;
