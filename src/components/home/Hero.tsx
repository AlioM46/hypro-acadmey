import React from 'react';
import { Wrench, Award, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

interface HeroProps {
  t: (key: string) => string;
  contact: {
    whatsapp: string;
  };
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
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
        <source src="/whatsapp-video-2026.mp4" type="video/mp4" />
      </video>

      {/* Fallback Background Image (Mobile) */}
      <img
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
        alt="Hypro Automotive Technician diagnostic check"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden grayscale brightness-75"
      />

      {/* Dark Vignette Overlay for Readability */}
      <div className="absolute inset-0 bg-slate-950/65 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl space-y-6 text-start">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-300 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-xs font-bold font-sans tracking-wide uppercase">
              <Wrench size={12} />
              <span>{t('heroBadge')}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 text-slate-300 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold font-sans tracking-wide uppercase">
              <Award size={12} />
              <span>{t('heroBadge2')}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight font-sans text-white">
            {t('heroTitlePart1')} <span className="text-blue-400">{t('heroTitlePart2')}</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-medium">
            {t('heroSubtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-white text-brand-blue hover:bg-slate-100 font-extrabold text-sm px-6 py-4 flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
            >
              <Send size={15} />
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
              onClick={() => setVideoModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-4 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Clock size={14} className="text-blue-300 rotate-90" />
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
