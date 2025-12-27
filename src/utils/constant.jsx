export const navLinks = [
  { label: "Home", href: "/", active: false },
  { label: "How it works", href: "/user/how-it-works", active: false },
  { label: "Promotions", href: "/user/promotions", active: false },
  { label: "Account", href: "/user/account", active: false },
];

export const popularSports = [
  {
    id: "football",
    name: "Football",
    icon: "CircleDot",
    href: "/sports/football",
  },
  {
    id: "esports",
    name: "E - Sports",
    icon: "Gamepad2",
    href: "/sports/esports",
  },
  {
    id: "basketball",
    name: "Basketball",
    icon: "CircleDot",
    href: "/sports/basketball",
  },
];

export const allSports = [
  {
    id: "football",
    name: "Football",
    icon: "CircleDot",
    href: "/sports/football",
  },
  { id: "boxing", name: "Boxing", icon: "Zap", href: "/sports/boxing" },
  {
    id: "basketball",
    name: "Basketball",
    icon: "CircleDot",
    href: "/sports/basketball",
  },
  {
    id: "cricket",
    name: "Cricket",
    icon: "CircleDot",
    href: "/sports/cricket",
  },
  { id: "horses", name: "Horses", icon: "Trophy", href: "/racing/horses" },
  {
    id: "esports",
    name: "E - Sports",
    icon: "Gamepad2",
    href: "/sports/esports",
  },
  { id: "ufc", name: "UFC", icon: "Shield", href: "/sports/ufc" },
  {
    id: "american-football",
    name: "American Football",
    icon: "CircleDot",
    href: "/sports/american-football",
  },
  { id: "tennis", name: "Tennis", icon: "CircleDot", href: "/sports/tennis" },

  { id: "darts", name: "Darts", icon: "Target", href: "/sports/darts" },
  { id: "mma", name: "MMA", icon: "Shield", href: "/sports/mma" },
  {
    id: "wrestling",
    name: "Wrestling",
    icon: "Users",
    href: "/sports/wrestling",
  },
  {
    id: "waterpolo",
    name: "Waterpolo",
    icon: "Waves",
    href: "/sports/waterpolo",
  },
  {
    id: "handball",
    name: "Handball",
    icon: "CircleDot",
    href: "/sports/handball",
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Sign Up",
    description: "Create your account today",
  },
  {
    step: 2,
    title: "Place a Qualifying Bet",
    description: "Min £5 at odds 1/2 or greater",
  },
  {
    step: 3,
    title: "Receive £100,000 in Capital",
    description: "Amplify your bets with Pro",
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/stirlingpicks",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/stirlingpicks",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/stirlingpicks",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-current">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/stirlingpicks",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@stirlingpicks",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-current">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export const paymentMethods = [
  {
    name: "Visa",
    icon: (
      <svg viewBox="0 0 50 35" className="h-6 w-auto">
        <rect width="50" height="35" rx="4" fill="white" />
        <text
          x="25"
          y="22"
          textAnchor="middle"
          className="text-[10px] font-bold fill-[#1A1F71]"
        >
          VISA
        </text>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    icon: (
      <svg viewBox="0 0 50 35" className="h-6 w-auto">
        <rect width="50" height="35" rx="4" fill="white" />
        <circle cx="20" cy="17.5" r="10" fill="#EB001B" />
        <circle cx="30" cy="17.5" r="10" fill="#F79E1B" />
        <path
          d="M25 10.5c2.5 2 4 5 4 7s-1.5 5-4 7c-2.5-2-4-5-4-7s1.5-5 4-7z"
          fill="#FF5F00"
        />
      </svg>
    ),
  },
  {
    name: "American Express",
    icon: (
      <svg viewBox="0 0 50 35" className="h-6 w-auto">
        <rect width="50" height="35" rx="4" fill="#006FCF" />
        <text
          x="25"
          y="22"
          textAnchor="middle"
          className="text-[8px] font-bold fill-white"
        >
          AMEX
        </text>
      </svg>
    ),
  },
  {
    name: "Discover",
    icon: (
      <svg viewBox="0 0 50 35" className="h-6 w-auto">
        <rect width="50" height="35" rx="4" fill="white" />
        <text
          x="25"
          y="22"
          textAnchor="middle"
          className="text-[8px] font-bold fill-[#FF6000]"
        >
          DISCOVER
        </text>
      </svg>
    ),
  },
  {
    name: "JCB",
    icon: (
      <svg viewBox="0 0 50 35" className="h-6 w-auto">
        <rect width="50" height="35" rx="4" fill="white" />
        <rect x="8" y="8" width="10" height="19" rx="2" fill="#0E4C96" />
        <rect x="20" y="8" width="10" height="19" rx="2" fill="#E41D2D" />
        <rect x="32" y="8" width="10" height="19" rx="2" fill="#00A14E" />
      </svg>
    ),
  },
  {
    name: "Bitcoin",
    icon: (
      <svg viewBox="0 0 50 35" className="h-6 w-auto">
        <rect width="50" height="35" rx="4" fill="#F7931A" />
        <text
          x="25"
          y="22"
          textAnchor="middle"
          className="text-[14px] font-bold fill-white"
        >
          ₿
        </text>
      </svg>
    ),
  },
];
