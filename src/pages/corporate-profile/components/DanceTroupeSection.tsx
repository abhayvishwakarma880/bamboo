import React, { useEffect, useRef, useState } from 'react';
import runssianDance from '../../../assets/russianDance.jpeg'

const troupeData = [
  { id: 1, title: 'Aasma Dance', image: 'https://i.pinimg.com/736x/c4/d3/df/c4d3df6c5c75713dfb1f733340ae0cc6.jpg', url: 'https://drive.google.com/drive/folders/1O-hm0LPccS5cKtgAIjjuU1XLToCAPZOk?usp=drive_link' },
  { id: 2, title: 'Dance Smith', image: 'https://fitness-family.ru/wp-content/uploads/2025/07/dance-mix-min-1-1024x1024.png', url: 'https://drive.google.com/drive/folders/1HTDlFW7CGc3TkwyuqO2yOKfqFbN1Lj5r?usp=drive_link' },
  { id: 3, title: 'Expression Dance Troupe', image: 'https://www.nolsom.com/wp-content/uploads/elementor/thumbs/031-SEGIB-artes-escenicas-audiovisual-Nolsom-8-r5i5ejzerd20s117ymjrbmuef0jswzx6v6ri7up6io.jpg', url: 'https://drive.google.com/drive/folders/1iCsWPGqFk3BKU-bL2xiioIb9Zh0WiPaa?usp=drive_link' },
  { id: 4, title: 'Monu Dance Troupe', image: 'https://www.theaterhaus.com/media/filer_public_thumbnails/filer_public/15/b0/15b0537f-d34c-4fef-9c4c-07b6dfa45df9/amala-dianor_dub_pierre-gondard-2_6.jpg__732x732_q85_crop_subject_location-1500%2C829_subsampling-2_upscale.jpg', url: 'https://drive.google.com/drive/folders/1qc976kG0dXE-CxmvjqiPfWTZW63MUwPq?usp=drive_link' },
  { id: 5, title: 'Oorja Dance Troupe', image: 'https://yt3.googleusercontent.com/ytc/AIdro_nmdYnyT4w5i6aSZSf--J8uUSH0VjZIVIdHqHUxGucT2xc=s900-c-k-c0x00ffffff-no-rj', url: 'https://drive.google.com/drive/folders/1boGXgQ-zSpW3qrnd2tvDpR82kuprp1d6?usp=drive_link' },
  { id: 6, title: 'Russian Artists', image: runssianDance, url: 'https://drive.google.com/drive/folders/19BGhMdhCXRaT2IjlbgLBtfdigX6yuRpG' },
];

const DanceTroupeSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden py-20 lg:py-24">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/2 h-3/5 bg-[radial-gradient(circle_at_top_right,rgba(136,171,50,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-3/5 bg-[radial-gradient(circle_at_bottom_left,rgba(136,171,50,0.05)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className={`mb-14 text-center transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#88ab32]" />
            <span className="text-[11px] tracking-[0.2em] text-[#88ab32] uppercase font-medium">Performance</span>
            <div className="w-8 h-px bg-[#88ab32]" />
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-light text-[#f5f5f5] leading-[1.15] tracking-[-0.02em]">
            Dance <span className="font-semibold">Troupe</span>
          </h2>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-5 transition-all duration-700 delay-200 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {troupeData.map((troupe, i) => (
            <a
              key={troupe.id}
              href={troupe.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)] group transition-all duration-500 hover:border-[#88ab32]/35 hover:shadow-[0_20px_60px_rgba(136,171,50,0.12)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${0.07 * Math.min(i, 5)}s` }}
            >
              {/* Full image — covers entire card including title area */}
              <img
                src={troupe.image}
                alt={troupe.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />

              {/* Spacer for image area */}
              <div style={{ height: '240px' }} />

              {/* Title area — blurred image behind, semi-transparent overlay */}
              <div className="relative px-4 py-3">
                {/* Blurred bg layer */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <img
                    src={troupe.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                    style={{ filter: 'blur(12px)', transform: 'scale(1.2)' }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <p className="relative text-[14px] font-semibold text-white leading-tight tracking-[0.01em] text-center">
                  {troupe.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceTroupeSection;
