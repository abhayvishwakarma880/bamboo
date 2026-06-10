import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../../assets/logo.png';
import aboutImage from '../../../assets/events/corporate.png';
import corporateImage from '../../../assets/events/corporate.webp';

const heroPanels = [
  {
    id: 'planning',
    label: 'Concept & Planning',
    detail: 'Venue | Flow | Experience',
    image: corporateImage,
  },
  {
    id: 'delivery',
    label: 'Production & Delivery',
    detail: 'AV | Fabrication | Execution',
    image: aboutImage,
  },
] as const;



const HeroSection: React.FC = () => {
  const [activePanel, setActivePanel] = useState(0);
  const [prevPanel, setPrevPanel] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPrevPanel(activePanel);
      setActivePanel((current) => (current + 1) % heroPanels.length);
    }, 3800);
    return () => window.clearInterval(timer);
  }, [activePanel]);

  return (
    <section className="relative isolate h-screen w-full overflow-hidden bg-black">

      {/* ── Background panels with crossfade ── */}
      <div className="absolute inset-0">
        {heroPanels.map((panel, index) => (
          <motion.div
            key={panel.id}
            className="absolute inset-0"
            animate={{
              opacity: index === activePanel ? 1 : 0,
              scale: index === activePanel ? 1.07 : 1.02,
            }}
            transition={{
              opacity: { duration: 1.1, ease: 'easeInOut' },
              scale: { duration: 7, ease: 'easeOut' },
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${panel.image}')` }}
            />
          </motion.div>
        ))}

        {/* Layered overlays always on top */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(136,171,50,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      {/* ── Fine noise texture ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      {/* ── Subtle grid ── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(136,171,50,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(136,171,50,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ── Decorative rings ── */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {/* Outer slow ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
        />
        {/* Mid green ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#88ab32]/15"
        />
        {/* Inner static ring */}
        <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        {/* Rotating dashed accent */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#88ab32]/10"
        />
        {/* Center ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88ab32]/8 blur-[80px]" />
      </div>

      {/* ── Left floating card ── */}
      <div className="absolute left-0 top-[18%] z-30 hidden md:block pl-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
            x: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="relative w-56 overflow-hidden rounded-[22px] border border-white/12 bg-black/40 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/55 to-transparent" />

          <div className="relative overflow-hidden">
            <img
              src={heroPanels[0].image}
              alt={heroPanels[0].label}
              className="h-28 w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* Live badge */}
            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 rounded-full border border-[#88ab32]/30 bg-black/50 px-2.5 py-1 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#88ab32] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#88ab32]" />
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#a4c34f]">Live</span>
            </div>
          </div>

          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#a4c34f]">
              {heroPanels[0].label}
            </p>
            <div className="mt-1.5 h-px w-full bg-gradient-to-r from-[#88ab32]/30 to-transparent" />
            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/38">
              {heroPanels[0].detail}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Right floating card ── */}
      <div className="absolute right-0 bottom-[20%] z-30 hidden md:block pr-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, 12, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
            x: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
            y: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="relative w-56 overflow-hidden rounded-[22px] border border-white/12 bg-black/40 backdrop-blur-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/55 to-transparent" />

          <div className="relative overflow-hidden">
            <img
              src={heroPanels[1].image}
              alt={heroPanels[1].label}
              className="h-28 w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 rounded-full border border-[#88ab32]/30 bg-black/50 px-2.5 py-1 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#88ab32] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#88ab32]" />
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#a4c34f]">Live</span>
            </div>
          </div>

          <div className="p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#a4c34f]">
              {heroPanels[1].label}
            </p>
            <div className="mt-1.5 h-px w-full bg-gradient-to-r from-[#88ab32]/30 to-transparent" />
            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/38">
              {heroPanels[1].detail}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Center badge ── */}
      <div className="absolute left-1/2 top-1/2 z-40 w-[calc(100%-2rem)] max-w-[17rem] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] border border-white/12 bg-black/38 p-6 text-center backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.09)]"
        >
          {/* Top glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88ab32]/60 to-transparent" />
          <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#88ab32]/12 blur-2xl" />

          {/* Label */}
          <p className="relative text-[9px] font-bold uppercase tracking-[0.38em] text-[#a4c34f]">
            Corporate Profile
          </p>

          {/* Divider with center dot */}
          <div className="relative mt-4 flex items-center justify-center gap-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
            <span className="h-1 w-1 rounded-full bg-[#88ab32]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
          </div>

          {/* Animated panel label */}
          <div className="relative mt-3 h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={activePanel}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/50"
              >
                {heroPanels[activePanel].label}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Panel progress indicators */}
          <div className="relative mt-4 flex items-center justify-center gap-1.5">
            {heroPanels.map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  width: i === activePanel ? '1.5rem' : '0.375rem',
                  backgroundColor: i === activePanel ? '#88ab32' : 'rgba(255,255,255,0.18)',
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="block h-[3px] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 group"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.32em] text-white/30 transition-colors duration-300 group-hover:text-[#a4c34f]">
          Scroll
        </span>
        {/* Mouse scroll widget */}
        <div className="relative flex h-9 w-5 items-start justify-center rounded-full border border-white/15 pt-2 transition-colors duration-300 group-hover:border-[#88ab32]/40">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-[3px] rounded-full bg-[#88ab32]"
          />
          {/* Side arrows */}
          <div className="absolute -bottom-4 flex flex-col items-center gap-[2px]">
            <motion.div
              animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 2, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              <ChevronDown className="h-2.5 w-2.5 text-white/30" />
            </motion.div>
          </div>
        </div>
      </motion.a>

    </section>
  );
};

export default HeroSection;
