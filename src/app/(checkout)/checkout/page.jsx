"use client";

import { useState } from "react";
import { SharedButton } from "@/shared/Button";
import { Check, X, ChevronDown } from "lucide-react";

const steps = [
  { id: "shipping", label: "SHIPPING", number: 1 },
  { id: "details", label: "PERSONAL DETAILS", number: 2 },
  { id: "payment", label: "PAYMENT", number: 3 },
  { id: "confirmation", label: "CONFIRMATION", number: 4 },
];

const standardAmounts = [
  "$10",
  "$20",
  "$30",
  "$50",
  "$100",
  "$250",
  "$500",
  "$1000",
];

const professionalAmounts = [
  "$100",
  "$500",
  "$1000",
  "$5000",
  "$10,000",
  "$25,000",
  "$50,000",
  "$100,000",
];

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState("shipping");
  const [accountType, setAccountType] = useState("standard");
  const [selectedAmount, setSelectedAmount] = useState("$50");
  const [customAmount, setCustomAmount] = useState("100.000");

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  const goToNextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);
    }
  };

  const goToPrevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id);
    }
  };

  const amounts =
    accountType === "standard" ? standardAmounts : professionalAmounts;

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white font-orbitron mb-6 sm:mb-8">
          Checkout
        </h1>

        <div className="bg-white rounded-full py-3 sm:py-4 px-4 sm:px-8 mb-6 sm:mb-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max sm:min-w-0">
            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = step.id === currentStep;
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.id}
                  className="flex items-center flex-1 last:flex-none"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 ${
                        isCompleted
                          ? "bg-sp-green text-white"
                          : isCurrent
                            ? "bg-sp-green text-white"
                            : "bg-sp-green text-white"
                      }`}
                    >
                      {isCompleted ? (
                        <Check
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          strokeWidth={3}
                        />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${
                        isCurrent || isCompleted
                          ? "text-sp-green"
                          : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {!isLast && (
                    <div className="flex-1 mx-3 sm:mx-4 flex items-center justify-center">
                      <div className="flex items-center gap-1">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCompleted ? "bg-sp-green" : "bg-gray-300"
                          }`}
                        />
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCompleted ? "bg-sp-green" : "bg-gray-300"
                          }`}
                        />
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCompleted ? "bg-sp-green" : "bg-gray-300"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
          <SharedButton
            onClick={() => {
              setAccountType("standard");
              setSelectedAmount("$50");
            }}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
              accountType === "standard"
                ? "bg-sp-green text-sp-black"
                : "bg-white text-sp-black hover:bg-gray-100"
            }`}
          >
            Standard
          </SharedButton>
          <SharedButton
            onClick={() => {
              setAccountType("professional");
              setSelectedAmount("£5000");
            }}
            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
              accountType === "professional"
                ? "bg-sp-green text-sp-black"
                : "bg-white text-sp-black hover:bg-gray-100"
            }`}
          >
            Professional
          </SharedButton>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-sp-black mb-4 sm:mb-6">
            {accountType === "standard" ? "Top up Balance" : "Capital Size"}
          </h2>

          {accountType === "standard" && (
            <div className="flex items-center bg-white rounded-xl p-2 sm:p-3 mb-4 sm:mb-6 max-w-xs">
              <div className="flex items-center gap-2 px-2 sm:px-3 border-r border-gray-200">
                <span className="text-xl sm:text-2xl">🇺🇸</span>
              </div>
              <input
                type="text"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 text-lg sm:text-xl font-semibold text-sp-black bg-transparent outline-none"
              />
              <span className="text-gray-500 text-sm sm:text-base px-2">
                USD
              </span>
              <SharedButton
                onClick={() => setCustomAmount("")}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </SharedButton>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {amounts.map((amount) => (
              <SharedButton
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`py-3 sm:py-4 px-4 sm:px-6 rounded-full font-semibold text-base sm:text-lg transition-all ${
                  selectedAmount === amount
                    ? "bg-sp-green text-sp-black"
                    : "bg-white text-sp-black hover:bg-gray-100"
                }`}
              >
                {amount}
              </SharedButton>
            ))}
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4 uppercase tracking-wide">
            ADD-ONS
          </h3>
          <div className="bg-white/10 rounded-xl p-3 sm:p-4 border border-white/20">
            <p className="text-white/60 text-sm">
              No add-ons available for this selection
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-sp-black mb-4 sm:mb-6">
                Card information
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                Indicate details of the card from which money will be debited
              </p>

              <div className="bg-sp-gray-800 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-1 sm:gap-2">
                  <span className="text-white text-[10px] sm:text-xs font-bold bg-blue-600 px-1.5 sm:px-2 py-0.5 rounded">
                    VISA
                  </span>
                  <span className="text-white text-[10px] sm:text-xs">
                    <span className="inline-flex gap-0.5">
                      <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500" />
                      <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500 -ml-1.5 sm:-ml-2" />
                    </span>
                  </span>
                </div>

                <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
                  <label className="text-white/60 text-[10px] sm:text-xs uppercase">
                    Card number
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-transparent text-white text-base sm:text-lg font-mono mt-1 outline-none placeholder:text-white/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-[10px] sm:text-xs uppercase">
                      Month and year
                    </label>
                    <input
                      type="text"
                      placeholder="00 / 00"
                      className="w-full bg-transparent text-white text-sm sm:text-base font-mono mt-1 outline-none placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-[10px] sm:text-xs uppercase">
                      .....code
                    </label>
                    <input
                      type="text"
                      placeholder="•••"
                      className="w-full bg-transparent text-white text-sm sm:text-base font-mono mt-1 outline-none placeholder:text-white/30"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-sp-black mb-4 sm:mb-6">
                Personal information
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-gray-500 text-xs sm:text-sm mb-1 block">
                      First name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-sp-green"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs sm:text-sm mb-1 block">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-sp-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs sm:text-sm mb-1 block">
                    Country
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-sp-green appearance-none bg-white">
                      <option value="">Select country</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="IE">Ireland</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-gray-500 text-xs sm:text-sm mb-1 block">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-sp-green"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs sm:text-sm mb-1 block">
                      Zip code
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-sp-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs sm:text-sm mb-1 block">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-sp-green"
                  />
                </div>

                <div>
                  <label className="text-gray-500 text-xs sm:text-sm mb-1 block">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base outline-none focus:border-sp-green"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {currentStepIndex > 0 && currentStep !== "confirmation" ? (
            <SharedButton
              variant="outline"
              onClick={goToPrevStep}
              className="w-full sm:w-auto px-8 sm:px-12 py-2.5 sm:py-3 rounded-full bg-white text-sp-black border-0 hover:bg-gray-100"
            >
              Back
            </SharedButton>
          ) : (
            <div className="hidden sm:block" />
          )}
          {currentStep !== "confirmation" && (
            <SharedButton
              onClick={goToNextStep}
              className="w-full sm:w-auto px-8 sm:px-12 py-2.5 sm:py-3 rounded-full"
            >
              Next
            </SharedButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
