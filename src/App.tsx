import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';

import { academyContent } from './data/academyContent';
import { useTranslation } from './hooks/useTranslation';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VideoModal from './components/layout/VideoModal';
import Lightbox from './components/layout/Lightbox';

// Page components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Programs from './components/pages/Programs';
import PracticalTraining from './components/pages/PracticalTraining';
import Accreditations from './components/pages/Accreditations';
import Team from './components/pages/Team';
import Partnerships from './components/pages/Partnerships';
import TestingLab from './components/pages/TestingLab';
import Contact from './components/pages/Contact';
import Careers from './components/pages/Careers';
import B2B from './components/pages/B2B';
import Gallery from './components/pages/Gallery';
import News from './components/pages/News';
import Volunteers from './components/pages/Volunteers';
import Legal from './components/pages/Legal';
import Academy from './components/pages/Academy';

type CategoryType = 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer';
type PageType = 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team' | 'careers' | 'b2b' | 'gallery' | 'news' | 'volunteers' | 'legal' | 'academy';

export default function App() {
  const { lang, setLang, t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('student');

  const getPageFromPath = (): PageType => {
    const path = window.location.pathname.replace(/^\//, '');
    const validPages: PageType[] = ['home', 'about', 'programs', 'testing-lab', 'partnerships', 'contact', 'practical-training', 'accreditations', 'team', 'careers', 'b2b', 'gallery', 'news', 'volunteers', 'legal', 'academy'];
    return validPages.includes(path as PageType) ? (path as PageType) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getPageFromPath);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  // Lightbox / Video Modal States
  const [activeAccreditation, setActiveAccreditation] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>('/whatsapp-video-2026.mp4');
  const [lightboxTitle, setLightboxTitle] = useState<string | null>(null);
  const [lightboxDesc, setLightboxDesc] = useState<string | null>(null);

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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            navigateTo={navigateTo}
            setVideoModalOpen={setVideoModalOpen}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        );
      case 'about':
        return <About navigateTo={navigateTo} />;
      case 'academy':
        return <Academy navigateTo={navigateTo} setActiveCategory={setActiveCategory} />;
      case 'programs':
        return <Programs />;
      case 'practical-training':
        return (
          <PracticalTraining
            setVideoModalOpen={setVideoModalOpen}
            setActiveVideoUrl={setActiveVideoUrl}
            setActiveAccreditation={setActiveAccreditation}
            setLightboxTitle={setLightboxTitle}
            setLightboxDesc={setLightboxDesc}
          />
        );
      case 'accreditations':
        return (
          <Accreditations
            navigateTo={navigateTo}
            setActiveAccreditation={setActiveAccreditation}
            setLightboxTitle={setLightboxTitle}
            setLightboxDesc={setLightboxDesc}
          />
        );
      case 'team':
        return <Team navigateTo={navigateTo} />;
      case 'partnerships':
        return <Partnerships navigateTo={navigateTo} setActiveCategory={setActiveCategory} />;
      case 'testing-lab':
        return <TestingLab />;
      case 'contact':
        return <Contact activeCategory={activeCategory} setActiveCategory={setActiveCategory} />;
      case 'careers':
        return <Careers />;
      case 'b2b':
        return <B2B />;
      case 'gallery':
        return <Gallery />;
      case 'news':
        return <News />;
      case 'volunteers':
        return <Volunteers />;
      case 'legal':
        return <Legal />;
      default:
        return (
          <Home
            navigateTo={navigateTo}
            setVideoModalOpen={setVideoModalOpen}
            setActiveCategory={setActiveCategory}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      <Header
        currentPage={currentPage}
        navigateTo={navigateTo}
        navigateToAndScroll={navigateToAndScroll}
        lang={lang}
        setLang={setLang}
        t={t}
        showStickyHeader={showStickyHeader}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer
        lang={lang}
        t={t}
        navigateTo={navigateTo}
        contact={academyContent.contact}
        meta={academyContent.meta}
      />

      {/* Lightbox Modal for Accreditations */}
      <Lightbox
        imageSrc={activeAccreditation}
        title={lightboxTitle}
        desc={lightboxDesc}
        lang={lang}
        onClose={() => {
          setActiveAccreditation(null);
          setLightboxTitle(null);
          setLightboxDesc(null);
        }}
      />

      {/* Video Lightbox Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        videoUrl={activeVideoUrl}
        lang={lang}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
