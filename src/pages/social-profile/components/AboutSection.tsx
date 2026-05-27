import React from 'react';
import socialBackground from '../../../assets/events/social.webp';
import RevealSection from '../../corporate-profile/components/RevealSection';
import SectionHeading from '../../corporate-profile/components/SectionHeading';

const AboutSection: React.FC = () => (
  <RevealSection id="about" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <img
          src={socialBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/58 to-black/76" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative z-10 grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-10">
          <div>
            <SectionHeading label="Creative Journeys" title="Designing Celebrations that Tell Your Story" />
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-white/78 sm:text-base">
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

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { value: '350+', label: 'Celebrations' },
                { value: '10K+', label: 'Happy Guests' },
                { value: '7+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">
                  <p className="text-2xl font-bold text-[#a4c34f]">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 rotate-12 rounded-xl border border-[#88ab32]/25 bg-[#0b0f08]/40" />
            <div className="pointer-events-none absolute -bottom-6 -right-5 h-20 w-20 -rotate-12 rounded-full border border-[#a4c34f]/20 bg-[#88ab32]/10" />
            <div className="relative rounded-[26px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#88ab32]">Philosophy</p>
              <p className="mt-5 normal-case text-2xl leading-snug text-[#f5f5f5]">
                We turn personal milestones into timeless, beautiful memories with exquisite styling, care, and flawless production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RevealSection>
);

export default AboutSection;
