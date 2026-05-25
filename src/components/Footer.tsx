import React from 'react';
import { companyContact } from '@/src/lib/companyContact';
import ccLogo from '../assets/cc-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-5 sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-2.5">

        {/* Line 1: Email • Phone — stack vertically on mobile, inline on sm+ */}
        <div className="flex flex-col items-center gap-0.5 text-[11px] leading-relaxed text-white/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0 md:justify-start">
          <span>
            <span className="font-semibold text-white">Email:</span>{' '}
            {companyContact.email}
          </span>
          <span className="hidden sm:inline mx-2 text-accent/70">•</span>
          <span className="text-center sm:text-left">
            <span className="font-semibold text-white">Phone:</span>{' '}
            <span className="whitespace-nowrap">{companyContact.phonePrimary}</span>
            {companyContact.phoneSecondary && (
              <>
                <span className="mx-1 text-accent/50">,</span>
                <span className="whitespace-nowrap">{companyContact.phoneSecondary}</span>
              </>
            )}
          </span>
        </div>

        {/* Line 2: Address */}
        <p className="text-center text-[11px] leading-relaxed text-white/75 md:text-left">
          <span className="font-semibold text-white">Address:</span>{' '}
          {companyContact.addressInline}
        </p>

        {/* Line 3: Copyright (left) + CodeCrafter badge (right) */}
        <div className="flex flex-row items-center justify-between gap-2 pt-1">
          <p className="text-[11px] text-white/40">
            © 2026 Bamboo Groves Events Group. All Rights Reserved.
          </p>

          <a
            href="https://www.codecrafter.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/35 bg-accent/10 px-2.5 py-1 shadow-[0_0_18px_rgba(136,171,50,0.18)] transition-all hover:bg-accent/15"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-accent">
              Crafted by
            </span>
            <img src={ccLogo} alt="CodeCrafter" className="h-4 w-auto sm:h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;