import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function Volunteers() {
  const { lang } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      key="volunteers"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-white text-slate-800 text-start font-sans"
    >
      {/* Hero Header */}
      <section className="relative py-16 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'GIVE BACK & GROW' : 'العطاء والتنمية المجتمعية'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'Volunteer Section' : 'قسم التطوع والمتطوعين'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {lang === 'en'
              ? 'Join our technical support teams, assist in educational diagnostics labs, and help us transfer technology to the local workforce.'
              : 'ساهم معنا في نقل المعرفة والتكنولوجيا، وساعد زملائك المتدربين في مختبرات الصيانة الميدانية.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* Main Content & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Info Side */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-4 bg-rose-50 text-rose-600 w-12 h-12 flex items-center justify-center rounded-2xl">
                <Heart size={24} className="fill-rose-600" />
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight">
                {lang === 'en' ? 'Why Volunteer with Us?' : 'لماذا تتطوع في أكاديميتنا؟'}
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Gain direct lab experience.' : 'الحصول على ساعات تدريب إضافية بالمختبر.'}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Access to advanced toolkits.' : 'التعامل مع أجهزة فحص متطورة وعوازل أصلية.'}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{lang === 'en' ? 'Expand career networking.' : 'توسيع شبكة معارفك مع المهندسين وأصحاب الورش.'}</span>
                </li>
              </ul>
            </div>

            {/* Form Side */}
            <div className="md:col-span-7 bg-slate-50 border border-slate-200 p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle2 size={40} className="text-emerald-500 mx-auto" />
                  <h4 className="font-extrabold text-base text-slate-900">
                    {lang === 'en' ? 'Application Received!' : 'تم استلام طلبك بنجاح!'}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">
                    {lang === 'en'
                      ? 'Thank you for your interest in volunteering. We will review your dossier and get in touch.'
                      : 'نشكر رغبتك في التطوع ودعم التعليم المهني. سيقوم منسق الأنشطة بالتواصل معك قريباً.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">
                    {lang === 'en' ? 'Volunteer Registration Sheet' : 'طلب الانضمام كمتطوع'}
                  </h4>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1 font-mono">{lang === 'en' ? 'Full Name' : 'الاسم الكامل'}</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 p-3 rounded-lg text-slate-800 text-xs font-medium focus:border-brand-blue outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1 font-mono">{lang === 'en' ? 'Email / WhatsApp' : 'البريد أو رقم الواتساب'}</label>
                    <input required type="text" className="w-full bg-white border border-slate-200 p-3 rounded-lg text-slate-800 text-xs font-medium focus:border-brand-blue outline-none" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1 font-mono">{lang === 'en' ? 'Skill / Background' : 'الخبرة أو الخلفية المهنية'}</label>
                    <textarea rows={3} required className="w-full bg-white border border-slate-200 p-3 rounded-lg text-slate-800 text-xs font-medium focus:border-brand-blue outline-none resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs py-4.5 rounded-lg transition-all border-none cursor-pointer flex items-center justify-center gap-2">
                    <span>{lang === 'en' ? 'Submit Application' : 'إرسال طلب التطوع'}</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
