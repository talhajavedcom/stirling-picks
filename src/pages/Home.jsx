"use client";

import Image from "next/image";
import { SharedButton } from "@/shared/Button";
import Header from "@/theme/header/Header";
import Sidebar from "@/theme/sidebar/Sidebar";
import heroImage from "@/assets/dashboard/CTA Button.png";
import bikeImage from "@/assets/dashboard/bike.png";
import { UserRoundPlus } from "lucide-react";
import { howItWorksSteps } from "@/utils/constant";
import TermsAndConditions from "@/components/TermsAndConditions";

const Home = ({ className }) => {
  return (
    <>
      <div className="flex gap-4">
        <div className="shrink-0">
          <Sidebar className="min-h-[500px] sm:min-h-[550px] md:min-h-[600px]" />
        </div>
        <div className="flex-1 flex flex-col gap-4 mt-4">
          <Header />
          <section
            className={`relative min-h-[400px] sm:min-h-[500px] md:min-h-[500px] flex items-center justify-center overflow-hidden mx-4 rounded-2xl ${className || ""}`}
          >
            <Image
              src={heroImage}
              alt="Hero background"
              fill
              className="object-stretch object-center"
              priority
            />

            <div className="relative z-10 flex flex-col items-center px-4 py-8">
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-15 h-15 border-r-6 border-t-6 border-sp-green" />
                <div className="absolute -bottom-3 -left-3 w-15 h-15 border-l-6 border-b-6 border-sp-green" />

                <div className="hero-glass-pill text-white">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-center leading-snug">
                    <span className="block">Where Odds</span>
                    <span className="block">Meet Fortune</span>
                  </h1>
                </div>
              </div>

              <SharedButton size="lg" className="mt-6 px-10 sm:px-12">
                Start Now
              </SharedButton>
            </div>
          </section>
          <section className="grid md:grid-cols-2 gap-4 mx-4">
            <div className="bg-sp-green-dark rounded-xl p-4">
              <div className="relative rounded-xl overflow-hidden min-h-[200px] flex justify-center items-center p-6">
                <Image
                  src={bikeImage}
                  alt="Bet Booster background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-20 flex flex-col items-center justify-end">
                  <h3 className="text-2xl font-bold text-sp-yellow mb-2">
                    Bet Booster
                  </h3>
                  <SharedButton variant="secondary" size="sm">
                    View Now
                  </SharedButton>
                </div>
              </div>
            </div>

            <div className="bg-sp-green-dark rounded-xl p-4 flex items-center justify-center gap-4">
              <div className="flex bg-white/20 rounded-xl flex-1 items-center justify-center gap-4 h-full w-full py-4 px-6">
                <div className="flex items-center bg-black/60 justify-center size-16  rounded-full shrink-0">
                  <span className="text-sp-green font-bold text-3xl">
                    <UserRoundPlus className="size-10 text-white" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-1">
                    Create Your Account
                  </h3>
                  <p className="text-sm font-orbitron text-white/80">
                    Open your free account today and explore the new world of
                    sports betting.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-black text-white mt-4 p-8">
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorksSteps.map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="flex items-center justify-center size-10 border-2 border-sp-dark text-white rounded-full font-bold shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-white/80 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <TermsAndConditions className="mt-4" />
    </>
  );
};

export default Home;
