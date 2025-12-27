"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User as UserIcon, X } from "lucide-react";
import { SharedButton } from "@/shared/Button";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saveUsername, setSaveUsername] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 py-4 sm:py-8">
      <div className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
        <div className="bg-sp-green-dark px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <UserIcon className="size-4 sm:size-5 text-white" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
              Login
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/80 text-xs sm:text-sm">
                No account yet?
              </span>
              <Link
                href="/signup"
                className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
              >
                Join now!
              </Link>
            </div>
            <Link
              href="/"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Close"
            >
              <X className="size-4 sm:size-5" />
            </Link>
          </div>
        </div>

        <div className="bg-sp-green-dark px-3 sm:px-4 md:px-6 py-2 flex items-center justify-center shrink-0">
          <Image
            src="/logo.png"
            alt="Stirling Picks"
            width={120}
            height={40}
            className="h-5 sm:h-6 md:h-8 w-auto"
            priority
          />
        </div>

        <div className="bg-white p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          <div className="sm:hidden mb-3 sm:mb-4 text-center shrink-0">
            <span className="text-gray-600 text-xs sm:text-sm">
              No account yet?{" "}
            </span>
            <Link
              href="/signup"
              className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
            >
              Join now!
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e]"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 pr-10 sm:pr-12 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-4 sm:size-5" />
                  ) : (
                    <Eye className="size-4 sm:size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveUsername"
                checked={saveUsername}
                onChange={(e) => setSaveUsername(e.target.checked)}
                className="size-3 sm:size-4 rounded border-gray-300 text- sp-green-dark focus:ring-sp-green-dark"
              />
              <label
                htmlFor="saveUsername"
                className="ml-2 text-xs sm:text-sm text-gray-700 cursor-pointer"
              >
                Save username
              </label>
            </div>

            <SharedButton
              type="submit"
              className="w-full bg-sp-green-dark hover:bg-sp-green-dark/90 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base mt-4 sm:mt-6"
            >
              Log In
            </SharedButton>
          </form>

          <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
            <Link
              href="/forgot-password"
              className="block text-xs sm:text-sm text-sp-green-dark hover:underline text-center"
            >
              Forgot your login details?
            </Link>
            <Link
              href="/signup"
              className="block text-xs sm:text-sm text-sp-green-dark hover:underline text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
