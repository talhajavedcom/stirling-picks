"use client";

import { useEffect } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { UserPlus, X } from "lucide-react";
import { SharedButton } from "@/shared/Button";
import InputField from "@/shared/InputField";
import SharedSelect from "@/shared/SharedSelect";

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      address: "",
      email: "",
      phoneNumber: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log("Signup:", values);
      onClose();
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        formik.resetForm();
      }, 0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-black/50 backdrop-blur-sm absolute inset-0"
        aria-hidden="true"
      />
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
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
              <button
                onClick={onSwitchToLogin}
                className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
              >
                Login now!
              </button>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Close"
            >
              <X className="size-4 sm:size-5" />
            </button>
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
            <button
              onClick={onSwitchToLogin}
              className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
            >
              Login now!
            </button>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="space-y-3 sm:space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                id="fullName"
                type="text"
                label="Full Name"
                placeholder="Enter your full name"
                formik={formik}
                required
              />

              <InputField
                id="age"
                type="number"
                label="Age"
                placeholder="Enter your age"
                formik={formik}
                step="1"
                min="18"
                max="120"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5"
              >
                Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your address"
                rows="2"
                className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sp-green-dark focus:border-sp-green-dark resize-none"
                required
              />
              {formik.touched.address && formik.errors.address && (
                <div className="mt-1 text-xs sm:text-sm text-red-500">
                  {formik.errors.address}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                id="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                formik={formik}
                required
              />

              <InputField
                id="phoneNumber"
                type="tel"
                label="Phone Number"
                placeholder="Enter your phone number"
                formik={formik}
                required
              />
            </div>

            <SharedSelect
              id="gender"
              label="Gender"
              placeholder="Select gender"
              formik={formik}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
                { value: "prefer-not-to-say", label: "Prefer not to say" },
              ]}
              required
            />

            <SharedButton
              type="submit"
              className="w-full bg-sp-green-dark hover:bg-sp-green-dark/90 text-white font-semibold py-2.5 sm:py-3 text-sm sm:text-base mt-4 sm:mt-6"
            >
              Sign Up
            </SharedButton>
          </form>

          <div className="mt-3 sm:mt-4 text-center">
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-xs sm:text-sm text-sp-green-dark hover:underline"
            >
              Already have an account? Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
