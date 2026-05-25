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
    href: '/dj-artists',
    description:
      'Professional DJ artists delivering high-energy sets, seamless mixes, and electrifying performances tailored for corporate events and luxury gatherings.',
  },
  {
    icon: musicIcon,
    title: 'Live Band',
    href: '/live-bands',
    description:
      'Premium live bands and musical ensembles crafted for unforgettable corporate and luxury events — from fusion acts to classical orchestras.',
  },
  {
    icon: newsReporterIcon,
    title: 'EMCEE Profile',
    href: '/emcee-profile',
    description:
      'Experienced and charismatic emcees who command the stage, engage audiences, and ensure every event flows with energy and professionalism.',
  },
];

const PerformanceCategoriesSection: React.FC = () => (
  <RevealSection id="performance-categories" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <img
          src={servicesBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/72 to-black/84" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <SectionHeading centered title="Performance Categories" />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {categories.map((cat) => {
              const isExternal = cat.href.startsWith('http');
              const inner = (
                <>
                  <img src={cat.icon} alt="" aria-hidden="true" className="h-8 w-8" />
                  <h3 className="mt-4 normal-case text-xl tracking-normal text-[#f5f5f5]">{cat.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/72">{cat.description}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[#88ab32] text-[12px] font-medium tracking-[0.08em] uppercase">
                    Explore
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </>
              );

              const cls =
                'block rounded-3xl border border-white/10 bg-[#10140c]/72 p-7 backdrop-blur-md transition-all duration-300 hover:border-[#88ab32]/40 hover:bg-[#10140c]/90 cursor-pointer';

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
