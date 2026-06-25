import React from 'react';
import { motion } from 'motion/react';
import { Building2, MessageSquare, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const partnerLogos = [
  { id: "toyota", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/200px-Toyota.svg.png", name: "Toyota" },
  { id: "mercedes", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/150px-Mercedes-Logo.svg.png", name: "Mercedes-Benz" },
  { id: "bmw", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/150px-BMW.svg.png", name: "BMW" },
  { id: "hyundai", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png", name: "Hyundai" },
  { id: "kia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.png/200px-Kia-logo.png", name: "KIA" },
  { id: "nissan", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo_2020.svg/200px-Nissan_logo_2020.svg.png", name: "Nissan" },
];

interface PartnershipsProps {
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team' | 'b2b' | 'gallery' | 'news' | 'volunteers' | 'legal') => void;
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo') => void;
}

export default function Partnerships({ navigateTo, setActiveCategory }: PartnershipsProps) {
  const { lang, t } = useTranslation();

  const partnershipChannels = [
    {
      titleAr: 'المنظمات والمؤسسات التنموية',
      titleEn: 'NGOs & Development Agencies',
      descAr: 'تمويل وتأهيل مجموعات الشباب وتجهيزهم لفرص العمل المستدامة.',
      descEn: 'Funding and qualifying youth cohorts for sustainable employment.'
    },
    {
      titleAr: 'الجامعات والمعاهد التقنية',
      titleEn: 'Universities & Technical Institutes',
      descAr: 'برامج تدريبية تطبيقية مشتركة لربط التعليم الأكاديمي بسوق العمل.',
      descEn: 'Applied technical curricula linking academic study to shop floors.'
    },
    {
      titleAr: 'الكراجات ومراكز الصيانة',
      titleEn: 'Garages & Maintenance Centers',
      descAr: 'استيعاب المتدربين للتدريب الميداني والتوظيف المباشر للخريجين.',
      descEn: 'Hosting trainees for hands-on internships and direct placements.'
    },
    {
      titleAr: 'مستوردو ومحال بيع السيارات',
      titleEn: 'Car Dealerships & Importers',
      descAr: 'تأهيل الفنيين لخدمة طرازات السيارات الكهربائية والهجينة الجديدة.',
      descEn: 'Training dealer technicians to diagnose new EV and Hybrid models.'
    },
    {
      titleAr: 'شركات البطاريات والطاقة',
      titleEn: 'Battery & Energy Companies',
      descAr: 'التعاون في نقل التكنولوجيا وإعادة تدوير وفحص خلايا الليثيوم.',
      descEn: 'Cooperating on lithium cell testing, rebuilds, and technology transfer.'
    },
    {
      titleAr: 'الجهات والمنظمات الدولية',
      titleEn: 'International Cooperations',
      descAr: 'تطبيق مشاريع ريادية في مجالات الطاقة المستدامة وصيانة المركبات.',
      descEn: 'Deploying pilot projects in green mobility and clean energy fields.'
    }
  ];

  return (
    <motion.div
      key="partnerships"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="py-16 bg-white text-slate-800 text-start font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-12 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
            <Building2 size={13} className="text-brand-blue" />
            <span>
              {lang === 'en' ? 'INSTITUTIONAL COLLABORATIONS' : 'الشركاء والتعاون المؤسساتي'}
            </span>
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {lang === 'en' ? 'Building Bridges of Alliance & Growth' : 'بناء شراكات التمكين والتعاون المهني'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
            {lang === 'en'
              ? 'We establish formal protocols with development organizations, craft institutions, and car importers to standardize training frameworks.'
              : 'نؤسس اتفاقيات عمل رسمية مع المنظمات التنموية، والمؤسسات الحرفية، ومستوردي السيارات لتوحيد أطر التدريب.'}
          </p>
        </div>

        {/* 6 Partners Channels */}
        <div className="pb-12 border-b border-slate-200 mb-12">
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {lang === 'en' ? 'COOPERATION ENTITIES' : 'أطراف الشراكة والتعاون'}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              {lang === 'en' ? 'Who We Cooperate With' : 'مع من نتعاون؟'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipChannels.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-brand-blue/30 transition-all flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-2">
                    {lang === 'en' ? item.titleEn : item.titleAr}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    {lang === 'en' ? item.descEn : item.descAr}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{lang === 'en' ? 'COOPERATION MODEL:' : 'نوع التعاون:'}</span>
                  <span className="text-brand-blue font-bold">{lang === 'en' ? 'Active Protocol' : 'بروتوكول نشط'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9 Cooperation Scope Grid */}
        <div className="pb-12 border-b border-slate-200 mb-12">
          <div className="max-w-3xl space-y-2 mb-8">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {lang === 'en' ? 'COOPERATION SCOPE' : 'آفاق العمل المشترك'}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              {t('partnershipHowTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-brand-blue/30 transition-all flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-brand-blue font-bold flex items-center justify-center text-xs">
                  {num}
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium mt-1">
                  {t(`partnershipList${num}` as any)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Tagline Banner */}
        <div className="bg-brand-blue text-white p-8 border border-brand-blue-hover rounded-2xl relative overflow-hidden shadow-xl mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <span className="inline-block bg-brand-blue/20 text-blue-300 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-blue/30">
              {lang === 'en' ? 'OUR VISION' : 'رؤيتنا الاستراتيجية'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-sans leading-tight">
              {t('partnershipVisionTitle')}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
              {t('partnershipVisionDesc')}
            </p>
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-400 tracking-wider block">HYPRO ACADEMY</span>
              <span className="text-base sm:text-lg font-black text-brand-blue block mt-1 font-sans">
                {t('partnershipSlogan')}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        {/* CTA Panel */}
        <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {lang === 'en' ? 'PARTNERSHIP OUTREACH' : 'تواصل الشراكات'}
            </span>
            <h3 className="text-xl font-black text-slate-900">
              {lang === 'en' ? 'Ready to Build a Partnership?' : 'جاهزون لبناء شراكة؟'}
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed font-medium">
              {lang === 'en'
                ? 'We provide transparent project tracking, audit-compliant monitoring reports, student logs, and certified trade exams. Contact us to discuss your cooperation framework.'
                : 'نوفر تقارير تتبع شفافة، ومعايير تقييم جودة متوافقة مع متطلبات التدقيق الدولي، وتوثيقاً كاملاً. تواصل معنا لمناقشة إطار التعاون.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs px-8 py-4 transition-all cursor-pointer border-none whitespace-nowrap flex items-center gap-2"
            >
              <span>{lang === 'en' ? 'Inquire Partnership' : 'طلب مناقشة شراكة'}</span>
              <ArrowRight size={14} />
            </button>
            <a
              href="https://wa.me/962796616549"
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs px-8 py-4 transition-all border border-slate-200 whitespace-nowrap flex items-center gap-2 decoration-none"
            >
              <MessageSquare size={14} className="text-emerald-600" />
              <span>{lang === 'en' ? 'WhatsApp Direct' : 'واتساب مباشر'}</span>
            </a>
          </div>
        </div>

        {/* Partner Logos Grid (Hidden) */}

      </div>
    </motion.div>
  );
}
