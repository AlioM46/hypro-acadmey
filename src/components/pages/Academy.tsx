import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../../hooks/useTranslation';

import Stats from '../home/Stats';
import MarketUrgency from '../home/MarketUrgency';
import FeatureRows from '../home/FeatureRows';
import LearnSection from '../home/LearnSection';
import CareerPathways from '../home/CareerPathways';
import AlumniTrust from '../home/AlumniTrust';
import B2BAlliance from '../home/B2BAlliance';
import VocationalHighlights from '../home/VocationalHighlights';
import QuickRegister from '../home/QuickRegister';

type PageType = 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team' | 'careers' | 'b2b' | 'gallery' | 'news' | 'volunteers' | 'legal' | 'academy';

interface AcademyProps {
  navigateTo: (page: PageType) => void;
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo') => void;
}

export default function Academy({ navigateTo, setActiveCategory }: AcademyProps) {
  const { t, lang } = useTranslation();

  return (
    <motion.div
      key="academy"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
    >
      {/* Academy Hero Header */}
      <section className="relative py-20 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'VOCATIONAL ACADEMY PORTAL' : 'البوابة التعليمية لأكاديمية هايبـرو'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white font-sans">
            {t('ecoAcademyTitle')}
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-3xl mt-4 font-medium font-sans">
            {t('ecoAcademyDesc')}
          </p>
        </div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* CORE STATISTICS TICKER PANEL */}
      <Stats />

      {/* MARKET URGENCY COMPONENT (Why This Field Matters) */}
      <MarketUrgency />

      {/* ALTERNATING IMAGE & TEXT FEATURES */}
      <FeatureRows />

      {/* WHAT YOU WILL LEARN SECTION */}
      <LearnSection />

      {/* CAREER PATHWAYS SECTION */}
      <CareerPathways />

      {/* ALUMNI TRUST & SUCCESS METRICS */}
      <AlumniTrust />

      {/* B2B & INSTITUTIONAL ALLIANCE HUB */}
      <B2BAlliance setActiveCategory={setActiveCategory} navigateTo={navigateTo} />

      {/* VOCATIONAL HIGHLIGHT CARDS & CREDENTIALS SECTION */}
      <VocationalHighlights navigateTo={navigateTo} />

      {/* HIGH-CONVERSION QUICK REGISTRATION SECTION */}
      <QuickRegister />
    </motion.div>
  );
}
