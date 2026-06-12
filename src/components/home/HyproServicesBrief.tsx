import React from 'react';
import { Cpu, Binary, FileSpreadsheet, ShieldAlert } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function HyproServicesBrief() {
  const { t, lang } = useTranslation();

  const scopes = [
    {
      icon: Cpu,
      titleEn: 'Workshop Smart Diagnostic Setup',
      titleAr: 'تجهيز الورش بالعدد وأجهزة الفحص الذكية',
      descEn: 'Procuring and standardizing factory-level scan tools, oscilloscopes, and IEC-insulated safety apparatus.',
      descAr: 'تأمين ورفد الورش والمراكز الفنية بأحدث أجهزة كشف الأعطال ومقاييس الإشارة وأطقم العزل المعتمدة.'
    },
    {
      icon: Binary,
      titleEn: 'ECU Programming & Calibration',
      titleAr: 'برمجة ومعايرة العقول الإلكترونية للسيارات',
      descEn: 'Providing technical calibration, software adjustments, and parameter synchronizations for vehicle ECUs.',
      descAr: 'دعم الفنيين في عمليات تعديل السوفتوير، ومزامنة مفاتيح التشغيل، وضبط حساسات التوجيه والسرعة.'
    },
    {
      icon: FileSpreadsheet,
      titleEn: 'Fleet Maintenance Technical Audits',
      titleAr: 'التدقيق الفني وهندسة أساطيل المركبات',
      descEn: 'Constructing standard operating procedures and technical audits to guarantee high reliability of commercial fleets.',
      descAr: 'وضع بروتوكولات الصيانة الدورية وتدقيق كفاءة أساطيل النقل للمؤسسات لضمان الجاهزية القصوى.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 text-start relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 bg-white text-slate-600 border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-bold">
            <ShieldAlert size={12} className="text-amber-500" />
            <span>{t('comingSoon')}</span>
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t('servicesPortalTitle')}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {t('servicesPortalSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {scopes.map((scope, idx) => {
            const Icon = scope.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 p-6 hover:border-slate-350 transition-colors shadow-sm">
                <div className="p-3 bg-slate-50 text-slate-655 w-12 h-12 flex items-center justify-center mb-5 border border-slate-100">
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
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#232f5b_1px,transparent_1px)] [background-size:24px_24px]" />
    </section>
  );
}
