import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';

import { academyContent } from './data/academyContent';
import { useTranslation } from './hooks/useTranslation';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VideoModal from './components/layout/VideoModal';
import Lightbox from './components/layout/Lightbox';

// Page components (lazy loaded for improved performance)
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Programs = lazy(() => import('./components/pages/Programs'));
const PracticalTraining = lazy(() => import('./components/pages/PracticalTraining'));
const Accreditations = lazy(() => import('./components/pages/Accreditations'));
const Team = lazy(() => import('./components/pages/Team'));
const Partnerships = lazy(() => import('./components/pages/Partnerships'));
const TestingLab = lazy(() => import('./components/pages/TestingLab'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Careers = lazy(() => import('./components/pages/Careers'));
const B2B = lazy(() => import('./components/pages/B2B'));
const Gallery = lazy(() => import('./components/pages/Gallery'));
const News = lazy(() => import('./components/pages/News'));
const Volunteers = lazy(() => import('./components/pages/Volunteers'));
const Legal = lazy(() => import('./components/pages/Legal'));
const Academy = lazy(() => import('./components/pages/Academy'));

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
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>('/new-vod.mp4');
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

  // Dynamic SEO Page Title & Meta Description Updater
  useEffect(() => {
    const seoConfig: Record<PageType, { title: string; desc: string }> = {
      home: {
        title: 'Hypro Academy | Master Hybrid & EV Diagnostics | Syria',
        desc: 'Syria\'s premier vocational training hub for hybrid and electric vehicle mechanics. 80% practical learning, elite mentors, and direct garage placements.'
      },
      about: {
        title: 'About Us | Hypro Academy Syria',
        desc: 'Learn about Hypro Academy\'s vision, mission, and commitment to transferring high-voltage technology to Syria\'s local workforce.'
      },
      academy: {
        title: 'Vocational Programs & Courses | Hypro Academy',
        desc: 'Explore our intensive training programs in EV technology, Hybrid systems, and automotive electronic diagnostics.'
      },
      programs: {
        title: 'Technical Curriculums & Syllabuses | Hypro Academy',
        desc: 'View the modular course breakdown, contact hours, and practical training ratios of our accredited diplomas.'
      },
      'practical-training': {
        title: 'Hands-On Practical Training | Hypro Academy',
        desc: 'See how our trainees gain real-world shop experience working directly on high-voltage battery banks under expert guidance.'
      },
      accreditations: {
        title: 'Accreditations & Certification | Hypro Academy',
        desc: 'Hypro Academy certificates are standardized with local craft syndicates and feature online validation verification codes.'
      },
      team: {
        title: 'Our Elite Technical Faculty & Mentors | Hypro Academy',
        desc: 'Meet the professional engineers and workshop masters training the next generation of automotive technicians in Syria.'
      },
      partnerships: {
        title: 'Partnerships & Alliances | Hypro Academy',
        desc: 'Establish training, placement, or sponsorship collaborations with Syria\'s leading vocational training platform.'
      },
      'testing-lab': {
        title: 'Interactive Testing & Diagnostics Lab | Hypro Academy',
        desc: 'Explore our high-voltage testing lab and interactive powertrain simulator for modern hybrid and electric vehicle systems.'
      },
      contact: {
        title: 'Contact Us | Hypro Academy Admissions Syria',
        desc: 'Register interest or contact our admissions coordinators directly via WhatsApp or phone. Visit our Damascus campus.'
      },
      careers: {
        title: 'Careers & Job Placement Center | Hypro Academy',
        desc: 'We connect certified graduates directly with top maintenance centers, fleet importers, and NGOs, achieving 92% placement rates.'
      },
      volunteers: {
        title: 'Volunteer Portal | Hypro Academy Syria',
        desc: 'Join our community, assist in diagnostics labs, and help transfer modern automotive tech to the Syrian workforce.'
      },
      legal: {
        title: 'Legal Agreements & Privacy | Hypro Academy',
        desc: 'Read the privacy policies, terms, and conditions governing registration at Hypro Academy.'
      },
      b2b: {
        title: 'B2B Solutions & Partnerships | Hypro Academy',
        desc: 'Customized automotive training and fleet maintenance standards for corporate and developmental clients.'
      },
      gallery: {
        title: 'Photo & Video Gallery | Hypro Academy',
        desc: 'Look inside our training workshops, high-voltage labs, and student practical projects in Syria.'
      },
      news: {
        title: 'News & Technical Events | Hypro Academy',
        desc: 'Stay updated with Hypro Academy\'s workshops, seminars, and technical automotive events in Syria.'
      }
    };

    const currentSeo = seoConfig[currentPage] || seoConfig.home;
    document.title = currentSeo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }
  }, [currentPage]);

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
          <Suspense fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-slate-50">
              <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-mono tracking-widest text-slate-400 font-bold uppercase animate-pulse">Loading Academy Page...</span>
            </div>
          }>
            {renderPage()}
          </Suspense>
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
