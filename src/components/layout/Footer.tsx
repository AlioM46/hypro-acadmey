import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import Logo from '../Logo';

type PageType = 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team' | 'careers' | 'b2b' | 'gallery' | 'news' | 'volunteers' | 'legal';

interface FooterProps {
  lang: 'en' | 'ar';
  t: (key: string) => string;
  navigateTo: (page: PageType) => void;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    addressEn: string;
    addressAr: string;
    telegram: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
  meta: {
    descriptionEn: string;
    descriptionAr: string;
  };
}

export default function Footer({ lang, t, navigateTo, contact, meta }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Logo imgClassName="h-10 sm:h-12" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-sans pt-1 font-medium">
              {lang === 'en' ? meta.descriptionEn : meta.descriptionAr}
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={contact.facebook || 'https://www.facebook.com/profile.php?id=61586683203347'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 hover:bg-blue-600 hover:border-blue-500 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href={contact.instagram || 'https://www.instagram.com/hypro_academy?igsh=MWI5aDA0MHc1ejViOA%3D%3D&utm_source=qr'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={contact.linkedin || 'https://www.linkedin.com/company/117234531/admin/analytics/search-appearances/'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 hover:bg-blue-700 hover:border-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 font-sans">
            <h5 className="text-xs font-bold text-slate-350 tracking-wider uppercase font-mono">
              {lang === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-450 font-medium">
              <button onClick={() => navigateTo('gallery')} className="bg-transparent border-none text-slate-400 hover:text-white transition-colors cursor-pointer text-start p-0">
                {t('galleryNav')}
              </button>
              <button onClick={() => navigateTo('news')} className="bg-transparent border-none text-slate-400 hover:text-white transition-colors cursor-pointer text-start p-0">
                {t('newsNav')}
              </button>
              <button onClick={() => navigateTo('volunteers')} className="bg-transparent border-none text-slate-400 hover:text-white transition-colors cursor-pointer text-start p-0">
                {t('volunteersNav')}
              </button>
              <button onClick={() => navigateTo('legal')} className="bg-transparent border-none text-slate-400 hover:text-white transition-colors cursor-pointer text-start p-0">
                {t('legalNav')}
              </button>
            </div>
          </div>

          {/* Coordinates */}
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

          {/* Channels */}
          <div className="space-y-4 font-sans">
            <h5 className="text-xs font-bold text-slate-350 tracking-wider uppercase font-mono">
              {t('channels')}
            </h5>
            <div className="space-y-2.5 text-xs">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors decoration-none"
              >
                <MessageSquare size={13} className="text-emerald-400" />
                <span>{t('telegramWaLink')}</span>
              </a>

              {contact.facebook && (
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors decoration-none"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-blue-500" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span>{t('facebookLink')}</span>
                </a>
              )}

              {contact.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors decoration-none"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-pink-500" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>{t('instagramLink')}</span>
                </a>
              )}

              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors decoration-none"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-blue-600" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>{t('linkedinLink')}</span>
                </a>
              )}

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
        </div>
      </div>
    </footer>
  );
}
