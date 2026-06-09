import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import HeroSection from './social-profile/components/HeroSection';
import AboutSection from './social-profile/components/AboutSection';
import WhatWeDoSection from './social-profile/components/WhatWeDoSection';
import HowWeDoSection from './social-profile/components/HowWeDoSection';
import ServicesSection from './social-profile/components/ServicesSection';
import { resolvePortfolioId } from '../lib/eventRoute';
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
import PerformanceCategoriesSection from './corporate-profile/components/PerformanceCategoriesSection';
import DanceTroupeSection from './corporate-profile/components/DanceTroupeSection';
import ClienteleSection from './corporate-profile/components/ClienteleSection';
import WorksSection from './corporate-profile/components/WorksSection';

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
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const resolvedPortfolioId = resolvePortfolioId(portfolioId) ?? 30;

  return (
    <main className="relative z-10 overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection portfolioId={resolvedPortfolioId} />
      <HowWeDoSection />
      {/* <ServicesSection /> */}
      <PerformanceCategoriesSection />
      <DanceTroupeSection />
      {/* <ClienteleSection /> */}
      <WorksSection />
    </main>
  );
};

export default SocialProfile;
