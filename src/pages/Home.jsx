"use client";

import { useState } from "react";
import Image from "next/image";
import { SharedButton } from "@/shared/Button";
import Topbar from "@/theme/topbar/Topbar";
import Header from "@/theme/header/Header";
import Sidebar from "@/theme/sidebar/Sidebar";
import heroImage from "@/assets/dashboard/CTA Button.png";
import bikeImage from "@/assets/dashboard/bike.png";
import { UserRoundPlus } from "lucide-react";
import { howItWorksSteps } from "@/utils/constant";
import TermsAndConditions from "@/components/TermsAndConditions";

const Home = ({ className }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Topbar onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Mobile Sidebar */}
      <Sidebar
        isMobileOpen={isSidebarOpen}
        onClose={closeSidebar}
        className="lg:hidden"
      />

      <div className="flex gap-0">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block shrink-0">
          <Sidebar className="min-h-[500px] sm:min-h-[550px] md:min-h-[600px]" />
        </div>
        <div className="flex-1 flex flex-col gap-1.5 sm:gap-2 md:gap-4 mt-1.5 sm:mt-2 md:mt-4">
          <Header />
          <section
            className={`relative min-h-[280px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden mx-1 sm:mx-2 md:mx-4 rounded-lg sm:rounded-xl md:rounded-2xl ${className || ""}`}
          >
            <Image
              src={heroImage}
              alt="Hero background"
              fill
              className="object-cover object-center"
              quality={90}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />

            <div className="relative z-10 flex flex-col items-center px-2 sm:px-3 md:px-4 py-4 sm:py-6 md:py-8 w-full">
              <div className="relative">
                <div className="absolute -top-1.5 -right-1.5 sm:-top-2 md:-top-3 sm:-right-2 md:-right-3 w-10 h-10 sm:w-12 md:w-15 sm:h-12 md:h-15 border-r-3 border-t-3 sm:border-r-4 md:border-r-6 sm:border-t-4 md:border-t-6 border-sp-green" />
                <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 md:-bottom-3 sm:-left-2 md:-left-3 w-10 h-10 sm:w-12 md:w-15 sm:h-12 md:h-15 border-l-3 border-b-3 sm:border-l-4 md:border-l-6 sm:border-b-4 md:border-b-6 border-sp-green" />

                <div className="hero-glass-pill text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-orbitron font-bold text-center leading-tight sm:leading-snug">
                    <span className="block">Where Odds</span>
                    <span className="block">Meet Fortune</span>
                  </h1>
                </div>
              </div>

              <SharedButton
                size="lg"
                className="mt-3 sm:mt-4 md:mt-6 px-4 sm:px-6 md:px-10 lg:px-12 text-xs sm:text-sm md:text-base py-1.5 sm:py-2 md:py-2.5 text-sp-black font-bold"
              >
                Start Now
              </SharedButton>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mx-1 sm:mx-2 md:mx-4">
            <div className="bg-sp-green-dark rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4">
              <div className="relative rounded-md sm:rounded-lg md:rounded-xl overflow-hidden min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex justify-center items-center p-3 sm:p-4 md:p-6">
                <Image
                  src={bikeImage}
                  alt="Bet Booster background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-20 flex flex-col items-center justify-end w-full px-2 sm:px-3">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-sp-yellow mb-1.5 sm:mb-2">
                    Bet Booster
                  </h3>
                  <SharedButton
                    variant="secondary"
                    size="sm"
                    className="text-[10px] sm:text-xs md:text-sm px-3 sm:px-4 py-1 sm:py-1.5"
                  >
                    View Now
                  </SharedButton>
                </div>
              </div>
            </div>

            <div className="bg-sp-green-dark rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex flex-col sm:flex-row bg-white/20 rounded-md sm:rounded-lg md:rounded-xl flex-1 items-center justify-center gap-2 sm:gap-3 md:gap-4 h-full w-full py-3 sm:py-4 px-3 sm:px-4 md:px-6">
                <div className="flex items-center bg-black/60 justify-center size-10 sm:size-12 md:size-16 rounded-full shrink-0">
                  <span className="text-sp-green font-bold text-xl sm:text-2xl md:text-3xl">
                    <UserRoundPlus className="size-6 sm:size-8 md:size-10 text-white" />
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-orbitron font-bold text-white mb-0.5 sm:mb-1">
                    Create Your Account
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm font-orbitron text-white/80">
                    Open your free account today and explore the new world of
                    sports betting.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-black text-white mt-2 sm:mt-3 md:mt-4 p-3 sm:p-4 md:p-6 lg:p-8 mx-1 sm:mx-2 md:mx-4 rounded-md sm:rounded-lg md:rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {howItWorksSteps.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-2 sm:gap-3 md:gap-4"
            >
              <div className="flex items-center justify-center size-7 sm:size-8 md:size-10 border-2 border-sp-dark text-white rounded-full font-bold shrink-0 text-xs sm:text-sm md:text-base">
                {item.step}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs sm:text-sm md:text-base font-bold text-white uppercase tracking-wide wrap-break">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80 mt-0.5 sm:mt-1 wrap-break">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <TermsAndConditions className="mt-2 sm:mt-3 md:mt-4 mx-1 sm:mx-2 md:mx-4" />
    </>
  );
};

export default Home;
