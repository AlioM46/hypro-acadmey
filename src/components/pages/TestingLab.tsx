import React, { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Wrench } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import Skeleton from '../Skeleton';

const InteractivePowertrain = lazy(() => import('../InteractivePowertrain'));

export default function TestingLab() {
  const { lang, t } = useTranslation();

  return (
    <motion.div
      key="testing-lab"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="py-16 bg-white text-slate-800 text-start animate-fade-in"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
            <Wrench size={13} className="text-brand-blue" />
            <span>{t('interactiveDiagnostics')}</span>
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
            {lang === 'en' ? 'Industrial Diagnostic Infrastructure' : 'مختبر فحص الأنظمة وبطاريات الفولت العالي'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
            {lang === 'en'
              ? 'Explore the physical testing apparatus and technical specifications deployed live at Hypro Academy.'
              : 'تصفح مواصفات وأجهزة الفحص والقياسات الحقيقية المتوفرة لتطبيق الطلاب العملي والورش المهنية بالأكاديمية.'}
          </p>
        </div>

        {/* Infrastructure Spec Sheets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          {/* Spec Card 1 */}
          <div className="border border-slate-200 p-6 flex flex-col md:flex-row gap-6 bg-slate-50">
            <div className="w-full md:w-1/3 aspect-[4/3] bg-slate-100 border border-slate-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
                alt="Hypro HV Battery Tester" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h4 className="font-extrabold text-sm text-slate-900 uppercase font-mono tracking-wider text-start">
                {lang === 'en' ? 'Hypro HV Battery Tester (HV-9000)' : 'جهاز تفريغ وموازنة بطاريات الفولت العالي (HV-9000)'}
              </h4>
              <table className="w-full border-collapse text-xs font-sans">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Apparatus Type' : 'نوع الجهاز'}</td>
                    <td className="py-2 text-slate-800 text-start">{lang === 'en' ? 'Cell balancer & charge tester' : 'شحن وموازنة وتفريغ الخلايا'}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Max Voltage' : 'أقصى جهد'}</td>
                    <td className="py-2 text-slate-800 text-start font-mono">1000V DC</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Core Capability' : 'القدرة الأساسية'}</td>
                    <td className="py-2 text-slate-800 text-start">{lang === 'en' ? 'Cell balancing, resistance check' : 'موازنة الخلايا، كشف المقاومة الداخلية'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Spec Card 2 */}
          <div className="border border-slate-200 p-6 flex flex-col md:flex-row gap-6 bg-slate-50">
            <div className="w-full md:w-1/3 aspect-[4/3] bg-slate-100 border border-slate-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                alt="Technical diagnostic oscilloscopes" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h4 className="font-extrabold text-sm text-slate-900 uppercase font-mono tracking-wider text-start">
                {lang === 'en' ? 'Advanced Oscilloscope & Scanning Rack' : 'منظومة رصد إشارات الحساسات والعواكس'}
              </h4>
              <table className="w-full border-collapse text-xs font-sans">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Apparatus Type' : 'نوع الجهاز'}</td>
                    <td className="py-2 text-slate-800 text-start">{lang === 'en' ? '4-Channel logic wave analyser' : 'محلل إشارات الحساسات وخطوط CAN-Bus'}</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Max Frequency' : 'التردد الأقصى'}</td>
                    <td className="py-2 text-slate-800 text-start font-mono">100 MHz</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Core Capability' : 'القدرة الأساسية'}</td>
                    <td className="py-2 text-slate-800 text-start">{lang === 'en' ? 'Capture resolver timing, bus errors' : 'كشف تردد موجة الحساس، عزل خطوط البيانات'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Powertrain simulator */}
        <div className="pt-8 border-t border-slate-100">
          <div className="max-w-3xl space-y-2 mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              {lang === 'en' ? 'Interactive Hybrid Powertrain Simulator' : 'محاكي تدفق طاقة المحرك الهجين التفاعلي'}
            </h3>
            <p className="text-slate-500 text-xs font-medium">
              {lang === 'en'
                ? 'Simulate throttle inputs, braking energy capture, and battery charging flows in real time.'
                : 'اختبر تدفق الشحن وتوليد الطاقة وحركة التروس عند الكبح والتسارع في محرك الهايبرد التفاعلي.'}
            </p>
          </div>
          <Suspense fallback={<Skeleton />}>
            <InteractivePowertrain />
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
}
