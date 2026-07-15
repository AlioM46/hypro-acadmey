import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function Programs() {
  const { lang } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      key="programs"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="py-16 bg-white text-slate-800 text-start"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-12 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
            <Layers size={13} className="text-brand-blue" />
            <span>{lang === 'en' ? 'CERTIFIED VOCATIONAL PROGRAM' : 'الخطة التدريبية المهنية والمقاييس المنهجية'}</span>
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
            {lang === 'en' ? 'Training Curriculum & Syllabus' : 'المنهج الدراسي وخطة التدريب'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
            {lang === 'en'
              ? 'Detailed modular syllabus mapping out core diagnostics competencies, contact hours, and practical work ratios.'
              : 'مخطط المنهج الدراسي المفصل وجدول الساعات الأكاديمية والعملية الموزعة حسب معايير التدريب المهني.'}
          </p>
        </div>

        {/* Rigid Tabular Accordion */}
        <div className="space-y-6">
          <div className="border border-slate-200" id="main-course">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-slate-50 p-6 flex justify-between items-center cursor-pointer border-none font-sans text-start"
            >
              <div>
                <h4 className="text-lg font-black text-slate-900">
                  {lang === 'en' 
                    ? 'Electric, Hybrid, and Fuel Cell Vehicles Maintenance Course' 
                    : 'دورة كهرباء وميكانيك وصيانة السيارات الكهربائية والهايبرد والفيول'}
                </h4>
                <span className="text-xs text-brand-blue font-mono font-bold mt-1 block">
                  {lang === 'en'
                    ? '300 CONTACT HOURS | 180 PRACTICAL & 120 THEORETICAL HOURS'
                    : 'إجمالي ٣٠٠ ساعة تدريبية | ١٨٠ ساعة عملي & ١٢٠ ساعة نظري'}
                </span>
              </div>
              <span className="text-slate-450 font-bold">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
              <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto animate-fade-in">
                <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-start font-sans">
                  <thead>
                    <tr className="bg-brand-blue text-white text-start">
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase w-1/4">
                        {lang === 'en' ? 'Course / Module' : 'الكورس / المساق'}
                      </th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase w-1/2">
                        {lang === 'en' ? 'Syllabus & Competency Guidelines' : 'مخطط المنهج والمهارات المكتسبة'}
                      </th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase w-1/8">
                        {lang === 'en' ? 'Practical Hours' : 'ساعات العملي'}
                      </th>
                      <th className="border border-slate-200 p-3 text-start font-bold uppercase w-1/8">
                        {lang === 'en' ? 'Theoretical Hours' : 'ساعات النظري'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3 font-bold">
                        {lang === 'en' ? 'Complete Syllabus' : 'منهج صيانة السيارات'}
                      </td>
                      <td className="border border-slate-200 p-3">
                        {lang === 'en'
                          ? 'You will learn how to diagnose, repair, and maintain Electric, Hybrid, and Fuel Cell Vehicles (EV/HEV/FCEV). This includes hands-on experience with high-voltage batteries, battery cell balancing, traction motors, power inverters, charging systems, and advanced diagnostic scanners.'
                          : 'ستتعلم كيفية تشخيص وصيانة وإصلاح السيارات الكهربائية، الهجينة (الهايبرد)، وسيارات خلايا الوقود (الفيول). يتضمن ذلك التدريب العملي المباشر على بطاريات الجهد العالي، موازنة الخلايا، محركات الجر، العواكس، أنظمة الشحن، واستخدام أجهزة فحص وتشخيص الأعطال الإلكترونية.'}
                      </td>
                      <td className="border border-slate-200 p-3 font-mono">
                        {lang === 'en' ? 'Hours 180' : '١٨٠ ساعة'}
                      </td>
                      <td className="border border-slate-200 p-3 font-mono">
                        {lang === 'en' ? 'Hours 120' : '١٢٠ ساعة'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
