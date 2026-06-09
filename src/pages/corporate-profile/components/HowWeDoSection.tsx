import React from 'react';
import howWeDoBackground from '../../../assets/events/img.jpeg';
import { processSteps } from '../data';
import RevealSection from './RevealSection';

const HowWeDoSection: React.FC = () => {
  const mainSteps = processSteps.slice(0, -1);
  const lastStep = processSteps[processSteps.length - 1];

  return (
    <RevealSection
      id="how-we-do"
      className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_40px_140px_rgba(0,0,0,0.6)]">

          {/* Background Image */}
          <img
            src={howWeDoBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(136,171,50,0.16),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.04),transparent_35%)]" />

          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-7 sm:p-10 lg:p-14">

            {/* Header */}
            <div className="mb-12 flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#88ab32]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#88ab32]">
                  Process Overview
                </span>
                <span className="h-px w-8 bg-[#88ab32]" />
              </div>
              <h2 className="normal-case text-3xl font-bold leading-tight tracking-[0.03em] text-[#f5f5f5] sm:text-4xl">
                How We Do It
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
                Every project follows a clear execution flow — from planning to final delivery.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="overflow-hidden rounded-2xl border border-white/8">

              {/* 2-col rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {mainSteps.map((step, i) => {
                  const isRightCol = i % 2 === 1;
                  return (
                    <div
                      key={step.number}
                      className={[
                        'group relative flex flex-col gap-3 p-7',
                        'bg-white/[0.025] backdrop-blur-sm',
                        'transition-all duration-300',
                        'hover:bg-[#88ab32]/[0.07]',
                        !isRightCol ? 'sm:border-r border-white/8' : '',
                        'border-b border-white/8',
                      ].join(' ')}
                    >
                      {/* Hover top-border flash */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/0 to-transparent transition-all duration-300 group-hover:via-[#88ab32]/50" />

                      {/* Step number + line */}
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#88ab32]/30 bg-[#88ab32]/10 text-[0.65rem] font-extrabold tracking-widest text-[#a4c34f] transition-all duration-300 group-hover:border-[#88ab32]/60 group-hover:bg-[#88ab32]/20">
                          {step.number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#88ab32]/25 to-transparent" />
                      </div>

                      <p className="normal-case text-[0.95rem] font-semibold leading-snug text-[#efefef] transition-colors duration-300 group-hover:text-white">
                        {step.title}
                      </p>
                      <p className="text-xs leading-[1.75] text-white/50 transition-colors duration-300 group-hover:text-white/65">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Last step — full width */}
              <div className="group relative flex flex-col items-start gap-6 bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-300 hover:bg-[#88ab32]/[0.07] sm:flex-row sm:items-center">

                {/* Hover top-border flash */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/0 to-transparent transition-all duration-300 group-hover:via-[#88ab32]/50" />

                <div className="flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#88ab32]/30 bg-[#88ab32]/10 text-[0.65rem] font-extrabold tracking-widest text-[#a4c34f] transition-all duration-300 group-hover:border-[#88ab32]/60 group-hover:bg-[#88ab32]/20">
                      {lastStep.number}
                    </span>
                    <div className="h-px w-16 bg-gradient-to-r from-[#88ab32]/25 to-transparent" />
                  </div>
                  <p className="mt-4 text-[0.95rem] font-semibold normal-case leading-snug text-[#efefef] transition-colors duration-300 group-hover:text-white">
                    {lastStep.title}
                  </p>
                  <p className="mt-2 text-xs leading-[1.75] text-white/50 transition-colors duration-300 group-hover:text-white/65">
                    {lastStep.description}
                  </p>
                </div>

                {/* Core steps badge */}
                <div className="relative shrink-0 overflow-hidden rounded-2xl border border-[#88ab32]/25 bg-[#88ab32]/10 px-8 py-5 text-center backdrop-blur-md transition-all duration-300 group-hover:border-[#88ab32]/45 group-hover:bg-[#88ab32]/15">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(136,171,50,0.12),transparent_70%)]" />
                  <p className="relative text-4xl font-bold leading-none text-[#a4c34f]">
                    {processSteps.length}
                  </p>
                  <p className="relative mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-white/45">
                    Core Steps
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default HowWeDoSection;