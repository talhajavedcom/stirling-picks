"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Gamepad2,
  Target,
  Trophy,
  Shield,
  Users,
  Waves,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { popularSports, allSports } from "@/utils/constant";

const iconMap = {
  CircleDot,
  Gamepad2,
  Zap,
  Trophy,
  Shield,
  Target,
  Users,
  Waves,
};

const Sidebar = ({
  className,
  isCollapsed = false,
  isMobileOpen = false,
  onClose,
}) => {
  const pathname = usePathname();
  const [isAllSportsExpanded, setIsAllSportsExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (href) => {
    return pathname === href || (pathname && pathname?.startsWith(href + "/"));
  };

  const filteredSports = useMemo(() => {
    if (!searchQuery.trim()) return allSports;
    return allSports.filter((sport) =>
      sport.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  useEffect(() => {
    if (isMobileOpen && onClose) {
      return () => {};
    }
  }, [pathname, isMobileOpen, onClose]);

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "flex flex-col bg-sp-green-dark overflow-hidden transition-all duration-300 pb-2 rounded-br-lg",
          !onClose && "hidden lg:flex lg:relative",
          !onClose && !className?.includes("h-") && "lg:h-full",
          onClose && "lg:hidden fixed left-0 top-0 h-screen z-50",
          onClose &&
            (isMobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"),
          isCollapsed ? "w-12 sm:w-14 md:w-16" : "w-48 sm:w-56 md:w-60",
          className
        )}
      >
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
          <Link
            href="/sports/live"
            onClick={() => {
              if (isMobileOpen && onClose) {
                onClose();
              }
            }}
            className={cn(
              "flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 mx-1.5 sm:mx-2 mt-1.5 sm:mt-2 rounded-md sm:rounded-lg transition-colors",
              "bg-white hover:bg-sp-gray-100",
              isActive("/sports/live") && "ring-1 sm:ring-2 ring-sp-green-dark"
            )}
          >
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
              <span className="relative flex size-1.5 sm:size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sp-red opacity-75"></span>
                <span className="relative inline-flex rounded-full size-1.5 sm:size-2 bg-sp-red"></span>
              </span>
              {!isCollapsed && (
                <span className="text-xs sm:text-sm font-medium text-sp-black">
                  Live
                </span>
              )}
            </div>
          </Link>

          <div className="mx-1.5 sm:mx-2 mt-1.5 sm:mt-2">
            <div
              className={cn(
                "flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 md:py-2.5 bg-white rounded-md sm:rounded-lg",
                "focus-within:ring-1 sm:focus-within:ring-2 focus-within:ring-sp-green-dark"
              )}
            >
              <Search className="size-3 sm:size-3.5 md:size-4 text-sp-gray-500 shrink-0" />
              {!isCollapsed && (
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-xs sm:text-sm text-sp-black placeholder:text-sp-gray-500 outline-none"
                />
              )}
            </div>
          </div>

          {!isCollapsed && (
            <div className="mt-2 sm:mt-3 md:mt-4">
              <h3 className="px-2 sm:px-3 md:px-4 text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">
                Popular
              </h3>
              <nav className="mt-0.5 sm:mt-1 space-y-0.5 px-1 sm:px-1.5 md:px-2">
                {popularSports.map((sport) => (
                  <Link
                    key={sport.id}
                    href={sport.href}
                    onClick={() => {
                      if (isMobileOpen && onClose) {
                        onClose();
                      }
                    }}
                    className={cn(
                      "flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg transition-colors",
                      "bg-white hover:bg-sp-gray-100",
                      isActive(sport.href) &&
                        "ring-1 sm:ring-2 ring-sp-green-dark bg-sp-gray-100"
                    )}
                  >
                    {(() => {
                      const IconComponent = iconMap[sport.icon];
                      return IconComponent ? (
                        <IconComponent className="size-4 sm:size-5 text-sp-black" />
                      ) : null;
                    })()}
                    <span className="text-xs sm:text-sm font-medium text-sp-black">
                      {sport.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          )}

          <div className="mt-2 sm:mt-3 md:mt-4 flex-1">
            {!isCollapsed && (
              <h3 className="px-2 sm:px-3 md:px-4 text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">
                All Sports
              </h3>
            )}

            <div className="mt-0.5 sm:mt-1 px-1 sm:px-1.5 md:px-2">
              <button
                onClick={() => setIsAllSportsExpanded(!isAllSportsExpanded)}
                className={cn(
                  "flex items-center justify-between w-full px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg transition-colors",
                  "bg-white hover:bg-sp-gray-100",
                  isAllSportsExpanded && "bg-sp-gray-100"
                )}
              >
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <span className="text-sm sm:text-base">🔤</span>
                  {!isCollapsed && (
                    <span className="text-xs sm:text-sm font-medium text-sp-black">
                      A - Z Sports ({allSports.length})
                    </span>
                  )}
                </div>
                {!isCollapsed &&
                  (isAllSportsExpanded ? (
                    <ChevronUp className="size-3 sm:size-3.5 md:size-4 text-sp-black/70" />
                  ) : (
                    <ChevronDown className="size-3 sm:size-3.5 md:size-4 text-sp-black/70" />
                  ))}
              </button>
            </div>

            {isAllSportsExpanded && !isCollapsed && (
              <nav className="mt-0.5 sm:mt-1 space-y-0.5 px-1 sm:px-1.5 md:px-2 pb-2 sm:pb-3 md:pb-4">
                {filteredSports.map((sport) => (
                  <Link
                    key={`all-${sport.id}`}
                    href={sport.href}
                    onClick={() => {
                      if (isMobileOpen && onClose) {
                        onClose();
                      }
                    }}
                    className={cn(
                      "flex items-center gap-1.5 sm:gap-2 md:gap-3 px-1.5 sm:px-2 py-1 sm:py-1.5 md:py-2 my-1 sm:my-1.5 rounded-md sm:rounded-lg transition-colors",
                      "bg-white hover:bg-sp-gray-100",
                      isActive(sport.href) &&
                        "ring-1 sm:ring-2 ring-sp-green-dark bg-sp-gray-100"
                    )}
                  >
                    {(() => {
                      const IconComponent = iconMap[sport.icon];
                      return IconComponent ? (
                        <IconComponent className="size-4 sm:size-5 text-sp-black" />
                      ) : null;
                    })()}
                    <span className="text-xs sm:text-sm font-medium text-sp-black">
                      {sport.name}
                    </span>
                  </Link>
                ))}

                {filteredSports.length === 0 && (
                  <div className="px-2 sm:px-3 py-3 sm:py-4 text-xs sm:text-sm text-sp-black/60 text-center">
                    No sports found
                  </div>
                )}
              </nav>
            )}

            {isCollapsed && (
              <nav className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1 px-1 sm:px-1.5 md:px-2 pb-2 sm:pb-3 md:pb-4">
                {allSports.slice(0, 6).map((sport) => (
                  <Link
                    key={`collapsed-${sport.id}`}
                    href={sport.href}
                    onClick={() => {
                      if (isMobileOpen && onClose) {
                        onClose();
                      }
                    }}
                    className={cn(
                      "flex items-center justify-center p-1.5 sm:p-2 rounded-md sm:rounded-lg transition-colors",
                      "bg-white hover:bg-sp-gray-100",
                      isActive(sport.href) &&
                        "ring-1 sm:ring-2 ring-sp-green-dark"
                    )}
                    title={sport.name}
                  >
                    {(() => {
                      const IconComponent = iconMap[sport.icon];
                      return IconComponent ? (
                        <IconComponent className="size-5 sm:size-6 text-sp-black" />
                      ) : null;
                    })()}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
