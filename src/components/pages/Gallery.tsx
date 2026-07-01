import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image, Video, Play, Eye } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface GalleryProps {
  setVideoModalOpen: (open: boolean) => void;
  setActiveVideoUrl: (url: string) => void;
  setActiveAccreditation: (url: string | null) => void;
  setLightboxTitle: (title: string | null) => void;
  setLightboxDesc: (desc: string | null) => void;
}

const items = [

  {
    type: 'photo',
    titleAr: 'شرح المدرب في القاعة الصفية',
    titleEn: 'Trainer lecturing in the classroom',
    descAr: 'شرح تفاعلي على السبورة البيضاء.',
    descEn: 'Interactive explanation on the whiteboard.',
    url: '/gallery/whiteboard_lecture_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'الطلاب يفحصون بطارية الجهد العالي',
    titleEn: 'Students inspecting high voltage battery',
    descAr: 'دراسة خلايا وأجزاء بطارية الهايبرد.',
    descEn: 'Studying the cells and parts of the hybrid battery.',
    url: '/gallery/hv_battery_training_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'صورة جماعية للطلاب الخريجين',
    titleEn: 'Graduates group photo',
    descAr: 'صورة تذكارية للطلاب الحاصلين على الشهادات.',
    descEn: 'Commemorative photo of the certified graduates.',
    url: '/gallery/graduation_group_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'جهاز محاكاة الفحص والتشخيص',
    titleEn: 'Diagnostic simulator station',
    descAr: 'لوحة محاكاة إلكترونية لأغراض التعليم والتدريب.',
    descEn: 'Electronic simulator panel used for training.',
    url: '/gallery/diagnostic_equipment_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'فريق مهندسي ومدربي الأكاديمية',
    titleEn: 'Academy engineers and trainers',
    descAr: 'صورة جماعية لفريق العمل والتعليم.',
    descEn: 'Group photo of the working and teaching staff.',
    url: '/gallery/faculty_group_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'لحام لوحة إلكترونية للسيارة',
    titleEn: 'Soldering car electronic board',
    descAr: 'الطلاب يتدربون على لحام وإصلاح المكونات الدقيقة.',
    descEn: 'Students training on soldering and repairing components.',
    url: '/gallery/pcb_soldering_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'شرح عملي على شاسيه السيارة',
    titleEn: 'Practical lesson on car chassis',
    descAr: 'عرض أجزاء السيارة وتوصيلاتها للطلاب.',
    descEn: 'Showing car parts and connections to the students.',
    url: '/gallery/chassis_lecture_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'تجمع الطلاب أمام مبنى الأكاديمية',
    titleEn: 'Students outside the academy',
    descAr: 'صورة جماعية للطلاب خارج مقر التدريب.',
    descEn: 'Group photo of the students outside the academy.',
    url: '/gallery/students_outdoor_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'توصيل لوحات المحاكاة الكهربائية',
    titleEn: 'Wiring electrical simulator boards',
    descAr: 'الطلاب يتدربون على التوصيل ومحاكاة الدارات.',
    descEn: 'Students practicing wiring and circuit simulation.',
    url: '/gallery/electrical_board_1.jpg'
  },
  {
    type: 'photo',
    titleAr: 'تسليم شهادة التخرج لطالب',
    titleEn: 'Handing certificate to a student',
    descAr: 'لحظة استلام الشهادة المهنية المعتمدة.',
    descEn: 'Moment of receiving the accredited professional certificate.',
    url: '/gallery/certificate_handover_1.jpg'
  },
  // Videos
  {
    type: 'video',
    titleAr: 'فيديو فحص كمبيوتر السيارة OBD',
    titleEn: 'OBD diagnostic scan video',
    descAr: 'توضيح قراءة البيانات الحية على جهاز الفحص.',
    descEn: 'Demonstrating live data readings on the scanner.',
    url: '/gallery/obd_scanner_clip.mp4'
  },
  {
    type: 'video',
    titleAr: 'فيديو محاضرة نظرية في القاعة',
    titleEn: 'Classroom theory lecture video',
    descAr: 'شرح المعلم للمفاهيم أمام الطلاب.',
    descEn: 'Teacher explaining concepts in front of students.',
    url: '/gallery/classroom_lecture_clip.mp4'
  },
  {
    type: 'video',
    titleAr: 'فيديو التدريب العملي في الورشة',
    titleEn: 'Workshop practical training video',
    descAr: 'الطلاب يعملون ويتعاونون على صيانة السيارات.',
    descEn: 'Students working and collaborating on car maintenance.',
    url: '/gallery/workshop_practice_clip.mp4'
  },
  {
    type: 'video',
    titleAr: 'فيديو احتياطات السلامة للبطاريات',
    titleEn: 'Battery safety precautions video',
    descAr: 'استعراض التعامل الآمن مع خلايا الجهد العالي.',
    descEn: 'Showcasing secure handling of high voltage cells.',
    url: '/gallery/ev_safety_clip.mp4'
  }
];

export default function Gallery({
  setVideoModalOpen,
  setActiveVideoUrl,
  setActiveAccreditation,
  setLightboxTitle,
  setLightboxDesc
}: GalleryProps) {
  const { lang } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const filteredItems = items.filter(item => {
    return filter === 'all' || item.type === filter;
  });

  return (
    <motion.div
      key="gallery"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-50 text-slate-800 text-start font-sans min-h-screen pb-16"
    >
      {/* Hero Header */}
      <section className="relative py-20 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'MEDIA & GALLERY' : 'الوسائط والمعرض المرئي'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'Photos & Videos Gallery' : 'معرض الصور والفيديوهات'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {lang === 'en'
              ? 'Browse captured moments, student practical workspace setups, and live class tutorials from our Damascus campus.'
              : 'تصفح صوراً ميدانية ولقطات حية لتدريبات الطلاب، ومختبرات الفحص، وحفلات التخريج من حرمنا بدمشق.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* Filter Options */}
      <section className="py-6 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">

            {/* Format Filter (All/Photos/Videos) */}
            <div className="flex gap-3 bg-slate-100 p-1.5 rounded-full">
              {[
                { id: 'all', labelAr: 'الكل', labelEn: 'All Media' },
                { id: 'photo', labelAr: 'صور', labelEn: 'Photos' },
                { id: 'video', labelAr: 'فيديوهات', labelEn: 'Videos' }
              ].map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id as any)}
                  className={`px-6 py-2.5 font-bold text-xs transition-all border-none cursor-pointer rounded-full ${filter === btn.id
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                >
                  {lang === 'en' ? btn.labelEn : btn.labelAr}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-slate-400 text-sm font-medium">
                {lang === 'en' ? 'No items found matching the selected filters.' : 'لم يتم العثور على أي وسائط تطابق التصفية المحددة.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.type === 'video') {
                      setActiveVideoUrl(item.url);
                      setVideoModalOpen(true);
                    } else {
                      setActiveAccreditation(item.url);
                      setLightboxTitle(null);
                      setLightboxDesc(null);
                    }
                  }}
                  className="group border border-slate-200 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-950 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <video
                        src={item.url}
                        preload="metadata"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.url}
                        alt={lang === 'en' ? item.titleEn : item.titleAr}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                    )}

                    {item.type === 'video' ? (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/45 transition-all">
                        <div className="w-12 h-12 bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all transform group-hover:scale-110">
                          <Play size={20} className="fill-white text-white ml-0.5" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/0 flex items-center justify-center group-hover:bg-black/20 transition-all opacity-0 group-hover:opacity-100">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                          <Eye size={18} />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white p-1.5 rounded-lg text-xs flex items-center gap-1.5 font-mono">
                      {item.type === 'video' ? <Video size={12} /> : <Image size={12} />}
                      <span className="uppercase text-[9px] font-bold">
                        {lang === 'en' ? item.type : (item.type === 'video' ? 'فيديو' : 'صورة')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
