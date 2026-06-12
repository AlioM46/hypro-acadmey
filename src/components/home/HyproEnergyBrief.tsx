import React from 'react';
import { Sun, BatteryCharging, Factory, ShieldAlert } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function HyproEnergyBrief() {
  const { t, lang } = useTranslation();

  const scopes = [
    {
      icon: Sun,
      titleEn: 'Solar Microgrid Systems',
      titleAr: 'منظومات الشبكة الشمسية المصغرة',
      descEn: 'Designing off-grid and hybrid solar arrays to support local communities and businesses with stable power.',
      descAr: 'تصميم وتركيب حقول الطاقة الشمسية الهجينة والمستقلة لدعم المنشآت والمجتمعات بالطاقة المستقرة.'
    },
    {
      icon: BatteryCharging,
      titleEn: 'HV Battery Diagnostics Clinic',
      titleAr: 'عيادة معايرة وفحص خلايا الجهد العالي',
      descEn: 'Industrial diagnostics, rebuilding, and rebalancing high-voltage battery packs to maximize operational life.',
      descAr: 'فحص مجهري وإعادة شحن وموازنة بطاريات الليثيوم والفولت المرتفع لإطالة عمرها الخدمي.'
    },
    {
      icon: Factory,
      titleEn: 'Industrial Energy Audit',
      titleAr: 'تدقيق استهلاك الطاقة للمنشآت',
      descEn: 'Consulting and engineering audits to optimize electrical efficiency and reduce heavy carbon footprint.',
      descAr: 'استشارات هندسية متخصصة لرفع كفاءة استهلاك الكهرباء وخفض الفاقد الحراري في المصانع.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-start relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-bold">
            <ShieldAlert size={12} className="text-amber-500" />
            <span>{t('comingSoon')}</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t('energyPortalTitle')}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t('energyPortalSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {scopes.map((scope, idx) => {
            const Icon = scope.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 hover:border-slate-350 transition-colors">
                <div className="p-3 bg-white text-slate-655 w-12 h-12 flex items-center justify-center mb-5 border border-slate-200">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2 font-sans">
                  {lang === 'en' ? scope.titleEn : scope.titleAr}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium">
                  {lang === 'en' ? scope.descEn : scope.descAr}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#232f5b_1px,transparent_1px)] [background-size:24px_24px]" />
    </section>
  );
}
