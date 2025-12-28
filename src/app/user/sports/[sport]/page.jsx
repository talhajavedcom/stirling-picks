"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { use } from "react";
import { useRouter } from "next/navigation";
import { Star, Search } from "lucide-react";
import { apiData, apidata2, allSports } from "@/utils/constant";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const formatOdds = (price) => {
  if (price > 0) {
    return `${(price / 100).toFixed(2)}`;
  } else {
    return `${(100 / Math.abs(price) + 1).toFixed(2)}`;
  }
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });
};

const SportsBettingPage = ({ params }) => {
  const { sport } = use(params);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("all");
  const { isAuthenticated, openLoginModal, isLoginModalOpen } = useAuth();
  const hasCheckedAuth = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !hasCheckedAuth.current) {
      hasCheckedAuth.current = true;
      openLoginModal();
    }
  }, [isAuthenticated, openLoginModal]);

  useEffect(() => {
    if (hasCheckedAuth.current && !isAuthenticated && !isLoginModalOpen) {
      router.push("/");
    }
  }, [isAuthenticated, isLoginModalOpen, router]);

  const sportName = allSports.find((s) => s.id === sport)?.name || sport;

  const filteredMatches = useMemo(() => {
    const sportKeyMap = {
      football: [
        "soccer_epl",
        "soccer_italy_serie_a",
        "soccer_spain_la_liga",
        "soccer_germany_bundesliga",
      ],
      basketball: ["basketball_nba", "basketball_euroleague", "basketball_ncaab"],
      "american-football": ["americanfootball_nfl", "americanfootball_ncaaf"],
      esports: ["esports"],
      boxing: ["boxing_boxing"],
      cricket: ["cricket_big_bash", "cricket_international_t20"],
      ufc: ["mma_mixed_martial_arts"],
      tennis: ["tennis_atp", "tennis_wta"],
    };

    const relevantSportKeys = sportKeyMap[sport] || [];

    let matches = apiData.filter((match) => {
      const matchSportKey = match.sport_key.toLowerCase();
      return relevantSportKeys.some((key) =>
        matchSportKey.includes(key.split("_")[0])
      );
    });

    if (matches.length === 0) {
      matches = apiData;
    }

    if (searchQuery) {
      matches = matches.filter(
        (match) =>
          match.home_team.toLowerCase().includes(searchQuery.toLowerCase()) ||
          match.away_team.toLowerCase().includes(searchQuery.toLowerCase()) ||
          match.sport_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLeague !== "all") {
      matches = matches.filter((match) => match.sport_key === selectedLeague);
    }

    return matches;
  }, [sport, searchQuery, selectedLeague]);

  const groupedByLeague = useMemo(() => {
    const groups = {};
    filteredMatches.forEach((match) => {
      const league = match.sport_title;
      if (!groups[league]) {
        groups[league] = [];
      }
      groups[league].push(match);
    });
    return groups;
  }, [filteredMatches]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="p-2 sm:p-4 lg:p-6">
      <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-3 mb-4 sm:mb-6">
        <div className="text-white">
          <span className="text-xs sm:text-sm text-white/60">Overview</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs text-white/60 uppercase whitespace-nowrap">
            Odds Format
          </span>
          <select className="bg-sp-green text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-md border-none outline-none">
            <option value="fractional">Fractional</option>
            <option value="decimal">Decimal</option>
            <option value="american">American</option>
          </select>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 bg-sp-gray-800 rounded-lg px-3 py-2">
            <Search className="size-4 text-white/60 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-0 bg-transparent text-white text-sm placeholder:text-white/40 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <button
          onClick={() => setSelectedLeague("all")}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
            selectedLeague === "all"
              ? "bg-sp-green text-black"
              : "bg-sp-gray-800 text-white hover:bg-sp-gray-700"
          )}
        >
          <span>⚽</span> {sportName.toUpperCase()}
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-sp-gray-800 text-white hover:bg-sp-gray-700 whitespace-nowrap">
          <span>🎮</span> ESOCCER
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-sp-gray-800 text-white hover:bg-sp-gray-700 whitespace-nowrap">
          <span>🎯</span> FIFA ESPORTS
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-sp-gray-800 text-white hover:bg-sp-gray-700 whitespace-nowrap">
          <span>🎾</span> TENNIS
        </button>
      </div>

      <div className="bg-sp-gray-900 rounded-lg overflow-hidden">
        <div className="hidden sm:grid grid-cols-12 gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-sp-gray-800 text-white/60 text-[10px] sm:text-xs uppercase font-medium">
          <div className="col-span-1">Time</div>
          <div className="col-span-5">Event</div>
          <div className="col-span-2 text-center">Home</div>
          <div className="col-span-2 text-center">Draw</div>
          <div className="col-span-2 text-center">Away</div>
        </div>

        {Object.entries(groupedByLeague).map(([league, matches]) => (
          <div key={league}>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-sp-gray-800/50 border-t border-white/5 first:border-t-0">
              <span className="text-sp-green font-semibold text-xs sm:text-sm">
                {league}
              </span>
            </div>

            {matches.map((match) => {
              const bookmaker = match.bookmakers[0];
              const market = bookmaker?.markets.find((m) => m.key === "h2h");
              const outcomes = market?.outcomes || [];

              const homeOdds = outcomes.find(
                (o) => o.name === match.home_team
              )?.price;
              const awayOdds = outcomes.find(
                (o) => o.name === match.away_team
              )?.price;
              const drawOdds = outcomes.find((o) => o.name === "Draw")?.price;

              return (
                <div key={match.id}>
                  <div className="hidden sm:grid grid-cols-12 gap-2 px-3 sm:px-4 py-2 sm:py-3 border-t border-white/5 hover:bg-sp-gray-800/30 transition-colors items-center">
                    <div className="col-span-1">
                      <div className="text-white/60 text-[10px] sm:text-xs">
                        {formatDate(match.commence_time)}
                      </div>
                      <div className="text-white text-xs sm:text-sm font-medium">
                        {formatTime(match.commence_time)}
                      </div>
                    </div>

                    <div className="col-span-5 flex items-center gap-2">
                      <Star className="size-3 sm:size-4 text-white/30 hover:text-sp-yellow cursor-pointer shrink-0" />
                      <div className="min-w-0">
                        <div className="text-white text-xs sm:text-sm font-medium truncate">
                          {match.home_team}
                        </div>
                        <div className="text-white/60 text-[10px] sm:text-xs truncate">
                          vs {match.away_team}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 flex justify-center">
                      <button className="w-full max-w-[80px] py-1.5 sm:py-2 bg-sp-gray-700 hover:bg-sp-green hover:text-black rounded text-white text-xs sm:text-sm font-bold transition-colors">
                        {homeOdds ? formatOdds(homeOdds) : "-"}
                      </button>
                    </div>

                    <div className="col-span-2 flex justify-center">
                      <button className="w-full max-w-[80px] py-1.5 sm:py-2 bg-sp-gray-700 hover:bg-sp-green hover:text-black rounded text-white text-xs sm:text-sm font-bold transition-colors">
                        {drawOdds ? formatOdds(drawOdds) : "-"}
                      </button>
                    </div>

                    <div className="col-span-2 flex justify-center">
                      <button className="w-full max-w-[80px] py-1.5 sm:py-2 bg-sp-gray-700 hover:bg-sp-green hover:text-black rounded text-white text-xs sm:text-sm font-bold transition-colors">
                        {awayOdds ? formatOdds(awayOdds) : "-"}
                      </button>
                    </div>
                  </div>

                  <div className="sm:hidden px-3 py-3 border-t border-white/5 hover:bg-sp-gray-800/30 transition-colors">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="text-white/60 text-[10px]">
                          {formatDate(match.commence_time)}
                        </div>
                        <div className="text-white text-xs font-medium">
                          {formatTime(match.commence_time)}
                        </div>
                      </div>
                      <Star className="size-3 text-white/30 hover:text-sp-yellow cursor-pointer shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-medium">
                          {match.home_team}
                        </div>
                        <div className="text-white/60 text-[10px]">
                          vs {match.away_team}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <button className="py-2 bg-sp-gray-700 hover:bg-sp-green hover:text-black rounded text-white text-xs font-bold transition-colors">
                        {homeOdds ? formatOdds(homeOdds) : "-"}
                      </button>
                      <button className="py-2 bg-sp-gray-700 hover:bg-sp-green hover:text-black rounded text-white text-xs font-bold transition-colors">
                        {drawOdds ? formatOdds(drawOdds) : "-"}
                      </button>
                      <button className="py-2 bg-sp-gray-700 hover:bg-sp-green hover:text-black rounded text-white text-xs font-bold transition-colors">
                        {awayOdds ? formatOdds(awayOdds) : "-"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {filteredMatches.length === 0 && (
          <div className="px-4 py-8 text-center text-white/60">
            <p className="text-sm">No matches found for {sportName}</p>
            <p className="text-xs mt-1">
              Try searching for a different sport or check back later
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 sm:mt-8">
        <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
          Available Leagues
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
          {apidata2
            .filter((league) => league.active && !league.has_outrights)
            .slice(0, 10)
            .map((league) => (
              <div
                key={league.key}
                className="bg-sp-gray-800 rounded-lg p-3 sm:p-4 hover:bg-sp-gray-700 transition-colors cursor-pointer"
              >
                <div className="text-white font-medium text-xs sm:text-sm">
                  {league.title}
                </div>
                <div className="text-white/60 text-[10px] sm:text-xs mt-1">
                  {league.group}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SportsBettingPage;
