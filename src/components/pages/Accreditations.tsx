import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Globe, Shield, Landmark } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface AccreditationsProps {
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
  setActiveAccreditation: (url: string | null) => void;
  setLightboxTitle: (title: string | null) => void;
  setLightboxDesc: (desc: string | null) => void;
}

export default function Accreditations({
  navigateTo,
  setActiveAccreditation,
  setLightboxTitle,
  setLightboxDesc
}: AccreditationsProps) {
  const { lang } = useTranslation();

  return (
    <motion.div
      key="accreditations"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-50 text-slate-800 text-start font-sans min-h-screen pb-16"
    >
      {/* HERO / HEADER */}
      <section className="relative py-20 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'OFFICIAL ACCREDITATIONS & CREDENTIALS' : 'الاعتمادات والتراخيص الرسمية للشهادات'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'Accredited Certifications' : 'الشهادات المعتمدة والموثقة رسمياً'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {lang === 'en'
              ? 'Our programs are officially certified and internationally recognized, enabling our graduates to practice their profession both locally and globally.'
              : 'دبلوماتنا وبرامجنا التدريبية مرخصة وموثقة رسمياً من كبرى الهيئات والوزارات، مما يمنح خريجينا الأحقية الكاملة لمزاولة المهنة محلياً ودولياً.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* CORE ACCREDITATIONS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'en' ? 'Accredited & Certified By' : 'معتمدة وموثقة من قبل'}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
              {lang === 'en'
                ? 'Hypro Academy is fully aligned with educational and governmental bodies to issue legal, verifiable credentials.'
                : 'تلتزم أكاديمية هايبرو بتقديم شهادات معترف بها رسمياً وخاضعة للقوانين والتعليمات الحكومية لضمان مستقبل خريجينا.'}
            </p>
          </div>

          {/* Section 1: Main Accreditation Seals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TVSDC Accreditation Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-blue">
                  <Landmark size={28} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block font-bold">
                    {lang === 'en' ? 'GOVERNMENTAL LICENSING' : 'اعتماد وترخيص حكومي'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {lang === 'en' ? 'Technical & Vocational Skills Development Commission (TVSDC)' : 'هيئة تنمية وتطوير المهارات المهنية والتقنية (TVTA)'}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {lang === 'en'
                    ? 'Our training programs are officially approved, certified, and structured under the TVSDC guidelines. This guarantees that our curricula, classrooms, practical workshops, and diagnostic labs meet rigorous educational and occupational standards.'
                    : 'جميع البرامج التدريبية المتاحة مصادق عليها ومرخصة رسمياً من هيئة تنمية وتطوير المهارات المهنية والتقنية. يضمن هذا الاعتماد مواءمة المناهج والمختبرات العملية لدينا لأحدث المعايير المهنية المعتمدة.'}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-emerald-600 font-bold text-xs">
                <CheckCircle size={16} />
                <span>{lang === 'en' ? 'Officially Certified Program Structure' : 'هيكل تدريبي معتمد ومسجل رسمياً'}</span>
              </div>
            </div>

            {/* Ministry of Foreign Affairs Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Globe size={28} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block font-bold">
                    {lang === 'en' ? 'GLOBAL VALIDITY' : 'صلاحية واعتراف دولي'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {lang === 'en' ? 'Ministry of Foreign Affairs (MOFA)' : 'وزارة الخارجية والمغتربين'}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {lang === 'en'
                    ? 'All graduation certificates are stamp-accredited by the Ministry of Foreign Affairs, providing official verification for use both inside and outside of Jordan. This enables our students to officially seek job placements and visa verifications in the Gulf and internationally.'
                    : 'الشهادات الصادرة قابلة للتصديق رسمياً من وزارة الخارجية والمغتربين، مما يمنحها الصفة الرسمية والقانونية للاستخدام داخل وخارج الأردن (والدول العربية والأجنبية) لتأمين فرص العمل والسفر.'}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-emerald-600 font-bold text-xs">
                <CheckCircle size={16} />
                <span>{lang === 'en' ? 'Valid for International Career Placement' : 'صالحة للعمل والتوظيف الإقليمي والدولى'}</span>
              </div>
            </div>
          </div>

          {/* Section 4: Value Highlights */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800">
            <div className="relative z-10 max-w-4xl space-y-6">
              <span className="text-xs font-mono font-bold text-sky-400 tracking-widest uppercase block">
                {lang === 'en' ? 'WHAT THIS ACCREDITATION GIVES YOU' : 'ماذا يقدم لك هذا الاعتماد رسمياً؟'}
              </span>
              <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                {lang === 'en' ? 'Accelerate Your Path to Professional Practice' : 'خطوتك الحقيقية نحو الاحتراف والعمل القانوني'}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 text-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-black text-sm">
                    <Shield size={16} />
                    <span>{lang === 'en' ? '1. Practice Licensing' : '1. رخص مزاولة المهنة'}</span>
                  </div>
                  <p className="text-slate-350 text-xs leading-relaxed">
                    {lang === 'en'
                      ? 'Acquire official municipal and governmental licenses to open and operate your own diagnostic center legally.'
                      : 'تمنحك الشهادة الصلاحية لطلب تراخيص البلدية والسجل المهني لافتتاح مركز الصيانة الخاص بك بشكل قانوني.'}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-black text-sm">
                    <Landmark size={16} />
                    <span>{lang === 'en' ? '2. Corporate & NGO Hiring' : '2. توظيف الشركات والمنظمات'}</span>
                  </div>
                  <p className="text-slate-350 text-xs leading-relaxed">
                    {lang === 'en'
                      ? 'Meets standard vetting requirements for major transit fleets, development agencies, and NGO hiring processes.'
                      : 'تفي الشهادة بمتطلبات التوظيف والفرص التشغيلية لدى أساطيل النقل، كبرى الوكالات والمنظمات التنموية.'}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-black text-sm">
                    <Globe size={16} />
                    <span>{lang === 'en' ? '3. GCC & Regional Validity' : '3. القبول والعمل الإقليمي'}</span>
                  </div>
                  <p className="text-slate-350 text-xs leading-relaxed">
                    {lang === 'en'
                      ? 'Certified MOFA stamp guarantees immediate recognition across Jordan and all GCC countries (Saudi Arabia, UAE, etc.).'
                      : 'تصديق الخارجية يضمن الاعتراف الفوري بالشهادة في الأردن ودول مجلس التعاون الخليجي وكافة الدول.'}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

        </div>
      </section>
    </motion.div>
  );
}
