import React from 'react';
import { Wrench, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface VocationalHighlightsProps {
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
}

const whys = [
  {
    icon: Wrench,
    titleEn: '80% Practical Shop Hours',
    titleAr: '80% تدريب وتطبيق عملي حقيقي',
    descEn: 'Spend your time using proper professional insulated tools, battery diagnostics, and engine scopes.',
    descAr: 'تقضي جلّ ساعاتك وأنت ترتدي لباس العزل الآمن، تفحص بوردات السيارات، وتعمل على قياس أعطال ومحركات الفولت العالي في سوريا.',
  },
  {
    icon: Award,
    titleEn: '20+ Year Veteran Instructors',
    titleAr: 'مدربون من قادة المهنة والخبراء',
    descEn: 'Mentors are authorized workshop leaders who solve complex diagnostic faults daily on premium brands.',
    descAr: 'يتولى تدريبك كبار مهندسي صيانة السيارات والالكترون في سوريا، الحاضرون في قلب سوق صيانة وفحوص السيارات الحديثة.',
  },
  {
    icon: ShieldCheck,
    titleEn: 'National and Agency Trust',
    titleAr: 'اعتماد رسمي وثقة الوكلاء الصارمة',
    descEn: 'We standardise vocational repair skills to qualify graduates for regional dealerships and ministries.',
    descAr: 'شهاداتنا دبلوم تدريبي مهني تفتح لك التراخيص، والتثبيت في الورش المهنية الكبرى كفني وفاحص معتمد محلياً ودولياً.',
  }
];

export default function VocationalHighlights({ navigateTo }: VocationalHighlightsProps) {
  const { t, tObj } = useTranslation();

  return (
    <>
      {/* VOCATIONAL HIGHLIGHT CARDS & CREDENTIALS SECTION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            {t('whyTitle')}
          </h3>
          <p className="text-slate-500 mt-2 text-xs leading-relaxed max-w-xl mx-auto font-medium font-sans">
            {t('whyDesc')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-start pt-2">
            {whys.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 p-6 relative transition-all hover:border-slate-350">
                  <div className="p-3 bg-blue-50 text-brand-blue w-12 h-12 flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2 font-sans">
                    {tObj(w, 'title')}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium">
                    {tObj(w, 'desc')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK NAV TO DETAILED SECTIONS */}
      <section className="py-16 bg-white text-center border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">
            {t('readyExplore')}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm font-medium font-sans">
            {t('browseDetails')}
          </p>
          <button
            onClick={() => navigateTo('programs')}
            className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs px-8 py-3.5 transition-all cursor-pointer border-none inline-flex items-center gap-2"
          >
            <span>{t('viewCourseDetails')}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </>
  );
}
