"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserPlus, X } from "lucide-react";
import { SharedButton } from "@/shared/Button";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    address: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 py-4 sm:py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
        <div className="bg-sp-green-dark px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <UserPlus className="size-4 sm:size-5 text-white" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
              Sign Up
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white/80 text-xs sm:text-sm">
                Already have an account?
              </span>
              <Link
                href="/login"
                className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
              >
                Login now!
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
              Already have an account?{" "}
            </span>
            <Link
              href="/login"
              className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
            >
              Login now!
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  min="18"
                  max="120"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="2"
                className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] resize-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-sp-green-dark focus:border-sp-green-dark"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <SharedButton
              type="submit"
              className="w-full bg-sp-green-dark hover:bg-sp-green-dark/90 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base mt-4 sm:mt-6"
            >
              Sign Up
            </SharedButton>
          </form>

          <div className="mt-3 sm:mt-4 text-center">
            <Link
              href="/login"
              className="text-xs sm:text-sm text-sp-green-dark hover:underline"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
