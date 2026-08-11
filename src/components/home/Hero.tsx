import React from 'react';
import { Wrench, Award, Send, MessageSquare, Image, CheckCircle } from 'lucide-react';

interface HeroProps {
  t: (key: string) => string;
  contact: {
    whatsapp: string;
  };
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team' | 'careers' | 'b2b' | 'gallery' | 'news' | 'volunteers' | 'legal' | 'academy') => void;
  setVideoModalOpen: (open: boolean) => void;
}

export default function Hero({ t, contact, navigateTo, setVideoModalOpen }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start bg-slate-950 text-white pt-32 lg:pt-40 pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Video (Desktop/Tablet) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/new-vod.mp4" type="video/mp4" />
      </video>

      {/* Fallback Background Image (Mobile) */}
      <img
        src="/gallery/workshop_practice_1.jpg"
        alt="Hypro Automotive Technician diagnostic check"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden grayscale brightness-75"
      />

      {/* Dark Vignette Overlay for Readability */}
      <div className="absolute inset-0 bg-slate-950/65 z-10" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-start">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <Wrench size={13} className="text-blue-400" />
            <span className="text-xs font-semibold text-blue-200 tracking-wide font-sans">
              {t('heroBadge')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] font-sans text-white">
            {t('heroTitlePart1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
              {t('heroTitlePart2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-normal max-w-2xl">
            {t('heroSub')}
          </p>

          {/* Call to Actions (CTAs) */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-sm px-7 py-4 transition-all cursor-pointer border-none flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{t('bookSeatNow')}</span>
            </button>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-[#232f5b] hover:bg-brand-blue-hover text-white border border-white/20 font-bold text-sm px-6 py-4 flex items-center justify-center gap-2 transition-all cursor-pointer decoration-none"
            >
              <MessageSquare size={14} className="text-emerald-450" />
              <span>{t('talkAdvisor')}</span>
            </a>

            <button
              onClick={() => navigateTo('gallery')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-4 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Image size={14} className="text-blue-300" />
              <span>{t('watchWorkshopsNav')}</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 items-center text-xs text-slate-400 font-sans font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-blue-400" />
              <span>{t('syndicateStandards')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-blue-400" />
              <span>{t('secureVerify')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={14} className="text-blue-400" />
              <span>{t('practicalFocus')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
