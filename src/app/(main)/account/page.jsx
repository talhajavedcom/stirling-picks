"use client";

import { useState } from "react";
import { SharedButton } from "@/shared/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Zap, Crown, Trophy, Star } from "lucide-react";

const professionalPlans = [
  {
    id: "starter",
    name: "Starter",
    capital: "£1,000",
    fee: "£49",
    icon: Zap,
    popular: false,
    features: {
      profitSplit: "70%",
      maxDrawdown: "10%",
      dailyLossLimit: "5%",
      minBettingDays: "5 days",
      payoutFrequency: "Weekly",
      supportLevel: "Standard",
      oddsBoost: false,
      dedicatedManager: false,
    },
  },
  {
    id: "growth",
    name: "Growth",
    capital: "£5,000",
    fee: "£149",
    icon: Star,
    popular: true,
    features: {
      profitSplit: "75%",
      maxDrawdown: "10%",
      dailyLossLimit: "5%",
      minBettingDays: "5 days",
      payoutFrequency: "Weekly",
      supportLevel: "Priority",
      oddsBoost: true,
      dedicatedManager: false,
    },
  },
  {
    id: "pro",
    name: "Pro",
    capital: "£25,000",
    fee: "£399",
    icon: Crown,
    popular: false,
    features: {
      profitSplit: "80%",
      maxDrawdown: "12%",
      dailyLossLimit: "6%",
      minBettingDays: "5 days",
      payoutFrequency: "Bi-Weekly",
      supportLevel: "Priority",
      oddsBoost: true,
      dedicatedManager: true,
    },
  },
  {
    id: "elite",
    name: "Elite",
    capital: "£100,000",
    fee: "£999",
    icon: Trophy,
    popular: false,
    features: {
      profitSplit: "85%",
      maxDrawdown: "15%",
      dailyLossLimit: "8%",
      minBettingDays: "3 days",
      payoutFrequency: "On Demand",
      supportLevel: "VIP 24/7",
      oddsBoost: true,
      dedicatedManager: true,
    },
  },
];

const featureLabels = {
  profitSplit: "Profit Split",
  maxDrawdown: "Max Drawdown",
  dailyLossLimit: "Daily Loss Limit",
  minBettingDays: "Min Betting Days",
  payoutFrequency: "Payout Frequency",
  supportLevel: "Support Level",
  oddsBoost: "Odds Boost",
  dedicatedManager: "Dedicated Manager",
};

const AccountPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-sp-black p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-lg sm:text-xl font-bold text-white font-orbitron inline-block">
          Account Type
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-sp-btn-primary mt-2" />
      </div>

      <Tabs defaultValue="standard" className="w-full">
        <div className="flex justify-center mb-8 sm:mb-12">
          <TabsList className="border border-sp-green-light">
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="professional">Professional</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="standard">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sp-gray-800 rounded-2xl border border-white/20 p-8 sm:p-12 lg:p-16">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-4 sm:mb-6">
                  Sports Betting Just Got BETter
                </h2>
                <div className="w-full h-px bg-white/20 mb-6 sm:mb-8" />
                <p className="text-white/70 text-sm sm:text-base mb-8 sm:mb-10 max-w-xl leading-relaxed">
                  Experience betting in a standard account. Fund your account
                  today and get access to instant Odd feeds.
                </p>
                <SharedButton variant="primary" className="px-8 sm:px-10">
                  Place Bets
                </SharedButton>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="professional">
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
            <div className="bg-gradient-to from-sp-gray-800 to-sp-gray-900 rounded-2xl border border-white/10 p-6 sm:p-10 lg:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sp-btn-primary/20 border border-sp-btn-primary/30 mb-4">
                  <Crown className="w-4 h-4 text-sp-btn-primary" />
                  <span className="text-sp-btn-primary text-sm font-semibold">
                    1000x Multiplier
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-orbitron mb-4">
                  Take Your Betting to the Next Level
                </h2>
                <p className="text-white/60 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Up for the challenge! We fund professional accounts up to{" "}
                  <span className="text-sp-btn-primary font-semibold">
                    £100,000
                  </span>
                  based on your betting performance. Choose your capital size
                  and start earning.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="hidden lg:block">
              <div className="bg-sp-gray-900 rounded-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-5 bg-sp-gray-800/50">
                  <div className="p-6 border-r border-white/5">
                    <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
                      Features
                    </span>
                  </div>
                  {professionalPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`p-6 text-center relative ${
                        plan.popular
                          ? "bg-sp-btn-primary/10 border-x-2 border-t-2 border-sp-btn-primary"
                          : "border-r border-white/5"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-px left-1/2 -translate-x-1/2 px-3 py-1 bg-sp-btn-primary text-sp-black text-xs font-bold rounded-b-lg">
                          MOST POPULAR
                        </div>
                      )}
                      <plan.icon
                        className={`w-8 h-8 mx-auto mb-3 ${
                          plan.popular ? "text-sp-btn-primary" : "text-white/70"
                        }`}
                      />
                      <h3 className="text-lg font-bold text-white mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-2xl font-bold text-sp-btn-primary">
                        {plan.capital}
                      </p>
                      <p className="text-white/50 text-sm mt-1">
                        One-time fee: {plan.fee}
                      </p>
                    </div>
                  ))}
                </div>

                {Object.entries(featureLabels).map(([key, label], index) => (
                  <div
                    key={key}
                    className={`grid grid-cols-5 ${
                      index % 2 === 0 ? "bg-sp-gray-800/20" : ""
                    }`}
                  >
                    <div className="p-4 px-6 border-r border-white/5 flex items-center">
                      <span className="text-white/70 text-sm">{label}</span>
                    </div>
                    {professionalPlans.map((plan) => {
                      const value = plan.features[key];
                      return (
                        <div
                          key={plan.id}
                          className={`p-4 text-center flex items-center justify-center ${
                            plan.popular
                              ? "bg-sp-btn-primary/5 border-x-2 border-sp-btn-primary"
                              : "border-r border-white/5"
                          }`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <div className="w-6 h-6 rounded-full bg-sp-green/20 flex items-center justify-center">
                                <Check className="w-4 h-4 text-sp-green" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                                <X className="w-4 h-4 text-white/30" />
                              </div>
                            )
                          ) : (
                            <span
                              className={`text-sm font-medium ${
                                plan.popular ? "text-white" : "text-white/80"
                              }`}
                            >
                              {value}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}

                <div className="grid grid-cols-5 border-t border-white/10">
                  <div className="p-6 border-r border-white/5" />
                  {professionalPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`p-6 text-center ${
                        plan.popular
                          ? "bg-sp-btn-primary/5 border-x-2 border-b-2 border-sp-btn-primary rounded-b-lg"
                          : "border-r border-white/5"
                      }`}
                    >
                      <SharedButton
                        variant={plan.popular ? "primary" : "outline"}
                        className={`w-full ${
                          selectedPlan === plan.id
                            ? "ring-2 ring-sp-btn-primary ring-offset-2 ring-offset-sp-gray-900"
                            : ""
                        }`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
                      </SharedButton>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-sp-gray-800 rounded-2xl border overflow-hidden transition-all duration-200 ${
                    plan.popular
                      ? "border-sp-btn-primary shadow-lg shadow-sp-btn-primary/20"
                      : "border-white/10"
                  } ${
                    selectedPlan === plan.id
                      ? "ring-2 ring-sp-btn-primary ring-offset-2 ring-offset-sp-black"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-sp-btn-primary text-sp-black text-xs font-bold rounded-bl-lg">
                      POPULAR
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          plan.popular ? "bg-sp-btn-primary/20" : "bg-white/10"
                        }`}
                      >
                        <plan.icon
                          className={`w-6 h-6 ${
                            plan.popular
                              ? "text-sp-btn-primary"
                              : "text-white/70"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {plan.name}
                        </h3>
                        <p className="text-white/50 text-sm">Fee: {plan.fee}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-3xl font-bold text-sp-btn-primary">
                        {plan.capital}
                      </p>
                      <p className="text-white/50 text-sm">Funded Capital</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {Object.entries(featureLabels).map(([key, label]) => {
                        const value = plan.features[key];
                        return (
                          <div
                            key={key}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-white/60">{label}</span>
                            {typeof value === "boolean" ? (
                              value ? (
                                <Check className="w-4 h-4 text-sp-green" />
                              ) : (
                                <X className="w-4 h-4 text-white/30" />
                              )
                            ) : (
                              <span className="text-white font-medium">
                                {value}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <SharedButton
                      variant={plan.popular ? "primary" : "outline"}
                      className="w-full"
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
                    </SharedButton>
                  </div>
                </div>
              ))}
            </div>

            {selectedPlan && (
              <div className="mt-8 text-center">
                <SharedButton
                  variant="primary"
                  className="px-10 py-3 text-base"
                >
                  Apply Now with
                  {professionalPlans.find((p) => p.id === selectedPlan)?.name}
                  Plan
                </SharedButton>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountPage;
