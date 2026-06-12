import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function Legal() {
  const { lang } = useTranslation();

  return (
    <motion.div
      key="legal"
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
            {lang === 'en' ? 'RULES & COMMITMENTS' : 'الشروط والأحكام والضوابط'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'Legal Agreements' : 'الخصوصية والشروط التنظيمية'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {lang === 'en'
              ? 'Read our registration policies, data guidelines, and vocational academic terms.'
              : 'يرجى مراجعة شروط الانتساب والتدريب الميداني، وسياسات خصوصية البيانات المعتمدة بالأكاديمية.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Privacy Policy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-blue border-b border-slate-100 pb-3">
              <Shield size={20} />
              <h2 className="text-xl font-extrabold text-slate-950">
                {lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية وحفظ البيانات'}
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {lang === 'en'
                ? 'We strictly protect the personal files of our trainees and job placement candidates. Your qualifications, contact numbers, and examination sheets are shared solely with verified employment partners and garages upon your approval.'
                : 'نحن نلتزم بحماية البيانات الشخصية للمتدربين وقوائم الخريجين. لا يتم مشاركة أرقام الهواتف أو سجلات التقييم الفني إلا مع أصحاب العمل وشركاء التشغيل المعتمدين وبموافقتك الصريحة.'}
            </p>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-blue border-b border-slate-100 pb-3">
              <FileText size={20} />
              <h2 className="text-xl font-extrabold text-slate-950">
                {lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام العامة للانتساب'}
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {lang === 'en'
                ? 'Enrolling in HiPro Academy requires full compliance with occupational health and high-voltage safety instructions. Trainees must wear proper insulated safety CAT III gear during lab classes. Graduation diplomas require passing both theoretical assessments and live practical troubleshooting projects.'
                : 'يتطلب الانتساب لأكاديمية هايبـرو الالتزام التام بقواعد السلامة المهنية والتعامل مع الجهود العالية. يلتزم الطالب بارتداء اللباس المعزول وCAT III أثناء التدريب الميداني. تمنح الشهادات فقط بعد اجتياز الاختبار النظري والعملي بالكامل.'}
            </p>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
