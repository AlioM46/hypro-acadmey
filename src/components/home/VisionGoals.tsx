import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function VisionGoals() {
  const { lang } = useTranslation();
  const [animatedWidth, setAnimatedWidth] = useState(0);

  const currentTrained = 1530;
  const targetTrained = 10000;
  const percentage = Math.round((currentTrained / targetTrained) * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 150);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="space-y-3">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-600 tracking-tight block">
            {lang === 'en' ? 'OUR VISION' : 'رؤيتنا وهدفنا'}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight leading-tight font-sans">
            {lang === 'en' 
              ? 'Qualifying 10,000 Technicians for the Future' 
              : 'تأهيل 10,000 فني سوري لمهن المستقبل'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            {lang === 'en'
              ? 'Training and qualifying skilled Syrian youth in alternative energy and electric vehicles within the next five years.'
              : 'نسعى لتمكين وتأهيل الشباب السوري مهنياً وتقنياً في مجالات الطاقة البديلة وصيانة المركبات الكهربائية والهجينة.'}
          </p>
        </div>

        {/* Large, Beautiful Green Progress Bar */}
        <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700">
            <span>
              {lang === 'en' ? 'Trained Technicians:' : 'عدد الفنيين المؤهلين حالياً:'} 
              <span className="text-emerald-600 ml-1.5 font-extrabold">{currentTrained.toLocaleString()}</span>
            </span>
            <span>
              {lang === 'en' ? 'Goal:' : 'الهدف:'} 
              <span className="text-slate-900 ml-1.5 font-extrabold">{targetTrained.toLocaleString()}</span>
            </span>
          </div>
          
          {/* Big Green Progress Bar with Slide-in Animation */}
          <div className="h-6 w-full bg-slate-200 rounded-full overflow-hidden p-1 border border-slate-300/50 shadow-inner">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3 text-[10px] font-bold text-white shadow-md"
              style={{ width: `${animatedWidth}%` }}
            >
              <span>{percentage}%</span>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono tracking-wide">
            {lang === 'en' ? '5-Year Strategic Transition Plan' : 'خطة التحول الاستراتيجي خلال 5 سنوات'}
          </div>
        </div>

      </div>
    </section>
  );
}
