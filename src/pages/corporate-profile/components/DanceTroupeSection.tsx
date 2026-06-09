import React, { useEffect, useRef, useState } from "react";
import runssianDance from "../../../assets/russianDance.jpeg";
import oorjaDance from "../../../assets/oorjaDance.png";

const troupeData = [
  {
    id: 1,
    title: "Aasma Dance",
    image:
      "https://i.pinimg.com/736x/c4/d3/df/c4d3df6c5c75713dfb1f733340ae0cc6.jpg",
    url: "https://drive.google.com/drive/folders/1O-hm0LPccS5cKtgAIjjuU1XLToCAPZOk?usp=drive_link",
  },
  {
    id: 2,
    title: "Dance Smith",
    image:
      "https://fitness-family.ru/wp-content/uploads/2025/07/dance-mix-min-1-1024x1024.png",
    url: "https://drive.google.com/drive/folders/1HTDlFW7CGc3TkwyuqO2yOKfqFbN1Lj5r?usp=drive_link",
  },
  {
    id: 3,
    title: "Expression Dance Troupe",
    image:
      "https://www.nolsom.com/wp-content/uploads/elementor/thumbs/031-SEGIB-artes-escenicas-audiovisual-Nolsom-8-r5i5ejzerd20s117ymjrbmuef0jswzx6v6ri7up6io.jpg",
    url: "https://drive.google.com/drive/folders/1iCsWPGqFk3BKU-bL2xiioIb9Zh0WiPaa?usp=drive_link",
  },
  {
    id: 4,
    title: "Monu Dance Troupe",
    image:
      "https://www.theaterhaus.com/media/filer_public_thumbnails/filer_public/15/b0/15b0537f-d34c-4fef-9c4c-07b6dfa45df9/amala-dianor_dub_pierre-gondard-2_6.jpg__732x732_q85_crop_subject_location-1500%2C829_subsampling-2_upscale.jpg",
    url: "https://drive.google.com/drive/folders/1qc976kG0dXE-CxmvjqiPfWTZW63MUwPq?usp=drive_link",
  },
  {
    id: 5,
    title: "Oorja Dance Troupe",
    image: oorjaDance,
    url: "https://drive.google.com/drive/folders/1boGXgQ-zSpW3qrnd2tvDpR82kuprp1d6?usp=drive_link",
  },
  {
    id: 6,
    title: "Russian Artists",
    image: runssianDance,
    url: "https://drive.google.com/drive/folders/19BGhMdhCXRaT2IjlbgLBtfdigX6yuRpG",
  },
];

const DanceTroupeSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] overflow-hidden py-20 lg:py-24"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-3/5 bg-[radial-gradient(circle_at_top_right,rgba(136,171,50,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-3/5 bg-[radial-gradient(circle_at_bottom_left,rgba(136,171,50,0.05)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10">

        {/* ── Header ── */}
        <div
          className={`mb-14 text-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#88ab32]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#88ab32]">
              Performance
            </span>
            <span className="h-px w-8 bg-[#88ab32]" />
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light text-[#f0f0f0] leading-[1.15] tracking-[-0.02em]">
            Dance <span className="font-semibold text-white">Troupe</span>
          </h2>
          <p className="mt-3 text-[13px] text-white/35 tracking-wide">
            Handpicked ensembles for every stage and occasion
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {troupeData.map((troupe, i) => (
            <a
              key={troupe.id}
              href={troupe.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black
                shadow-[0_4px_24px_rgba(0,0,0,0.5)]
                transition-all duration-500 ease-out
                hover:border-[#88ab32]/40
                hover:shadow-[0_20px_60px_rgba(136,171,50,0.13)]
                hover:-translate-y-1
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${0.07 * Math.min(i, 5)}s` }}
            >
              {/* Top accent line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#88ab32]/0 to-transparent transition-all duration-500 group-hover:via-[#88ab32]/50" />

              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "240px" }}>
                <img
                  src={troupe.image}
                  alt={troupe.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
                {/* Dark vignette over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Index badge — top left */}
                <div className="absolute top-3 left-3 z-10 flex h-6 items-center rounded-md border border-[#88ab32]/25 bg-black/60 px-2 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#88ab32]/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Hover CTA — bottom right of image */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-[#88ab32]/0 bg-black/0 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 group-hover:border-[#88ab32]/40 group-hover:bg-black/50">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/0 transition-all duration-300 group-hover:text-white/90">
                    View
                  </span>
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    <path
                      d="M2 6H10M6.5 2.5L10 6L6.5 9.5"
                      stroke="#88ab32"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Title strip */}
              <div className="relative overflow-hidden px-4 py-3.5">
                {/* Blurred image behind title */}
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <img
                    src={troupe.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: "blur(14px)", transform: "scale(1.3)" }}
                  />
                  <div className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/45" />
                </div>

                {/* Top separator */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/20 to-transparent" />

                <div className="relative flex items-center justify-between gap-2">
                  <p className="text-[13.5px] font-semibold leading-tight tracking-[0.01em] text-white/90 transition-colors duration-300 group-hover:text-white">
                    {troupe.title}
                  </p>
                  {/* Arrow icon */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#88ab32]/20 bg-[#88ab32]/8 transition-all duration-300 group-hover:border-[#88ab32]/55 group-hover:bg-[#88ab32]/18">
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6H10M6.5 2.5L10 6L6.5 9.5"
                        stroke="#88ab32"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DanceTroupeSection;