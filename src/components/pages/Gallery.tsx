import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image, Video, Play, ExternalLink } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function Gallery() {
  const { lang } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const items = [
    {
      type: 'photo',
      titleAr: 'مختبر فحص بطاريات الفولت العالي',
      titleEn: 'High-Voltage Battery Testing Lab',
      descAr: 'المتدربون يحللون خلايا بطارية تويوتا هجين بشكل آمن.',
      descEn: 'Trainees analyzing Toyota hybrid battery cells safely.',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'video',
      titleAr: 'شرح عملي لنظام الانفرتر والتحويل',
      titleEn: 'Inverter & Conversion Live Lesson',
      descAr: 'فيديو يوضح مبدأ تدفق تيار الحركة في محرك الهايبرد.',
      descEn: 'Video illustrating the powertrain flow of hybrid motors.',
      url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'photo',
      titleAr: 'فحص كمبيوتر السيارات OBD-II',
      titleEn: 'Computer Diagnostics OBD-II Session',
      descAr: 'قراءة بيانات الأعطال الحية وحساسات المحرك مباشرة.',
      descEn: 'Reading live fault codes and diagnostic scanning modules.',
      url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'photo',
      titleAr: 'أدوات ومعدات السلامة المعزولة CAT III',
      titleEn: 'CAT III Insulated Safety Equipment',
      descAr: 'استعراض معدات حماية الفنيين المعزولة حتى 1000 فولت.',
      descEn: 'Showcasing technician protective suits rated up to 1000V.',
      url: 'https://images.unsplash.com/photo-1530124560072-aab8cf10dc33?auto=format&fit=crop&w=800&q=80'
    },
    {
      type: 'video',
      titleAr: 'تخريج الدفعة الأولى من مهندسي صيانة الهايبرد',
      titleEn: 'First Cohort Graduation Ceremony',
      descAr: 'اللقطات الختامية لتسليم الشهادات المعتمدة بحضور النقابة.',
      descEn: 'Closing moments of state-licensable diploma distributions.',
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);

  return (
    <motion.div
      key="gallery"
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
            {lang === 'en' ? 'MEDIA & PHOTOS' : 'الوسائط والمعرض المرئي'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'Photos & Videos Gallery' : 'معرض الصور والفيديوهات'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {lang === 'en'
              ? 'Browse captured moments, student practical workspace setups, and live class tutorials.'
              : 'تصفح صوراً ميدانية ولقطات حية لتدريبات الطلاب، ومختبرات الفحص، وحفلات التخريج.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* Filter Options */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 mb-8 justify-center border-b border-slate-150 pb-4">
            {[
              { id: 'all', labelAr: 'الكل', labelEn: 'All' },
              { id: 'photo', labelAr: 'صور', labelEn: 'Photos' },
              { id: 'video', labelAr: 'فيديوهات', labelEn: 'Videos' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-5 py-2.5 font-bold text-xs transition-all border-none cursor-pointer rounded-full ${
                  filter === btn.id
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang === 'en' ? btn.labelEn : btn.labelAr}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="group border border-slate-200 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-150">
                  <img
                    src={item.url}
                    alt={lang === 'en' ? item.titleEn : item.titleAr}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all">
                        <Play size={20} className="fill-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white p-1.5 rounded-lg text-xs flex items-center gap-1.5 font-mono">
                    {item.type === 'video' ? <Video size={13} /> : <Image size={13} />}
                    <span className="uppercase text-[9px] font-bold">{item.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-950">
                    {lang === 'en' ? item.titleEn : item.titleAr}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1.5 font-medium leading-relaxed">
                    {lang === 'en' ? item.descEn : item.descAr}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
