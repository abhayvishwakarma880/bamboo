import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  CalendarCheck,
  Camera,
  CirclePlay,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Music,
  Youtube,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@bamboogroves.events',
    url: 'https://instagram.com',
    icon: Instagram,
    gradient: 'from-pink-500/25 via-rose-500/15 to-amber-500/10',
  },
  {
    name: 'YouTube',
    handle: 'Bamboo Groves',
    url: 'https://youtube.com',
    icon: Youtube,
    gradient: 'from-red-500/20 via-red-500/10 to-orange-500/10',
  },
  {
    name: 'LinkedIn',
    handle: 'Bamboo Groves Pvt. Ltd.',
    url: 'https://linkedin.com',
    icon: Linkedin,
    gradient: 'from-sky-500/20 via-blue-500/10 to-cyan-500/10',
  },
  {
    name: 'Email',
    handle: 'hello@bamboogroves.com',
    url: 'mailto:hello@bamboogroves.com',
    icon: Mail,
    gradient: 'from-lime-500/20 via-emerald-500/10 to-green-500/10',
  },
];

const highlights = [
  {
    title: 'Behind The Build',
    type: 'Reel Series',
    icon: CirclePlay,
    summary: 'Short cinematic clips capturing venue transformations and stage energy.',
  },
  {
    title: 'Client Loveboard',
    type: 'Story Highlights',
    icon: Heart,
    summary: 'A rolling wall of heartfelt feedback from brands and social celebrations.',
  },
  {
    title: 'Mood Curation',
    type: 'Playlist Drops',
    icon: Music,
    summary: 'Curated playlists and sonic palettes tailored to every event narrative.',
  },
];

const quickStats = [
  { label: 'Projects Shared', value: '220+' },
  { label: 'Monthly Reach', value: '480K' },
  { label: 'Community Growth', value: '38%' },
  { label: 'Avg. Engagement', value: '9.2%' },
];

const SocialProfile: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background pt-32 pb-16 sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-6 left-[-5%] h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/3 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="section-label">Social Profile</span>
              <h1 className="heading text-left text-3xl sm:text-4xl lg:text-5xl">Bamboo Groves Online</h1>
              <p className="mt-4 max-w-2xl text-body text-sm text-white/75 sm:text-base">
                Follow our creative process, event showcases, and real-time stories. This is where strategy,
                aesthetics, and production moments come together in one living feed.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-button"
                >
                  Explore Instagram
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 heading text-xs font-semibold text-white/90 transition hover:border-accent hover:text-accent"
                >
                  Watch Reels
                  <CirclePlay size={14} />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="heading text-[11px] tracking-[0.22em] text-accent">Profile Snapshot</p>
                  <h2 className="mt-1 text-left text-xl sm:text-2xl">@bamboogroves.events</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <Camera size={20} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <p className="heading text-[10px] tracking-[0.18em] text-white/55">{stat.label}</p>
                    <p className="mt-1 heading text-lg text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br p-5 ${link.gradient} transition hover:-translate-y-1 hover:border-accent/60`}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/25 text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-left text-base">{link.name}</h3>
                  <p className="mt-1 text-body text-sm text-white/75">{link.handle}</p>
                  <span className="mt-4 inline-flex items-center gap-2 heading text-[11px] tracking-[0.18em] text-accent">
                    Visit
                    <ArrowUpRight size={13} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/2 p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="section-label mb-1">Highlights</span>
              <h2 className="text-left text-2xl sm:text-3xl">What We Share</h2>
            </div>
            <a
              href="/book-event"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 heading text-xs text-accent transition hover:border-accent hover:bg-accent/10"
            >
              <CalendarCheck size={14} />
              Book An Event
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-black/25 p-5"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                    <Icon size={16} />
                  </div>
                  <p className="heading text-[11px] tracking-[0.2em] text-white/60">{item.type}</p>
                  <h3 className="mt-2 text-left text-lg">{item.title}</h3>
                  <p className="mt-2 text-body text-sm text-white/72">{item.summary}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default SocialProfile;
