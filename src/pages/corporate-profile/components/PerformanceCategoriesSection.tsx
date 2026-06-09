import React from 'react';
import { Link } from 'react-router-dom';
import servicesBackground from '../../../assets/Gemini_Generated_Image_o1735po1735po173.png';
import musicIcon from '../../../assets/icons/music.png';
import newsReporterIcon from '../../../assets/icons/news-reporter.png';
import lcdDisplayIcon from '../../../assets/icons/lcd-display.png';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const categories = [
  {
    icon: lcdDisplayIcon,
    title: 'DJ Artists',
    num: '01',
    href: '/dj-artists',
    description:
      'Professional DJ artists delivering high-energy sets, seamless mixes, and electrifying performances tailored for corporate events and luxury gatherings.',
  },
  {
    icon: musicIcon,
    title: 'Live Band',
    num: '02',
    href: '/live-bands',
    description:
      'Premium live bands and musical ensembles crafted for unforgettable corporate and luxury events — from fusion acts to classical orchestras.',
  },
  {
    icon: newsReporterIcon,
    title: 'EMCEE Profile',
    num: '03',
    href: '/emcee-profile',
    description:
      'Experienced and charismatic emcees who command the stage, engage audiences, and ensure every event flows with energy and professionalism.',
  },
];

const PerformanceCategoriesSection: React.FC = () => (
  <RevealSection id="performance-categories" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_40px_140px_rgba(0,0,0,0.6)]">

        {/* Background */}
        <img
          src={servicesBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(136,171,50,0.16),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.04),transparent_35%)]" />
        {/* Top accent line — matches ServicesSection exactly */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/60 to-transparent" />

        <div className="relative z-10 p-7 sm:p-10 lg:p-14">

          {/* Header — identical pattern to ServicesSection */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#88ab32]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#88ab32]">
                Talent Roster
              </span>
              <span className="h-px w-8 bg-[#88ab32]" />
            </div>
            <SectionHeading centered title="Performance Categories" />
          </div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-3">
            {categories.map((cat) => {
              const isExternal = cat.href.startsWith('http');

              const inner = (
                <>
                  {/* Top accent line on each card */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/30 to-transparent" />
                  {/* Subtle top glow */}
                  <div className="pointer-events-none absolute -top-8 left-1/2 h-16 w-32 -translate-x-1/2 rounded-full bg-[#88ab32]/6 blur-2xl" />

                  <div className="relative">
                    {/* Number badge */}
                    {/* <span className="mb-5 inline-flex items-center rounded-md border border-[#88ab32]/20 bg-[#88ab32]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#88ab32]/70">
                      {cat.num}
                    </span> */}

                    {/* Icon */}
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#88ab32]/20 bg-[#88ab32]/10 transition-all duration-300 group-hover:border-[#88ab32]/40 group-hover:bg-[#88ab32]/20">
                      <img
                        src={cat.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-5 w-5 brightness-[1.4] saturate-0 invert"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="normal-case text-[1.05rem] font-semibold tracking-normal text-[#f0f0f0]">
                      {cat.title}
                    </h3>

                    {/* Thin divider */}
                    <div className="my-3.5 h-px w-8 bg-[#88ab32]/35" />

                    {/* Description */}
                    <p className="text-[0.8125rem] leading-[1.75] text-white/55 transition-colors duration-200 group-hover:text-white/70">
                      {cat.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#88ab32]">
                      <span>Explore</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#88ab32]/30 bg-[#88ab32]/8 transition-all duration-300 group-hover:border-[#88ab32]/60 group-hover:bg-[#88ab32]/18">
                        <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6H10M6.5 2.5L10 6L6.5 9.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </>
              );

              const cls = [
                'group relative block overflow-hidden rounded-2xl border backdrop-blur-md',
                'border-white/8 bg-white/[0.03] p-6',
                'transition-all duration-300',
                'hover:border-[#88ab32]/35 hover:bg-[#88ab32]/[0.05] hover:shadow-[0_8px_32px_rgba(136,171,50,0.09)]',
                'hover:-translate-y-1 cursor-pointer',
              ].join(' ');

              return isExternal ? (
                <a key={cat.title} href={cat.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={cat.title} to={cat.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  </RevealSection>
);

export default PerformanceCategoriesSection;