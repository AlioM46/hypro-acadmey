import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function News() {
  const { lang } = useTranslation();

  const newsItems = [
    {
      date: '2026-06-10',
      authorAr: 'مكتب الإعلام',
      authorEn: 'Media Office',
      titleAr: 'إطلاق الدورة التدريبية المكثفة لأنظمة الهايبرد والهجين',
      titleEn: 'Launching the Intensive Hybrid Diagnostics Course',
      descAr: 'بدء استقبال متدربي الفصل الجديد للتعامل العملي مع بطاريات ودوائر السيارات الحديثة.',
      descEn: 'Starting academic registrations for our live, hands-on Toyota high-voltage circuit lab.',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    },
    {
      date: '2026-05-28',
      authorAr: 'لجنة التقييم',
      authorEn: 'Evaluation Committee',
      titleAr: 'توقيع اتفاقية تعاون مشترك لتشغيل الخريجين في سوريا',
      titleEn: 'Signing Joint Placement Agreement in Syria',
      descAr: 'شراكة جديدة مع كبرى ورشات صيانة السيارات لتسهيل توظيف أوائل الخريجين مباشرة.',
      descEn: 'A fresh B2B alliance signed to coordinate hiring dossiers directly with repair shops.',
      img: 'https://images.unsplash.com/photo-1521791136364-728647526959?auto=format&fit=crop&w=800&q=80'
    },
    {
      date: '2026-05-15',
      authorAr: 'التعليم التقني',
      authorEn: 'Technical Board',
      titleAr: 'ورشة عمل حول معايير عزل وحماية الفولت العالي',
      titleEn: 'Workshop on High-Voltage Insulation & Safety Standards',
      descAr: 'ندوة فنية لشرح حماية CAT III وكيفية استخدام الملابس المعزولة وتجنب أخطار الصعق.',
      descEn: 'Safety seminar focusing on insulation rules and handling 1000V rated multimeters.',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <motion.div
      key="news"
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
            {lang === 'en' ? 'BLOG & JOURNAL' : 'المركز الإعلامي والأنشطة'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'News & Events' : 'الأخبار والفعاليات والأنشطة'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {lang === 'en'
              ? 'Stay updated with academy milestones, vocational seminars, and student success features.'
              : 'تابع أخبارنا المستمرة، وإعلانات التسجيل، وندوات التطوير التكنولوجي والمهني.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* News Feed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, idx) => (
              <article
                key={idx}
                className="group border border-slate-200 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-slate-150">
                    <img
                      src={item.img}
                      alt={lang === 'en' ? item.titleEn : item.titleAr}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {lang === 'en' ? item.authorEn : item.authorAr}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-950 mb-2 leading-snug">
                      {lang === 'en' ? item.titleEn : item.titleAr}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                      {lang === 'en' ? item.descEn : item.descAr}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button className="text-brand-blue hover:text-brand-blue-hover text-xs font-bold transition-all border-none bg-transparent cursor-pointer flex items-center gap-1.5 p-0">
                    <span>{lang === 'en' ? 'Read More' : 'اقرأ المزيد'}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
