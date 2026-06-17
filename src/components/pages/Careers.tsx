import React from 'react';
import { motion } from 'motion/react';
import { Database, Network, Building2, BookOpen, Briefcase, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function Careers() {
  const { lang, t } = useTranslation();

  const metrics = [
    {
      icon: Database,
      text: t('careerGradDb'),
      colorClass: 'bg-blue-50 text-brand-blue'
    },
    {
      icon: Network,
      text: t('careerGaragesNetwork'),
      colorClass: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: Building2,
      text: t('careerRecruiters'),
      colorClass: 'bg-amber-50 text-amber-600'
    },
    {
      icon: BookOpen,
      text: t('careerInTraining'),
      colorClass: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Briefcase,
      text: t('careerMarketPrep'),
      colorClass: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <motion.div
      key="careers"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-white text-slate-800 text-start font-sans"
    >
      {/* Hero Header Banner */}
      <section className="relative py-16 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'FROM TRAINING TO THE JOB MARKET' : 'من التدريب إلى سوق العمل'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'Careers & Employment Center' : 'مركز التوظيف والتشغيل المهني'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {t('careerIntro')}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* Philosophy & Commitment Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6 text-start">
              <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                {lang === 'en' ? 'OUR PHILOSOPHY' : 'فلسفتنا وغايتنا'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans leading-tight">
                {t('careerMissionTitle')}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {t('careerMissionPara1')}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium border-l-4 border-brand-blue pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
                {t('careerMissionPara2')}
              </p>
            </div>
            <div className="md:col-span-5 bg-brand-blue text-white p-6 border border-brand-blue-hover rounded-2xl relative overflow-hidden shadow-xl">
              <div className="relative z-10 space-y-4">
                <span className="inline-block bg-brand-blue/20 text-blue-300 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-blue/30">
                  {lang === 'en' ? 'CRITICAL STRATEGY' : 'ركيزة النجاح الأساسية'}
                </span>
                <h3 className="text-lg font-black font-sans leading-tight text-white">
                  {t('careerMissionCalloutTitle')}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  {t('careerMissionCalloutDesc')}
                </p>
              </div>
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {t('careerDirectStats')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-sans">
              {lang === 'en' ? 'Bridging Vocational Excellence & Market Demand' : 'ربط التميز المهني بمتطلبات سوق العمل'}
            </h2>
          </div>

          {/* List of Direct Metrics */}
          <div className="space-y-4">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-5 hover:border-slate-350 transition-all rounded-xl"
                >
                  <div className={`p-3.5 ${metric.colorClass} flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-grow text-start">
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {metric.text}
                    </h4>
                  </div>
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                </div>
              );
            })}
          </div>

          {/* Institutional Cooperation Callout Box */}
          <div className="mt-16 bg-brand-blue text-white p-8 border border-slate-800 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-black font-sans leading-tight">
                {lang === 'en' ? 'Recruiting Vetted Technicians?' : 'تبحث عن كوادر وفنيين معتمدين؟'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                {lang === 'en'
                  ? 'We coordinate placement requests for regional automotive centers and NGOs. Connect with our Career Liaison Officer to receive graduates dossiers.'
                  : 'نحن ننسق طلبات التشغيل والتوظيف للورش ومراكز الصيانة والمنظمات التنموية. تواصل مع مكتب التشبيك لدينا لاستلام قوائم وملفات الخريجين المؤهلين.'}
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/962796616549"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-slate-100 text-brand-blue font-extrabold text-xs px-8 py-4 transition-all whitespace-nowrap flex items-center gap-2 decoration-none"
                >
                  <span>{lang === 'en' ? 'Contact Placement Liaison' : 'تواصل مع منسق التشغيل والتوظيف'}</span>
                  <ArrowRight size={14} className="text-brand-blue" />
                </a>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

        </div>
      </section>
    </motion.div>
  );
}
