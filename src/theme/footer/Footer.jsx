"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { socialLinks, paymentMethods } from "@/utils/constant";

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-footer text-white", className)}>
      <div className="h-1 bg-sp-green" />

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-full max-w-md bg-white/20" />
        </div>

        <div className="text-center space-y-3 mb-8">
          <p className="text-sm text-white/80">
            All personal data is provided in accordance with our{" "}
            <Link
              href="/privacy"
              className="text-white underline hover:no-underline"
            >
              Privacy Notice
            </Link>{" "}
            and{" "}
            <Link
              href="/cookies"
              className="text-white underline hover:no-underline"
            >
              Cookie Policy
            </Link>
            .
          </p>

          <p className="text-sm text-white/80">
            Stirling Picks is committed to{" "}
            <Link
              href="/responsible-gambling"
              className="text-white underline hover:no-underline uppercase font-medium"
            >
              Responsible Gambling
            </Link>{" "}
            and{" "}
            <Link
              href="/fairness"
              className="text-white underline hover:no-underline uppercase font-medium"
            >
              Fairness
            </Link>
          </p>

          <p className="text-sm text-white/80">
            Enjoy the game but play responsibly{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:no-underline"
            >
              www.begambleaware.org
            </a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="flex items-center justify-center"
              title={method.name}
            >
              {method.icon}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-white/60">
          <span className="flex items-center justify-center size-5 border border-white/60 rounded-full text-xs">
            ©
          </span>
          <span>{currentYear} Stirling Picks. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
