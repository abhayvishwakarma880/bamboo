import React from 'react';
import { bandData } from './corporate-profile/data';

const LiveBandsPage: React.FC = () => (
  <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
    <div className="mx-auto max-w-6xl px-5 sm:px-10">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#88ab32]" />
          <span className="text-[11px] tracking-[0.2em] text-[#88ab32] uppercase font-medium">Entertainment</span>
        </div>
        <h1 className="text-[clamp(28px,4vw,48px)] font-light text-[#f5f5f5] leading-[1.15] tracking-[-0.02em] mb-3.5">
          Premium Live Bands &{' '}
          <span className="font-semibold">Musical Performers</span>
        </h1>
        <p className="text-[15px] text-white/[0.45] leading-relaxed max-w-[560px]">
          A curated portfolio of professional live bands, fusion artists, acoustic performers, and premium musical acts for corporate and luxury events.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {bandData.map((band) => (
          <a
            key={band.id}
            href={band.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-2xl overflow-hidden border border-[#88ab32]/35 shadow-[0_4px_24px_rgba(0,0,0,0.4)] group transition-all duration-500 hover:border-[#88ab32] hover:shadow-[0_20px_60px_rgba(136,171,50,0.12)]"
            style={{ height: '280px' }}
          >
            <img
              src={band.image}
              alt={band.title}
              className="absolute inset-0 w-full h-full object-fill transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <p className="absolute left-4 right-4 bottom-4 text-[15px] font-semibold text-[#f5f5f5] leading-tight tracking-[0.01em] transition-all duration-300 ease-out group-hover:-translate-y-[84px]">
              {band.title}
            </p>

            <div className="absolute left-4 right-4 bottom-4 flex flex-col gap-2.5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <p className="text-[12px] text-white/65 leading-relaxed">{band.description}</p>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#88ab32]/40 bg-[#88ab32] text-black text-[11px] font-semibold tracking-[0.08em] uppercase w-fit">
                View Profile
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </main>
);

export default LiveBandsPage;
