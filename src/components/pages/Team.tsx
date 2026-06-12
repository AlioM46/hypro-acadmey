import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { academyContent } from '../../data/academyContent';

interface TeamProps {
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
}

export default function Team({ navigateTo }: TeamProps) {
  const { lang, t } = useTranslation();

  return (
    <motion.div
      key="team"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-white text-slate-800 text-start"
    >
      {/* HERO / HEADER */}
      <section className="relative py-16 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'EXPERT INSTRUCTORS' : 'كادر الموجهين والخبراء'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-sans text-white">
            {lang === 'en' ? 'Our Elite Engineering Mentors' : 'نخبة من كبار مهندسي صيانة السيارات والالكترون'}
          </h1>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-3xl font-sans mt-3 font-medium">
            {lang === 'en'
              ? 'Learn directly from veterans with over 20+ years of active bench-repair experience. Our team provides hands-on diagnostic mastery on hybrid power systems, electric motor drivetrains, and electronic calibrations.'
              : 'تلقَّ المعرفة والخبرة من مهندسين مرجعيين يتنفسون المهنة في قلب السوق الحقيقية، وينقلون خبرتهم الممتدة لعقود مباشرةً إليك عبر تدريب تطبيقي مكثف.'}
          </p>
        </div>
        {/* Background layout mesh */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* Mentors Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {academyContent.team.map((member, idx) => {
              const memberImages = [
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80",
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80"
              ];

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 transition-all hover:border-slate-355 flex flex-col group"
                  style={{ borderRadius: '0px' }}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative border-b border-slate-200">
                    <img
                      src={memberImages[idx]}
                      alt={lang === 'en' ? member.nameEn : member.nameAr}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                    {/* Tenure tag */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-mono text-[9px] font-bold tracking-widest px-3 py-1.5 border border-white/10 uppercase">
                      {lang === 'en' ? member.experienceEn : member.experienceAr}
                    </div>
                  </div>

                  {/* Member info */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold block uppercase">
                        {lang === 'en' ? member.roleEn : member.roleAr}
                      </span>
                      <h3 className="text-lg font-black text-slate-900">
                        {lang === 'en' ? member.nameEn : member.nameAr}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium font-sans">
                        {lang === 'en' ? member.bioEn : member.bioAr}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* High conversion CTA card */}
          <div className="mt-16 bg-[#232f5b] text-white p-8 md:p-12 border border-slate-800 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-black font-sans leading-tight">
                {lang === 'en' ? 'Start Your Technical Journey With Experts' : 'ابدأ رحلة احترافك المهني مع كبار المهندسين'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                {lang === 'en'
                  ? 'Lock in your direct training slot under our veteran engineering mentors. Spaces are highly limited per cohort to ensure absolute hands-on lab supervision.'
                  : 'احجز مقعدك الفني للتدريب العملي المباشر تحت إشراف نخبة من الخبراء والمهندسين. المقاعد محدودة جداً لضمان المتابعة الفردية.'}
              </p>
              <button
                onClick={() => navigateTo('contact')}
                className="bg-white text-brand-blue hover:bg-slate-100 font-extrabold text-sm px-8 py-4 transition-all cursor-pointer border-none inline-flex items-center gap-2"
              >
                <span>{t('bookSeatNow')}</span>
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

        </div>
      </section>
    </motion.div>
  );
}
