import { useState } from 'react';
import { academyContent } from '../data/academyContent';
import { HelpCircle, ChevronRight, ChevronDown, Search } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface FAQSectionProps {
  lang?: 'en' | 'ar'; // Backward compatibility
}

export default function FAQSection() {
  const { lang, t, tObj } = useTranslation();
  const [activeTab, setActiveTab] = useState<'all' | 'student' | 'workshop' | 'ngo'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs = academyContent.faqs;

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter logic
  const filteredFaqs = faqs.filter(f => {
    const categoryMatches = activeTab === 'all' || f.category === activeTab;
    
    const query = searchQuery.trim().toLowerCase();
    if (!query) return categoryMatches;

    const questionText = tObj(f, 'question').toLowerCase();
    const answerText = tObj(f, 'answer').toLowerCase();
    
    return categoryMatches && (questionText.includes(query) || answerText.includes(query));
  });

  return (
    <div className="py-12" id="academy-faqs">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
          {t('faqTitle')}
        </h3>
        <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-2xl mx-auto font-medium font-sans">
          {t('faqDesc')}
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-6 relative">
        <div className={`absolute inset-y-0 ${lang === 'en' ? 'left-4' : 'right-4'} flex items-center pointer-events-none text-slate-400`}>
          <Search size={16} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('searchPlaceholder')}
          id="faq-search-input"
          className={`w-full bg-white border border-slate-200 rounded-2xl ${
            lang === 'en' ? 'pl-11 pr-4' : 'pr-11 pl-4'
          } py-3.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue transition-colors shadow-sm`}
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {(['all', 'student', 'workshop', 'ngo'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            id={`btn-faq-tab-${tab}`}
            className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
              activeTab === tab
                ? 'bg-brand-blue text-white shadow-sm border-none'
                : 'bg-white border border-slate-200 hover:border-slate-300 text-slate-600'
            }`}
          >
            {tab === 'all' && t('tabAll')}
            {tab === 'student' && t('tabStudent')}
            {tab === 'workshop' && t('tabWorkshop')}
            {tab === 'ngo' && t('tabNgo')}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  id={`btn-toggle-faq-${faq.id}`}
                  className="w-full text-start p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors select-none bg-transparent border-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-blue-50 text-brand-blue">
                      <HelpCircle size={15} />
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base leading-snug">
                      {tObj(faq, 'question')}
                    </h4>
                  </div>
                  <span className="text-slate-400">
                    {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} className="rtl-flip" />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ${
                    isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <p className="p-5 text-xs md:text-sm leading-relaxed text-slate-650 bg-slate-50/50 text-start font-medium font-sans">
                    {tObj(faq, 'answer')}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-100 text-slate-400 text-sm font-sans font-medium">
            {t('noResults')}
          </div>
        )}
      </div>
    </div>
  );
}
