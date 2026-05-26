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
  X
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
type PageType = 'home' | 'about' | 'courses' | 'team' | 'diagnostics' | 'contact';

export default function App() {
  const { lang, setLang, t, tObj, tVal } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('student');
  
  const getPageFromPath = (): PageType => {
    const path = window.location.pathname.replace(/^\//, '');
    const validPages: PageType[] = ['home', 'about', 'courses', 'team', 'diagnostics', 'contact'];
    return validPages.includes(path as PageType) ? (path as PageType) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromPath);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  };

  const stats = academyContent.stats;
  const meta = academyContent.meta;
  const contact = academyContent.contact;
  const modules = academyContent.modules;

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
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-brand-blue text-white border-b border-brand-blue-hover px-4 sm:px-6 lg:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Logo 
            onClick={() => navigateTo('home')} 
            className="cursor-pointer hover:opacity-90 transition-opacity" 
          />

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            <button 
              onClick={() => navigateTo('home')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'home' ? 'text-white font-extrabold border-b-2 border-brand-accent' : 'text-blue-100/70 hover:text-white font-semibold'}`}
            >
              {t('home')}
            </button>
            <button 
              onClick={() => navigateTo('courses')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'courses' ? 'text-white font-extrabold border-b-2 border-brand-accent' : 'text-blue-100/70 hover:text-white font-semibold'}`}
            >
              {t('courses')}
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'about' ? 'text-white font-extrabold border-b-2 border-brand-accent' : 'text-blue-100/70 hover:text-white font-semibold'}`}
            >
              {t('about')}
            </button>
            <button 
              onClick={() => navigateTo('team')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'team' ? 'text-white font-extrabold border-b-2 border-brand-accent' : 'text-blue-100/70 hover:text-white font-semibold'}`}
            >
              {t('team')}
            </button>
            <button 
              onClick={() => navigateTo('diagnostics')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'diagnostics' ? 'text-white font-extrabold border-b-2 border-brand-accent' : 'text-blue-100/70 hover:text-white font-semibold'}`}
            >
              {t('diagnostics')}
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className={`transition-all cursor-pointer bg-transparent border-none pb-0.5 ${currentPage === 'contact' ? 'text-white font-extrabold border-b-2 border-brand-accent' : 'text-blue-100/70 hover:text-white font-semibold'}`}
            >
              {t('contact')}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              id="lang-toggle-button"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold text-[10px] sm:text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer uppercase font-sans"
            >
              <Globe size={13} className="text-blue-200" />
              <span>{lang === 'en' ? 'العربية (AR)' : 'ENGLISH (EN)'}</span>
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="hidden sm:flex bg-brand-accent hover:bg-brand-accent/90 text-white font-extrabold text-xs px-4 py-2 rounded-xl items-center gap-1.5 transition-all shadow-sm cursor-pointer border-none"
            >
              <Clock size={12} />
              <span>{t('registerNow')}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden p-2 text-blue-100 hover:text-white focus:outline-none transition-colors border-none bg-transparent cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-brand-blue border-b border-brand-blue-hover shadow-sm overflow-hidden text-start"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 flex flex-col font-sans text-sm font-bold uppercase tracking-wider">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigateTo('home'); }}
                className={`py-2.5 px-3 rounded-xl text-start transition-all cursor-pointer border-none ${currentPage === 'home' ? 'bg-white/10 text-white font-extrabold' : 'bg-transparent text-blue-100 hover:text-white'}`}
              >
                {t('home')}
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigateTo('courses'); }}
                className={`py-2.5 px-3 rounded-xl text-start transition-all cursor-pointer border-none ${currentPage === 'courses' ? 'bg-white/10 text-white font-extrabold' : 'bg-transparent text-blue-100 hover:text-white'}`}
              >
                {t('courses')}
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigateTo('about'); }}
                className={`py-2.5 px-3 rounded-xl text-start transition-all cursor-pointer border-none ${currentPage === 'about' ? 'bg-white/10 text-white font-extrabold' : 'bg-transparent text-blue-100 hover:text-white'}`}
              >
                {t('about')}
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigateTo('team'); }}
                className={`py-2.5 px-3 rounded-xl text-start transition-all cursor-pointer border-none ${currentPage === 'team' ? 'bg-white/10 text-white font-extrabold' : 'bg-transparent text-blue-100 hover:text-white'}`}
              >
                {t('team')}
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigateTo('diagnostics'); }}
                className={`py-2.5 px-3 rounded-xl text-start transition-all cursor-pointer border-none ${currentPage === 'diagnostics' ? 'bg-white/10 text-white font-extrabold' : 'bg-transparent text-blue-100 hover:text-white'}`}
              >
                {t('diagnostics')}
              </button>
              <button 
                onClick={() => { setIsMobileMenuOpen(false); navigateTo('contact'); }}
                className={`py-2.5 px-3 rounded-xl text-start transition-all cursor-pointer border-none ${currentPage === 'contact' ? 'bg-white/10 text-white font-extrabold' : 'bg-transparent text-blue-100 hover:text-white'}`}
              >
                {t('contact')}
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigateTo('contact');
                }}
                className="w-full mt-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer border-none sm:hidden"
              >
                <Clock size={12} />
                <span>{t('registerNow')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>



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
              <section className="bg-white text-slate-800 py-16 lg:py-20 relative overflow-hidden border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Hero text */}
                    <div className="lg:col-span-7 space-y-6 text-start order-2 lg:order-1">
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-sans tracking-wide uppercase">
                          <Wrench size={12} />
                          <span>{t('heroBadge')}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-bold font-sans tracking-wide uppercase">
                          <Award size={12} />
                          <span>{t('heroBadge2')}</span>
                        </span>
                      </div>

                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-sans text-slate-900">
                        {t('heroTitlePart1')} <span className="text-brand-blue">{t('heroTitlePart2')}</span>
                      </h1>

                      <p className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-medium">
                        {t('heroSubtitle')}
                      </p>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <button
                          onClick={() => navigateTo('contact')}
                          className="bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm border-none"
                        >
                          <Send size={15} />
                          <span>{t('ctaHeroPrimary')}</span>
                        </button>

                        <button
                          onClick={() => navigateTo('about')}
                          className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                        >
                          <Layers size={14} className="text-brand-blue" />
                          <span>{t('learnMission')}</span>
                        </button>
                      </div>

                      {/* Trust Indicators */}
                      <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-6 items-center text-xs text-slate-500 font-sans font-medium">
                        <div className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-brand-blue" />
                          <span>{t('syndicateStandards')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-brand-blue" />
                          <span>{t('secureVerify')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-brand-blue" />
                          <span>{t('practicalFocus')}</span>
                        </div>
                      </div>

                    </div>

                    {/* Side Hero Image */}
                    <div className="lg:col-span-5 relative w-full order-1 lg:order-2 mb-8 lg:mb-0">
                      <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white aspect-video lg:aspect-square group">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent z-10" />
                        
                        <img 
                          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=60" 
                          alt="Hypro Automotive Technician diagnostic check" 
                          referrerPolicy="no-referrer"
                          loading="eager"
                          fetchPriority="high"
                          className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        />
                        
                        <div className="absolute top-4 right-4 z-20 bg-brand-blue text-white text-[10px] font-sans font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {t('liveLabWork')}
                        </div>
                        
                        <div className="absolute bottom-6 left-6 right-6 z-20 text-start space-y-2">
                          <span className="text-[9px] font-sans tracking-wider text-blue-200 block font-bold uppercase">
                            {t('trainingHubDirectives')}
                          </span>
                          <h4 className="font-extrabold text-white text-base leading-snug font-sans">
                            {t('practicalDiagnostics')}
                          </h4>
                          <p className="text-slate-200 text-xs font-sans leading-normal font-medium max-w-sm">
                            {t('practicalDiagnosticsDesc')}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* CORE STATISTICS TICKER PANEL */}
              <section className="bg-white border-b border-slate-200 py-8 relative z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="space-y-1 p-2 border-r last:border-0 border-slate-100 rtl:border-r-0 rtl:border-l rtl:last:border-r-0 rtl:last:border-l-0">
                        <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight select-none">
                          {stat.value}
                        </div>
                        <div className="text-xs font-bold text-slate-500 font-sans">
                          {tObj(stat, 'label')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ALTERNATING IMAGE & TEXT FEATURES */}
              <section className="py-16 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                  
                  {/* Row 1: Image Left, Text Right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] bg-slate-100">
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
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] bg-slate-100 md:order-2 order-1">
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
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] bg-slate-100">
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

              {/* B2B & INSTITUTIONAL ALLIANCE HUB */}
              <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-20 text-start" id="b2b-alliance-hub">
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
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="p-3 bg-blue-50 text-brand-blue rounded-xl w-12 h-12 flex items-center justify-center mb-4">
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
                        className="mt-6 w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{t('workshopPartnerships')}</span>
                        <ArrowRight size={12} className="text-brand-blue" />
                      </button>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="p-3 bg-blue-50 text-brand-blue rounded-xl w-12 h-12 flex items-center justify-center mb-4">
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
                        className="mt-6 w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{t('agencyProtocols')}</span>
                        <ArrowRight size={12} className="text-brand-blue" />
                      </button>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                      <div>
                        <div className="p-3 bg-blue-50 text-brand-blue rounded-xl w-12 h-12 flex items-center justify-center mb-4">
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
                        className="mt-6 w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{t('ngoSupport')}</span>
                        <ArrowRight size={12} className="text-brand-blue" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* VOCATIONAL HIGHLIGHT CARDS & CREDENTIALS SECTION */}
              <section className="py-16 bg-slate-50 border-b border-slate-200">
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
                        <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl relative transition-all hover:shadow-md">
                          <div className="p-3 bg-blue-50 text-brand-blue rounded-xl w-12 h-12 flex items-center justify-center mb-5">
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
              <section className="py-16 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t('readyExplore')}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium font-sans">
                    {t('browseDetails')}
                  </p>
                  <button
                    onClick={() => navigateTo('courses')}
                    className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs px-8 py-3.5 rounded-xl transition-all cursor-pointer border-none inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>{t('viewCourseDetails')}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
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
              className="py-16 bg-white text-start"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
                
                {/* Header */}
                <div className="space-y-3 pb-8 border-b border-slate-200">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
                    <Building2 size={13} />
                    <span>{t('ourProfile')}</span>
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {t('aboutTitle')}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                    {t('aboutDesc')}
                  </p>
                </div>

                {/* Story */}
                <div className="py-10 space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {t('ourOrigin')}
                  </h3>
                  <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans font-medium bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    {tObj(academyContent.aboutUs, 'story')}
                  </p>
                </div>

                {/* Mission and Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                  
                  {/* Mission Card */}
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
                    <div className="p-3 bg-blue-50 text-brand-blue rounded-xl w-12 h-12 flex items-center justify-center">
                      <Award size={20} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 font-sans">
                      {t('ourMission')}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {tObj(academyContent.aboutUs, 'mission')}
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
                    <div className="p-3 bg-blue-50 text-brand-blue rounded-xl w-12 h-12 flex items-center justify-center">
                      <Globe size={20} />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 font-sans">
                      {t('ourVision')}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {tObj(academyContent.aboutUs, 'vision')}
                    </p>
                  </div>

                </div>

                {/* Accreditations */}
                <div className="pt-10 space-y-4">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                    {t('vocationalLegitimacy')}
                  </h4>
                  <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {t('vocationalLegitimacyDesc')}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <CheckCircle size={14} className="text-emerald-400" />
                        <span>{t('certifiedIdlebOffice')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <CheckCircle size={14} className="text-emerald-400" />
                        <span>{t('highVoltageSafety')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-12 text-center">
                  <button
                    onClick={() => navigateTo('contact')}
                    className="bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-sm px-8 py-3.5 rounded-xl transition-all cursor-pointer border-none inline-flex items-center gap-2 shadow-sm"
                  >
                    <Send size={14} />
                    <span>{t('initiatePartnership')}</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}

          {currentPage === 'courses' && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="py-16 bg-white text-start"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-8">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
                    <Layers size={13} className="text-brand-blue" />
                    <span>{t('certifiedDiploma')}</span>
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                    {t('coursesTitle')}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {t('coursesDesc')}
                  </p>
                </div>

                {/* Courses List Layout */}
                <div className="space-y-10">
                  {modules.map((m, index) => (
                    <div 
                      key={m.id}
                      className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-start transition-all hover:shadow-sm"
                    >
                      {/* Left Info: Months & General Stats */}
                      <div className="lg:w-1/3 space-y-4 w-full">
                        <span className="inline-flex items-center gap-1.5 bg-brand-blue text-white px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider">
                          {t('stage')} 0{index + 1}
                        </span>
                        
                        <h3 className="text-xl font-bold text-slate-900 leading-tight font-sans">
                          {tObj(m, 'title')}
                        </h3>

                        <p className="text-xs font-semibold text-slate-500 font-mono block">
                          {m.month}
                        </p>

                        <div className="space-y-2 pt-2 text-xs text-slate-500 border-t border-slate-200">
                          <div className="flex justify-between py-1">
                            <span>{t('duration')}</span>
                            <span className="font-bold text-slate-800">{tObj(m, 'duration')}</span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span>{t('practicalRatio')}</span>
                            <span className="font-bold text-brand-blue">{tObj(m, 'ratio')}</span>
                          </div>
                        </div>

                        {/* Practical Ratio Bar */}
                        <div className="space-y-1.5 pt-1">
                          <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                            <span>{t('practical')}</span>
                            <span>{t('theory')}</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-250 flex overflow-hidden">
                            <div 
                              className="bg-brand-blue h-full" 
                              style={{ width: m.id === 'mod-1' ? '70%' : m.id === 'mod-4' ? '100%' : '80%' }} 
                            />
                            <div 
                              className="bg-slate-300 h-full" 
                              style={{ width: m.id === 'mod-1' ? '30%' : m.id === 'mod-4' ? '0%' : '20%' }} 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right Info: Vetted Skills & Action */}
                      <div className="lg:w-2/3 w-full bg-white border border-slate-200 rounded-xl p-5 md:p-6 flex flex-col justify-between self-stretch shadow-sm">
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold text-slate-500 font-sans uppercase tracking-wider">
                            {t('targetCompetencies')}
                          </h4>
                          
                          <ul className="space-y-3">
                            {(tObj(m, 'skills') as unknown as string[])?.map((skill, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-3 text-xs md:text-sm text-slate-650 leading-relaxed text-start font-medium font-sans">
                                <CheckCircle2 size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-[10px] text-slate-400">
                            <Cpu size={14} className="text-brand-blue" />
                            <span>{t('standardizedTools')}</span>
                          </div>
                          <button
                            onClick={() => navigateTo('contact')}
                            className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-[11px] px-5 py-2.5 rounded-lg transition-all cursor-pointer border-none shadow-sm"
                          >
                            {t('inquireEnroll')}
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Additional Info Cards */}
                <div className="mt-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2 text-start">
                    <div className="text-brand-blue font-sans text-xs font-bold uppercase tracking-wider">{t('insulatedTitle')}</div>
                    <h4 className="font-extrabold text-base text-white font-sans">{t('hvProtection')}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">{t('insulatedDesc')}</p>
                  </div>
                  <div className="space-y-2 text-start">
                    <div className="text-brand-blue font-sans text-xs font-bold uppercase tracking-wider">{t('liveFaultDrills')}</div>
                    <h4 className="font-extrabold text-base text-white font-sans">{t('realTroubleshooting')}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">{t('liveFaultDesc')}</p>
                  </div>
                  <div className="space-y-2 text-start">
                    <div className="text-brand-blue font-sans text-xs font-bold uppercase tracking-wider">{t('directPlacement')}</div>
                    <h4 className="font-extrabold text-base text-white font-sans">{t('employmentGuarantee')}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">{t('directPlacementDesc')}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {currentPage === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="py-16 bg-white text-start"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header text */}
                <div className="max-w-3xl space-y-3 pb-10 border-b border-slate-200 mb-12 animate-fade-in">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
                    <Users size={13} />
                    <span>{t('ourEliteMentors')}</span>
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                    {t('mentorsTitle')}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {t('mentorsDesc')}
                  </p>
                </div>

                {/* Team member grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                  {academyContent.team.map((member, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all flex flex-col justify-between">
                      <div className="space-y-4">
                        
                        {/* Avatar */}
                        <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                          {member.nameEn.split(' ').slice(1).map(n => n[0]).join('') || 'HY'}
                        </div>

                        {/* Name and title */}
                        <div>
                          <h4 className="font-extrabold text-base text-slate-900 font-sans">
                            {tObj(member, 'name')}
                          </h4>
                          <span className="text-[10px] font-mono font-bold tracking-wide uppercase text-brand-blue block mt-1">
                            {tObj(member, 'role')}
                          </span>
                        </div>

                        {/* Bio */}
                        <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium text-start">
                          {tObj(member, 'bio')}
                        </p>
                      </div>

                      {/* Tenure */}
                      <div className="pt-4 border-t border-slate-200 mt-5 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold">
                        <span>{t('tenure')}</span>
                        <span className="text-slate-800 font-bold">{tObj(member, 'experience')}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          )}

          {currentPage === 'diagnostics' && (
            <motion.div
              key="diagnostics"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="py-16 bg-white text-slate-800 text-start"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="max-w-3xl space-y-3 pb-8 border-b border-slate-200 mb-10 animate-fade-in">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide uppercase">
                    <Wrench size={13} className="text-brand-blue" />
                    <span>{t('interactiveDiagnostics')}</span>
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
                    {t('diagnosticsLabTitle')}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    {t('diagnosticsLabDesc')}
                  </p>
                </div>

                {/* Powertrain simulator */}
                <Suspense fallback={<Skeleton />}>
                  <InteractivePowertrain />
                </Suspense>

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
            >
              <section className="py-16 bg-slate-50 text-slate-800 relative border-b border-slate-200" id="contact-form-section">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in">
                    
                    {/* Contacts info */}
                    <div className="lg:col-span-4 space-y-6 text-start">
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1 bg-blue-50 text-brand-blue border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-bold font-mono tracking-wide uppercase">
                          <CheckCircle size={11} className="text-brand-blue" />
                          <span>{t('directChannels')}</span>
                        </span>
                        <h3 className="text-2xl font-extrabold tracking-tight font-sans leading-tight text-slate-900">
                          {t('connectAdmissions')}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium">
                          {t('contactPrompt')}
                        </p>
                      </div>

                      {/* Fast clickable cards */}
                      <div className="space-y-3">
                        <a 
                          href={contact.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 bg-white hover:bg-slate-100 border border-slate-200 p-4 rounded-xl transition-all cursor-pointer group decoration-none"
                        >
                          <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                            <MessageSquare size={18} />
                          </div>
                          <div>
                            <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block">{t('officialWhatsApp')}</span>
                            <span className="text-xs font-bold text-slate-700 group-hover:text-brand-blue transition-colors">{t('chatInstantly')}</span>
                          </div>
                        </a>

                        <a 
                          href={`tel:${contact.phone}`}
                          className="flex items-center gap-3 bg-white hover:bg-slate-100 border border-slate-200 p-4 rounded-xl transition-all cursor-pointer group decoration-none"
                        >
                          <div className="p-2.5 bg-blue-50 text-brand-blue rounded-xl">
                            <Phone size={18} />
                          </div>
                          <div>
                            <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block">{t('phoneCall')}</span>
                            <span className="text-xs font-bold text-slate-700 group-hover:text-brand-blue transition-colors" dir="ltr">{contact.phone}</span>
                          </div>
                        </a>

                        <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl">
                          <div className="p-2.5 bg-blue-50 text-brand-blue rounded-xl">
                            <MapPin size={18} />
                          </div>
                          <div>
                            <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block">{t('campusBase')}</span>
                            <span className="text-xs font-bold text-slate-700">{lang === 'en' ? contact.addressEn : contact.addressAr}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-xl">
                          <div className="p-2.5 bg-slate-100 text-slate-500 rounded-xl">
                            <Clock size={18} />
                          </div>
                          <div>
                            <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block">{t('officeHours')}</span>
                            <span className="text-xs font-bold text-slate-700">{t('officeHoursDays')}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    
                    {/* Form */}
                    <div className="lg:col-span-8">
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
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 relative text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
            
            <div className="space-y-4 md:col-span-2">
              <Logo />

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

    </div>
  );
}
