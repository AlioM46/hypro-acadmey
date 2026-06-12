import React, { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import { academyContent } from '../../data/academyContent';
import Skeleton from '../Skeleton';

const DynamicForm = lazy(() => import('../DynamicForm'));
const FAQSection = lazy(() => import('../FAQSection'));

interface ContactProps {
  activeCategory: 'student' | 'workshop' | 'dealer' | 'ngo';
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo') => void;
}

export default function Contact({ activeCategory, setActiveCategory }: ContactProps) {
  const { lang, t } = useTranslation();
  const contact = academyContent.contact;

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
                  {t('connectAdmissions')}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                  {t('contactPrompt')}
                </p>
              </div>

              {/* Contact Stack Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={contact.whatsapp}
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
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 bg-white hover:bg-slate-100 border border-slate-200 p-4 transition-all cursor-pointer group decoration-none"
                >
                  <div className="p-2.5 bg-blue-50 text-brand-blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block">{t('phoneCall')}</span>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-brand-blue transition-colors" dir="ltr">{contact.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 bg-white border border-slate-200 p-4">
                  <div className="p-2.5 bg-blue-50 text-brand-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold uppercase text-slate-400 block">{t('campusBase')}</span>
                    <span className="text-xs font-bold text-slate-700">{lang === 'en' ? contact.addressEn : contact.addressAr}</span>
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
                    {lang === 'en' ? 'Syria Main Campus' : 'مقر أكاديمية هايبـرو - سوريا'}
                  </h4>
                  <div className="text-xs text-slate-300 space-y-1.5 font-mono">
                    <div>GPS: 35.9322° N, 36.6339° E</div>
                    <div>{lang === 'en' ? 'Main Industrial Area' : 'المنطقة الصناعية'}</div>
                  </div>
                </div>
                {/* Clean vector mock map */}
                <div className="h-28 bg-white/5 border border-white/10 mt-6 relative z-10 flex items-center justify-center font-mono text-[10px] text-slate-400">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-15" />
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <div className="absolute w-2 h-2 bg-emerald-500 rounded-full" />
                  <span>{lang === 'en' ? 'Syria Campus Map Grid' : 'شبكة خرائط المقر - سوريا'}</span>
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
