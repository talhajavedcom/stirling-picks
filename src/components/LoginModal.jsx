"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { Eye, EyeOff, User as UserIcon, X } from "lucide-react";
import { SharedButton } from "@/shared/Button";
import InputField from "@/shared/InputField";
import { useAuth } from "@/context/AuthContext";

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "admin@mail.com",
      password: "admin123",
      saveUsername: false,
    },
    onSubmit: (values) => {
      setError("");
      const success = login({
        username: values.username,
        password: values.password,
      });
      if (!success) {
        setError("Invalid credentials. Try admin@mail.com / admin123");
      }
    },
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        formik.setValues({
          username: "admin@mail.com",
          password: "admin123",
          saveUsername: false,
        });
        setShowPassword(false);
        setError("");
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
        className="relative w-full max-w-md bg-white rounded-lg overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
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
              <button
                onClick={onSwitchToSignup}
                className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
              >
                Join now!
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
              No account yet?{" "}
            </span>
            <button
              onClick={onSwitchToSignup}
              className="text-sp-green font-semibold hover:underline text-xs sm:text-sm"
            >
              Join now!
            </button>
          </div>

          {error && (
            <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-xs sm:text-sm">{error}</p>
            </div>
          )}

          <form
            onSubmit={formik.handleSubmit}
            className="space-y-3 sm:space-y-4"
          >
            <InputField
              id="username"
              type="text"
              label="Username"
              placeholder="Enter your username"
              formik={formik}
              required
            />

            <InputField
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              formik={formik}
              icon={
                showPassword ? (
                  <EyeOff className="size-4 sm:size-5" />
                ) : (
                  <Eye className="size-4 sm:size-5" />
                )
              }
              onIconClick={() => setShowPassword(!showPassword)}
              labelExtraParams={{
                text: "Forgot password?",
                onClick: () => {},
              }}
              required
            />

            <div className="flex items-center">
              <input
                id="saveUsername"
                name="saveUsername"
                type="checkbox"
                checked={formik.values.saveUsername}
                onChange={formik.handleChange}
                className="size-3 sm:size-4 rounded border-gray-300 text-sp-green-dark focus:ring-sp-green-dark"
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
            <button
              type="button"
              onClick={() => {}}
              className="block w-full text-xs sm:text-sm text-sp-green-dark hover:underline text-center"
            >
              Forgot your login details?
            </button>
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="block w-full text-xs sm:text-sm text-sp-green-dark hover:underline text-center"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
