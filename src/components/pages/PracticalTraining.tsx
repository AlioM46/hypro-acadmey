import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Eye } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const galleryItems = [
  {
    id: 'gal-1',
    category: 'students',
    titleEn: 'Students Dismantling Toyota Hybrid Batteries',
    titleAr: 'تفكيك بطارية تويوتا هايبريد في ورشة التدريب',
    descEn: 'Trainees learning component isolation, safety inspection, and battery busbar cleaning.',
    descAr: 'المتدربون يتعلمون عزل الأجزاء، الفحص الأمني، وتنظيف الخطوط النحاسية الموصلة للبطارية.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'gal-2',
    category: 'videos',
    titleEn: 'High-Voltage Battery Cell Dismantling & Safety (Video)',
    titleAr: 'فيديو تفكيك وفحص خلايا بطارية الفولت العالي',
    descEn: 'Watch our students perform module extraction under absolute insulated parameters.',
    descAr: 'فيديو يوضح سحب خلايا البطارية تحت معايير عزل وفولتية صارمة.',
    image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=800&q=80',
    videoUrl: '/hero-video.mp4',
    type: 'video'
  },
  {
    id: 'gal-3',
    category: 'tools',
    titleEn: 'Computerized Battery Diagnostic Balancer',
    titleAr: 'جهاز توازن وشحن وتفريغ بطاريات الهايبريد',
    descEn: 'Automated cell testing bench measuring internal resistance and modular health parameters.',
    descAr: 'طاولة قياس وتفريغ الخلايا المؤتمتة لفحص قيم المقاومة الداخلية وحالة الخلايا بدقة.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'gal-4',
    category: 'workshop',
    titleEn: 'Main Diagnostic Workshop & Lift Area',
    titleAr: 'صالة الصيانة والفحص الكبرى بالأكاديمية',
    descEn: 'Live view of the workshop with multiple vehicles undergoing system scans and repair.',
    descAr: 'لقطة حية لصالة الورشة والسيارات الحقيقية التي يجري تشخيصها.',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'gal-5',
    category: 'tools',
    titleEn: '1000V Certified Double-Insulated Toolsets',
    titleAr: 'العدد والمفكات المعزولة المخصصة للجهود العالية',
    descEn: 'Professional VDE-certified tools and isolation equipment used for safe high-voltage operations.',
    descAr: 'مجموعة العدة والقفازات المعزولة المعتمدة للتعامل مع الدوائر الكهربائية بجهد يصل إلى 1000 فولت.',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'gal-6',
    category: 'videos',
    titleEn: 'Live Engine Diagnostic Scan and Tuning (Video)',
    titleAr: 'فيديو تشخيص أعطال المحركات والبرمجة بالكمبيوتر',
    descEn: 'Demonstrating dynamic sensors calibration and reading wave signals.',
    descAr: 'شرح حي لمعايرة الحساسات وفحص موجات الإشارة بالكومبيوتر والسكوب.',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-mechanical-technician-inspecting-a-car-engine-42247-large.mp4',
    type: 'video'
  },
  {
    id: 'gal-7',
    category: 'students',
    titleEn: 'Trainees Practicing Digital Multimeter Readings',
    titleAr: 'الطلاب يتدربون على قياس قيم الجهد المستمر والمتناوب',
    descEn: 'Hands-on training of circuit isolation checking and checking low voltage control links.',
    descAr: 'تدريب الطلاب على قياس مقاومة العزل وفحص خطوط التحكم بجهد منخفض.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  },
  {
    id: 'gal-8',
    category: 'workshop',
    titleEn: 'Hybrid and EV Powertrain Diagnostic Desk',
    titleAr: 'لوحة التحكم والتشخيص المبرمج لمنظومة الهايبرد',
    descEn: 'Testing the inverter modules and high voltage cooling loops on live setups.',
    descAr: 'اختبار كفاءة المبدلات ومضخات التبريد الكهربائية على سيارات ومجسمات حية.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    type: 'photo'
  }
];

interface PracticalTrainingProps {
  setVideoModalOpen: (open: boolean) => void;
  setActiveVideoUrl: (url: string) => void;
  setActiveAccreditation: (url: string | null) => void;
  setLightboxTitle: (title: string | null) => void;
  setLightboxDesc: (desc: string | null) => void;
}

export default function PracticalTraining({
  setVideoModalOpen,
  setActiveVideoUrl,
  setActiveAccreditation,
  setLightboxTitle,
  setLightboxDesc
}: PracticalTrainingProps) {
  const { lang } = useTranslation();
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'students' | 'videos' | 'tools' | 'workshop'>('all');

  return (
    <motion.div
      key="practical-training"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-white"
    >
      {/* PRACTICAL & FIELD TRAINING GALLERY SECTION */}
      <section className="py-16 bg-white border-b border-slate-200 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {lang === 'en' ? 'PRACTICAL APPLICATION' : 'التدريب العملي (لا كلام.. بل تطبيق حقيقي باليد)'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === 'en' ? 'Step Inside Our High-Voltage Facilities' : 'شاهد بيئة العمل والأجهزة وتطبيقات طلابنا'}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
              {lang === 'en'
                ? 'We bypass dry slides and textbooks. Trainees immediately handle live hybrid battery banks, diagnostics tools, and customer vehicles.'
                : 'تجاوزنا التلقين والكلام النظري الجاف. يشاهد المصلحون المتدربون ويتعاملون مباشرة مع بنك خلايا النحاس، أجهزة القياس والفحص، وسيارات عملاء حقيقية.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 flex-row">
            {[
              { id: 'all', labelEn: 'All Gallery', labelAr: 'معرض الصور والفيديوهات' },
              { id: 'students', labelEn: 'Students in Action', labelAr: 'الطلاب أثناء التطبيق' },
              { id: 'videos', labelEn: 'Field Videos', labelAr: 'فيديوهات ميدانية حية' },
              { id: 'tools', labelEn: 'Tools & Equipment', labelAr: 'المعدات والأجهزة' },
              { id: 'workshop', labelEn: 'Real Workshop', labelAr: 'صور حقيقية للورشة' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setGalleryFilter(tab.id as any)}
                className={`px-5 py-2.5 border text-xs font-extrabold font-sans tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                  galleryFilter === tab.id
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'bg-slate-50 text-slate-650 hover:bg-slate-100 border-slate-200'
                }`}
                style={{ borderRadius: '0px' }}
              >
                {lang === 'en' ? tab.labelEn : tab.labelAr}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems
              .filter(item => galleryFilter === 'all' || item.category === galleryFilter)
              .map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.type === 'video') {
                      setActiveVideoUrl(item.videoUrl || '');
                      setVideoModalOpen(true);
                    } else {
                      setActiveAccreditation(item.image);
                      setLightboxTitle(lang === 'en' ? item.titleEn : item.titleAr);
                      setLightboxDesc(lang === 'en' ? item.descEn : item.descAr);
                    }
                  }}
                  className="group relative overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-950 cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={lang === 'en' ? item.titleEn : item.titleAr}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-60 group-hover:opacity-85"
                  />

                  {/* Media Type Overlay */}
                  {item.type === 'video' ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/45 transition-colors duration-300">
                      <div className="w-14 h-14 bg-white text-brand-blue flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-brand-blue/10">
                        <Play size={20} className="fill-brand-blue text-brand-blue ml-1" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 group-hover:bg-slate-950/40 transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <div className="w-12 h-12 bg-white text-brand-blue flex items-center justify-center border border-slate-200">
                        <Eye size={18} className="text-brand-blue" />
                      </div>
                    </div>
                  )}

                  {/* Captions Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent p-4 pt-10 text-start">
                    <span className="text-[9px] font-mono tracking-widest text-slate-400 block uppercase mb-1">
                      {item.category === 'students' && (lang === 'en' ? 'Students in Action' : 'الطلاب أثناء التطبيق')}
                      {item.category === 'videos' && (lang === 'en' ? 'Field Video Clip' : 'فيديو التدريب الميداني')}
                      {item.category === 'tools' && (lang === 'en' ? 'Tools & Equipment' : 'الأجهزة والمعدات')}
                      {item.category === 'workshop' && (lang === 'en' ? 'Real Workshop' : 'صالة الورشة الحية')}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight font-sans line-clamp-1">
                      {lang === 'en' ? item.titleEn : item.titleAr}
                    </h4>
                    <p className="text-[10px] text-slate-300 leading-relaxed font-sans mt-1 line-clamp-2">
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
