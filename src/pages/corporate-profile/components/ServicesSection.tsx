import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import servicesBackground from '../../../assets/Gemini_Generated_Image_o1735po1735po173.png';
import agreementIcon from '../../../assets/icon2/agreement.png';
import blueprintIcon from '../../../assets/icon2/blueprint.png';
import budgetPlanIcon from '../../../assets/icon2/budget_16841758.png';
import diagramIcon from '../../../assets/icon2/diagram.png';
import digitalSignatureIcon from '../../../assets/icon2/digital-signature.png';
import gridIcon from '../../../assets/icon2/grid.png';
import strategyIcon from '../../../assets/icon2/strategy.png';
import timeManagementIcon from '../../../assets/icon2/time-management.png';
import approveIcon from '../../../assets/icons/approve.png';
import budgetingIcon from '../../../assets/icons/budgeting.png';
import cameraIcon from '../../../assets/icons/camera.png';
import diamondRingIcon from '../../../assets/icons/diamond-ring.png';
import interiorDesignIcon from '../../../assets/icons/interior-design.png';
import itSecurityIcon from '../../../assets/icons/it-security.png';
import lcdDisplayIcon from '../../../assets/icons/lcd-display.png';
import musicIcon from '../../../assets/icons/music.png';
import newsReporterIcon from '../../../assets/icons/news-reporter.png';
import printerIcon from '../../../assets/icons/printer.png';
import { accordionSections, inHouseCapabilities } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const capabilityIcons = [
  interiorDesignIcon, lcdDisplayIcon, cameraIcon, printerIcon, musicIcon,
  diamondRingIcon, newsReporterIcon, itSecurityIcon, approveIcon, budgetingIcon,
];

const preEventIcons = [
  agreementIcon, budgetPlanIcon, timeManagementIcon, strategyIcon,
  digitalSignatureIcon, blueprintIcon, gridIcon, diagramIcon,
];

const onsiteEventIcons = [approveIcon, itSecurityIcon, cameraIcon, newsReporterIcon, musicIcon];

const ServicesSection: React.FC = () => {
  const [openSection, setOpenSection] = useState<'pre' | 'onsite' | null>('pre');

  const toggleSection = (section: 'pre' | 'onsite') => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <RevealSection id="services" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
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
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/60 to-transparent" />

          <div className="relative z-10 p-7 sm:p-10 lg:p-14">

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#88ab32]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#88ab32]">
                  What We Offer
                </span>
                <span className="h-px w-8 bg-[#88ab32]" />
              </div>
              <SectionHeading centered title="Our Services" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">

              {/* ── Left: In-House Capabilities ── */}
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-md">
                {/* Inner top glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/40 to-transparent" />
                <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-[#88ab32]/8 blur-2xl" />

                <div className="relative flex items-center gap-3 mb-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#88ab32]" />
                  <h3 className="normal-case text-lg font-semibold tracking-normal text-[#f0f0f0]">
                    In-House Capabilities
                  </h3>
                </div>

                <ul className="space-y-1">
                  {inHouseCapabilities.map((item, index) => (
                    <li
                      key={item}
                      className="group flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-[#88ab32]/[0.07]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#88ab32]/20 bg-[#88ab32]/10 transition-all duration-200 group-hover:border-[#88ab32]/40 group-hover:bg-[#88ab32]/20">
                        <img
                          src={capabilityIcons[index % capabilityIcons.length]}
                          alt=""
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-white/60 transition-colors duration-200 group-hover:text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Right: Accordion ── */}
              <div className="space-y-3">
                {(Object.keys(accordionSections) as Array<'pre' | 'onsite'>).map((key) => {
                  const section = accordionSections[key];
                  const isOpen = openSection === key;
                  const icons = key === 'pre' ? preEventIcons : onsiteEventIcons;

                  return (
                    <article
                      key={key}
                      className={[
                        'relative overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300',
                        isOpen
                          ? 'border-[#88ab32]/35 bg-[#88ab32]/[0.06] shadow-[0_8px_32px_rgba(136,171,50,0.1)]'
                          : 'border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]',
                      ].join(' ')}
                    >
                      {/* Top accent when open */}
                      {isOpen && (
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/60 to-transparent" />
                      )}

                      <button
                        type="button"
                        onClick={() => toggleSection(key)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className={[
                            'flex h-1.5 w-1.5 rounded-full transition-colors duration-300',
                            isOpen ? 'bg-[#a4c34f]' : 'bg-white/25',
                          ].join(' ')} />
                          <span className="normal-case text-[0.95rem] font-semibold tracking-normal text-[#f0f0f0]">
                            {section.title}
                          </span>
                        </div>
                        <span className={[
                          'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-300',
                          isOpen
                            ? 'border-[#88ab32]/40 bg-[#88ab32]/20 text-[#a4c34f]'
                            : 'border-white/10 bg-white/5 text-white/40',
                        ].join(' ')}>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </span>
                      </button>

                      <div className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}>
                        <div className="overflow-hidden">
                          <div className="border-t border-white/8 mx-6" />
                          <ul className="space-y-1 px-6 py-4">
                            {section.items.map((item, index) => (
                              <li
                                key={item}
                                className="group flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-[#88ab32]/[0.07]"
                              >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#88ab32]/20 bg-[#88ab32]/10 transition-all duration-200 group-hover:border-[#88ab32]/40 group-hover:bg-[#88ab32]/20">
                                  <img
                                    src={icons[index % icons.length]}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5"
                                  />
                                </span>
                                <span className="text-sm text-white/60 transition-colors duration-200 group-hover:text-white/80">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default ServicesSection;