import { useState, lazy, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Clock,
  Award,
  CheckCircle,
  MessageSquare,
  Send,
  Layers,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Building2,
  Handshake,
  Users,
  Calendar,
  CheckCircle2,
  Cpu,
  Menu,
  X,
  Battery,
  Zap,
  Settings,
  Play,
  Eye
} from 'lucide-react';

import { academyContent } from './data/academyContent';
import { useTranslation } from './hooks/useTranslation';
import Skeleton from './components/Skeleton';
import Logo from './components/Logo';

const InteractivePowertrain = lazy(() => import('./components/InteractivePowertrain'));
const AudiencePathways = lazy(() => import('./components/AudiencePathways'));
const DynamicForm = lazy(() => import('./components/DynamicForm'));
const FAQSection = lazy(() => import('./components/FAQSection'));

type CategoryType = 'student' | 'workshop' | 'dealer' | 'ngo';
type PageType = 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations';

export default function App() {
  const { lang, setLang, t, tObj, tVal } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('student');

  const getPageFromPath = (): PageType => {
    const path = window.location.pathname.replace(/^\//, '');
    const validPages: PageType[] = ['home', 'about', 'programs', 'testing-lab', 'partnerships', 'contact', 'practical-training', 'accreditations'];
    return validPages.includes(path as PageType) ? (path as PageType) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromPath);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);

  // Lightbox / Video Modal States
  const [activeAccreditation, setActiveAccreditation] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>('/hero-video.mp4');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'students' | 'videos' | 'tools' | 'workshop'>('all');
  const [lightboxTitle, setLightboxTitle] = useState<string | null>(null);
  const [lightboxDesc, setLightboxDesc] = useState<string | null>(null);

  // Quick Registration States
  const [quickRegName, setQuickRegName] = useState('');
  const [quickRegPhone, setQuickRegPhone] = useState('');
  const [quickRegGov, setQuickRegGov] = useState('');

  const handleQuickRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickRegName || !quickRegPhone || !quickRegGov) {
      alert(lang === 'en' ? 'Please fill in all fields.' : 'يرجى ملء جميع الحقول.');
      return;
    }
    const message = lang === 'en'
      ? `Hello Hypro Academy, I would like to register:\nName: ${quickRegName}\nPhone: ${quickRegPhone}\nGovernorate: ${quickRegGov}`
      : `مرحباً أكاديمية هايبـرو، أود التسجيل:\nالاسم: ${quickRegName}\nالهاتف: ${quickRegPhone}\nالمحافظة: ${quickRegGov}`;
    const whatsappUrl = `https://wa.me/963955408202?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Curriculum Accordion State
  const [programAccordionOpen, setProgramAccordionOpen] = useState<string | null>('ev-tech');
  const [contactFaqOpen, setContactFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY >= 400);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (page: PageType) => {
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', path);
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    // Scroll to top on direct page change
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const navigateToAndScroll = (page: PageType, elementId: string) => {
    navigateTo(page);
    setTimeout(() => {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const stats = academyContent.stats;
  const meta = academyContent.meta;
  const contact = academyContent.contact;
  const modules = academyContent.modules;

  const learnItems = [
    {
      icon: Battery,
      titleEn: "Battery Systems",
      titleAr: "أنظمة البطاريات",
      descEn: "Hybrid & EV battery construction, cells testing, state-of-health diagnostics, module replacement, and computerized battery balancing.",
      descAr: "دراسة وتفكيك بطاريات الهايبريد والكهرباء، فحص المقاومة الفنية للخلايا، تشخيص الأعطال واستبدال الأجزاء التالفة والموازنة المؤتمتة.",
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Wrench,
      titleEn: "Troubleshooting & Fault Finding",
      titleAr: "تشخيص الأعطال والعيوب",
      descEn: "Isolating short circuits, tracking parasitic draws, deciphering complex DTC trouble codes, and mapping wiring schematics.",
      descAr: "تتبع الأعطال الكهربائية المعقدة والمتقطعة، قراءة وتحليل رموز الأعطال DTC، قراءة المخططات الهندسية وحصر المشاكل الفنية.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Cpu,
      titleEn: "Hybrid Systems & Inverters",
      titleAr: "أنظمة الهايبرد والهجين",
      descEn: "Planetary gear synchronization, high-voltage inverter coolant management, traction motor operations, and regenerative breaking loops.",
      descAr: "أجزاء الحركة الهجينة ونواقل الحركة، مبدلات الفولت العالي وعزلها، مضخة تبريد العاكس (Inverter)، ومكابح تدوير الطاقة.",
      image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: CheckCircle2,
      titleEn: "Electronic Scanning & Calibration",
      titleAr: "الفحص الإلكتروني وبرمجة العقول",
      descEn: "OBD-II live data analysis, actuator testing, throttle adaptation, key coding, and electronic control unit (ECU) flashing.",
      descAr: "التعامل الاحترافي مع أجهزة فحص السيارات وكشف الكمبيوتر OBD-II، قراءة البيانات الحية، برمجة البوابات الإلكترونية، وتهيئة العقول والـ ECU.",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: ShieldCheck,
      titleEn: "Electrical Safety & Isolated Tools",
      titleAr: "السلامة الكهربائية للفولت العالي",
      descEn: "Working with up to 1000V DC safely, removal of MSD high-voltage loops, using double-insulated tools, and personal protective clothing (PPC).",
      descAr: "بروتوكولات الأمان للجهود الفائقة التي تصل إلى 1000 فولت، فك قواطع الأمان MSD، استخدام المفكات والعدد المعزولة مهنياً.",
      image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Settings,
      titleEn: "Practical Maintenance Operations",
      titleAr: "الصيانة العملية والتطبيق الميداني",
      descEn: "Regular maintenance, direct fluid changes of hybrid gearboxes, replacing cells, and working on live customer vehicles under supervision.",
      descAr: "تغيير سوائل وزيوت الفولت العالي لعلب التروس الهجينة، الصيانة الوقائية السريعة، وتجربة إصلاح سيارات زبائن فعلية تحت ظروف العمل الميدانية.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const partners = [
    { logo: "TOYOTA CENTER", categoryEn: "Diagnostics Center", categoryAr: "مركز صيانة معتمد" },
    { logo: "BOSCH SERVICE", categoryEn: "Automotive Company", categoryAr: "شركة أنظمة سيارات" },
    { logo: "TVET JORDAN", categoryEn: "Official Collaboration", categoryAr: "اعتماد مهني رسمي" },
    { logo: "HYUNDAI DIAGS", categoryEn: "Workshop Partner", categoryAr: "مركز تشخيص عيوب" },
    { logo: "DENSO PARTS", categoryEn: "HV Parts Supplier", categoryAr: "مورد بطاريات وأجزاء" },
    { logo: "SY AUTO UNION", categoryEn: "Craft Syndicate", categoryAr: "اتحاد نقابات الحرف" },
    { logo: "AL-KHEDMA ORG", categoryEn: "NGO Partner", categoryAr: "شريك تنموي إنساني" },
    { logo: "HV SOLUTIONS", categoryEn: "Equipment Supplier", categoryAr: "مورد عتاد معزول" }
  ];

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

  const whys = [
    {
      icon: Wrench,
      titleEn: '80% Practical Shop Hours',
      titleAr: '80% تدريب وتطبيق عملي حقيقي',
      descEn: 'Spend your time using proper professional insulated tools, battery diagnostics, and engine scopes.',
      descAr: 'تقضي جلّ ساعاتك وأنت ترتدي لباس العزل الآمن، تفحص بوردات السيارات، وتعمل على قياس أعطال ومحركات الفولت العالي في إدلب.',
    },
    {
      icon: Award,
      titleEn: '20+ Year Veteran Instructors',
      titleAr: 'مدربون من قادة المهنة والخبراء',
      descEn: 'Mentors are authorized workshop leaders who solve complex diagnostic faults daily on premium brands.',
      descAr: 'يتولى تدريبك كبار مهندسي صيانة السيارات والالكترون في سوريا، الحاضرون في قلب سوق صيانة وفحوص السيارات الحديثة.',
    },
    {
      icon: ShieldCheck,
      titleEn: 'National and Agency Trust',
      titleAr: 'اعتماد رسمي وثقة الوكلاء الصارمة',
      descEn: 'We standardise vocational repair skills to qualify graduates for regional dealerships and ministries.',
      descAr: 'شهاداتنا دبلوم مهني تفتح لك التراخيص، الانضمام لنقابات الحرفيين، والتثبيت في الورش المهنية الكبرى كفني وفاحص معتمد.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* STATIC/RELATIVE HEADER */}
      <header
        className={`z-50 px-4 sm:px-6 lg:px-8 ${currentPage === 'home'
            ? 'absolute top-0 left-0 right-0 bg-transparent border-b border-white/30 py-6 text-white'
            : 'sticky top-0 bg-brand-blue border-b border-white/20 py-4 text-white'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Logo */}
          <Logo
            onClick={() => navigateTo('home')}
            imgClassName="h-16 sm:h-22"
            className="cursor-pointer hover:opacity-90 transition-opacity"
          />

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => navigateTo('home')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'home' ? 'text-white font-extrabold border-b-2 border-white' : 'text-white/85 hover:text-sky-400 font-semibold'}`}
            >
              {t('home')}
            </button>

            {/* About Us with Dropdown */}
            <div className="relative group py-2">
              <button
                onClick={() => navigateTo('about')}
                className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 flex items-center gap-1.5 ${currentPage === 'about'
                    ? 'text-white font-extrabold border-b-2 border-white'
                    : 'text-white/85 hover:text-sky-400 font-semibold'
                  }`}
              >
                <span>{t('about')}</span>
                <span className="text-[9px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-64 z-50 hidden group-hover:flex flex-col">
                <div className="bg-white text-slate-800 rounded-none border border-slate-200 py-0 w-full flex flex-col text-center shadow-lg">
                  <button
                    onClick={() => navigateToAndScroll('about', 'vision-goals')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('visionGoals')}
                  </button>
                  <button
                    onClick={() => navigateToAndScroll('about', 'our-faculty')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-b border-slate-100 bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('ourFaculty')}
                  </button>
                  <button
                    onClick={() => navigateTo('accreditations')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('accreditations')}
                  </button>
                  <button
                    onClick={() => navigateTo('practical-training')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-slate-100 bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('practicalTrainingTitle')}
                  </button>
                  <button
                    onClick={() => navigateTo('testing-lab')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-slate-100 bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('testingLab')}
                  </button>
                </div>
              </div>
            </div>

            {/* Programs with Dropdown */}
            <div className="relative group py-2">
              <button
                onClick={() => navigateTo('programs')}
                className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 flex items-center gap-1.5 ${currentPage === 'programs'
                    ? 'text-white font-extrabold border-b-2 border-white'
                    : 'text-white/85 hover:text-sky-400 font-semibold'
                  }`}
              >
                <span>{t('programs')}</span>
                <span className="text-[9px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-72 z-50 hidden group-hover:flex flex-col">
                <div className="bg-white text-slate-800 rounded-none border border-slate-200 py-0 w-full flex flex-col text-center shadow-lg">
                  <button
                    onClick={() => navigateToAndScroll('programs', 'ev-tech')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('evTechDiploma')}
                  </button>
                  <button
                    onClick={() => navigateToAndScroll('programs', 'hybrid-sys')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-b border-slate-100 bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('hybridDiploma')}
                  </button>
                  <button
                    onClick={() => navigateToAndScroll('programs', 'elec-diag')}
                    className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                  >
                    {t('diagnosticsCourse')}
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo('partnerships')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'partnerships' ? 'text-white font-extrabold border-b-2 border-white' : 'text-white/85 hover:text-sky-400 font-semibold'}`}
            >
              {t('partnerships')}
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'contact' ? 'text-white font-extrabold border-b-2 border-white' : 'text-white/85 hover:text-sky-400 font-semibold'}`}
            >
              {t('contactUsNav')}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              id="lang-toggle-button"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold text-[10px] sm:text-xs px-3 py-2 flex items-center gap-1.5 transition-all cursor-pointer uppercase font-sans"
            >
              <Globe size={13} className="text-blue-200" />
              <span>{lang === 'en' ? 'العربية (AR)' : 'ENGLISH (EN)'}</span>
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`hidden sm:flex font-extrabold text-xs px-4 py-2 items-center gap-1.5 transition-all cursor-pointer border ${currentPage !== 'home'
                  ? 'bg-white text-brand-blue hover:bg-slate-50 border-transparent'
                  : 'bg-brand-blue hover:bg-brand-blue-hover text-white border-white/20'
                }`}
            >
              <Clock size={12} />
              <span>{t('registerNow')}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden p-3 text-blue-100 hover:text-white focus:outline-none transition-colors border-none bg-transparent cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

        </div>
      </header>

      {/* STICKY SLIDE-DOWN HEADER (Home page only) */}
      {currentPage === 'home' && (
        <header
          className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 bg-brand-blue/95 backdrop-blur-md border-b border-white/20 py-3.5 text-white transform transition-all duration-300 ease-out ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
            }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

            {/* Logo */}
            <Logo
              onClick={() => navigateTo('home')}
              imgClassName="h-14 sm:h-18"
              className="cursor-pointer hover:opacity-90 transition-opacity"
            />

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
              <button
                onClick={() => navigateTo('home')}
                className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'home' ? 'text-white font-extrabold border-b-2 border-white' : 'text-white/85 hover:text-sky-400 font-semibold'}`}
              >
                {t('home')}
              </button>

              {/* About Us dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => navigateTo('about')}
                  className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 flex items-center gap-1.5 ${currentPage === 'about'
                      ? 'text-white font-extrabold border-b-2 border-white'
                      : 'text-white/85 hover:text-sky-400 font-semibold'
                    }`}
                >
                  <span>{t('about')}</span>
                  <span className="text-[9px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-64 z-50 hidden group-hover:flex flex-col">
                  <div className="bg-white text-slate-800 rounded-none border border-slate-200 py-0 w-full flex flex-col text-center shadow-lg">
                    <button
                      onClick={() => navigateToAndScroll('about', 'vision-goals')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('visionGoals')}
                    </button>
                    <button
                      onClick={() => navigateToAndScroll('about', 'our-faculty')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-b border-slate-100 bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('ourFaculty')}
                    </button>
                    <button
                      onClick={() => navigateTo('accreditations')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('accreditations')}
                    </button>
                    <button
                      onClick={() => navigateTo('practical-training')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-slate-100 bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('practicalTrainingTitle')}
                    </button>
                    <button
                      onClick={() => navigateTo('testing-lab')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-slate-100 bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('testingLab')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Programs dropdown */}
              <div className="relative group py-2">
                <button
                  onClick={() => navigateTo('programs')}
                  className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 flex items-center gap-1.5 ${currentPage === 'programs'
                      ? 'text-white font-extrabold border-b-2 border-white'
                      : 'text-white/85 hover:text-sky-400 font-semibold'
                    }`}
                >
                  <span>{t('programs')}</span>
                  <span className="text-[9px] opacity-75 group-hover:rotate-180 transition-transform duration-200">▼</span>
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-72 z-50 hidden group-hover:flex flex-col">
                  <div className="bg-white text-slate-800 rounded-none border border-slate-200 py-0 w-full flex flex-col text-center shadow-lg">
                    <button
                      onClick={() => navigateToAndScroll('programs', 'ev-tech')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('evTechDiploma')}
                    </button>
                    <button
                      onClick={() => navigateToAndScroll('programs', 'hybrid-sys')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-t border-b border-slate-100 bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('hybridDiploma')}
                    </button>
                    <button
                      onClick={() => navigateToAndScroll('programs', 'elec-diag')}
                      className="px-6 py-4 hover:bg-slate-50 text-slate-800 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                    >
                      {t('diagnosticsCourse')}
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigateTo('partnerships')}
                className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'partnerships' ? 'text-white font-extrabold border-b-2 border-white' : 'text-white/85 hover:text-sky-400 font-semibold'}`}
              >
                {t('partnerships')}
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'contact' ? 'text-white font-extrabold border-b-2 border-white' : 'text-white/85 hover:text-sky-400 font-semibold'}`}
              >
                {t('contactUsNav')}
              </button>
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                id="lang-toggle-button-sticky"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold text-[10px] sm:text-xs px-3 py-2 flex items-center gap-1.5 transition-all cursor-pointer uppercase font-sans"
              >
                <Globe size={13} className="text-blue-200" />
                <span>{lang === 'en' ? 'العربية (AR)' : 'ENGLISH (EN)'}</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="hidden sm:flex font-extrabold text-xs px-4 py-2 items-center gap-1.5 transition-all cursor-pointer border bg-white text-brand-blue hover:bg-slate-50 border-transparent"
              >
                <Clock size={12} />
                <span>{t('registerNow')}</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex lg:hidden p-3 text-blue-100 hover:text-white focus:outline-none transition-colors border-none bg-transparent cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>

          </div>
        </header>
      )}

      {/* Mobile Menu Slide-in Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop dim overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900 z-40 lg:hidden"
            />

            {/* Drawer panel (slides from right) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.35 }}
              className="fixed top-0 right-0 bottom-0 h-full w-[290px] sm:w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between text-slate-800 lg:hidden"
            >
              {/* Header */}
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                <Logo
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('home');
                  }}
                  imgClassName="h-10 sm:h-12"
                  className="cursor-pointer"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-brand-blue p-1 border-none bg-transparent cursor-pointer transition-colors"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow overflow-y-auto px-4 py-6 space-y-2 flex flex-col text-start">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('home'); }}
                  className={`py-2.5 px-4 text-start text-sm font-bold border-none transition-all cursor-pointer ${currentPage === 'home' ? 'bg-blue-50 text-brand-blue font-extrabold' : 'bg-transparent text-slate-650 hover:bg-slate-50 hover:text-brand-blue'}`}
                >
                  {t('home')}
                </button>

                {/* About Us with collapsible Mobile Sublinks */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className={`w-full py-2.5 px-4 flex items-center justify-between text-sm font-bold border-none transition-all cursor-pointer ${currentPage === 'about' ? 'bg-blue-50 text-brand-blue font-extrabold' : 'bg-transparent text-slate-650 hover:bg-slate-50 hover:text-brand-blue'}`}
                  >
                    <span>{t('about')}</span>
                    <span className={`text-[10px] transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <AnimatePresence>
                    {isMobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6 pr-4 border-l-2 border-slate-100 space-y-1.5 mt-1 flex flex-col items-start overflow-hidden font-sans"
                      >
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateToAndScroll('about', 'vision-goals'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('visionGoals')}
                        </button>
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateToAndScroll('about', 'our-faculty'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('ourFaculty')}
                        </button>
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateTo('accreditations'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('accreditations')}
                        </button>
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateTo('practical-training'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('practicalTrainingTitle')}
                        </button>
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateTo('testing-lab'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('testingLab')}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Programs with collapsible Mobile Sublinks */}
                <div className="space-y-1">
                  <button
                    onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                    className={`w-full py-2.5 px-4 flex items-center justify-between text-sm font-bold border-none transition-all cursor-pointer ${currentPage === 'programs' ? 'bg-blue-50 text-brand-blue font-extrabold' : 'bg-transparent text-slate-650 hover:bg-slate-50 hover:text-brand-blue'}`}
                  >
                    <span>{t('programs')}</span>
                    <span className={`text-[10px] transition-transform duration-200 ${isMobileProgramsOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <AnimatePresence>
                    {isMobileProgramsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6 pr-4 border-l-2 border-slate-100 space-y-1.5 mt-1 flex flex-col items-start overflow-hidden font-sans"
                      >
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateToAndScroll('programs', 'ev-tech'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('evTechDiploma')}
                        </button>
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateToAndScroll('programs', 'hybrid-sys'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('hybridDiploma')}
                        </button>
                        <button
                          onClick={() => { setIsMobileMenuOpen(false); navigateToAndScroll('programs', 'elec-diag'); }}
                          className="py-1 text-slate-500 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer"
                        >
                          - {t('diagnosticsCourse')}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('partnerships'); }}
                  className={`py-2.5 px-4 text-start text-sm font-bold border-none transition-all cursor-pointer ${currentPage === 'partnerships' ? 'bg-blue-50 text-brand-blue font-extrabold' : 'bg-transparent text-slate-650 hover:bg-slate-50 hover:text-brand-blue'}`}
                >
                  {t('partnerships')}
                </button>
                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('contact'); }}
                  className={`py-2.5 px-4 text-start text-sm font-bold border-none transition-all cursor-pointer ${currentPage === 'contact' ? 'bg-blue-50 text-brand-blue font-extrabold' : 'bg-transparent text-slate-650 hover:bg-slate-50 hover:text-brand-blue'}`}
                >
                  {t('contactUsNav')}
                </button>
              </div>

              {/* Footer / CTA in Drawer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('contact');
                  }}
                  className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs py-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer border-none"
                >
                  <Clock size={12} />
                  <span>{t('registerNow')}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>



      {/* DYNAMIC ROUTER SECTION */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">

          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {/* HERO SCREEN CONTAINER */}
              <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-start bg-slate-950 text-white pt-32 lg:pt-40 pb-20 overflow-hidden border-b border-slate-800">
                {/* Background Video (Desktop/Tablet) */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Fallback Background Image (Mobile) */}
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                  alt="Hypro Automotive Technician diagnostic check"
                  className="absolute inset-0 w-full h-full object-cover z-0 md:hidden grayscale brightness-75"
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-slate-950/65 z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                  <div className="max-w-3xl space-y-6 text-start">

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-300 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-xs font-bold font-sans tracking-wide uppercase">
                        <Wrench size={12} />
                        <span>{t('heroBadge')}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white/5 text-slate-300 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold font-sans tracking-wide uppercase">
                        <Award size={12} />
                        <span>{t('heroBadge2')}</span>
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight font-sans text-white">
                      {t('heroTitlePart1')} <span className="text-blue-400">{t('heroTitlePart2')}</span>
                    </h1>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-medium">
                      {t('heroSubtitle')}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => navigateTo('contact')}
                        className="bg-white text-brand-blue hover:bg-slate-100 font-extrabold text-sm px-6 py-4 flex items-center justify-center gap-2 transition-all cursor-pointer border-none"
                      >
                        <Send size={15} />
                        <span>{t('bookSeatNow')}</span>
                      </button>

                      <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#232f5b] hover:bg-brand-blue-hover text-white border border-white/20 font-bold text-sm px-6 py-4 flex items-center justify-center gap-2 transition-all cursor-pointer decoration-none"
                      >
                        <MessageSquare size={14} className="text-emerald-450" />
                        <span>{t('talkAdvisor')}</span>
                      </a>

                      <button
                        onClick={() => setVideoModalOpen(true)}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-4 flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <Clock size={14} className="text-blue-300 rotate-90" />
                        <span>{t('watchWorkshopsNav')}</span>
                      </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 items-center text-xs text-slate-400 font-sans font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-blue-400" />
                        <span>{t('syndicateStandards')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-blue-400" />
                        <span>{t('secureVerify')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-blue-400" />
                        <span>{t('practicalFocus')}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* PARTNER LOGOS INFINITE SLIDER */}
              <section className="bg-slate-100 py-6 border-b border-slate-200 overflow-hidden relative z-20" dir="ltr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-start flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase">
                    {lang === 'en' ? 'OUR COOPERATION PARTNERS' : 'شركاء التدريب والتوظيف'}
                  </span>
                  <span className="text-[9px] font-sans text-slate-500">
                    {lang === 'en' ? 'Companies • Centers • Suppliers • Collaborations' : 'شركات ومراكز • موردين • جهات تعاون رسمي'}
                  </span>
                </div>
                <div className="relative w-full overflow-hidden flex items-center py-2">
                  <div className="flex animate-marquee whitespace-nowrap gap-8 items-center">
                    {partners.concat(partners).map((partner, idx) => (
                      <div key={idx} className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200/60 shadow-sm whitespace-nowrap select-none hover:border-slate-350 transition-colors">
                        <div className="w-2.5 h-2.5 bg-brand-blue" />
                        <span className="text-xs font-bold text-slate-700 tracking-wider uppercase font-mono">{partner.logo}</span>
                        <span className="text-[9px] px-1.5 py-0.5 bg-slate-150 text-slate-500 font-sans tracking-wide">
                          {lang === 'en' ? partner.categoryEn : partner.categoryAr}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CORE STATISTICS TICKER PANEL */}
              <section className="bg-white border-b border-slate-200 py-8 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="space-y-1 p-2 border-r last:border-0 border-slate-100 rtl:border-r-0 rtl:border-l rtl:last:border-r-0 rtl:last:border-l-0">
                        <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight select-none">
                          {tObj(stat, 'value')}
                        </div>
                        <div className="text-xs font-bold text-slate-500 font-sans">
                          {tObj(stat, 'label')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* MARKET URGENCY COMPONENT (Why This Field Matters) */}
              <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'MARKET URGENCY REPORT' : 'تقرير حيوية السوق والفرص'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? 'Why Automotive Diagnostics Matters Now' : 'لماذا يعتبر فحص وبرمجة السيارات الفرصة الأقوى حالياً؟'}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                      {lang === 'en' 
                        ? 'The global and regional automotive industry is going through a rapid technical revolution. Traditional mechanical repairs are decaying as vehicles become rolling computers.' 
                        : 'يمر قطاع صيانة السيارات بالشمال السوري والمنطقة بثورة برمجية وإلكترونية غير مسبوقة. يتلاشى الميكانيك التقليدي لصالح الأنظمة الذكية وفحص الكمبيوتر.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
                    <div className="p-8 bg-white border-b sm:border-b-0 sm:border-r border-slate-200 text-start">
                      <div className="text-4xl font-black text-brand-blue tracking-tight font-sans">85%</div>
                      <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
                        {lang === 'en' ? 'Global EV/Hybrid Shift' : 'التحول العالمي للسيارات الذكية'}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {lang === 'en' 
                          ? 'Expected share of new cars using hybrid/electric platforms by 2030.' 
                          : 'الحصة المتوقعة للسيارات الكهربائية والهجينة في الأسواق الإقليمية بحلول عام 2030.'}
                      </p>
                    </div>

                    <div className="p-8 bg-white border-b sm:border-b-0 lg:border-r border-slate-200 text-start">
                      <div className="text-4xl font-black text-brand-accent tracking-tight font-sans">-70%</div>
                      <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
                        {lang === 'en' ? 'Mechanical Parts Decay' : 'تراجع صيانة الميكانيك التقليدي'}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {lang === 'en' 
                          ? 'Fewer moving parts means traditional mechanical jobs are shrinking fast.' 
                          : 'المحركات والبطاريات الحديثة تحتوي على قطع ميكانيكية أقل، مما يعجل باندثار الصيانة التقليدية.'}
                      </p>
                    </div>

                    <div className="p-8 bg-white border-b sm:border-r border-slate-200 text-start">
                      <div className="text-4xl font-black text-brand-blue tracking-tight font-sans">#1</div>
                      <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
                        {lang === 'en' ? 'Early-Mover Advantage' : 'الريادة والسبق التجاري'}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {lang === 'en' 
                          ? 'Be the first certified diagnostics workshop in your area to capture high-margin clients.' 
                          : 'كن الأول في منطقتك بامتلاك شهادة رسمية وعتاد معزول لصيانة بطاريات وعقول الهايبرد الكهربائية.'}
                      </p>
                    </div>

                    <div className="p-8 bg-white text-start">
                      <div className="text-4xl font-black text-brand-blue tracking-tight font-sans">4.2x</div>
                      <h4 className="font-extrabold text-sm text-slate-800 mt-3 font-sans">
                        {lang === 'en' ? 'Increased Diagnostic Demand' : 'تضاعف الطلب على فنيي الكمبيوتر'}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {lang === 'en' 
                          ? 'Dealerships and workshops pay premium salaries for certified scan-tool specialists.' 
                          : 'الوكالات والمراكز الكبرى تتنافس لدفع رواتب عالية للفنيين القادرين على فك الشفرات وقراءة المخططات.'}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ALTERNATING IMAGE & TEXT FEATURES */}
              <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                  {/* Row 1: Image Left, Text Right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=500&q=50"
                        alt="Hands-on training"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4 text-start">
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
                        {t('altRow1Tag')}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                        {t('altRow1Title')}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {t('altRow1Desc')}
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Text Left, Image Right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-4 text-start md:order-1 order-2">
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
                        {t('altRow2Tag')}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                        {t('altRow2Title')}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {t('altRow2Desc')}
                      </p>
                    </div>
                    <div className="relative overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100 md:order-2 order-1">
                      <img
                        src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=500&q=50"
                        alt="Accredited training"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Row 3: Image Left, Text Right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=500&q=50"
                        alt="Employment placement"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4 text-start">
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
                        {t('altRow3Tag')}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                        {t('altRow3Title')}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {t('altRow3Desc')}
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* WHAT YOU WILL LEARN SECTION */}
              <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'SKILLS & SYLLABUS' : 'ماذا ستتعلم؟ المهارات الأساسية'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? '6 Core Pillars of Advanced Diagnostics' : '٦ محاور رئيسية لاحتراف الصيانة الفنية'}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                      {lang === 'en'
                        ? 'Our intensive training program maps out the six most demanded skills in the automotive repair market today.'
                        : 'يغطي برنامجنا التدريبي المحاور الستة الأكثر طلباً في سوق العمل وصيانة السيارات الحديثة.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learnItems.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={idx}
                          className="group relative overflow-hidden border border-slate-200 aspect-[16/10] bg-[#232f5b] flex flex-col justify-end p-6 transition-all duration-300"
                        >
                          {/* Background Image with Dark Overlay */}
                          <div className="absolute inset-0 z-0">
                            <img
                              src={item.image}
                              alt={lang === 'en' ? item.titleEn : item.titleAr}
                              loading="lazy"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-30 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                          </div>

                          {/* Content Overlay */}
                          <div className="relative z-10 space-y-2 text-start">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-brand-blue border border-white/20 text-white transition-transform group-hover:scale-110 duration-300">
                                <IconComponent size={18} className="text-white" />
                              </div>
                              <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase">
                                {lang === 'en' ? `MODULE 0${idx + 1}` : `المحور 0${idx + 1}`}
                              </span>
                            </div>
                            
                            <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight font-sans">
                              {lang === 'en' ? item.titleEn : item.titleAr}
                            </h4>
                            
                            <p className="text-xs text-slate-350 leading-relaxed font-medium transition-colors duration-300 group-hover:text-white">
                              {lang === 'en' ? item.descEn : item.descAr}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* PRACTICAL GALLERY REMOVED FROM HOME PAGE (Moved to subpage) */}

              {/* CAREER PATHWAYS SECTION (What Happens After Graduation?) */}
              <section className="py-16 bg-white border-b border-slate-200 text-start">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'VOCATIONAL DEPLOYMENT MAP' : 'مخطط التمكين المهني والتوجيه'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? 'Your Career Placement Pathways' : 'أين ستعمل بعد التخرج؟ فرص ومسارات مضمونة'}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                      {lang === 'en' 
                        ? 'We build direct placement connections to three distinct career markets to ensure you transition immediately into higher-income jobs.' 
                        : 'نبني قنوات توظيف وتشبيك مباشرة مع ثلاثة أسواق رئيسية لنضمن انتقالك فوراً للعمل وكسب عوائد مالية مجزية.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Local Syria Market */}
                    <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-350 transition-colors">
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">01 / LOCAL PLACEMENT</span>
                        <h4 className="text-lg font-extrabold text-slate-900 font-sans">
                          {lang === 'en' ? 'Syrian Domestic Market' : 'السوق المحلي (الشمال السوري)'}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {lang === 'en' 
                            ? 'Authorized diagnostic hubs, localized NGO programs, fleet maintenance workshops, and independent garages in Idleb and rural zones.' 
                            : 'مراكز صيانة كمبيوتر السيارات الحديثة، برامج التدريب المدعومة، الورش الخاصة، وأسطول الصيانة للمؤسسات في إدلب وريفها.'}
                        </p>
                      </div>
                      <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">{lang === 'en' ? 'EST. SALARY:' : 'الراتب المتوقع:'}</span>
                        <span className="text-brand-blue font-bold">$300 - $600 / Mo</span>
                      </div>
                    </div>

                    {/* Regional Jordan & Gulf */}
                    <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-350 transition-colors">
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">02 / REGIONAL EXPORT</span>
                        <h4 className="text-lg font-extrabold text-slate-900 font-sans">
                          {lang === 'en' ? 'Jordan & Gulf Dealerships' : 'الأسواق الإقليمية (الأردن والخليج)'}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {lang === 'en' 
                            ? 'Direct employment recommendations into authorized dealership service bays, battery remanufacturing clinics, and private fleet networks.' 
                            : 'التوظيف المباشر بناءً على التوصية الحرفية في كبرى وكالات صيانة الهايبرد، وشركات النقل ومراكز تبريد وتجديد الخلايا الإقليمية.'}
                        </p>
                      </div>
                      <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">{lang === 'en' ? 'EST. SALARY:' : 'الراتب المتوقع:'}</span>
                        <span className="text-brand-blue font-bold">$1,200 - $2,500 / Mo</span>
                      </div>
                    </div>

                    {/* Entrepreneurial */}
                    <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-350 transition-colors">
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase block">03 / PRIVATE BUSINESS</span>
                        <h4 className="text-lg font-extrabold text-slate-900 font-sans">
                          {lang === 'en' ? 'Your Diagnostics Enterprise' : 'إنشاء مركزك المستقل الخاص'}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {lang === 'en' 
                            ? 'Establish your own diagnostics shop, hybrid battery cell rebuilding center, or mobile EV roadside scan service.' 
                            : 'تأسيس ورشة فحص الأعطال الخاصة بك، مركز صيانة وإعادة توازن بطاريات الهايبرد، أو تقديم خدمة الكشف المتنقلة.'}
                        </p>
                      </div>
                      <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">{lang === 'en' ? 'EST. NET PROFIT:' : 'الأرباح الصافية:'}</span>
                        <span className="text-brand-blue font-bold">$1,500 - $4,000 / Mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ALUMNI TRUST & SUCCESS METRICS */}
              <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'ALUMNI TRUST VERIFICATIONS' : 'شهادات خريجينا الموثقة'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? 'Verified Placement & Career Outcomes' : 'قصص نجاح مهنية حقيقية من السوق'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimony 1 */}
                    <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                            alt="Mustafa H."
                            className="w-16 h-16 object-cover border border-slate-200 grayscale"
                          />
                          <div>
                            <div className="font-extrabold text-sm text-slate-900">Mustafa H.</div>
                            <div className="text-[10px] text-slate-450 font-mono">Alumnus 2025</div>
                            <div className="flex gap-0.5 mt-1 text-xs text-amber-500 font-sans">
                              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium font-sans italic">
                          {lang === 'en'
                            ? '"I was a traditional mechanic doing simple oil changes. After 4 months at Hypro, I opened my own hybrid battery diagnostics center in Idleb. I earn three times more now."'
                            : '"كنت أعمل كميكانيكي تقليدي وبأجور بسيطة. بعد إتمام دبلوم الـ 4 أشهر في هايبـرو، افتتحت مركزي الخاص لصيانة بطاريات الهايبرد في المنطقة الصناعية، وتضاعف دخلي ٣ مرات."'}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-450 font-mono">
                        {lang === 'en' ? 'Diagnostic Shop Owner, Idleb' : 'مالك مركز صيانة، إدلب'}
                      </div>
                    </div>

                    {/* Testimony 2 */}
                    <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                            alt="Ahmad A."
                            className="w-16 h-16 object-cover border border-slate-200 grayscale"
                          />
                          <div>
                            <div className="font-extrabold text-sm text-slate-900">Ahmad A.</div>
                            <div className="text-[10px] text-slate-450 font-mono">Alumnus 2025</div>
                            <div className="flex gap-0.5 mt-1 text-xs text-amber-500 font-sans">
                              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium font-sans italic">
                          {lang === 'en'
                            ? '"I enrolled with zero background in electronics. Today I work as a senior Diagnostic Lead in an authorized agency workshop, easily decoding Toyota HV system faults."'
                            : '"التحقت بالأكاديمية بدون أي معرفة مسبقة بالكهرباء. اليوم أعمل كفني فحص وتشخيص رئيسي في مركز خدمة كبير، وأتعامل بثقة تامة مع أكواد السلامة وعقول السيارات."'}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-450 font-mono">
                        {lang === 'en' ? 'Dealership Scanner Specialist' : 'فني فحص وتشخيص وكالة'}
                      </div>
                    </div>

                    {/* Testimony 3 */}
                    <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
                            alt="Yaseen K."
                            className="w-16 h-16 object-cover border border-slate-200 grayscale"
                          />
                          <div>
                            <div className="font-extrabold text-sm text-slate-900">Yaseen K.</div>
                            <div className="text-[10px] text-slate-450 font-mono">Alumnus 2025</div>
                            <div className="flex gap-0.5 mt-1 text-xs text-amber-500 font-sans">
                              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium font-sans italic">
                          {lang === 'en'
                            ? '"The job placement program is 100% real. I passed my high-voltage trade test on Tuesday and started working in an NGO-sponsored fleet on Sunday."'
                            : '"برنامج التوظيف والتشبيك حقيقي وفعال. أنهيت امتحاني العملي النهائي يوم الثلاثاء، وبدأت العمل كفني صيانة معتمد لأسطول سيارات المنظمة صباح يوم الأحد."'}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-450 font-mono">
                        {lang === 'en' ? 'Fleet Maintenance Technician' : 'فني صيانة أسطول سيارات'}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* B2B & INSTITUTIONAL ALLIANCE HUB */}
              <section className="bg-white border-b border-slate-200 py-16 lg:py-20 text-start" id="b2b-alliance-hub">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
                      <Handshake size={13} className="text-brand-blue" />
                      <span>{t('b2bTag')}</span>
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans leading-tight">
                      {t('b2bTitle')}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl font-medium">
                      {t('b2bDesc')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between">
                      <div>
                        <div className="p-3 bg-blue-50 text-brand-blue w-12 h-12 flex items-center justify-center mb-4">
                          <Wrench size={20} />
                        </div>
                        <h4 className="font-bold text-base text-slate-900 font-sans">
                          {tVal({ en: 'Industrial Workshops & Garages', ar: 'أصحاب الورش ومراكز الصيانة' })}
                        </h4>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans font-medium">
                          {tVal({
                            en: 'Hire certified diagnostics technicians who can troubleshoot Toyota Hybrid or EV circuits independently, or upskill your current crew.',
                            ar: 'أمّن فنيين جاهزيين للعمل والنزول فورا للميدان، أو أرسل شغالين ورشتك إلينا لرفع كفاءتهم في فحص الهايبرد وصيانة عقول السيارات الحديثة.'
                          })}
                        </p>
                      </div>
                      <button
                        onClick={() => { setActiveCategory('workshop'); navigateTo('contact'); }}
                        className="mt-6 w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
                      >
                        <span>{t('workshopPartnerships')}</span>
                        <ArrowRight size={12} className="text-brand-blue" />
                      </button>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between">
                      <div>
                        <div className="p-3 bg-blue-50 text-brand-blue w-12 h-12 flex items-center justify-center mb-4">
                          <Building2 size={20} />
                        </div>
                        <h4 className="font-bold text-base text-slate-900 font-sans">
                          {tVal({ en: 'Car Importers & Agencies', ar: 'وكلاء ومستوردي السيارات' })}
                        </h4>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans font-medium">
                          {tVal({
                            en: 'Sponsor technical trainees and establish certified checking protocols for imported hybrid & electric vehicles.',
                            ar: 'سد النقص الحاد في صيانة مركبات الوكالة أو صالات السيارات التي تستورد تكنولوجيا هايبرد حديثة ببروتوكولات فحص معتمدة.'
                          })}
                        </p>
                      </div>
                      <button
                        onClick={() => { setActiveCategory('dealer'); navigateTo('contact'); }}
                        className="mt-6 w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
                      >
                        <span>{t('agencyProtocols')}</span>
                        <ArrowRight size={12} className="text-brand-blue" />
                      </button>
                    </div>

                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between">
                      <div>
                        <div className="p-3 bg-blue-50 text-brand-blue w-12 h-12 flex items-center justify-center mb-4">
                          <Users size={20} />
                        </div>
                        <h4 className="font-bold text-base text-slate-900 font-sans">
                          {tVal({ en: 'NGOs & Funding Sponsors', ar: 'المنظمات الإنسانية والمانحين بالمنطقة' })}
                        </h4>
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans font-medium">
                          {tVal({
                            en: 'Sponsor vocational youth cohorts with transparent reporting, audit logs, and verified employment rates.',
                            ar: 'ادعم برامج التمكين الاقتصادي، وموّل دورات تأهيل الشباب المتعطلين عن العمل لتخريج مهنيين حقيقيين بمسارات تشغيل موثقة.'
                          })}
                        </p>
                      </div>
                      <button
                        onClick={() => { setActiveCategory('ngo'); navigateTo('contact'); }}
                        className="mt-6 w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border-none"
                      >
                        <span>{t('ngoSupport')}</span>
                        <ArrowRight size={12} className="text-brand-blue" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* VOCATIONAL HIGHLIGHT CARDS & CREDENTIALS SECTION */}
              <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {t('whyTitle')}
                  </h3>
                  <p className="text-slate-500 mt-2 text-xs leading-relaxed max-w-xl mx-auto font-medium font-sans">
                    {t('whyDesc')}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-start pt-2">
                    {whys.map((w, idx) => {
                      const Icon = w.icon;
                      return (
                        <div key={idx} className="bg-white border border-slate-200 p-6 relative transition-all hover:border-slate-350">
                          <div className="p-3 bg-blue-50 text-brand-blue w-12 h-12 flex items-center justify-center mb-5">
                            <Icon size={20} />
                          </div>
                          <h4 className="font-bold text-lg text-slate-900 mb-2 font-sans">
                            {tObj(w, 'title')}
                          </h4>
                          <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium">
                            {tObj(w, 'desc')}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* QUICK NAV TO DETAILED SECTIONS */}
              <section className="py-16 bg-white text-center border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t('readyExplore')}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium font-sans">
                    {t('browseDetails')}
                  </p>
                  <button
                    onClick={() => navigateTo('programs')}
                    className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs px-8 py-3.5 transition-all cursor-pointer border-none inline-flex items-center gap-2"
                  >
                    <span>{t('viewCourseDetails')}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </section>

              {/* HIGH-CONVERSION QUICK REGISTRATION SECTION (Redesigned) */}
              <section className="bg-slate-900 py-16 border-t border-slate-800 relative overflow-hidden text-start">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left details column */}
                    <div className="lg:col-span-5 space-y-6">
                      <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold">
                        {lang === 'en' ? 'FAST REGISTRATION GATEWAY' : 'التسجيل السريع والمباشر'}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                        {lang === 'en' ? 'Secure Your Academic Seat in Seconds' : 'احجز مقعدك الدراسي في ثوانٍ معدودة'}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                        {lang === 'en' 
                          ? 'Fill out this simple form to lock in your seat registration. Clicking submit will automatically connect you with our Admissions Officer on WhatsApp for instant confirmation.' 
                          : 'أدخل معلوماتك الأساسية أدناه وسجل اهتمامك فوراً. نقرة واحدة ستنقلك إلى الواتساب الرسمي لتأكيد الحجز والتواصل المباشر مع مكتب القبول والتسجيل بالأكاديمية.'}
                      </p>
                      
                      {/* Checkmarks */}
                      <div className="space-y-2 pt-2 text-slate-300 text-xs font-sans">
                        <div className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-emerald-500" />
                          <span>{lang === 'en' ? 'Instant WhatsApp verification' : 'تأكيد وحجز فوري وموثق عبر واتساب'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-emerald-500" />
                          <span>{lang === 'en' ? 'Takes under 1 minute' : 'يستغرق ملء الطلب أقل من دقيقة واحدة'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-emerald-500" />
                          <span>{lang === 'en' ? 'No complicated requirements to start' : 'لا توجد شروط أو متمتطلبات معقدة للبدء'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Form Card Column */}
                    <div className="lg:col-span-7">
                      <div className="bg-white border border-slate-200 p-8 text-slate-800">
                        <form 
                          onSubmit={handleQuickRegister}
                          className="space-y-4"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Name field */}
                            <div className="space-y-1.5 text-start">
                              <label className="text-[10px] font-bold text-slate-500 uppercase font-mono tracking-wider">
                                {t('fullNameLabel')}
                              </label>
                              <input
                                type="text"
                                required
                                value={quickRegName}
                                onChange={(e) => setQuickRegName(e.target.value)}
                                placeholder={lang === 'en' ? 'John Doe' : 'الاسم الثنائي أو الثلاثي'}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-brand-blue transition-colors h-[46px]"
                              />
                            </div>

                            {/* Phone field */}
                            <div className="space-y-1.5 text-start">
                              <label className="text-[10px] font-bold text-slate-500 uppercase font-mono tracking-wider">
                                {t('phoneLabel')}
                              </label>
                              <input
                                type="tel"
                                required
                                value={quickRegPhone}
                                onChange={(e) => setQuickRegPhone(e.target.value)}
                                placeholder={lang === 'en' ? '+963-955-408-202' : 'رقم الهاتف مع الرمز'}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-brand-blue transition-colors h-[46px] text-start"
                              />
                            </div>

                            {/* Governorate field */}
                            <div className="space-y-1.5 text-start">
                              <label className="text-[10px] font-bold text-slate-500 uppercase font-mono tracking-wider">
                                {t('govLabel')}
                              </label>
                              <input
                                type="text"
                                required
                                value={quickRegGov}
                                onChange={(e) => setQuickRegGov(e.target.value)}
                                placeholder={lang === 'en' ? 'Idleb / Aleppo' : 'المحافظة أو المدينة'}
                                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-brand-blue transition-colors h-[46px]"
                              />
                            </div>
                          </div>

                          {/* Submit button */}
                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-4 flex items-center justify-center gap-2 transition-all cursor-pointer border-none shadow-md"
                            >
                              <MessageSquare size={16} className="text-white fill-white" />
                              <span>{lang === 'en' ? 'Confirm Seat via Direct WhatsApp' : 'احجز مقعدك الآن عبر واتساب مباشر'}</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
                
                {/* Background layout mesh */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </section>

            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-slate-800"
            >
              {/* Mission, Vision & Regional Impact */}
              <section className="py-20 md:py-24 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200" id="vision-goals">
                <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block mb-3">
                  {lang === 'en' ? 'OUR MISSION & REGIONAL IMPACT' : 'رسالتنا وأثرنا الإقليمي التنموي'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                  {lang === 'en' ? 'Transitioning Tech Labor Into Clean Energy' : 'تأهيل الكوادر الفنية نحو أنظمة الطاقة النظيفة'}
                </h2>
                <p className="text-slate-650 text-base sm:text-lg lg:text-xl leading-relaxed font-sans font-medium mb-6">
                  {lang === 'en'
                    ? 'Hypro Academy is built on the principles of institutional capacity building, economic youth empowerment, and technical modernization. By equipping local trainees with advanced diagnostics and high-voltage training, we create a vital bridge for sustainable employment across the region.'
                    : 'تأسست أكاديمية هايبـرو على ركائز بناء القدرات المؤسساتية، وتمكين الشباب اقتصادياً، وتحديث التعليم الفني والمهني. نسعى لنقل الكفاءات في الشمال السوري من الصيانة الميكانيكية البسيطة إلى تشخيص الأنظمة الهجينة والكهربائية المتطورة.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100 mt-12 text-start animate-fade-in">
                  <div>
                    <h4 className="font-extrabold text-base text-slate-950 font-sans">{lang === 'en' ? 'Youth Empowerment' : 'تمكين الشباب'}</h4>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{lang === 'en' ? 'Sponsoring youth with high-value technical skills that fight unemployment.' : 'توفير مهارات مهنية ذات دخل مرتفع تفتح آفاق التوظيف المباشر وتحارب البطالة.'}</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-950 font-sans">{lang === 'en' ? 'Capacity Building' : 'بناء القدرات'}</h4>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{lang === 'en' ? 'Standardizing inspection and safety protocols across local workshops.' : 'توحيد بروتوكولات الفحص وإجراءات السلامة المهنية لقطاع الصيانة المحلي.'}</p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-950 font-sans">{lang === 'en' ? 'Clean Ecosystems' : 'نقلة الطاقة النظيفة'}</h4>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{lang === 'en' ? 'Preparing the local automotive workforce for hybrid and electric networks.' : 'تمهيد الطريق لاعتماد صيانة سيارات الطاقة النظيفة بشكل آمن ومعتمد.'}</p>
                  </div>
                </div>
              </section>

              {/* Institutional Accreditations Panel Link */}
              <section className="py-16 bg-slate-50 border-b border-slate-200 text-start" id="accreditations-certs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-start max-w-2xl">
                      <span className="text-[10px] font-mono font-bold text-brand-blue tracking-widest uppercase block">
                        {lang === 'en' ? 'OFFICIAL CREDENTIALS' : 'الاعتمادات والتراخيص الرسمية'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                        {lang === 'en' ? 'Accreditations & Certificates Portfolio' : 'حقيبة الاعتمادات والشهادات المعتمدة للطلاب'}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">
                        {lang === 'en'
                          ? 'Explore our full TVET registrations, official Jordanian stamps, certificate models, and career worth in our dedicated certifications page.'
                          : 'تعرف بالتفصيل على اعتماداتنا لدى الهيئات الأردنية والجهات الرسمية، واستعرض نماذج الشهادات الممنوحة وقيمتها المهنية.'}
                      </p>
                    </div>
                    <button
                      onClick={() => navigateTo('accreditations')}
                      className="bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs px-8 py-4 transition-all cursor-pointer border-none whitespace-nowrap"
                    >
                      {lang === 'en' ? 'View Full Accreditations' : 'عرض الاعتمادات والشهادات كاملة'}
                    </button>
                  </div>
                </div>
              </section>

              {/* Faculty & Instructor Grid */}
              <section className="py-16 md:py-20 bg-white text-start" id="our-faculty">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'ELITE TECHNICAL MENTORS' : 'كادر المهندسين والمعلمين'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? 'Learn Directly from Industrial Experts' : 'تلقّ الخبرة من رواد السوق مباشرة'}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                      {lang === 'en'
                        ? 'Our engineers are master bench-repair technicians who solve complex high-voltage diagnostics and logic board circuits on a daily basis.'
                        : 'يعمل مدربونا يومياً في فحص وإصلاح بطاريات وعقول الهايبرد والسيارات الحديثة في الميدان، مما يضمن تلقيك لخبرة عملية حقيقية.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Faculty Member 1 */}
                    <div className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="aspect-[3/4] w-full bg-slate-100 overflow-hidden relative">
                          <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                            alt="Eng. Ammar Al-Ahmad" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-extrabold text-base text-slate-950 font-sans">
                            {lang === 'en' ? 'Eng. Ammar Al-Ahmad' : 'المهندس عمار الأحمد'}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-brand-blue tracking-wider block mt-1">
                            {lang === 'en' ? 'Lead EV Mentor & Founding Director' : 'المدير المؤسس والموجه الرئيسي لسيارات الكهرباء'}
                          </span>
                          <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                            {lang === 'en' 
                              ? 'Specialist in high-voltage micro-controller mapping, hybrid battery cell rebuilding, and ECU calibrations.'
                              : 'أخصائي هندسة الالكترون وبرمجة العقول الإلكترونية وإعادة موازنة خلايا الفولت العالي. يشرف على اختبارات فحص الكفاءة.'}
                          </p>
                        </div>
                      </div>
                      <div className="p-6 pt-0 border-t border-slate-150 mt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{lang === 'en' ? 'EXPERIENCE:' : 'الخبرة:'}</span>
                        <span className="text-slate-900 font-bold">{lang === 'en' ? '24 Years' : '٢٤ عاماً'}</span>
                      </div>
                    </div>

                    {/* Faculty Member 2 */}
                    <div className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="aspect-[3/4] w-full bg-slate-100 overflow-hidden relative">
                          <img 
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" 
                            alt="Eng. Basel Al-Sagheer" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-extrabold text-base text-slate-950 font-sans">
                            {lang === 'en' ? 'Eng. Basel Al-Sagheer' : 'المهندس باسل الصغير'}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-brand-blue tracking-wider block mt-1">
                            {lang === 'en' ? 'Senior Inverter & Calibration Instructor' : 'كبير مدربي صيانة مبدلات الطاقة والمحركات'}
                          </span>
                          <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                            {lang === 'en' 
                              ? 'Expert in European, Toyota, and Korean hybrid dual powertrains diagnostics with focus on workplace safety.'
                              : 'خبير تشخيص وحل أعطال العواكس (الأصناف الكورية واليابانية والأوروبية) مع تركيز صارم على بروتوكولات الأمان الفني.'}
                          </p>
                        </div>
                      </div>
                      <div className="p-6 pt-0 border-t border-slate-150 mt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{lang === 'en' ? 'EXPERIENCE:' : 'الخبرة:'}</span>
                        <span className="text-slate-900 font-bold">{lang === 'en' ? '18 Years' : '١٨ عاماً'}</span>
                      </div>
                    </div>

                    {/* Faculty Member 3 */}
                    <div className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="aspect-[3/4] w-full bg-slate-100 overflow-hidden relative">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" 
                            alt="Eng. Omar Al-Sloom" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-extrabold text-base text-slate-950 font-sans">
                            {lang === 'en' ? 'Eng. Omar Al-Sloom' : 'المهندس عمر السلوم'}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-brand-blue tracking-wider block mt-1">
                            {lang === 'en' ? 'B2B & Placement Liaison Officer' : 'مسؤول التشبيك والتنسيق مع المنظمات والورش'}
                          </span>
                          <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                            {lang === 'en' 
                              ? 'Manages placement pathways with NGO sponsors, local repair trade unions, and public agencies.'
                              : 'يتعاون مع المنظمات المانحة والمؤسسات الشريكة لبناء مسارات رعاية التدريب وخلق فرص عمل واثقة.'}
                          </p>
                        </div>
                      </div>
                      <div className="p-6 pt-0 border-t border-slate-150 mt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{lang === 'en' ? 'EXPERIENCE:' : 'الخبرة:'}</span>
                        <span className="text-slate-900 font-bold">{lang === 'en' ? '12 Years' : '١٢ عاماً'}</span>
                      </div>
                    </div>

                    {/* Faculty Member 4 */}
                    <div className="bg-slate-50 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="aspect-[3/4] w-full bg-slate-100 overflow-hidden relative">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" 
                            alt="Ustadh Munir Al-Khatib" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-extrabold text-base text-slate-950 font-sans">
                            {lang === 'en' ? 'Ustadh Munir Al-Khatib' : 'الأستاذ منير الخطيب'}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-brand-blue tracking-wider block mt-1">
                            {lang === 'en' ? 'Lab Director & Safety Controller' : 'مدير المختبر والمشرف الميداني للسلامة'}
                          </span>
                          <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                            {lang === 'en' 
                              ? 'Maintains insulated tools, HV diagnostic benches, and standard safety gear compliance.'
                              : 'يشرف على حداثة أجهزة الفحص، والعدّة المعزولة وصيانة البطاريات وحماية الطلاب من صدمات الفولط المرتفع.'}
                          </p>
                        </div>
                      </div>
                      <div className="p-6 pt-0 border-t border-slate-150 mt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{lang === 'en' ? 'EXPERIENCE:' : 'الخبرة:'}</span>
                        <span className="text-slate-900 font-bold">{lang === 'en' ? '15 Years' : '١٥ عاماً'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === 'programs' && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="py-16 bg-white text-slate-800 text-start"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-12 animate-fade-in">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
                    <Layers size={13} className="text-brand-blue" />
                    <span>{t('certifiedDiploma')}</span>
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                    {lang === 'en' ? 'Diplomas & Technical Curriculums' : 'الدبلومات والبرامج الفنية المعتمدة'}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {lang === 'en'
                      ? 'Detailed modular syllabuses mapping out core diagnostics competencies, contact hours, and practical work ratios.'
                      : 'مخططات برامجنا الدراسية المفصلة وجدول الساعات الأكاديمية والمهارات المقسمة حسب معايير التدريب المهني.'}
                  </p>
                </div>

                {/* Rigid Tabular Accordion */}
                <div className="space-y-6">
                  {/* EV Tech Diploma */}
                  <div className="border border-slate-200" id="ev-tech">
                    <button
                      onClick={() => setProgramAccordionOpen(programAccordionOpen === 'ev-tech' ? null : 'ev-tech')}
                      className="w-full bg-slate-50 p-6 flex justify-between items-center cursor-pointer border-none font-sans text-start"
                    >
                      <div>
                        <h4 className="text-lg font-black text-slate-900">{t('evTechDiploma')}</h4>
                        <span className="text-xs text-brand-blue font-mono font-bold mt-1 block">360 CONTACT HOURS | 80/20 PRACTICAL-TO-THEORETICAL RATIO</span>
                      </div>
                      <span className="text-slate-450 font-bold">{programAccordionOpen === 'ev-tech' ? '▲' : '▼'}</span>
                    </button>
                    {programAccordionOpen === 'ev-tech' && (
                      <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-start font-sans">
                          <thead>
                            <tr className="bg-brand-blue text-white text-start">
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Stage / Module' : 'المرحلة / المساق'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Syllabus & Competency Guidelines' : 'مخطط المنهج والمهارات المكتسبة'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Practical Hours' : 'ساعات العملي'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Theoretical Hours' : 'ساعات النظري'}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 1</td>
                              <td className="border border-slate-200 p-3">High-Voltage Net Loop, MSD Interlocks & Protective insulated gear safety drills.</td>
                              <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 2</td>
                              <td className="border border-slate-200 p-3">Three-Phase AC Traction Motors, Resolver Timing, Regenerative Braking calibrations.</td>
                              <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 3</td>
                              <td className="border border-slate-200 p-3">EV Inverters & DC-DC Converters Thermal management & Coolant loop troubleshooting.</td>
                              <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 4</td>
                              <td className="border border-slate-200 p-3">Structural battery architectures (Tesla, BYD cells) & Safe dismantling trade exam.</td>
                              <td className="border border-slate-200 p-3 font-mono">72 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">18 Hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Hybrid Systems Diploma */}
                  <div className="border border-slate-200" id="hybrid-sys">
                    <button
                      onClick={() => setProgramAccordionOpen(programAccordionOpen === 'hybrid-sys' ? null : 'hybrid-sys')}
                      className="w-full bg-slate-50 p-6 flex justify-between items-center cursor-pointer border-none font-sans text-start"
                    >
                      <div>
                        <h4 className="text-lg font-black text-slate-900">{t('hybridDiploma')}</h4>
                        <span className="text-xs text-brand-blue font-mono font-bold mt-1 block">240 CONTACT HOURS | 80/20 PRACTICAL-TO-THEORETICAL RATIO</span>
                      </div>
                      <span className="text-slate-450 font-bold">{programAccordionOpen === 'hybrid-sys' ? '▲' : '▼'}</span>
                    </button>
                    {programAccordionOpen === 'hybrid-sys' && (
                      <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-start font-sans">
                          <thead>
                            <tr className="bg-brand-blue text-white text-start">
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Stage / Module' : 'المرحلة / المساق'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Syllabus & Competency Guidelines' : 'مخطط المنهج والمهارات المكتسبة'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Practical Hours' : 'ساعات العملي'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Theoretical Hours' : 'ساعات النظري'}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 1</td>
                              <td className="border border-slate-200 p-3">Toyota Synergistic Drive (THS) & Hyundai Dual-Motor Transmission Architectures.</td>
                              <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 2</td>
                              <td className="border border-slate-200 p-3">NiMH & Lithium-Ion battery pack inspections, Cell balancing & internal resistance scans.</td>
                              <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 3</td>
                              <td className="border border-slate-200 p-3">DC-DC Step-Down Converters, High voltage cabin heating lines & A/C compressor diagnosis.</td>
                              <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 4</td>
                              <td className="border border-slate-200 p-3">Live drivetrain diagnostic check speed runs, trouble code (DTC) reading & data calibration.</td>
                              <td className="border border-slate-200 p-3 font-mono">48 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">12 Hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Electronic Diagnostics Course */}
                  <div className="border border-slate-200" id="elec-diag">
                    <button
                      onClick={() => setProgramAccordionOpen(programAccordionOpen === 'elec-diag' ? null : 'elec-diag')}
                      className="w-full bg-slate-50 p-6 flex justify-between items-center cursor-pointer border-none font-sans text-start"
                    >
                      <div>
                        <h4 className="text-lg font-black text-slate-900">{t('diagnosticsCourse')}</h4>
                        <span className="text-xs text-brand-blue font-mono font-bold mt-1 block">120 CONTACT HOURS | 80/20 PRACTICAL-TO-THEORETICAL RATIO</span>
                      </div>
                      <span className="text-slate-450 font-bold">{programAccordionOpen === 'elec-diag' ? '▲' : '▼'}</span>
                    </button>
                    {programAccordionOpen === 'elec-diag' && (
                      <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-200 text-xs sm:text-sm text-start font-sans">
                          <thead>
                            <tr className="bg-brand-blue text-white text-start">
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Stage / Module' : 'المرحلة / المساق'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Syllabus & Competency Guidelines' : 'مخطط المنهج والمهارات المكتسبة'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Practical Hours' : 'ساعات العملي'}</th>
                              <th className="border border-slate-200 p-3 text-start font-bold uppercase">{lang === 'en' ? 'Theoretical Hours' : 'ساعات النظري'}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 1</td>
                              <td className="border border-slate-200 p-3">OBD-II standard codes, scan-tool parameter data, fuel trim and diagnostic fault codes.</td>
                              <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 2</td>
                              <td className="border border-slate-200 p-3">Sensors, Actuators & ECU micro-controller calibrations (throttle bodies, air flow).</td>
                              <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 3</td>
                              <td className="border border-slate-200 p-3">Controller Area Network (CAN) bus circuit analysis, signal wire faults and gateway debugging.</td>
                              <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-200 p-3 font-bold">Stage 4</td>
                              <td className="border border-slate-200 p-3">Electronic Module Scanning & Oscilloscope wave capture for sensor signal tracking.</td>
                              <td className="border border-slate-200 p-3 font-mono">24 Hours</td>
                              <td className="border border-slate-200 p-3 font-mono">6 Hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'practical-training' && (
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
          )}

          {currentPage === 'accreditations' && (
            <motion.div
              key="accreditations"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-slate-800 text-start"
            >
              {/* HERO */}
              <section className="relative py-16 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
                    {lang === 'en' ? 'ACCREDITATIONS & VOCATIONAL VALUE' : 'الاعتمادات الأكاديمية والشهادات الرسمية'}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-sans text-white">
                    {lang === 'en' ? 'Official Certifications & Global Alignment' : 'الوثائق والشهادات والمصداقية المهنية للأكاديمية'}
                  </h1>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl font-sans mt-3 font-medium">
                    {lang === 'en'
                      ? 'Every graduate receives official industry-endorsed certificates with unique digital verification codes. Explore our TVET stamp, official partners, and how it qualifies your career.'
                      : 'يحصل كل خريج على شهادات مهنية موثقة برموز تحقق رقمية فريدة وموثوقة لدى الوكالات ومراكز الصيانة الإقليمية.'}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </section>

              {/* CORE ACCREDITATIONS & ENTITIES */}
              <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Jordanian Accreditations */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold text-brand-blue tracking-wider uppercase block">
                          {lang === 'en' ? 'JORDANIAN ALIGNMENT' : 'الاعتمادات الأردنية'}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 leading-tight">
                          {lang === 'en' ? 'TVET Curriculum & Trade Standardizations' : 'المواءمة مع مناهج ومعايير التدريب الأردنية'}
                        </h3>
                      </div>
                      <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-medium">
                        {lang === 'en'
                          ? 'Our curricula are closely aligned with Jordanian Technical and Vocational Education and Training (TVET) systems. This ensures that the technical depth of our diagnostics, hybrid system calculations, and safety standards match regional governmental benchmarks.'
                          : 'صُممت مناهج أكاديمية هايبـرو الفنية بالاعتماد على معايير هيئة تطوير المهارات الفنية والتقنية (TVET) في الأردن. يضمن ذلك تدريب طلابنا على مستويات رفيعة من الكفاءة تلائم وتطابق المعايير الحكومية والمهنية الإقليمية.'}
                      </p>
                      <div className="border-l-2 border-brand-blue pl-4 space-y-2">
                        <h4 className="font-extrabold text-sm text-slate-900">
                          {lang === 'en' ? 'Curriculum Alignment Registry: JO-TVET-9021' : 'رمز التحقق والتسجيل المنهجي: JO-TVET-9021'}
                        </h4>
                        <p className="text-slate-500 text-xs">
                          {lang === 'en'
                            ? 'Approved curriculum structure mapped directly to occupational standards in advanced automotive electronics.'
                            : 'منهج دراسي معتمد ومطابق لأحدث نظم صيانة إلكترونيات وفولتية السيارات الكهربائية والهجينة.'}
                        </p>
                      </div>
                    </div>

                    {/* Official Entities */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold text-brand-blue tracking-wider uppercase block">
                          {lang === 'en' ? 'OFFICIAL PARTNERSHIPS' : 'الجهات الرسمية والتعاون'}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 leading-tight">
                          {lang === 'en' ? 'Syndicate & Governmental Alliances' : 'التحالفات والاعتمادات الرسمية المهنية'}
                        </h3>
                      </div>
                      <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-medium">
                        {lang === 'en'
                          ? 'We work closely with official automotive repair syndicates and trade unions to legalize our graduates certificates. Our program is built in conjunction with development ministries and labor unions to assure employment compliance.'
                          : 'تعمل الأكاديمية بالتعاون الوثيق مع نقابات صيانة السيارات واتحادات الحرف الفنية لضمان قانونية الشهادات الصادرة ودعم الخريجين في الحصول على رخص مزاولة المهنة والانتساب للنقابات الحرفية.'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-50 border border-slate-200 p-4">
                          <h4 className="font-extrabold text-xs text-slate-900 uppercase">
                            {lang === 'en' ? 'Jordan Vocational Corp' : 'المؤسسة العامة للتدريب المهني'}
                          </h4>
                          <p className="text-slate-500 text-[10px] mt-1">
                            {lang === 'en' ? 'Technical framework design & safe laboratory standardizations.' : 'تنسيق المعايير المخبرية ومعايير السلامة المهنية للفولت العالي.'}
                          </p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-4">
                          <h4 className="font-extrabold text-xs text-slate-900 uppercase">
                            {lang === 'en' ? 'Automotive Repair Syndicate' : 'نقابة الحرفيين وصيانة السيارات'}
                          </h4>
                          <p className="text-slate-500 text-[10px] mt-1">
                            {lang === 'en' ? 'Direct pathway to obtain official mechanical practice licensing.' : 'مسار مباشر وسريع للخريجين لنيل رخص مزاولة المهنة الرسمية.'}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* DETAILED CERTIFICATIONS & VALUE */}
              <section className="py-16 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'CERTIFICATE DETAILS' : 'الشهادات الممنوحة وقيمتها المهنية'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? 'What You Earn & How it Accelerates Your Career' : 'الشهادات التي تحصل عليها والأثر المهني المباشر'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Certificate 1 details */}
                    <div className="bg-white border border-slate-200 p-8 space-y-4">
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 block uppercase">01 / TECHNICAL DIPLOMA</span>
                      <h4 className="text-lg font-black text-slate-900 font-sans">
                        {lang === 'en' ? 'Advanced Automotive Diagnostics & EV Diploma' : 'دبلوم صيانة السيارات الحديثة والكهربائية المعتمد'}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">
                        {lang === 'en'
                          ? 'A professional qualification stating your 360 contact hours of study, demonstrating mastery of scanner calibrations, OBD-II DTC decoding, CAN-Bus logic boards, and hybrid powertrain operations.'
                          : 'شهادة دبلوم مهني تخصصي تثبت إتمامك لـ 360 ساعة من التدريب العملي المباشر، وتؤكد أهليتك الكاملة لفحص كمبيوتر السيارات وكشف عيوب المحركات وبرمجة البوابات والـ ECU.'}
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside pt-2 font-medium">
                        <li>{lang === 'en' ? 'Licensed by local Educational & Craft Syndicates' : 'معتمد رسمياً من النقابة العامة للمهن الحرة والحرفية.'}</li>
                        <li>{lang === 'en' ? 'Features unique QR Code for online employer lookup' : 'يحمل كود تحقق فريد ورابط فحص رقمي خاص بالشركات.'}</li>
                        <li>{lang === 'en' ? 'Guarantees priority placement interviews' : 'يمنحك الأولوية التامة في مقابلات التشغيل وشركات التوظيف.'}</li>
                      </ul>
                    </div>

                    {/* Certificate 2 details */}
                    <div className="bg-white border border-slate-200 p-8 space-y-4">
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 block uppercase">02 / SAFETY CERTIFICATION</span>
                      <h4 className="text-lg font-black text-slate-900 font-sans">
                        {lang === 'en' ? '1000V High-Voltage Safety Handling Stamp' : 'شهادة أمان الفولت العالي وعزل الأنظمة الهجينة 1000V'}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">
                        {lang === 'en'
                          ? 'A specialized safety certificate certifying that you have successfully completed high-voltage loop isolation (MSD extraction), usage of certified double-insulated tools, and emergency procedures.'
                          : 'شهادة أمان مهنية متخصصة تثبت اجتيازك لاختبارات عزل الجهد العالي فائق الخطورة (MSD)، واستخدام العدة الآمنة المعزولة مهنياً، وبروتوكولات إخلاء وإنقاذ المصاب بالصدمة.'}
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside pt-2 font-medium">
                        <li>{lang === 'en' ? 'Complies with OSHA and international VDE standards' : 'متوافق مع شروط الأمن والسلامة الدولية VDE والـ OSHA.'}</li>
                        <li>{lang === 'en' ? 'Mandatory stamp to handle commercial hybrid battery balance setups' : 'ختم إلزامي للعمل في صالات الصيانة الكبرى والمنظمات.'}</li>
                        <li>{lang === 'en' ? 'Covers up to 1000V DC live network handling safety' : 'يغطي مهارات التعامل الآمن مع شبكات التيار المستمر حتى 1000 فولت.'}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Worth Explanations */}
                  <div className="mt-12 bg-white border border-slate-200 p-8 space-y-6">
                    <h4 className="font-extrabold text-lg text-slate-955">
                      {lang === 'en' ? 'Why This Certification Holds High Market Worth:' : 'لماذا تمتلك هذه الشهادة القيمة الكبرى في سوق العمل؟'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-start">
                      <div className="space-y-2">
                        <div className="text-brand-blue font-black text-sm">{lang === 'en' ? '1. Work Licensing' : '1. تراخيص العمل والمقرات'}</div>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">
                          {lang === 'en'
                            ? 'The syndicate certificate enables you to obtain official municipal licenses to open your diagnostics center legally.'
                            : 'تمكنك الشهادة النقابية من استخراج رخص البلدية الرسمية لفتح مركز فحص السيارات الخاص بك والعمل بشكل مرخص وقانوني.'}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-brand-blue font-black text-sm">{lang === 'en' ? '2. NGO Alignment' : '2. ثقة المنظمات الإنسانية'}</div>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">
                          {lang === 'en'
                            ? 'Humanitarian NGOs require safety and technical credentials from Hypro to hire technicians for fleet maintenance and vocational programs.'
                            : 'المنظمات التنموية تشترط شهادة السلامة والشهادات المعتمدة من هايبـرو لتوظيف الفنيين في مشاريع دعم سبل العيش أو صيانة أساطيل المركبات.'}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-brand-blue font-black text-sm">{lang === 'en' ? '3. Regional Employment' : '3. السفر والعمل الإقليمي'}</div>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">
                          {lang === 'en'
                            ? 'Online QR lookup allows dealers in Jordan and the Gulf to verify your study credentials instantly, granting immediate hiring priority.'
                            : 'التوثيق الرقمي يتيح لأصحاب العمل والوكالات في الأردن ودول الخليج التحقق من دراستك فوراً، مما يعطيك امتياز القبول والتوظيف الخارجي.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* VISUAL CERTIFICATES SHOWCASE */}
              <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
                  <div className="max-w-3xl space-y-3 mb-12">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'VISUAL PORTFOLIO' : 'نماذج وصور الشهادات الرسمية'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? 'Preview Our Standardized Certification Models' : 'استعراض النماذج المعتمدة وعناصر الأمان للشهادة'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
                    {/* Certificate template 1 */}
                    <div
                      onClick={() => {
                        setActiveAccreditation('https://images.unsplash.com/photo-1589330694653-ded6df53f7ee?auto=format&fit=crop&w=1200&q=80');
                        setLightboxTitle(lang === 'en' ? 'Technical Diagnostics Diploma Template' : 'نموذج دبلوم فحص وصيانة السيارات الحديثة');
                        setLightboxDesc(lang === 'en' ? 'Official diploma structure featuring TVET registrar alignment, unique verification QR code, and signatures.' : 'التصميم الرسمي للشهادة مع ختم النقابة ورمز التحقق الرقمي الفريد للمؤسسات.');
                      }}
                      className="bg-slate-50 border border-slate-200 p-4 hover:border-slate-350 transition-all cursor-zoom-in group"
                    >
                      <div className="aspect-[1.414/1] w-full bg-white border border-slate-200 relative overflow-hidden flex items-center justify-center p-6 shadow-sm">
                        <div className="border-4 border-double border-slate-300 w-full h-full p-4 flex flex-col justify-between items-center text-center relative">
                          <span className="text-[7px] font-mono text-slate-400">HYPRO AUTOMOTIVE ACADEMY DIPLOMA</span>
                          <div className="space-y-1">
                            <div className="font-extrabold text-xs text-brand-blue">شهادة دبلوم مهني تخصصي</div>
                            <div className="text-[6px] text-slate-400 font-mono">PROFESSIONAL AUTOMOTIVE DIAGNOSTICS DIPLOMA</div>
                          </div>
                          <div className="w-12 h-12 border border-brand-blue/20 rounded-full flex items-center justify-center text-[7px] font-bold text-brand-blue bg-blue-50/50">
                            {lang === 'en' ? 'SEAL' : 'الختم'}
                          </div>
                          <div className="w-full flex justify-between items-end text-[5px] text-slate-400 font-mono">
                            <span>REG: JO-TVET-9021</span>
                            <span>QR VERIFICATION STAMP</span>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-white text-slate-800 px-4 py-2 text-xs font-bold shadow-md">
                            {lang === 'en' ? 'Click to Zoom Model' : 'اضغط لتكبير النموذج'}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-start">
                        <h4 className="font-extrabold text-sm text-slate-900 font-sans">
                          {lang === 'en' ? 'Diagnostics Diploma Certificate' : 'صورة نموذج دبلوم تشخيص صيانة السيارات'}
                        </h4>
                        <p className="text-slate-500 text-xs mt-1 font-medium">
                          {lang === 'en' ? 'Official design issued to graduates of the 4-month program.' : 'الشكل النهائي والختم الرسمي للشهادة المسلمة لطلاب الـ 4 أشهر.'}
                        </p>
                      </div>
                    </div>

                    {/* Certificate template 2 */}
                    <div
                      onClick={() => {
                        setActiveAccreditation('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80');
                        setLightboxTitle(lang === 'en' ? 'High-Voltage Safety Handling Stamp Template' : 'نموذج شهادة أمان الجهد العالي وعزل الأنظمة');
                        setLightboxDesc(lang === 'en' ? 'Official compliance certificate showing 1000V DC insulated circuit safety test pass details.' : 'شهادة السلامة الفنية المعنية بالتعامل والعمل مع محركات الفولت الفائق وعزل الدوائر.');
                      }}
                      className="bg-slate-50 border border-slate-200 p-4 hover:border-slate-350 transition-all cursor-zoom-in group"
                    >
                      <div className="aspect-[1.414/1] w-full bg-white border border-slate-200 relative overflow-hidden flex items-center justify-center p-6 shadow-sm">
                        <div className="border-4 border-double border-red-300 w-full h-full p-4 flex flex-col justify-between items-center text-center relative">
                          <span className="text-[7px] font-mono text-red-500">1000V DC HIGH VOLTAGE SAFETY HANDLING</span>
                          <div className="space-y-1">
                            <div className="font-extrabold text-xs text-red-600">شهادة أمان الفولت العالي المعتمدة</div>
                            <div className="text-[6px] text-slate-400 font-mono">HIGH VOLTAGE SAFETY CERTIFICATE</div>
                          </div>
                          <div className="w-12 h-12 border border-red-500/20 rounded-full flex items-center justify-center text-[7px] font-bold text-red-600 bg-red-50/50">
                            {lang === 'en' ? 'PASS' : 'مقبول'}
                          </div>
                          <div className="w-full flex justify-between items-end text-[5px] text-slate-400 font-mono">
                            <span>OSHA/VDE STANDARDS</span>
                            <span>QR SAFETY COMPLIANCE</span>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="bg-white text-slate-800 px-4 py-2 text-xs font-bold shadow-md">
                            {lang === 'en' ? 'Click to Zoom Model' : 'اضغط لتكبير النموذج'}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-start">
                        <h4 className="font-extrabold text-sm text-slate-900 font-sans">
                          {lang === 'en' ? 'HV Safety Stamp Certificate' : 'صورة نموذج شهادة السلامة للفولت العالي'}
                        </h4>
                        <p className="text-slate-500 text-xs mt-1 font-medium">
                          {lang === 'en' ? 'Official design issued to graduates who pass high-voltage lab checks.' : 'الشكل النهائي لترخيص فني عزل دوائر الفولت العالي حتى 1000V.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === 'partnerships' && (
            <motion.div
              key="partnerships"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="py-16 bg-white text-slate-800 text-start animate-fade-in"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* B2B / NGO Engagement Framework (Asymmetric Split Screen) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-slate-200">
                  {/* Left (Larger content): Targets sponsors & sustainable initiatives */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'B2B / NGO COOPERATION FRAMEWORK' : 'إطار التعاون مع المنظمات والمؤسسات B2B'}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en'
                        ? 'Scaling Tech-Sector Youth Employment & Clean Energy'
                        : 'تمكين الشباب وتوطين مهن الطاقة النظيفة بشكل مستدام'}
                    </h2>
                    <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans font-medium">
                      {lang === 'en'
                        ? 'Hypro Academy builds strategic alliances with international development partners, local trade associations, and vocational training funds. We specialize in youth job-placement programs and upskilling traditional workforces to handle high-voltage and computer diagnostics safely.'
                        : 'تقدم أكاديمية هايبـرو برنامجاً متكاملاً للشراكات وتصميم مسارات التمكين الاقتصادي بالتعاون مع المنظمات الدولية والمحلية وصناديق التنمية. نركز على سد فجوات البطالة وتأهيل الفنيين للعمل المباشر.'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                      <div className="border-l-2 border-brand-blue pl-4 text-start">
                        <h4 className="font-extrabold text-sm text-slate-900">{lang === 'en' ? 'Scalable Youth Integration' : 'تشغيل وتدريب الكفاءات'}</h4>
                        <p className="text-slate-500 text-xs mt-1">{lang === 'en' ? 'Targeted cohorts with verified job placement rates exceeding 92%.' : 'دورات مخصصة لتمكين الفئات الأقل حظاً بمسارات تشغيل حقيقية.'}</p>
                      </div>
                      <div className="border-l-2 border-brand-blue pl-4 text-start">
                        <h4 className="font-extrabold text-sm text-slate-900">{lang === 'en' ? 'Clean Energy Deployment' : 'دعم مهن الطاقة النظيفة'}</h4>
                        <p className="text-slate-500 text-xs mt-1">{lang === 'en' ? 'Establishing diagnostic protocols for imported hybrid & electric assets.' : 'بناء معايير فحص آمنة ومستدامة لسيارات الكهرباء والهايبرد بالمنطقة.'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right (Smaller visually striking highlight block): Target focus */}
                  <div className="lg:col-span-5 bg-brand-blue text-white p-8 border border-slate-200 relative overflow-hidden flex flex-col justify-between self-stretch">
                    <div className="space-y-4 relative z-10">
                      <h4 className="text-xl font-bold font-sans">
                        {lang === 'en' ? 'Institutional Partnership Gate' : 'بوابة الشراكات والتمويل'}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {lang === 'en'
                          ? 'We offer transparent project tracking, audit-compliant monitoring reports, student logs, and certified trade exams.'
                          : 'نوفر تقارير تتبع شفافة، ومعايير تقييم جودة متوافقة مع متطلبات التدقيق الدولي، وتوثيقاً كاملاً لمسارات الخريجين.'}
                      </p>
                    </div>
                    <div className="pt-8 relative z-10">
                      <button
                        onClick={() => navigateTo('contact')}
                        className="bg-white hover:bg-slate-100 text-brand-blue font-extrabold text-xs px-6 py-3 border-none cursor-pointer"
                      >
                        {lang === 'en' ? 'Inquire B2B Partnership' : 'طلب مناقشة شراكة أو مشروع'}
                      </button>
                    </div>
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  </div>
                </div>

                {/* The Strategic Partner Matrix (Grayscale Logos Hover Color) */}
                <div className="pt-16 text-start">
                  <div className="max-w-3xl space-y-2 mb-10">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {lang === 'en' ? 'Our Strategic Alliance Network' : 'شبكة التحالفات والمؤسسات الشريكة'}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium">
                      {lang === 'en'
                        ? 'Collaborating with industry leaders, craft unions, and international development organizations.'
                        : 'نتعاون جنباً إلى جنب مع قادة الصناعة، ونقابات الحرف، والجهات التنموية لتعزيز معايير التدريب.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-slate-200">
                    <div className="p-8 bg-white border-b border-r border-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <span className="font-mono font-bold text-slate-400 hover:text-brand-blue text-xs uppercase tracking-wider">TVET JORDAN</span>
                    </div>
                    <div className="p-8 bg-white border-b border-r border-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <span className="font-mono font-bold text-slate-400 hover:text-brand-blue text-xs uppercase tracking-wider">UN-DEVELOP</span>
                    </div>
                    <div className="p-8 bg-white border-b lg:border-b-0 border-r border-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <span className="font-mono font-bold text-slate-400 hover:text-brand-blue text-xs uppercase tracking-wider">AL-KHEDMA</span>
                    </div>
                    <div className="p-8 bg-white border-b md:border-b-0 border-r border-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <span className="font-mono font-bold text-slate-400 hover:text-brand-blue text-xs uppercase tracking-wider">SY AUTO UNION</span>
                    </div>
                    <div className="p-8 bg-white border-r border-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <span className="font-mono font-bold text-slate-400 hover:text-brand-blue text-xs uppercase tracking-wider">HV SOLUTIONS</span>
                    </div>
                    <div className="p-8 bg-white flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                      <span className="font-mono font-bold text-slate-400 hover:text-brand-blue text-xs uppercase tracking-wider">MID EAST TECH</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'testing-lab' && (
            <motion.div
              key="testing-lab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="py-16 bg-white text-slate-800 text-start animate-fade-in"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-10">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
                    <Wrench size={13} className="text-brand-blue" />
                    <span>{t('interactiveDiagnostics')}</span>
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                    {lang === 'en' ? 'Industrial Diagnostic Infrastructure' : 'مختبر فحص الأنظمة وبطاريات الفولت العالي'}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {lang === 'en'
                      ? 'Explore the physical testing apparatus and technical specifications deployed live at Hypro Academy.'
                      : 'تصفح مواصفات وأجهزة الفحص والقياسات الحقيقية المتوفرة لتطبيق الطلاب العملي والورش المهنية بالأكاديمية.'}
                  </p>
                </div>

                {/* Infrastructure Spec Sheets */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
                  {/* Spec Card 1 */}
                  <div className="border border-slate-200 p-6 flex flex-col md:flex-row gap-6 bg-slate-50">
                    <div className="w-full md:w-1/3 aspect-[4/3] bg-slate-100 border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
                        alt="Hypro HV Battery Tester" 
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase font-mono tracking-wider text-start">
                        {lang === 'en' ? 'Hypro HV Battery Tester (HV-9000)' : 'جهاز تفريغ وموازنة بطاريات الفولت العالي (HV-9000)'}
                      </h4>
                      <table className="w-full border-collapse text-xs font-sans">
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Apparatus Type' : 'نوع الجهاز'}</td>
                            <td className="py-2 text-slate-800 text-start">{lang === 'en' ? 'Cell balancer & charge tester' : 'شحن وموازنة وتفريغ الخلايا'}</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Max Voltage' : 'أقصى جهد'}</td>
                            <td className="py-2 text-slate-800 text-start font-mono">1000V DC</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Core Capability' : 'القدرة الأساسية'}</td>
                            <td className="py-2 text-slate-800 text-start">{lang === 'en' ? 'Cell balancing, resistance check' : 'موازنة الخلايا، كشف المقاومة الداخلية'}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Spec Card 2 */}
                  <div className="border border-slate-200 p-6 flex flex-col md:flex-row gap-6 bg-slate-50">
                    <div className="w-full md:w-1/3 aspect-[4/3] bg-slate-100 border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                        alt="Technical diagnostic oscilloscopes" 
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase font-mono tracking-wider text-start">
                        {lang === 'en' ? 'Advanced Oscilloscope & Scanning Rack' : 'منظومة رصد إشارات الحساسات والعواكس'}
                      </h4>
                      <table className="w-full border-collapse text-xs font-sans">
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Apparatus Type' : 'نوع الجهاز'}</td>
                            <td className="py-2 text-slate-800 text-start">{lang === 'en' ? '4-Channel logic wave analyser' : 'محلل إشارات الحساسات وخطوط CAN-Bus'}</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Max Frequency' : 'التردد الأقصى'}</td>
                            <td className="py-2 text-slate-800 text-start font-mono">100 MHz</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="py-2 font-bold text-slate-500 text-start">{lang === 'en' ? 'Core Capability' : 'القدرة الأساسية'}</td>
                            <td className="py-2 text-slate-800 text-start">{lang === 'en' ? 'Capture resolver timing, bus errors' : 'كشف تردد موجة الحساس، عزل خطوط البيانات'}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Powertrain simulator */}
                <div className="pt-8 border-t border-slate-100">
                  <div className="max-w-3xl space-y-2 mb-8">
                    <h3 className="text-xl font-bold text-slate-900">
                      {lang === 'en' ? 'Interactive Hybrid Powertrain Simulator' : 'محاكي تدفق طاقة المحرك الهجين التفاعلي'}
                    </h3>
                    <p className="text-slate-500 text-xs font-medium">
                      {lang === 'en'
                        ? 'Simulate throttle inputs, braking energy capture, and battery charging flows in real time.'
                        : 'اختبر تدفق الشحن وتوليد الطاقة وحركة التروس عند الكبح والتسارع في محرك الهايبرد التفاعلي.'}
                    </p>
                  </div>
                  <Suspense fallback={<Skeleton />}>
                    <InteractivePowertrain />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'contact' && (
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
                            {lang === 'en' ? 'Idleb Industrial District Campus' : 'مقر أكاديمية هايبـرو - إدلب الصناعية'}
                          </h4>
                          <div className="text-xs text-slate-300 space-y-1.5 font-mono">
                            <div>GPS: 35.9322° N, 36.6339° E</div>
                            <div>{lang === 'en' ? 'Main Road, Block B-12' : 'الشارع الرئيسي، ريف إدلب'}</div>
                          </div>
                        </div>
                        {/* Clean vector mock map */}
                        <div className="h-28 bg-white/5 border border-white/10 mt-6 relative z-10 flex items-center justify-center font-mono text-[10px] text-slate-400">
                          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-15" />
                          <div className="absolute w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                          <div className="absolute w-2 h-2 bg-emerald-500 rounded-full" />
                          <span>{lang === 'en' ? 'Idleb Industrial Campus Map Grid' : 'شبكة خرائط مقر الأكاديمية - إدلب'}</span>
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

              {/* Friction-Reduction Accordion */}
              <section className="py-16 md:py-20 bg-white border-b border-slate-200 text-start">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl space-y-3 mb-10 text-start">
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
                      {lang === 'en' ? 'STUDENT SUPPORT PORTAL' : 'أسئلة وتسهيلات الدبلوم الدراسي'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {lang === 'en' ? 'Friction-Reduction Support & FAQ' : 'تسهيلات الأكاديمية وإزالة عقبات التسجيل'}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* FAQ 1: Installment plans */}
                    <div className="border border-slate-200">
                      <button
                        onClick={() => setContactFaqOpen(contactFaqOpen === 0 ? null : 0)}
                        className="w-full bg-slate-50 p-5 flex justify-between items-center cursor-pointer border-none font-sans text-start"
                      >
                        <span className="font-extrabold text-sm text-slate-900">
                          {lang === 'en' ? 'Are there installment-based tuition plans available?' : 'هل تتوفر خطط دفع مقسطة للرسوم الدراسية؟'}
                        </span>
                        <span className="text-slate-450 font-bold">{contactFaqOpen === 0 ? '▲' : '▼'}</span>
                      </button>
                      {contactFaqOpen === 0 && (
                        <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-655 leading-relaxed font-sans">
                          {lang === 'en'
                            ? 'Yes. To make our professional diploma accessible to all technical students, we offer structured installment plans. Trainees can pay in monthly parts during their course.'
                            : 'نعم، لتسهيل التحاق الطلاب، توفر الأكاديمية إمكانية تقسيط الرسوم الدراسية على دفعات شهرية ميسرة طوال فترة الدراسة الممتدة لـ 4 أشهر.'}
                        </div>
                      )}
                    </div>

                    {/* FAQ 2: Scheduling */}
                    <div className="border border-slate-200">
                      <button
                        onClick={() => setContactFaqOpen(contactFaqOpen === 1 ? null : 1)}
                        className="w-full bg-slate-50 p-5 flex justify-between items-center cursor-pointer border-none font-sans text-start"
                      >
                        <span className="font-extrabold text-sm text-slate-900">
                          {lang === 'en' ? 'What are the workshop schedules?' : 'ما هي أوقات الدوام والتدريب بالورش؟'}
                        </span>
                        <span className="text-slate-450 font-bold">{contactFaqOpen === 1 ? '▲' : '▼'}</span>
                      </button>
                      {contactFaqOpen === 1 && (
                        <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-655 leading-relaxed font-sans">
                          {lang === 'en'
                            ? 'We offer dual training sessions (morning and evening blocks) to accommodate working students and apprentices who run active workshops during the day.'
                            : 'نقدم فترات تدريب صباحية ومسائية مرنة لتتناسب مع الطلاب الذين يديرون ورشهم الخاصة أو يعملون خلال فترات النهار.'}
                        </div>
                      )}
                    </div>

                    {/* FAQ 3: Prerequisites */}
                    <div className="border border-slate-200">
                      <button
                        onClick={() => setContactFaqOpen(contactFaqOpen === 2 ? null : 2)}
                        className="w-full bg-slate-50 p-5 flex justify-between items-center cursor-pointer border-none font-sans text-start"
                      >
                        <span className="font-extrabold text-sm text-slate-900">
                          {lang === 'en' ? 'Do I need prior engineering or mechanics experience to register?' : 'هل أحتاج إلى شهادة هندسية أو خبرة ميكانيكية مسبقة للتسجيل؟'}
                        </span>
                        <span className="text-slate-450 font-bold">{contactFaqOpen === 2 ? '▲' : '▼'}</span>
                      </button>
                      {contactFaqOpen === 2 && (
                        <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-655 leading-relaxed font-sans">
                          {lang === 'en'
                            ? 'No. Our curriculum is designed to build competencies from absolute ground zero. We teach general electrical safety up to high-voltage balancing cells.'
                            : 'لا، لا تشترط الأكاديمية أي معرفة مسبقة. يبدأ منهجنا من الصفر الإلكتروني التام ويصعد بك تدريجياً لفك ومعايرة عقول وبطاريات السيارات الهجينة.'}
                        </div>
                      )}
                    </div>

                    {/* FAQ 4: Placement Guarantee */}
                    <div className="border border-slate-200">
                      <button
                        onClick={() => setContactFaqOpen(contactFaqOpen === 3 ? null : 3)}
                        className="w-full bg-slate-50 p-5 flex justify-between items-center cursor-pointer border-none font-sans text-start"
                      >
                        <span className="font-extrabold text-sm text-slate-900">
                          {lang === 'en' ? 'How does the job placement program guarantee employment?' : 'كيف يضمن برنامج التشبيك والتوظيف حصولي على عمل؟'}
                        </span>
                        <span className="text-slate-450 font-bold">{contactFaqOpen === 3 ? '▲' : '▼'}</span>
                      </button>
                      {contactFaqOpen === 3 && (
                        <div className="p-5 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-655 leading-relaxed font-sans">
                          {lang === 'en'
                            ? 'Through our strategic partner network, we establish direct placement trade recommendations. We connect graduates directly to car dealers, NGOs, and workshops.'
                            : 'نقوم بربط الخريجين مباشرة بالشركاء، مستوردي السيارات، المنظمات والورش الكبرى، حيث يعود 92% من طلابنا للعمل مباشرة بعد نيل شهادتهم.'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 relative text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">

            <div className="space-y-4 md:col-span-2">
              <Logo imgClassName="h-10 sm:h-12" />

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-sans pt-1 font-medium">
                {lang === 'en' ? meta.descriptionEn : meta.descriptionAr}
              </p>
            </div>

            <div className="space-y-4 font-sans">
              <h5 className="text-xs font-bold text-slate-350 tracking-wider uppercase font-mono">
                {t('directCoordinates')}
              </h5>
              <div className="space-y-2.5 text-xs text-slate-400">
                <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors decoration-none">
                  <Phone size={13} className="text-brand-blue" />
                  <span dir="ltr">{contact.phone}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors decoration-none">
                  <Mail size={13} className="text-brand-blue" />
                  <span>{contact.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-brand-blue flex-shrink-0" />
                  <span>{lang === 'en' ? contact.addressEn : contact.addressAr}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 font-sans">
              <h5 className="text-xs font-bold text-slate-350 tracking-wider uppercase font-mono">
                {t('channels')}
              </h5>
              <div className="space-y-2 text-xs">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors decoration-none"
                >
                  <MessageSquare size={13} className="text-emerald-400" />
                  <span>{t('telegramWaLink')}</span>
                </a>

                <div className="pt-2 text-[10px] text-slate-500 font-mono">
                  {t('admissionsHours')}
                  <div className="text-slate-400 mt-1 font-sans font-medium">
                    {t('officeHoursDays')}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <span>{t('footerCopyright')}</span>
            <span className="text-[10px] text-slate-600 font-sans">
              {t('cleanLayout')}
            </span>
          </div>

        </div>
      </footer>

      {/* Lightbox Modal for Accreditations */}
      <AnimatePresence>
        {activeAccreditation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveAccreditation(null);
              setLightboxTitle(null);
              setLightboxDesc(null);
            }}
            className="fixed inset-0 bg-slate-950/90 z-55 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-3xl w-full border border-slate-200 p-6 relative flex flex-col items-center"
            >
              <button
                onClick={() => {
                  setActiveAccreditation(null);
                  setLightboxTitle(null);
                  setLightboxDesc(null);
                }}
                className="absolute top-4 right-4 text-slate-800 hover:text-brand-blue p-2 bg-transparent border-none cursor-pointer"
              >
                <X size={24} />
              </button>
              <img
                src={activeAccreditation}
                alt="Accreditation Certificate"
                className="max-h-[70vh] w-auto object-contain border border-slate-100"
              />
              <div className="mt-4 text-center font-sans">
                <h5 className="font-extrabold text-sm text-slate-900">
                  {lightboxTitle || (lang === 'en' ? 'Official Institutional Credential' : 'وثيقة الاعتماد المؤسساتي الرسمية')}
                </h5>
                <p className="text-slate-500 text-xs mt-1">
                  {lightboxDesc || (lang === 'en' 
                    ? 'Verified by TVET authorities, crafts syndicates, and corporate training divisions.' 
                    : 'معتمدة وموثقة من قبل هيئات التدريب المهني، نقابات الحرفيين، ووكالات الصيانة.')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModalOpen(false)}
            className="fixed inset-0 bg-slate-950/90 z-55 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-4xl w-full border border-slate-200 p-2 relative"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-blue-300 p-2 bg-transparent border-none cursor-pointer flex items-center gap-1 font-bold text-xs"
              >
                <X size={20} />
                <span>{lang === 'en' ? 'Close' : 'إغلاق'}</span>
              </button>
              
              {/* Aspect Ratio video container */}
              <div className="aspect-video w-full bg-black">
                <video
                  key={activeVideoUrl}
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
