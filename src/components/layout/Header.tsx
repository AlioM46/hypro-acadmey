import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Clock, Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../Logo';

type PageType = 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team' | 'careers' | 'b2b' | 'gallery' | 'news' | 'volunteers' | 'legal';

interface HeaderProps {
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
  navigateToAndScroll: (page: PageType, elementId: string) => void;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
  showStickyHeader: boolean;
}

export default function Header({
  currentPage,
  navigateTo,
  navigateToAndScroll,
  lang,
  setLang,
  t,
  showStickyHeader
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileAcademyOpen, setIsMobileAcademyOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('home'), type: 'link' },
    {
      id: 'about-dropdown',
      label: t('aboutNav'),
      type: 'dropdown',
      subitems: [
        { label: lang === 'en' ? 'Who We Are' : 'تعريف ونشأة الأكاديمية', action: () => navigateTo('about') },
        { label: t('ourFaculty'), action: () => navigateTo('team') },
        { label: t('accreditations'), action: () => navigateTo('accreditations') },
      ]
    },
    {
      id: 'academy-dropdown',
      label: t('academyNav'),
      type: 'dropdown',
      subitems: [
        { label: lang === 'en' ? 'Academy Overview' : 'نظرة عامة على الأكاديمية', action: () => navigateTo('academy') },
        { label: t('programs'), action: () => navigateTo('programs') },
        { label: t('practicalTrainingTitle'), action: () => navigateTo('practical-training') },
        { label: lang === 'en' ? 'Diagnostics Lab' : 'مختبر الفحص والتشخيص', action: () => navigateTo('testing-lab') },
      ]
    },
    { id: 'b2b', label: t('b2bNav'), type: 'link' },
    { id: 'careers', label: t('careersNav'), type: 'link' },
    { id: 'partnerships', label: t('partnershipsNav'), type: 'link' },
    { id: 'contact', label: t('contactNav'), type: 'link' }
  ];

  const renderDesktopNav = () => (
    <nav className="hidden lg:flex items-center lg:gap-3 xl:gap-6 lg:text-[10px] xl:text-xs font-black uppercase tracking-wider">
      {navItems.map((item) => {
        if (item.type === 'link') {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id as PageType)}
              className={`transition-all cursor-pointer bg-transparent border-none pb-1 ${isActive ? 'text-white border-b-2 border-white' : 'text-white/85 hover:text-sky-400 font-semibold'
                }`}
            >
              {item.label}
            </button>
          );
        } else {
          return (
            <div key={item.id} className="relative group py-2">
              <button
                onClick={() => navigateTo(item.id.replace('-dropdown', '') as PageType)}
                className="transition-all cursor-pointer bg-transparent border-none pb-1 flex items-center gap-1.5 text-white/85 hover:text-sky-400 font-semibold"
              >
                <span>{item.label}</span>
                <ChevronDown size={11} className="opacity-75 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-56 z-50 hidden group-hover:flex flex-col">
                <div className="bg-white text-slate-800 rounded-none border border-slate-200 py-0 w-full flex flex-col shadow-lg">
                  {item.subitems?.map((sub, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={sub.action}
                      className="px-5 py-3.5 hover:bg-slate-50 text-slate-805 hover:text-brand-blue text-xs font-bold transition-colors border-none bg-transparent cursor-pointer w-full text-center"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      })}
    </nav>
  );

  return (
    <>
      {/* STATIC/RELATIVE HEADER */}
      <header
        className={`z-50 px-4 sm:px-6 lg:px-8 ${currentPage === 'home'
          ? 'absolute top-0 left-0 right-0 bg-transparent border-b border-white/20 py-3 text-white'
          : 'sticky top-0 bg-brand-blue border-b border-white/10 py-1.5 text-white'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Logo
            onClick={() => navigateTo('home')}
            imgClassName="h-12 sm:h-14"
            className="cursor-pointer hover:opacity-90 transition-opacity"
          />

          {renderDesktopNav()}

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold text-[10px] sm:text-xs px-3 py-2 flex items-center gap-1.5 transition-all cursor-pointer uppercase font-sans"
            >
              <Globe size={13} className="text-blue-200" />
              <span>{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`hidden sm:flex font-extrabold text-[10px] px-4 py-2 items-center gap-1.5 transition-all cursor-pointer border ${currentPage !== 'home'
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
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* STICKY SLIDE-DOWN HEADER (Home page only) */}
      {currentPage === 'home' && (
        <header
          className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 bg-brand-blue/95 backdrop-blur-md border-b border-white/20 py-1.5 text-white transform transition-all duration-300 ease-out ${showStickyHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
            }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <Logo
              onClick={() => navigateTo('home')}
              imgClassName="h-14 sm:h-18"
              className="cursor-pointer hover:opacity-90 transition-opacity"
            />

            {renderDesktopNav()}

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold text-[10px] sm:text-xs px-3 py-2 flex items-center gap-1.5 transition-all cursor-pointer uppercase"
              >
                <Globe size={13} className="text-blue-200" />
                <span>{lang === 'en' ? 'AR' : 'EN'}</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="hidden sm:flex font-extrabold text-[10px] px-4 py-2 items-center gap-1.5 transition-all cursor-pointer border bg-white text-brand-blue hover:bg-slate-50 border-transparent"
              >
                <Clock size={12} />
                <span>{t('registerNow')}</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex lg:hidden p-3 text-blue-100 hover:text-white focus:outline-none transition-colors border-none bg-transparent cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900 z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.35 }}
              className="fixed top-0 right-0 bottom-0 h-full w-[290px] sm:w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between text-slate-800 lg:hidden"
            >
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                <Logo
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('home');
                  }}
                  imgClassName="h-12 sm:h-15"
                  className="cursor-pointer"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-brand-blue p-1 border-none bg-transparent cursor-pointer transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links inside Drawer */}
              <div className="flex-grow overflow-y-auto px-4 py-6 space-y-2 flex flex-col text-start">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('home'); }}
                  className={`py-2 px-3 text-start text-xs font-bold border-none rounded-xl transition-all cursor-pointer ${currentPage === 'home' ? 'bg-blue-50 text-brand-blue' : 'bg-transparent text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {t('home')}
                </button>

                {/* About dropdown collapse */}
                <div>
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="w-full py-2 px-3 flex items-center justify-between text-xs font-bold border-none bg-transparent text-slate-650 hover:bg-slate-50"
                  >
                    <span>{t('aboutNav')}</span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileAboutOpen && (
                    <div className="pl-6 border-l-2 border-slate-100 py-1.5 space-y-2 flex flex-col items-start font-medium">
                      <button
                        onClick={() => { setIsMobileMenuOpen(false); navigateTo('about'); }}
                        className="text-slate-500 hover:text-brand-blue text-xs font-bold border-none bg-transparent cursor-pointer"
                      >
                        - {lang === 'en' ? 'Who We Are' : 'تعريف ونشأة الأكاديمية'}
                      </button>
                      <button
                        onClick={() => { setIsMobileMenuOpen(false); navigateTo('team'); }}
                        className="text-slate-500 hover:text-brand-blue text-xs font-bold border-none bg-transparent cursor-pointer"
                      >
                        - {t('ourFaculty')}
                      </button>
                      <button
                        onClick={() => { setIsMobileMenuOpen(false); navigateTo('accreditations'); }}
                        className="text-slate-500 hover:text-brand-blue text-xs font-bold border-none bg-transparent cursor-pointer"
                      >
                        - {t('accreditations')}
                      </button>
                    </div>
                  )}
                </div>

                {/* Academy dropdown collapse */}
                <div>
                  <button
                    onClick={() => setIsMobileAcademyOpen(!isMobileAcademyOpen)}
                    className="w-full py-2 px-3 flex items-center justify-between text-xs font-bold border-none bg-transparent text-slate-650 hover:bg-slate-50"
                  >
                    <span>{t('academyNav')}</span>
                    <ChevronDown size={12} className={`transition-transform duration-200 ${isMobileAcademyOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileAcademyOpen && (
                    <div className="pl-6 border-l-2 border-slate-100 py-1.5 space-y-2 flex flex-col items-start font-medium">
                      <button
                        onClick={() => { setIsMobileMenuOpen(false); navigateTo('academy'); }}
                        className="text-slate-500 hover:text-brand-blue text-xs font-bold border-none bg-transparent cursor-pointer"
                      >
                        - {lang === 'en' ? 'Academy Overview' : 'نظرة عامة على الأكاديمية'}
                      </button>
                      <button
                        onClick={() => { setIsMobileMenuOpen(false); navigateTo('programs'); }}
                        className="text-slate-500 hover:text-brand-blue text-xs font-bold border-none bg-transparent cursor-pointer"
                      >
                        - {t('programs')}
                      </button>
                      <button
                        onClick={() => { setIsMobileMenuOpen(false); navigateTo('practical-training'); }}
                        className="text-slate-500 hover:text-brand-blue text-xs font-bold border-none bg-transparent cursor-pointer"
                      >
                        - {t('practicalTrainingTitle')}
                      </button>
                      <button
                        onClick={() => { setIsMobileMenuOpen(false); navigateTo('testing-lab'); }}
                        className="text-slate-500 hover:text-brand-blue text-xs font-bold border-none bg-transparent cursor-pointer"
                      >
                        - {lang === 'en' ? 'Diagnostics Lab' : 'مختبر الفحص'}
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('b2b'); }}
                  className={`py-2 px-3 text-start text-xs font-bold border-none rounded-xl transition-all cursor-pointer ${currentPage === 'b2b' ? 'bg-blue-50 text-brand-blue' : 'bg-transparent text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {t('b2bNav')}
                </button>

                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('careers'); }}
                  className={`py-2 px-3 text-start text-xs font-bold border-none rounded-xl transition-all cursor-pointer ${currentPage === 'careers' ? 'bg-blue-50 text-brand-blue' : 'bg-transparent text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {t('careersNav')}
                </button>

                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('partnerships'); }}
                  className={`py-2 px-3 text-start text-xs font-bold border-none rounded-xl transition-all cursor-pointer ${currentPage === 'partnerships' ? 'bg-blue-50 text-brand-blue' : 'bg-transparent text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {t('partnershipsNav')}
                </button>

                <button
                  onClick={() => { setIsMobileMenuOpen(false); navigateTo('contact'); }}
                  className={`py-2 px-3 text-start text-xs font-bold border-none rounded-xl transition-all cursor-pointer ${currentPage === 'contact' ? 'bg-blue-50 text-brand-blue' : 'bg-transparent text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  {t('contactNav')}
                </button>
              </div>

              {/* Drawer footer CTA */}
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
    </>
  );
}
