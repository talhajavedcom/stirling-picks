"use client";

import { SharedButton } from "@/shared/Button";

const accountTypes = [
  {
    title: "Standard",
    multiplier: "1x",
    description:
      "Experience betting in a standard account. Fund your account today and get access to instant Odd feeds.",
  },
  {
    title: "Professional",
    multiplier: "1000x",
    description:
      "Up for the challenge! Experience Betting in our very own tailored professional accounts. We Fund professional accounts up to $100,000 based on Betting performance. Amplify your earnings today.",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-lg sm:text-xl font-bold text-white font-orbitron inline-block">
          How It Works
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-sp-btn-primary mt-2" />
      </div>

      <div className="space-y-4 sm:space-y-6 w-full">
        {accountTypes.map((account) => (
          <div
            key={account.title}
            className="bg-sp-black rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 w-full"
          >
            <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {account.title}
              </h2>
              <span className="text-sp-btn-primary font-bold text-xs sm:text-sm mb-4 sm:mb-6">
                {account.multiplier}
              </span>
              <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
                {account.description}
              </p>
              <SharedButton variant="primary" className="px-6 sm:px-8">
                View Now
              </SharedButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
