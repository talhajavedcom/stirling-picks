import { Button } from "@/components/ui/button";
import Image from "next/image";
import newCustomerImg from "@/assets/promotions/new-customer.png";
import gameTicketsImg from "@/assets/promotions/game-tickets.png";
import dailyRewardsImg from "@/assets/promotions/daily-rewards.png";
import sportsOddsImg from "@/assets/promotions/sports-odds.png";
import doubleChancesImg from "@/assets/promotions/double-chances.png";

const PromotionsPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-white/10">
        <h1 className="text-white text-xl sm:text-2xl font-semibold underline decoration-[#00ff87] decoration-[3px] underline-offset-[6px]">
          Promotions
        </h1>
        <span className="text-white/40 text-sm">Fractional</span>
      </div>

      <div className="max-w-[1400px] mx-auto p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-[#1a3a2e] border border-[#00ff87]/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,255,135,0.2)]">
            <div className="absolute inset-y-0 left-0 w-[55%] z-10 p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-white text-[32px] font-black leading-[0.95] tracking-tight uppercase">
                  NEW
                </h2>
                <h3 className="text-white text-[32px] font-black leading-[0.95] tracking-tight uppercase">
                  CUSTOMER
                </h3>
                <p className="text-[#00ff87] text-[13px] mt-2 font-medium">
                  Get Access Now
                </p>
              </div>
              <Button className="w-fit bg-white text-black border-0 hover:bg-white/90 text-[11px] font-bold px-5 py-2 rounded-full h-auto uppercase">
                OPEN NOW
              </Button>
            </div>
            <Image
              src={newCustomerImg}
              alt="New Customer"
              height={220}
              width={220}
              className="object-cover object-center"
            />
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-[#1a3a2e] border border-[#00ff87]/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,255,135,0.2)]">
            <div className="absolute inset-y-0 left-0 w-[55%] z-10 p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-[#ffd700] text-[32px] font-black leading-[0.95] tracking-tight italic uppercase">
                  Get Game
                </h2>
                <h3 className="text-[#ffd700] text-[32px] font-black leading-[0.95] tracking-tight italic uppercase">
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
              style={{ backgroundImage: `url(${gameTicketsImg})` }}
            />
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-[#1a3a2e] border border-[#00ff87]/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,255,135,0.2)]">
            <div className="absolute inset-y-0 left-0 w-[55%] z-10 p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-white text-[28px] font-black leading-[0.95] tracking-tight uppercase">
                  Guaranteed
                </h2>
                <h3 className="text-[#ffd700] text-[28px] font-black leading-[0.95] tracking-tight uppercase">
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
              style={{ backgroundImage: `url(${dailyRewardsImg})` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-[#1a3a2e] border border-[#00ff87]/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,255,135,0.2)]">
            <div className="absolute inset-y-0 left-0 w-[50%] z-10 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <h2 className="text-white text-[24px] font-black leading-[0.95] tracking-tight uppercase">
                    Get
                  </h2>
                  <h2 className="text-[#00ff87] text-[24px] font-black leading-[0.95] tracking-tight italic uppercase">
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
              style={{ backgroundImage: `url(${sportsOddsImg})` }}
            />
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[220px] bg-[#1a3a2e] border border-[#00ff87]/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,255,135,0.2)]">
            <div className="absolute inset-y-0 left-0 w-[50%] z-10 p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <h2 className="text-[#00ff87] text-[28px] font-black leading-[0.95] tracking-tight uppercase">
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
                <Button className="w-fit bg-[#00ff87] text-black border-0 hover:bg-[#00e67a] text-[11px] font-bold px-5 py-2 rounded-full h-auto uppercase mb-2">
                  SEE MORE
                </Button>
                <p className="text-white/35 text-[8.5px] leading-tight max-w-[220px]">
                  Max boost limits may apply. Some deposit types, markets & bet
                  types excl. T&Cs apply. PLEASE BET RESPONSIBLY. For support
                  and information see GambleAware.co
                </p>
              </div>
            </div>
            <div
              className="absolute inset-y-0 right-0 w-[55%] bg-cover bg-right"
              style={{ backgroundImage: `url(${doubleChancesImg})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
