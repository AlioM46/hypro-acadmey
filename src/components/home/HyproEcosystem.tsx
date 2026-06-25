import React from 'react';
import { BookOpen, Zap, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface HyproEcosystemProps {
  division: 'academy' | 'energy' | 'services';
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
}

export default function HyproEcosystem({ division, navigateTo }: HyproEcosystemProps) {
  const { t, lang } = useTranslation();

  const parsePoints = (str: string) => {
    return str.split('|').map(p => p.trim());
  };

  const getDivisionData = () => {
    switch (division) {
      case 'academy':
        return {
          icon: BookOpen,
          tag: lang === 'en' ? '01 / TECHNICAL TRAINING' : '٠١ / التدريب والتأهيل الفني',
          title: t('ecoAcademyTitle'),
          desc: t('ecoAcademyDesc'),
          points: parsePoints(t('ecoAcademyPoints')),
          status: 'active',
          statusLabel: t('activeBranch'),
          cta: t('exploreAcademy'),
          action: () => navigateTo('programs'),
          img: '/images/1.jpeg',
          imgAlt: 'Hypro Academy Technical Training',
          imageLeft: true
        };
      case 'energy':
        return {
          icon: Zap,
          tag: lang === 'en' ? '02 / ALTERNATIVE ENERGY' : '٠٢ / حلول الطاقة البديلة',
          title: t('ecoEnergyTitle'),
          desc: t('ecoEnergyDesc'),
          points: parsePoints(t('ecoEnergyPoints')),
          status: 'upcoming',
          statusLabel: t('comingSoon'),
          cta: lang === 'en' ? 'Learn More' : 'معرفة المزيد',
          action: () => navigateTo('about'),
          img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
          imgAlt: 'Hypro Energy Solar and Storage Solutions',
          imageLeft: false
        };
      case 'services':
        return {
          icon: Wrench,
          tag: lang === 'en' ? '03 / ENGINEERING SERVICES' : '٠٣ / الخدمات الهندسية والاستشارية',
          title: t('ecoServicesTitle'),
          desc: t('ecoServicesDesc'),
          points: parsePoints(t('ecoServicesPoints')),
          status: 'upcoming',
          statusLabel: t('comingSoon'),
          cta: lang === 'en' ? 'Learn More' : 'معرفة المزيد',
          action: () => navigateTo('about'),
          img: '/images/2.jpeg',
          imgAlt: 'Hypro Engineering Consultations',
          imageLeft: true
        };
    }
  };

  const item = getDivisionData();
  const Icon = item.icon;
  const isActive = item.status === 'active';

  return (
    <div className="py-16 bg-white border-b border-slate-200 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Image Block */}
          <div
            className={`lg:col-span-6 overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-100 relative group shadow-sm hover:shadow-md transition-shadow duration-300 ${
              item.imageLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <img
              src={item.img}
              alt={item.imgAlt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 z-10">
              <span
                className={`text-[9px] font-mono tracking-wider font-bold px-3 py-1.5 rounded-full uppercase shadow-sm ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : 'bg-slate-905 text-white border border-white/10'
                }`}
              >
                {item.statusLabel}
              </span>
            </div>
          </div>

          {/* Text Information Block */}
          <div
            className={`lg:col-span-6 space-y-6 ${
              item.imageLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="space-y-2">
              <span className="text-xs font-bold font-mono text-brand-blue uppercase tracking-wider block">
                {item.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className={`p-2 rounded-lg ${isActive ? 'bg-blue-50 text-brand-blue' : 'bg-slate-100 text-slate-500'}`}>
                  <Icon size={22} />
                </span>
                <span>{item.title}</span>
              </h3>
            </div>

            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-medium font-sans">
              {item.desc}
            </p>

            {/* Checkbox Highlights Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {item.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans font-semibold">
                  <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
                  <span className="leading-snug">{pt}</span>
                </li>
              ))}
            </ul>

            {/* Actions / CTA */}
            <div className="pt-4 border-t border-slate-200/60">
              {isActive ? (
                <button
                  onClick={item.action}
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs px-6 py-3.5 transition-all cursor-pointer border-none inline-flex items-center gap-2"
                >
                  <span>{item.cta}</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  disabled
                  className="bg-slate-200 text-slate-450 font-bold text-xs px-6 py-3.5 cursor-not-allowed border-none inline-flex items-center gap-2"
                >
                  <span>{item.cta}</span>
                  <ArrowRight size={14} className="opacity-50" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
