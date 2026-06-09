import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resolveBackendMediaUrl } from "../../../lib/mediaUrl";
import RevealSection from "./RevealSection";
import SectionHeading from "./SectionHeading";

interface ClienteLogo {
  id: number;
  url: string;
  caption: string;
}

const ACCESS_REQUEST_BASE =
  import.meta.env.VITE_ACCESS_REQUEST_API_BASE?.trim() ||
  import.meta.env.VITE_BACKEND_URL?.trim() ||
  "https://winterly-reverable-romona.ngrok-free.dev/api/accessrequest";

const ClienteleSection: React.FC = () => {
  const [clientLogos, setClientLogos] = useState<ClienteLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${ACCESS_REQUEST_BASE}/portfolio/27`)
      .then((res) => res.json())
      .then((json) => {
        setClientLogos(json?.data?.clientele ?? []);
      })
      .catch((err) => console.error("Failed to fetch clientele:", err))
      .finally(() => setLoading(false));
  }, []);

  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <RevealSection
      id="clients"
      className="relative bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-28 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#3a6b2a]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <SectionHeading centered title="Our Esteemed Clients" />
            <p className="text-sm text-white/35 tracking-wide">
              Brands that trust our craft
            </p>
          </div>

          <Link
            to="/all-clients"
            className="group relative whitespace-nowrap overflow-hidden rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white hover:border-white/30 hover:bg-white/10 sm:px-8 sm:py-3 sm:text-base"
          >
            {/* Button shine sweep */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent"
            />
            <span className="relative flex items-center gap-2">
              View All
              <svg
                className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Marquee area */}
        <div className="mt-10">
          {loading ? (
            /* Skeleton */
            <div className="relative rounded-2xl border border-white/8 bg-[#0d1209]/80 p-4 backdrop-blur-sm">
              <div className="flex gap-4 overflow-hidden">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex min-w-[190px] sm:min-w-[220px] h-[96px] sm:h-[112px] shrink-0 rounded-xl bg-white/5 animate-pulse border border-white/5"
                  />
                ))}
              </div>
            </div>
          ) : clientLogos.length === 0 ? (
            <div className="mt-12 flex flex-col items-center gap-3 text-white/30">
              <svg className="w-10 h-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5M3.75 14.25h16.5" />
              </svg>
              <p className="text-sm tracking-wide">No clients available.</p>
            </div>
          ) : (
            /* Marquee track with gradient fade edges */
            <div className="relative">
              {/* Left fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-[#0b0f08] to-transparent"
              />
              {/* Right fade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-[#0b0f08] to-transparent"
              />

              <div className="marquee overflow-hidden rounded-2xl border border-white/8 bg-[#0d1209]/80 p-4 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="marquee-track flex w-max items-center gap-4">
                  {marqueeItems.map((logo, index) => {
                    const imageSrc = resolveBackendMediaUrl(logo.url);
                    return (
                      <div
                        key={`client-logo-${logo.id}-${index}`}
                        className="group relative flex min-w-[175px] sm:min-w-[210px] items-center justify-center rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 border border-white/90 hover:border-white"
                      >
                        {/* Logo glow on hover */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/10 to-transparent"
                        />
                        <img
                          src={imageSrc}
                          onError={() => console.log("Image not loading:", imageSrc)}
                          alt={
                            logo.caption ||
                            `Client logo ${(index % clientLogos.length) + 1}`
                          }
                          loading="lazy"
                          className="relative h-14 w-full object-contain sm:h-[72px] transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>
    </RevealSection>
  );
};

export default ClienteleSection;