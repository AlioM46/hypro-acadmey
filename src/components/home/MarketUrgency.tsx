import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function MarketUrgency() {
  const { lang } = useTranslation();

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
            {lang === 'en' ? 'MARKET URGENCY REPORT' : 'تقرير حيوية السوق والفرص'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? 'Why Automotive Diagnostics Matters Now' : 'لماذا يعتبر فحص وبرمجة السيارات الفرصة الأقوى حالياً؟'}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
            {lang === 'en' 
              ? 'The global and regional automotive industry is going through a rapid technical revolution. Traditional mechanical repairs are decaying as vehicles become rolling computers.' 
              : 'يمر قطاع صيانة السيارات بالشمال السوري والمنطقة بثورة برمجية وإلكترونية غير مسبوقة. يتلاشى الميكانيك التقليدي لصالح الأنظمة الذكية وفحص الكمبيوتر.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
          <div className="p-8 bg-white border-b sm:border-b-0 sm:border-r border-slate-200 text-start">
            <div className="text-4xl font-black text-brand-blue tracking-tight font-sans">85%</div>
            <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
              {lang === 'en' ? 'Global EV/Hybrid Shift' : 'التحول العالمي للسيارات الذكية'}
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {lang === 'en' 
                ? 'Expected share of new cars using hybrid/electric platforms by 2030.' 
                : 'الحصة المتوقعة للسيارات الكهربائية والهجينة في الأسواق الإقليمية بحلول عام 2030.'}
            </p>
          </div>

          <div className="p-8 bg-white border-b sm:border-b-0 lg:border-r border-slate-200 text-start">
            <div className="text-4xl font-black text-brand-accent tracking-tight font-sans">-70%</div>
            <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
              {lang === 'en' ? 'Mechanical Parts Decay' : 'تراجع صيانة الميكانيك التقليدي'}
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {lang === 'en' 
                ? 'Fewer moving parts means traditional mechanical jobs are shrinking fast.' 
                : 'المحركات والبطاريات الحديثة تحتوي على قطع ميكانيكية أقل، مما يعجل باندثار الصيانة التقليدية.'}
            </p>
          </div>

          <div className="p-8 bg-white border-b sm:border-r border-slate-200 text-start">
            <div className="text-4xl font-black text-brand-blue tracking-tight font-sans">#1</div>
            <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
              {lang === 'en' ? 'Early-Mover Advantage' : 'الريادة والسبق التجاري'}
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {lang === 'en' 
                ? 'Be the first certified diagnostics workshop in your area to capture high-margin clients.' 
                : 'كن الأول في منطقتك بامتلاك شهادة رسمية وعتاد معزول لصيانة بطاريات وعقول الهايبرد الكهربائية.'}
            </p>
          </div>

          <div className="p-8 bg-white text-start">
            <div className="text-4xl font-black text-brand-blue tracking-tight font-sans">4.2x</div>
            <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
              {lang === 'en' ? 'Increased Diagnostic Demand' : 'تضاعف الطلب على فنيي الكمبيوتر'}
            </h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {lang === 'en' 
                ? 'Dealerships and workshops pay premium salaries for certified scan-tool specialists.' 
                : 'الوكالات والمراكز الكبرى تتنافس لدفع رواتب عالية للفنيين القادرين على فك الشفرات وقراءة المخططات.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
