import React from 'react';
import socialBackground from '../../../assets/events/social.webp';
import RevealSection from '../../corporate-profile/components/RevealSection';
import SectionHeading from '../../corporate-profile/components/SectionHeading';

const AboutSection: React.FC = () => (
  <RevealSection id="about" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_40px_140px_rgba(0,0,0,0.6)]">

        {/* Background image */}
        <img
          src={socialBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(136,171,50,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />

        {/* Thin top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/60 to-transparent" />

        <div className="relative z-10 grid gap-12 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:p-14">

          {/* Left column */}
          <div>
            {/* Eyebrow accent */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#88ab32]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#88ab32]">
                Creative Journeys
              </span>
            </div>

            <SectionHeading title="Designing Celebrations that Tell Your Story" />

            <div className="mt-7 space-y-4 text-sm leading-[1.85] text-white/70 sm:text-[0.95rem]">
              <p>
                At Bamboo Groves, we believe that social celebrations are more than just events; they are living,
                breathing moments of joy, connection, and beautiful storytelling. Whether it is a dream wedding,
                an intimate milestone, or a grand festive gala, we bring your vision to life with warmth and sophistication.
              </p>
              <p>
                With dedicated creative directors, master decorators, and in-house production teams, we take care of
                everything—from bespoke set designs and custom styling to sound, lighting, and seamless entertainment coordination.
              </p>
            </div>

            {/* Stats row — unified pill */}
            <div className="mt-10 flex items-stretch divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden">
              {[
                { value: '350+', label: 'Celebrations' },
                { value: '10K+', label: 'Happy Guests' },
                { value: '7+',   label: 'Years of Excellence' },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 px-5 py-6 text-center">
                  <p className="text-[1.6rem] font-bold leading-none text-[#a4c34f] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Philosophy card */}
          <div className="relative">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[#88ab32]/5 blur-2xl scale-110" />

            {/* Corner ring accents */}
            <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-xl border border-[#88ab32]/20" />
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-14 w-14 rounded-full border border-[#a4c34f]/15" />

            <div className="relative rounded-[26px] border border-white/12 bg-white/[0.07] p-8 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]">
              {/* Label with dot */}
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#88ab32]" />
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#88ab32]">
                  Our Philosophy
                </p>
              </div>

              <p className="text-xl font-medium leading-[1.6] text-[#f0f0f0] sm:text-2xl">
                We turn personal milestones into{' '}
                <span className="text-white font-semibold">timeless, beautiful memories</span>{' '}
                with exquisite styling, care, and flawless production.
              </p>

              {/* Bottom rule + tagline */}
              <div className="mt-8 h-px bg-gradient-to-r from-[#88ab32]/40 via-[#88ab32]/15 to-transparent" />
              <p className="mt-4 text-xs text-white/35 leading-relaxed">
                Every detail curated. Every moment cherished.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </RevealSection>
);

export default AboutSection;