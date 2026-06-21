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
        </div>
      </div>
    </footer>
  );
}
