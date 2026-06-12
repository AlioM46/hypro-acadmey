import React from 'react';
import { academyContent } from '../../data/academyContent';
import { useTranslation } from '../../hooks/useTranslation';

export default function Stats() {
  const { tObj } = useTranslation();
  const stats = academyContent.stats;

  return (
    <section className="bg-white border-b border-slate-200 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 p-2 border-r last:border-0 border-slate-100 rtl:border-r-0 rtl:border-l rtl:last:border-r-0 rtl:last:border-l-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight select-none">
                {tObj(stat, 'value')}
              </div>
              <div className="text-xs font-bold text-slate-500 font-sans">
                {tObj(stat, 'label')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
