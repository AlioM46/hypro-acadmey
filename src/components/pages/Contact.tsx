import React, { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { academyContent } from '../../data/academyContent';
import Skeleton from '../Skeleton';

const DynamicForm = lazy(() => import('../DynamicForm'));
const FAQSection = lazy(() => import('../FAQSection'));

interface ContactProps {
  activeCategory: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer';
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer') => void;
}

export default function Contact({ activeCategory, setActiveCategory }: ContactProps) {
  const { lang, t } = useTranslation();

  const cities = [
    {
      id: 'damascus',
      nameEn: 'Damascus',
      nameAr: 'دمشق',
      phone: '+963 11 224 8900',
      whatsapp: 'https://wa.me/963955408201',
      addressEn: 'Mezzeh Highway, Damascus, Syria',
      addressAr: 'أوتوستراد المزة، دمشق، سوريا',
      gps: '33.5138° N, 36.2765° E',
      locationEn: 'Damascus Central Hub',
      locationAr: 'المقر المركزي - المزة',
    },
    {
      id: 'aleppo',
      nameEn: 'Aleppo',
      nameAr: 'حلب',
      phone: '+963 21 445 7800',
      whatsapp: 'https://wa.me/963955408202',
      addressEn: 'Mogambo Street, Aleppo, Syria',
      addressAr: 'شارع الموكامبو، حلب، سوريا',
      gps: '36.2021° N, 37.1343° E',
      locationEn: 'Aleppo Service Point',
      locationAr: 'فرع الموكامبو للخدمات',
    },
    {
      id: 'idlib',
      nameEn: 'Syrian Interior',
      nameAr: 'الداخل السوري',
      phone: '+963 23 881 200',
      whatsapp: 'https://wa.me/963955408203',
      addressEn: 'Main Industrial Area, Syria',
      addressAr: 'سوريا - حي الضبيط، بجانب مسجد الفرقان،',
      gps: '35.9306° N, 36.6394° E',
      locationEn: 'Syrian Industrial Center',
      locationAr: 'مركز التدريب بالداخل السوري',
    },
    {
      id: 'homs',
      nameEn: 'Homs',
      nameAr: 'حمص',
      phone: '+963 31 221 4300',
      whatsapp: 'https://wa.me/963955408204',
      addressEn: 'Al-Hadara Street, Homs, Syria',
      addressAr: 'شارع الحضارة، حمص، سوريا',
      gps: '34.7324° N, 36.7137° E',
      locationEn: 'Homs Training Point',
      locationAr: 'مكتب التدريب والقبول - حمص',
    },
    {
      id: 'latakia',
      nameEn: 'Latakia',
      nameAr: 'اللاذقية',
      phone: '+963 41 891 3200',
      whatsapp: 'https://wa.me/963955408205',
      addressEn: 'Port Entrance Road, Latakia, Syria',
      addressAr: 'طريق مدخل المرفأ، اللاذقية، سوريا',
      gps: '35.5312° N, 35.7921° E',
      locationEn: 'Coast Diagnostics Branch',
      locationAr: 'فرع الساحل لتشخيص المركبات',
    }
  ];

  const [selectedCityId, setSelectedCityId] = React.useState('damascus');
  const activeCity = cities.find(c => c.id === selectedCityId) || cities[0];

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-white text-slate-800"
    >
      {/* Split 50/50 Contact Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200" id="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start animate-fade-in text-start">

            {/* Left: Contact stack & Map coordinates */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-bold font-mono tracking-wide uppercase font-sans">
                  <CheckCircle size={11} className="text-brand-blue" />
                  <span>{t('directChannels')}</span>
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight font-sans leading-tight text-slate-900">
                  {lang === 'en' ? 'Select Branch Office & Contact Info' : 'اختر الفرع ومعلومات الاتصال'}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                  {lang === 'en'
                    ? 'We have multiple operating centers in Syria. Choose your nearest city to view local phone numbers and WhatsApp advisors.'
                    : 'لدينا مراكز تشغيل وتدريب متعددة في سوريا. اختر مدينتك الأقرب لعرض أرقام التواصل ومستشاري القبول المباشرين.'}
                </p>
              </div>

              {/* City Switcher Buttons */}
              <div className="flex flex-wrap gap-1.5 bg-slate-200/60 p-1">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCityId(city.id)}
                    type="button"
                    className={`flex-1 text-center py-2 px-3 text-xs font-bold transition-all cursor-pointer border-none rounded-none ${selectedCityId === city.id
                      ? 'bg-brand-blue text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                  >
                    {lang === 'en' ? city.nameEn : city.nameAr}
                  </button>
                ))}
              </div>

              {/* Contact Stack Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={activeCity.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-white hover:bg-slate-100 border border-slate-200 p-4 transition-all cursor-pointer group decoration-none"
                >
                  <div className="p-2.5 bg-emerald-50 text-emerald-600">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block">{t('officialWhatsApp')}</span>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-brand-blue transition-colors">{t('chatInstantly')}</span>
                  </div>
                </a>

                <a
                  href={`tel:${activeCity.phone}`}
                  className="flex items-center gap-3 bg-white hover:bg-slate-100 border border-slate-200 p-4 transition-all cursor-pointer group decoration-none"
                >
                  <div className="p-2.5 bg-blue-50 text-brand-blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block">{t('phoneCall')}</span>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-brand-blue transition-colors" dir="ltr">{activeCity.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 bg-white border border-slate-200 p-4">
                  <div className="p-2.5 bg-blue-50 text-brand-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block">{t('campusBase')}</span>
                    <span className="text-xs font-bold text-slate-700">{lang === 'en' ? activeCity.addressEn : activeCity.addressAr}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white border border-slate-200 p-4">
                  <div className="p-2.5 bg-slate-100 text-slate-500">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block">{t('officeHours')}</span>
                    <span className="text-xs font-bold text-slate-700">{t('officeHoursDays')}</span>
                  </div>
                </div>
              </div>

              {/* Coordinates & styled Map block */}
              <div className="bg-brand-blue text-white p-6 border border-slate-200 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-3 relative z-10 text-start">
                  <span className="text-[9px] font-mono tracking-widest text-blue-300 uppercase block font-bold">
                    {lang === 'en' ? 'GEOGRAPHIC COORDINATES' : 'الإحداثيات الجغرافية والموقع'}
                  </span>
                  <h4 className="text-base font-extrabold font-sans">
                    {lang === 'en' ? activeCity.locationEn : activeCity.locationAr}
                  </h4>
                  <div className="text-xs text-slate-300 space-y-1.5 font-mono">
                    <div>GPS: {activeCity.gps}</div>
                    <div>{lang === 'en' ? activeCity.addressEn : activeCity.addressAr}</div>
                  </div>
                </div>
                {/* Clean vector mock map */}
                <div className="h-28 bg-white/5 border border-white/10 mt-6 relative z-10 flex items-center justify-center font-mono text-[10px] text-slate-400">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-15" />
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full" />
                  <span>{lang === 'en' ? `${activeCity.nameEn} Campus Map Grid` : `شبكة خرائط فرع ${activeCity.nameAr}`}</span>
                </div>
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
            </div>

            {/* Right: The main Dynamic Registration Form */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8">
              <Suspense fallback={<Skeleton />}>
                <DynamicForm
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section - same as homepage */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <FAQSection />
          </Suspense>
        </div>
      </section>
    </motion.div>
  );
}
