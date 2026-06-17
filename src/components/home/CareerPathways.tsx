import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function CareerPathways() {
  const { lang } = useTranslation();

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
            {lang === 'en' ? 'VOCATIONAL DEPLOYMENT MAP' : 'مخطط التمكين المهني والتوجيه'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? 'Your Career Placement Pathways' : 'أين ستعمل بعد التخرج؟ فرص ومسارات مضمونة'}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
            {lang === 'en' 
              ? 'We build direct placement connections to three distinct career markets to ensure you transition immediately into higher-income jobs.' 
              : 'نبني قنوات توظيف وتشبيك مباشرة مع ثلاثة أسواق رئيسية لنضمن انتقالك فوراً للعمل وكسب عوائد مالية مجزية.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Local Syria Market */}
          <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-350 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">01 / LOCAL PLACEMENT</span>
              <h4 className="text-lg font-extrabold text-slate-900 font-sans">
                {lang === 'en' ? 'Syrian Domestic Market' : 'السوق المحلي (الداخل السوري)'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {lang === 'en' 
                  ? 'Authorized diagnostic hubs, localized NGO programs, fleet maintenance workshops, and independent garages in Syria and regional zones.' 
                  : 'مراكز صيانة كمبيوتر السيارات الحديثة، برامج التدريب المدعومة، الورش الخاصة، وأسطول الصيانة للمؤسسات في سوريا وريفها.'}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{lang === 'en' ? 'EST. SALARY:' : 'الراتب المتوقع:'}</span>
              <span className="text-brand-blue font-bold">$300 - $600 / Mo</span>
            </div>
          </div>

          {/* Regional Jordan & Gulf */}
          <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-350 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">02 / REGIONAL EXPORT</span>
              <h4 className="text-lg font-extrabold text-slate-900 font-sans">
                {lang === 'en' ? 'Jordan & Gulf Dealerships' : 'الأسواق الإقليمية (الأردن والخليج)'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {lang === 'en' 
                  ? 'Direct employment recommendations into authorized dealership service bays, battery remanufacturing clinics, and private fleet networks.' 
                  : 'التوظيف المباشر بناءً على التوصية الحرفية في كبرى وكالات صيانة الهايبرد، وشركات النقل ومراكز تبريد وتجديد الخلايا الإقليمية.'}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{lang === 'en' ? 'EST. SALARY:' : 'الراتب المتوقع:'}</span>
              <span className="text-brand-blue font-bold">$1,200 - $2,500 / Mo</span>
            </div>
          </div>

          {/* Entrepreneurial */}
          <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-350 transition-colors">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">03 / PRIVATE BUSINESS</span>
              <h4 className="text-lg font-extrabold text-slate-900 font-sans">
                {lang === 'en' ? 'Your Diagnostics Enterprise' : 'إنشاء مركزك المستقل الخاص'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {lang === 'en' 
                  ? 'Establish your own diagnostics shop, hybrid battery cell rebuilding center, or mobile EV roadside scan service.' 
                  : 'تأسيس ورشة فحص الأعطال الخاصة بك، مركز صيانة وإعادة توازن بطاريات الهايبرد، أو تقديم خدمة الكشف المتنقلة.'}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">{lang === 'en' ? 'EST. NET PROFIT:' : 'الأرباح الصافية:'}</span>
              <span className="text-brand-blue font-bold">$1,500 - $4,000 / Mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
