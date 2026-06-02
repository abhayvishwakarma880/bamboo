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
    if (total % 5 !== 0) {
      const lastRowStart = total - (total % 5);
      const remainder = total % 5;
      if (index === lastRowStart && remainder === 1) return 'xl:col-start-3';
      if (index === lastRowStart && remainder === 2) return 'xl:col-start-2';
      if (index === lastRowStart + 1 && remainder === 2) return 'xl:col-start-3';
      if (index === lastRowStart && remainder === 3) return 'xl:col-start-2';
      if (index === lastRowStart + 1 && remainder === 3) return 'xl:col-start-3';
      if (index === lastRowStart + 2 && remainder === 3) return 'xl:col-start-4';
      if (index === lastRowStart && remainder === 4) return 'xl:col-start-2';
      if (index === lastRowStart + 1 && remainder === 4) return 'xl:col-start-3';
      if (index === lastRowStart + 2 && remainder === 4) return 'xl:col-start-4';
      if (index === lastRowStart + 3 && remainder === 4) return 'xl:col-start-5';
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
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <img
            src={whatWeDoBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/70 to-black/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <SectionHeading centered title="What We Do" />

            {loading ? (
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-[#10140c]/72 p-5 animate-pulse"
                  >
                    <div className="h-10 w-10 rounded-md bg-white/10" />
                    <div className="mt-4 h-4 w-3/4 rounded bg-white/10" />
                    <div className="mt-3 h-3 w-full rounded bg-white/10" />
                    <div className="mt-2 h-3 w-5/6 rounded bg-white/10" />
                  </div>
                ))}
              </div>
            ) : services.length === 0 ? (
              <p className="mt-12 text-center text-white/50">No services available.</p>
            ) : (
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
                {services.map((service, index) => {
                  const slug = getSlug(service.serviceName);
                  const ServiceIcon = serviceIcons[index % serviceIcons.length];

                  return (
                    <Link
                      to={`/social-service/${slug}`}
                      key={service.id}
                      className={`block rounded-2xl border border-white/10 bg-[#10140c]/72 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#88ab32] hover:shadow-[0_16px_40px_rgba(136,171,50,0.18)] cursor-pointer ${getCardClass(index, services.length)}`}
                    >
                      <div className="h-10 w-10 rounded-md bg-[#88ab32]/20 flex items-center justify-center text-[#a4c34f]">
                        <ServiceIcon size={20} strokeWidth={2.2} aria-hidden="true" />
                      </div>

                      <h3 className="mt-4 normal-case text-lg tracking-normal text-[#f5f5f5]">
                        {service.serviceName}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-justify text-white/65">
                        {service.description}
                      </p>
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
