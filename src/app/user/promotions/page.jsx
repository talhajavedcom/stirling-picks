"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import newCustomerImg from "@/assets/promotions/new-customer.png";
import gameTicketsImg from "@/assets/promotions/game-tickets.png";
import dailyRewardsImg from "@/assets/promotions/daily-rewards.png";
import sportsOddsImg from "@/assets/promotions/sports-odds.png";
import doubleChancesImg from "@/assets/promotions/double-chances.png";

const PromotionsPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <PageTitle>Promotions</PageTitle>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-sp-green-dark border border-sp-green/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sp-green/20">
            <div className="absolute inset-y-0 left-0 w-[55%] z-10 p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-white text-[32px] font-black leading-[0.95] tracking-tight uppercase">
                  NEW
                </h2>
                <h3 className="text-white text-[32px] font-black leading-[0.95] tracking-tight uppercase">
                  CUSTOMER
                </h3>
                <p className="text-sp-green text-[13px] mt-2 font-medium">
                  Get Access Now
                </p>
              </div>
              <Button className="w-fit bg-white text-black border-0 hover:bg-white/90 text-[11px] font-bold px-5 py-2 rounded-full h-auto uppercase">
                OPEN NOW
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 w-[55%] h-full">
              <Image
                src={newCustomerImg}
                alt="New Customer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-sp-green-dark border border-sp-green/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sp-green/20">
            <div className="absolute inset-y-0 left-0 w-[55%] z-10 p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-sp-yellow text-[32px] font-black leading-[0.95] tracking-tight italic uppercase">
                  Get Game
                </h2>
                <h3 className="text-sp-yellow text-[32px] font-black leading-[0.95] tracking-tight italic uppercase">
                  Tickets
                </h3>
                <p className="text-white/80 text-[13px] mt-2 font-medium">
                  Redeem Today
                </p>
              </div>
              <div>
                <Button className="w-fit bg-white text-black border-0 hover:bg-white/90 text-[11px] font-bold px-5 py-2 rounded-full h-auto uppercase mb-2">
                  SEE MORE
                </Button>
                <p className="text-white/35 text-[8.5px] leading-tight max-w-[180px]">
                  As a Official Global Partner with Many Renowned Sports Stars.
                  Bet on Matches On a Regular Occasion Throughout The Season
                </p>
              </div>
            </div>
            <div
              className="absolute inset-y-0 right-0 w-[55%] bg-cover bg-top"
              style={{ backgroundImage: `url(${gameTicketsImg.src})` }}
            />
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-sp-green-dark border border-sp-green/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sp-green/20">
            <div className="absolute inset-y-0 left-0 w-[55%] z-10 p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-white text-[28px] font-black leading-[0.95] tracking-tight uppercase">
                  Guaranteed
                </h2>
                <h3 className="text-sp-yellow text-[28px] font-black leading-[0.95] tracking-tight uppercase">
                  Daily Rewards
                </h3>
                <p className="text-white/80 text-[13px] mt-2 font-medium">
                  Stack Your Stirling Points
                </p>
              </div>
              <div>
                <Button className="w-fit bg-white text-black border-0 hover:bg-white/90 text-[11px] font-bold px-5 py-2 rounded-full h-auto uppercase mb-2">
                  SEE MORE
                </Button>
                <p className="text-white/35 text-[8.5px] leading-tight max-w-[180px]">
                  Open PRO Account, 1 opt-ins customer offer. Rewards: Free
                  Bingo. Free Bet. Free Spins, Double Odds. Valid for 7 days.
                  Guaranteed Reward on Supercharged Days. Reward restrictions
                  and T&Cs apply.
                </p>
              </div>
            </div>
            <div
              className="absolute inset-y-0 right-0 w-[55%] bg-cover bg-left"
              style={{ backgroundImage: `url(${dailyRewardsImg.src})` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-sp-green-dark border border-sp-green/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sp-green/20">
            <div className="absolute inset-y-0 left-0 w-[50%] z-10 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <h2 className="text-white text-[24px] font-black leading-[0.95] tracking-tight uppercase">
                    Get
                  </h2>
                  <h2 className="text-sp-green text-[24px] font-black leading-[0.95] tracking-tight italic uppercase">
                    Phenomenal
                  </h2>
                </div>
                <h3 className="text-white text-[28px] font-black leading-[0.95] tracking-tight uppercase">
                  Sports Odds
                </h3>
                <p className="text-white/80 text-[13px] mt-2 font-medium">
                  On Demand Picks
                </p>
              </div>
              <div>
                <Button className="w-fit bg-white text-black border-0 hover:bg-white/90 text-[11px] font-bold px-5 py-2 rounded-full h-auto uppercase mb-2">
                  SEE MORE
                </Button>
                <p className="text-white/35 text-[8.5px] leading-tight max-w-[220px]">
                  Certain deposit methods & bet types excl. Min Bet £10. Odds
                  excl. Acca odds of account min of min odds. 1/2 to get 4.
                  £0.21 free spin, free bets 3+ bonus max £120. Multiple
                  sportsbook markets only. Free bets valid for 7 days, stake not
                  returned. Restrictions + T&Cs apply.
                </p>
              </div>
            </div>
            <div
              className="absolute inset-y-0 right-0 w-[55%] bg-cover bg-right"
              style={{ backgroundImage: `url(${sportsOddsImg.src})` }}
            />
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-sp-green-dark border border-sp-green/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sp-green/20">
            <div className="absolute inset-y-0 left-0 w-[50%] z-10 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <h2 className="text-sp-green text-[28px] font-black leading-[0.95] tracking-tight uppercase">
                    2X
                  </h2>
                  <h2 className="text-white text-[28px] font-black leading-[0.95] tracking-tight uppercase">
                    Double
                  </h2>
                </div>
                <h3 className="text-white text-[28px] font-black leading-[0.95] tracking-tight uppercase">
                  Your Chances
                </h3>
                <p className="text-white/80 text-[13px] mt-2 font-medium">
                  Regular Offer Rollouts
                </p>
              </div>
              <div>
                <Button className="w-fit bg-sp-green text-black border-0 hover:bg-sp-green/90 text-[11px] font-bold px-5 py-2 rounded-full h-auto uppercase mb-2">
                  SEE MORE
                </Button>
                <p className="text-white/35 text-[8.5px] leading-tight max-w-[220px]">
                  Max boost limits may apply. Some deposit types, markets & bet
                  types excl. T&Cs apply. PLEASE BET RESPONSIBLY. For support
                  and information see GambleAware.co
                </p>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-[55%] h-full">
              <Image
                src={doubleChancesImg}
                alt="Double Your Chances"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
