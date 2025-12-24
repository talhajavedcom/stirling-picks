import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const TermsAndConditions = ({ className }) => {
  return (
    <section
      className={cn(
        "bg-black mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3 md:p-4 text-white rounded-md sm:rounded-lg",
        className
      )}
    >
      <details className="group">
        <summary className="flex items-center justify-between p-2 sm:p-3 md:p-4 cursor-pointer text-white font-medium gap-2">
          <span className="font-bold uppercase text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-sp-green break-words">
            Terms & Conditions
          </span>
          <span className="text-base sm:text-lg md:text-xl transition-transform group-open:rotate-180 flex-shrink-0">
            <Plus className="size-3 sm:size-3.5 md:size-4 text-white/80" />
          </span>
        </summary>
        <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4 text-[10px] sm:text-xs md:text-sm text-white/80 space-y-2 sm:space-y-3 md:space-y-4">
          <p className="space-y-2">
            These Promotional Terms & Conditions apply to this Sports Promotion.
            They should be read alongside our General Website Terms &
            Conditions. These terms can be accessed{" "}
            <span
              className="font-bold cursor-pointer hover:underline text-sp-green"
              onClick={() =>
                window.open("https://help.stirlingpicks.com", "_blank")
              }
            >
              here
            </span>
            .
          </p>

          <div>
            <h5 className="font-bold text-sp-green uppercase mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base">
              Promotional Period
            </h5>
            <p className="break-words">
              This Sports Promotion is available to qualifying customers from
              18:00 20/05/2021 – 23:59 31/12/2024. If we decide to withdraw this
              Sports Promotion, this will not impact any Qualifying Bets you
              have placed during the Promotional Period before such withdrawal.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-sp-green uppercase mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base">
              Who Qualifies For This Sports Promotion
            </h5>
            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 break-words">
              <li>
                This Sports Promotion is open to UK & Republic of Ireland
                residents aged 18 years or over opening a NEW Online or Mobile
                account in either £/€ currency.
              </li>
              <li>
                This Sports Promotion is not available to customers who open NEW
                accounts & deposit funds with Prepaid Cards, Moneybookers,
                InstantBank, Paypal, Paysafe, Neteller or Skrill.
              </li>
              <li>
                Employees of the Promoter, any advertising agency or web company
                connected with the promoter or any such person&apos;s agents or
                members of their families or households, are not eligible to
                participate in this Sports Promotion.
              </li>
              <li>
                The Promoter reserves the right to verify the eligibility of all
                participants.
              </li>
              <li>
                Each customer is eligible to receive only one sign-up offer.
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sp-green uppercase mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base">
              How To Claim This Sports Promotion
            </h5>
            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 break-words">
              <li>
                To claim this Sports Promotion, you must register a NEW account,
                making a deposit of £5 or more and place a Qualifying Bet/s
                (detailed in term 7). If you don&apos;t follow these steps the
                free bets will not be applied to your account.
              </li>
              <li>
                The Qualifying bet/s will be made of a real money sports bet of
                at least £5 win or cumulative stakes of up to £5, at fractional
                odds totalling 1/2 or greater.
              </li>
              <li>
                For a single line accumulator bet, each individual selection of
                the bet must at fractional odds of 1/2 or greater to be deemed a
                Qualifying Bet.
              </li>
              <li>
                Please note that only the win parts of win/each-way bets will
                qualify.
              </li>
              <li>
                A bet will not be considered a Qualifying Bet if it is wagered
                on Tote or Pools.
              </li>
              <li>
                The Qualifying Bet/s must be made within 14 days of your account
                registration. Bets placed after this date will not qualify for
                this Sports Promotion.
              </li>
              <li>
                Once you have placed your first Qualifying Bet, we will credit
                your account with 4 x £5 free bets.
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sp-green uppercase mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base">
              Restrictions On Your Free Bet
            </h5>
            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 break-words">
              <li>
                Your free bet must be used within 7 days of it being credited to
                your account, otherwise it will expire.
              </li>
              <li>Free bets cannot be redeemed for cash at any time.</li>
              <li>
                Your free bet must be wagered in full, on any of the following
                sportsbook markets: Football, Horse Racing, Greyhound Racing,
                Tennis, Basketball, American Football, Boxing, Rugby Union,
                Rugby League, UFC, Cricket, Table Tennis, Darts, Golf, Snooker,
                Esports, Ice Hockey, Volleyball, Beach Volleyball, Gaelic
                Football, Pool, Specials (excluding tote & pools).
              </li>
              <li>
                The Free bets obtained from this offer must be used on 4
                separate sportsbook markets.
              </li>
              <li>Free bets may not be used on any Virtual Sports markets.</li>
              <li>
                Please note that the value of your free bet will not be included
                in any winnings.
              </li>
              <li>
                Your free bet is not returned if your free bet wager becomes
                void.
              </li>
              <li>
                The same Maximum Pay Out restrictions set out in our General
                Website Terms & Conditions will equally apply to this Sports
                Promotion.
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sp-green uppercase mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base">
              Important Terms
            </h5>
            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 break-words">
              <li>
                <span className="font-semibold">Promoter:</span> LC
                International Limited having its registered office at Suite 6,
                Atlantic Suites, Europort Avenue, Gibraltar.
              </li>
              <li>
                This Sports Promotion cannot be used in conjunction with any
                other Ladbrokes.com Sports Promotion.
              </li>
              <li>
                We reserve the right to change or end any Sports Promotion, if
                required for legal and/or regulatory reasons.
              </li>
              <li>
                If you have made one or more qualifying bets in relation to this
                Sports Promotion and your betting levels are subsequently
                restricted by us, we will make sure that this will not
                materially affect your ability to satisfy the conditions to
                qualify for this Sports Promotion (if applicable) or to fully
                benefit from the free bets available.
              </li>
              <li>
                We may place restrictions on your account in order to comply
                with our legal and regulatory obligations, this could include
                deposit restrictions and restrictions on the bonus offers that
                you can participate in.
              </li>
              <li>
                We will not be responsible should these restrictions, which may
                include Safer Gambling measures, affect your ability to complete
                the requirements of this promotion and/or to release any bonus,
                benefits or prizes.
              </li>
            </ul>
          </div>

          <p className="font-bold text-sp-green uppercase text-center pt-1 sm:pt-1.5 md:pt-2 text-xs sm:text-sm md:text-base break-words">
            Please Bet Responsibly.
            <a
              href="https://begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline cursor-pointer hover:no-underline text-sp-green ml-1 sm:ml-2 break-all"
            >
              begambleaware.org
            </a>
          </p>
        </div>
      </details>
    </section>
  );
};

export default TermsAndConditions;
