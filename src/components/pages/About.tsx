import React from 'react';
import { motion } from 'motion/react';
import { Layers, Users, Award, Zap, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface AboutProps {
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
}

export default function About({ navigateTo }: AboutProps) {
  const { lang, t } = useTranslation();

  return (
    <motion.div key="about" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }} className="py-16 bg-white text-slate-800 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-12 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
            <Layers size={13} className="text-brand-blue" />
            <span>{lang === 'en' ? 'ABOUT HYPRO ACADEMY' : 'عن أكاديمية هايبـرو'}</span>
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">{lang === 'en' ? 'Transitioning Tech Labor Into Clean Energy' : 'تأهيل الكوادر الفنية نحو أنظمة الطاقة النظيفة'}</h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">{lang === 'en' ? 'Hypro Academy is built on institutional capacity building, economic youth empowerment, and technical modernization.' : 'تأسست أكاديمية هايبـرو على ركائز بناء القدرات المؤسساتية وتمكين الشباب اقتصادياً وتحديث التعليم الفني.'}</p>
        </div>

        {/* Detailed Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200 mb-12">
          <div className="lg:col-span-5 bg-brand-blue text-white p-8 border border-brand-blue-hover rounded-2xl relative overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative z-10 space-y-6">
              <span className="inline-block bg-brand-blue/20 text-blue-300 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-blue/30">
                {lang === 'en' ? 'CORE PLATFORM' : 'المنصة والرسالة'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans leading-tight text-white">
                Hypro Academy
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                {t('aboutPlatformPara1')}
              </p>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mb-2 font-sans uppercase tracking-wider">
                {lang === 'en' ? 'Our Developmental Belief' : 'إيماننا التنموي'}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {t('aboutPlatformPara2')}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mb-2 font-sans uppercase tracking-wider">
                {lang === 'en' ? 'Bridges of Collaboration' : 'جسور التعاون والتشبيك'}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {t('aboutPlatformPara3')}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mb-2 font-sans uppercase tracking-wider">
                {lang === 'en' ? 'Global Partnerships' : 'الشركات العالمية والتوسّع'}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {t('aboutPlatformPara4')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-slate-200 mb-12">
          {[{ val: '24+', en: 'Years Experience', ar: 'سنة خبرة' }, { val: '92%', en: 'Job Placement', ar: 'نسبة التوظيف' }, { val: '80%', en: 'Practical', ar: 'تطبيق عملي' }, { val: '300+', en: 'Hours Training', ar: 'ساعة تدريبية' }].map((s, i) => (
            <div key={i}><div className="text-2xl sm:text-3xl font-black text-brand-blue">{s.val}</div><div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">{lang === 'en' ? s.en : s.ar}</div></div>
          ))}
        </div>

        <div className="pb-12 border-b border-slate-200 mb-12">
          <h3 className="text-xl font-extrabold text-slate-900 mb-6">{lang === 'en' ? 'Our Core Pillars' : 'ركائزنا الأساسية'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ icon: <Users size={18} />, en: 'Youth Empowerment', ar: 'تمكين الشباب', descEn: 'High-value technical skills opening direct employment pathways.', descAr: 'مهارات فنية عالية القيمة تفتح مسارات توظيف مباشرة.' }, { icon: <Award size={18} />, en: 'Capacity Building', ar: 'بناء القدرات', descEn: 'Standardizing inspection protocols across local workshops.', descAr: 'توحيد بروتوكولات الفحص وإجراءات السلامة المهنية.' }, { icon: <Zap size={18} />, en: 'Clean Energy Transition', ar: 'الانتقال للطاقة النظيفة', descEn: 'Preparing the workforce for hybrid and EV diagnostics.', descAr: 'تمهيد الطريق لصيانة سيارات الطاقة النظيفة بشكل آمن.' }].map((p, i) => (
              <div key={i} className="border border-slate-200 p-6 hover:border-brand-blue/30 transition-all">
                <div className="p-2.5 bg-blue-50 text-brand-blue w-11 h-11 flex items-center justify-center mb-4">{p.icon}</div>
                <h4 className="font-extrabold text-sm text-slate-900 mb-2">{lang === 'en' ? p.en : p.ar}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{lang === 'en' ? p.descEn : p.descAr}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono font-bold text-brand-blue tracking-widest uppercase block">{lang === 'en' ? 'OFFICIAL CREDENTIALS' : 'الاعتمادات الرسمية'}</span>
            <h3 className="text-xl font-black text-slate-900">{lang === 'en' ? 'Accreditations & Certificates' : 'حقيبة الاعتمادات والشهادات'}</h3>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">{lang === 'en' ? 'Explore our TVET registrations, official stamps, and certificate models.' : 'تعرف على اعتماداتنا لدى الجهات الرسمية واستعرض نماذج الشهادات.'}</p>
          </div>
          <button onClick={() => navigateTo('accreditations')} className="bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs px-8 py-4 transition-all cursor-pointer border-none whitespace-nowrap flex items-center gap-2">
            <span>{lang === 'en' ? 'View Accreditations' : 'عرض الاعتمادات'}</span><ArrowRight size={14} />
          </button>
        </div>

        <div>
          <div className="space-y-2 mb-8">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">{lang === 'en' ? 'ELITE TECHNICAL MENTORS' : 'كادر المهندسين والمعلمين'}</span>
            <h3 className="text-xl font-extrabold text-slate-900">{lang === 'en' ? 'Learn From Industry Experts' : 'تلقّ الخبرة من رواد السوق'}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-xl mx-auto">
            {[
              { img: '/trainers/Mohammed Made.jpeg', nameEn: 'Eng. Mohammed Made', nameAr: 'المهندس محمد ماضي', roleEn: 'Lead Hybrid Engineer & Battery Specialist', roleAr: 'كبير مهندسي الهايبرد وأخصائي بطاريات الجهد العالي', expEn: '20 Years', expAr: '٢٠ عاماً' },
              { img: '/trainers/Omar Arqawe.jpeg', nameEn: 'Trainer Amer Arqawe', nameAr: 'المدرب عامر عرقاوي', roleEn: 'Electric & Hybrid Vehicle Mechanics Trainer', roleAr: 'مدرب في مجال ميكانيك السيارات الكهربائية والهجينة ومتخصص في المحركات', expEn: '14 Years', expAr: '١٤ عاماً' }
            ].map((m, idx) => (
              <div key={idx} className="border border-slate-200 flex flex-col justify-between group hover:border-brand-blue/30 transition-all">
                <div>
                  <div className="aspect-[3/4] w-full bg-slate-100 overflow-hidden"><img src={m.img} alt={lang === 'en' ? m.nameEn : m.nameAr} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /></div>
                  <div className="p-5">
                    <h4 className="font-extrabold text-sm text-slate-950">{lang === 'en' ? m.nameEn : m.nameAr}</h4>
                    <span className="text-[10px] font-mono font-bold text-brand-blue tracking-wider block mt-1">{lang === 'en' ? m.roleEn : m.roleAr}</span>
                  </div>
                </div>
                <div className="px-5 pb-5 border-t border-slate-100 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{lang === 'en' ? 'EXPERIENCE:' : 'الخبرة:'}</span>
                  <span className="text-slate-900 font-bold">{lang === 'en' ? m.expEn : m.expAr}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
