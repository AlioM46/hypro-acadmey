import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function FeatureRows() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Row 1: Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
            <img
              src="/images/6.jpeg"
              alt="Hands-on training"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-start">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
              {t('altRow1Tag')}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
              {t('altRow1Title')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {t('altRow1Desc')}
            </p>
          </div>
        </div>

        {/* Row 2: Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-start md:order-1 order-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
              {t('altRow2Tag')}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
              {t('altRow2Title')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {t('altRow2Desc')}
            </p>
          </div>
          <div className="relative overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100 md:order-2 order-1">
            <img
              src="/images/7.jpeg"
              alt="Accredited training"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 3: Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
            <img
              src="/images/8.jpeg"
              alt="Employment placement"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-start">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
              {t('altRow3Tag')}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
              {t('altRow3Title')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {t('altRow3Desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
