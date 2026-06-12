import React, { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { academyContent } from '../../data/academyContent';
import { useTranslation } from '../../hooks/useTranslation';

import Hero from '../home/Hero';
import HyproEcosystem from '../home/HyproEcosystem';
import PartnerSlider from '../home/PartnerSlider';
import QuickRegister from '../home/QuickRegister';
import HyproEnergyBrief from '../home/HyproEnergyBrief';
import HyproServicesBrief from '../home/HyproServicesBrief';
import Stats from '../home/Stats';
import VocationalHighlights from '../home/VocationalHighlights';
import HyproEnergyShowcase from '../home/HyproEnergyShowcase';
import HyproServicesShowcase from '../home/HyproServicesShowcase';
import Skeleton from '../Skeleton';

const FAQSection = lazy(() => import('../FAQSection'));

type PageType = 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team' | 'careers' | 'b2b' | 'gallery' | 'news' | 'volunteers' | 'legal' | 'academy';

interface HomeProps {
  navigateTo: (page: PageType) => void;
  setVideoModalOpen: (open: boolean) => void;
  activeCategory: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer';
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer') => void;
}

export default function Home({ navigateTo, setVideoModalOpen, activeCategory, setActiveCategory }: HomeProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
    >
      {/* HERO SCREEN CONTAINER */}
      <Hero
        t={t}
        contact={academyContent.contact}
        navigateTo={navigateTo}
        setVideoModalOpen={setVideoModalOpen}
      />

      {/* PARTNER LOGOS INFINITE SLIDER */}
      <PartnerSlider />

      {/* GENERAL SOLUTIONS OVERVIEW HEADER */}
      <section className="py-20 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
            {t('ecoSectionTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t('ecoSectionTitle')}
          </h2>
          <p className="text-slate-655 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium">
            {t('ecoSectionDesc')}
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* DIVISION 1: HYPRO ACADEMY OVERVIEW                       */}
      {/* ======================================================== */}
      <HyproEcosystem division="academy" navigateTo={navigateTo} />
      
      {/* ACADEMY SUB-SECTIONS */}
      <Stats />
      <VocationalHighlights navigateTo={navigateTo} />

      {/* ======================================================== */}
      {/* DIVISION 2: HYPRO ENERGY                                 */}
      {/* ======================================================== */}
      <HyproEcosystem division="energy" navigateTo={navigateTo} />

      {/* ENERGY PORTAL BRIEF & SHOWCASE */}
      <HyproEnergyBrief />
      <HyproEnergyShowcase />

      {/* ======================================================== */}
      {/* DIVISION 3: HYPRO SERVICES                               */}
      {/* ======================================================== */}
      <HyproEcosystem division="services" navigateTo={navigateTo} />

      {/* SERVICES PORTAL BRIEF & SHOWCASE */}
      <HyproServicesBrief />
      <HyproServicesShowcase />

      {/* FAQ SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <FAQSection />
          </Suspense>
        </div>
      </section>

      {/* HIGH-CONVERSION QUICK REGISTRATION SECTION (Positioned right above footer) */}
      <QuickRegister />
    </motion.div>
  );
}
