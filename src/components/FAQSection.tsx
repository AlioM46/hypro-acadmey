import { useState } from 'react';
import { academyContent } from '../data/academyContent';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function FAQSection() {
  const { lang, t, tObj } = useTranslation();
  const [activeTab, setActiveTab] = useState<'all' | 'student' | 'workshop' | 'ngo'>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs = academyContent.faqs;

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter(f => activeTab === 'all' || f.category === activeTab);

  return (
    <div className="py-12" id="academy-faqs">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block mb-3">
          {lang === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'الأسئلة الشائعة والمتكررة'}
        </span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans leading-tight">
          {t('faqTitle')}
        </h3>
        <p className="text-slate-500 mt-3 text-sm leading-relaxed max-w-2xl mx-auto font-medium font-sans">
          {t('faqDesc')}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {(['all', 'student', 'workshop', 'ngo'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            id={`btn-faq-tab-${tab}`}
            className={`px-5 py-2.5 text-xs font-bold cursor-pointer transition-all ${activeTab === tab
                ? 'bg-brand-blue text-white border-none'
                : 'bg-white border border-slate-200 hover:border-brand-blue text-slate-600 hover:text-brand-blue'
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
                className={`bg-white border transition-all duration-300 ${isOpen ? 'border-brand-blue/30 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  id={`btn-toggle-faq-${faq.id}`}
                  className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors select-none bg-transparent border-none"
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-2 transition-colors duration-300 flex-shrink-0 ${isOpen ? 'bg-brand-blue text-white' : 'bg-blue-50 text-brand-blue'}`}>
                      <HelpCircle size={15} />
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base leading-snug">
                      {tObj(faq, 'question')}
                    </h4>
                  </div>
                  <span className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div className={isOpen ? 'faq-answer-open' : 'faq-answer-enter'}>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className={`border-t border-slate-100 pt-4 ${lang === 'en' ? 'pl-10' : 'pr-10'}`}>
                      <p className="text-xs md:text-sm leading-relaxed text-slate-600 text-start font-medium font-sans">
                        {tObj(faq, 'answer')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 bg-white border border-slate-100 text-slate-400 text-sm font-sans font-medium">
            {t('noResults')}
          </div>
        )}
      </div>

      {/* CTA below FAQ */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-slate-500 text-xs font-medium mb-4">
          {lang === 'en' ? "Still have questions? We're here to help." : 'لا تزال لديك أسئلة؟ نحن هنا للمساعدة.'}
        </p>
        <a
          href="https://wa.me/963955408202"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 transition-all cursor-pointer border-none"
        >
          <MessageSquare size={14} className="fill-white" />
          <span>{lang === 'en' ? 'Chat with us on WhatsApp' : 'تواصل معنا عبر واتساب'}</span>
        </a>
      </div>
    </div>
  );
}
