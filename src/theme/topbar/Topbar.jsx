"use client";

import Link from "next/link";
import Image from "next/image";
import { SharedButton } from "@/shared/Button";
const Topbar = ({ className }) => {
  return (
    <div
      className={`w-full border-b-4 border-sp-btn-primary bg-white ${className || ""}`}
    >
      <div className="flex h-14 bg-sp-green-dark items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Stirling Picks"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-white font-extrabold text-2xl lg:text-[36px] tracking-wide uppercase font-orbitron">
            STIRLING PICKS
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <SharedButton variant="primary" className="text-sp-black">
              Login
            </SharedButton>
          </Link>
          <Link href="/signup">
            <SharedButton variant="primary" className="text-sp-black">
              Sign up
            </SharedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
