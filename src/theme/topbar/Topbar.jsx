"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, User, ChevronDown, LogOut } from "lucide-react";
import { SharedButton } from "@/shared/Button";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Topbar = ({ className, onMenuClick, isSidebarOpen }) => {
  const {
    user,
    isAuthenticated,
    logout,
    isLoginModalOpen,
    isSignupModalOpen,
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
  } = useAuth();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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
            {isAuthenticated && user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center justify-center size-6 sm:size-8 rounded-full bg-sp-green text-sp-black">
                    <User className="size-3.5 sm:size-4" />
                  </div>
                  <span className="hidden sm:block text-white text-xs sm:text-sm font-medium max-w-[100px] truncate">
                    {user.name}
                  </span>
                  <ChevronDown className="size-3 sm:size-4 text-white/70" />
                </button>

                {isUserMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
                      <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <div className="py-1">
                        <Link
                          href="/user/account"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <User className="size-3.5 sm:size-4" />
                          My Account
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                          className="flex items-center gap-2 w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="size-3.5 sm:size-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <SharedButton
                  variant="primary"
                  onClick={openLoginModal}
                  className="text-sp-black text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2"
                >
                  Login
                </SharedButton>
                <SharedButton
                  variant="primary"
                  onClick={openSignupModal}
                  className="text-sp-black text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2"
                >
                  Sign up
                </SharedButton>
              </>
            )}
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSwitchToSignup={openSignupModal}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={closeSignupModal}
        onSwitchToLogin={openLoginModal}
      />
    </>
  );
};

export default Topbar;
