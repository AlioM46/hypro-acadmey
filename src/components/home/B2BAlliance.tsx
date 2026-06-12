import React from 'react';
import { Handshake, Wrench, Building2, Users, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface B2BAllianceProps {
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo') => void;
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
}

export default function B2BAlliance({ setActiveCategory, navigateTo }: B2BAllianceProps) {
  const { t, tVal } = useTranslation();

  return (
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
  );
}
