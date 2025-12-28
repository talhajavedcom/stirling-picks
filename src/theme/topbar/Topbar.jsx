"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SharedButton } from "@/shared/Button";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

const Topbar = ({ className, onMenuClick, isSidebarOpen }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseSignup = () => {
    setIsSignupOpen(false);
  };

  return (
    <>
      <div
        className={`w-full border-b-4 border-sp-btn-primary bg-white shrink-0 ${className || ""}`}
      >
        <div className="flex h-12 sm:h-14 bg-sp-green-dark items-center justify-between px-2 sm:px-3 md:px-4 lg:px-6 gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="lg:hidden flex items-center justify-center p-1.5 sm:p-2 text-white hover:bg-white/20 rounded transition-colors shrink-0"
                aria-label="Toggle sidebar"
              >
                {isSidebarOpen ? (
                  <X className="size-5 sm:size-6 md:size-8 text-white" />
                ) : (
                  <Menu className="size-5 sm:size-6 md:size-8 text-white" />
                )}
              </button>
            )}
            <Link
              href="/"
              className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 shrink"
            >
              <Image
                src="/logo.png"
                alt="Stirling Picks"
                width={40}
                height={40}
                className="rounded-full w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 shrink-0 object-cover"
                quality={90}
                priority
              />
              <span className="text-white font-extrabold text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-[36px] tracking-wide uppercase font-orbitron truncate">
                STIRLING PICKS
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            <SharedButton
              variant="primary"
              onClick={handleOpenLogin}
              className="text-sp-black text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2"
            >
              Login
            </SharedButton>
            <SharedButton
              variant="primary"
              onClick={handleOpenSignup}
              className="text-sp-black text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2"
            >
              Sign up
            </SharedButton>
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
        onSwitchToSignup={handleOpenSignup}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={handleCloseSignup}
        onSwitchToLogin={handleOpenLogin}
      />
    </>
  );
};

export default Topbar;
