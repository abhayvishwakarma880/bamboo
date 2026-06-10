import React, { useEffect, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Camera,
  Hammer,
  Megaphone,
  MonitorPlay,
  Printer,
  ShieldCheck,
  Star,
  Theater,
  Trophy,
  Volume2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import whatWeDoBackground from '../../../assets/events/about.webp';
import RevealSection from '../../corporate-profile/components/RevealSection';
import SectionHeading from '../../corporate-profile/components/SectionHeading';

interface ServiceImage {
  id: number;
  url: string;
  caption: string | null;
}

interface Service {
  id: number;
  serviceName: string;
  description: string;
  images?: ServiceImage[];
}

interface WhatWeDoSectionProps {
  portfolioId: number;
}

const serviceIcons: LucideIcon[] = [
  Theater,
  Hammer,
  Volume2,
  MonitorPlay,
  Camera,
  Printer,
  Trophy,
  Star,
  ShieldCheck,
  Megaphone,
];

const ACCESS_REQUEST_BASE =
  import.meta.env.VITE_ACCESS_REQUEST_API_BASE?.trim() ||
  import.meta.env.VITE_BACKEND_URL?.trim() ||
  'https://winterly-reverable-romona.ngrok-free.dev/api/accessrequest';

const STATIC_SERVICES: Service[] = [
  {
    id: 1,
    serviceName: 'Wedding Hospitality',
    description: 'Warm and seamless hospitality services to welcome and take care of all your guests.',
  },
  {
    id: 2,
    serviceName: 'Wedding Ceremony',
    description: 'Beautifully orchestrated wedding ceremony matching your traditions and style.',
  },
  {
    id: 3,
    serviceName: 'Barat Assembly and Vidai',
    description: 'Energetic barat management followed by a touching and grand vidai ceremony.',
  },
  {
    id: 4,
    serviceName: 'Sangeet Ceremony',
    description: 'A spectacular evening of dance, music, and celebration with your family and friends.',
  },
  {
    id: 5,
    serviceName: 'Haldi and Mehandi Ceremony',
    description: 'Vibrant and joyful haldi and mehandi celebrations filled with colors and music.',
  },
];

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ portfolioId }) => {
  const [services, setServices] = useState<Service[]>(STATIC_SERVICES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API fetch is commented out as we are using static services data
    /*
    fetch(`${ACCESS_REQUEST_BASE}/portfolio/${portfolioId}`)
      .then((res) => res.json())
      .then((json) => {
        setServices(json?.data?.services ?? []);
      })
      .catch((err) => console.error('Failed to fetch services:', err))
      .finally(() => setLoading(false));
    */
    setLoading(false);
  }, [portfolioId]);

  const getCardClass = (index: number, total: number) => {
    if (total % 4 !== 0) {
      const lastRowStart = total - (total % 4);
      const remainder = total % 4;
      if (index === lastRowStart && remainder === 1) return 'xl:col-start-2 xl:col-span-2 mx-auto w-1/2'; // Just simple fallback or match corporate
      if (index === lastRowStart && remainder === 2) return 'xl:col-start-2';
      if (index === lastRowStart + 1 && remainder === 2) return 'xl:col-start-3';
    }
    return '';
  };

  const getSlug = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return (
    <RevealSection id="what-we-do" className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_40px_140px_rgba(0,0,0,0.6)]">

          {/* Background image */}
          <img
            src={whatWeDoBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/92" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(136,171,50,0.16),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.04),transparent_35%)]" />

          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/60 to-transparent" />

          <div className="relative z-10 p-7 sm:p-10 lg:p-14">

            {/* Section header */}
            <div className="flex flex-col items-center text-center mb-2">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#88ab32]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#88ab32]">
                  Our Services
                </span>
                <span className="h-px w-8 bg-[#88ab32]" />
              </div>
              <SectionHeading centered title="What We Do" />
            </div>

            {/* Loading skeleton */}
            {loading ? (
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 animate-pulse">
                    <div className="h-11 w-11 rounded-xl bg-white/10" />
                    <div className="mt-5 h-4 w-3/4 rounded-lg bg-white/10" />
                    <div className="mt-3 space-y-2">
                      <div className="h-3 w-full rounded bg-white/8" />
                      <div className="h-3 w-5/6 rounded bg-white/8" />
                      <div className="h-3 w-4/6 rounded bg-white/8" />
                    </div>
                  </div>
                ))}
              </div>
            ) : services.length === 0 ? (
              <p className="mt-12 text-center text-white/40 text-sm tracking-wide">
                No services available.
              </p>
            ) : (
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {services.map((service, index) => {
                  const slug = getSlug(service.serviceName);
                  const ServiceIcon = serviceIcons[index % serviceIcons.length];

                  return (
                    <Link
                      to={`/social-service/${slug}`}
                      key={service.id}
                      className={`
                        group block relative overflow-hidden rounded-2xl
                        border border-white/8 bg-white/[0.03]
                        p-6 backdrop-blur-md
                        transition-all duration-300 ease-out
                        hover:-translate-y-1.5
                        hover:border-[#88ab32]/60
                        hover:bg-[#88ab32]/[0.06]
                        hover:shadow-[0_20px_50px_rgba(136,171,50,0.15),inset_0_1px_0_rgba(136,171,50,0.15)]
                        cursor-pointer
                        ${getCardClass(index, services.length)}
                      `}
                    >
                      {/* Hover glow spot */}
                      <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[#88ab32]/0 blur-2xl transition-all duration-300 group-hover:bg-[#88ab32]/20" />

                      {/* Icon */}
                      <div className="relative h-11 w-11 rounded-xl border border-[#88ab32]/20 bg-[#88ab32]/10 flex items-center justify-center text-[#a4c34f] transition-all duration-300 group-hover:border-[#88ab32]/40 group-hover:bg-[#88ab32]/20 group-hover:scale-110">
                        <ServiceIcon size={20} strokeWidth={2} aria-hidden="true" />
                      </div>

                      {/* Content */}
                      <h3 className="mt-5 normal-case text-[0.95rem] font-semibold leading-snug tracking-normal text-[#f0f0f0] transition-colors duration-300 group-hover:text-white">
                        {service.serviceName}
                      </h3>
                      <p className="mt-2.5 text-xs leading-[1.75] text-white/50 transition-colors duration-300 group-hover:text-white/65">
                        {service.description}
                      </p>

                      {/* Bottom arrow indicator */}
                      <div className="mt-5 flex items-center gap-1.5 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#88ab32]">
                          Explore
                        </span>
                        <svg
                          className="h-3 w-3 text-[#88ab32]"
                          fill="none" viewBox="0 0 12 12"
                          stroke="currentColor" strokeWidth={2.2}
                        >
                          <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* Bottom border glow on hover */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/0 to-transparent transition-all duration-300 group-hover:via-[#88ab32]/50" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default WhatWeDoSection;
