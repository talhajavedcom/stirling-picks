"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { SharedButton } from "@/shared/Button";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-sp-green-dark border border-gray-200 rounded-xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="w-12 h-12">
              <Image
                src="/logo.png"
                alt="Stirling Picks"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
            <p className="text-white/80 text-sm mt-1">
              Sign in to continue to Stirling Picks
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-200 rounded-lg pl-11 pr-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sp-green focus:border-sp-green"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-white/60" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-white border border-gray-200 rounded-lg pl-11 pr-12 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sp-green focus:border-sp-green"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-sp-green focus:ring-sp-green"
                />
                <span className="text-sm text-white/80">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-sp-green hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <SharedButton
              type="submit"
              className="w-full text-gray-900 font-semibold"
              size="lg"
            >
              Sign In
            </SharedButton>
          </form>

          <div className="mt-5 text-center">
            <p className="text-sm text-white/80">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-sp-green font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
