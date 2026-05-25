import React from 'react';
import AboutSection from './corporate-profile/components/AboutSection';
import ClienteleSection from './corporate-profile/components/ClienteleSection';
import HeroSection from './corporate-profile/components/HeroSection';
import HowWeDoSection from './corporate-profile/components/HowWeDoSection';
import ServicesSection from './corporate-profile/components/ServicesSection';
import WhatWeDoSection from './corporate-profile/components/WhatWeDoSection';
import WorksSection from './corporate-profile/components/WorksSection';
// import BandSection from './corporate-profile/components/BandSection';
import PerformanceCategoriesSection from './corporate-profile/components/PerformanceCategoriesSection';
import DanceTroupeSection from './corporate-profile/components/DanceTroupeSection';

const CorporateProfile: React.FC = () => {
  return (
    <main className="relative z-10 overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <HowWeDoSection />
      <ServicesSection />
      <PerformanceCategoriesSection />
      <DanceTroupeSection />
      <ClienteleSection />
      <WorksSection />
      {/* <BandSection /> */}
    </main>
  );
};

export default CorporateProfile;
