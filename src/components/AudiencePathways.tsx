import { useState } from 'react';
import { academyContent } from '../data/academyContent';
import { Shield, Hammer, Briefcase, Handshake, CheckSquare, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface AudiencePathwaysProps {
  lang?: 'en' | 'ar'; // Keeping this for backward compatibility while refactoring
  activeCategory: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer';
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer') => void;
}

export default function AudiencePathways({ activeCategory, setActiveCategory }: AudiencePathwaysProps) {
  const { t, tObj } = useTranslation();
  const benefits = academyContent.benefits;

  const roles = [
    {
      id: 'student' as const,
      labelEn: 'Student / Skill Seeker',
      labelAr: 'طالـب علم / مصلح مـستقبلي',
      descEn: 'Learn a highly-valued, high-paying career trade from zero mechanical background.',
      descAr: 'تعلّم مصلحة العمر وصيانة المستقبل بدخل ممتاز بدءاً من الصفر دون شروط تعجيزية.',
      icon: Hammer,
      badgeEn: 'Enrolling Now',
      badgeAr: 'التسجيل متاح'
    },
    {
      id: 'workshop' as const,
      labelEn: 'Garage & Workshop Owner',
      labelAr: 'أصحـاب ورش ومـراكز الصيانة',
      descEn: 'Hire vetted, certified diagnostic mechanics or upscale your primary workforce.',
      descAr: 'وظّف فنيين معتمدين جاهزين للعمل، أو قم بتدريب وتطوير طاقم الورشة الحالي لديك.',
      icon: Shield,
      badgeEn: 'B2B Placement',
      badgeAr: 'خدمات الشركات'
    },
    {
      id: 'dealer' as const,
      labelEn: 'Car Dealer & Distributor',
      labelAr: 'وكـلاء وصـالات بيع السيارات',
      descEn: 'Secure highly certified EV/hybrid diagnostics to support agency warranties.',
      descAr: 'احصل على فنيين ومهندسين متخصصين في دقة فحص برمجات السيارات الكهربائية والوكالات.',
      icon: Briefcase,
      badgeEn: 'Fleet Calibration',
      badgeAr: 'تأمين الكوادر'
    },
    {
      id: 'ngo' as const,
      labelEn: 'Ministries, NGOs & Orgs',
      labelAr: 'الوزارات، المنظّمات والمؤسسات',
      descEn: 'Collaborate on structured vocational programs for economic recovery & welfare.',
      descAr: 'اتفاقيات تمكين اقتصادي، صيانة كلاسيكية وحديثة، ودورات رعاية مهنية واسعة النطاق.',
      icon: Handshake,
      badgeEn: 'Social Impact',
      badgeAr: 'اتفاقيات تنموية'
    }
  ];

  const activeRoleData = roles.find(r => r.id === activeCategory) || roles[0];
  const activeBenefits = benefits[activeCategory as 'student' | 'workshop' | 'dealer' | 'ngo'] || benefits['student'];

  return (
    <div className="py-12" id="answers-hub">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
          {t('audienceTitle')}
        </h3>
        <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-2xl mx-auto font-medium font-sans">
          {t('audienceDesc')}
        </p>
      </div>

      {/* Role Selector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {roles.map((r) => {
          const isSelected = r.id === activeCategory;
          const Icon = r.icon;
          return (
            <button
              key={r.id}
              onClick={() => setActiveCategory(r.id)}
              id={`btn-path-${r.id}`}
              className={`text-start p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-brand-blue shadow-sm scale-[1.01]'
                  : 'bg-white border-slate-150 hover:border-slate-350'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${isSelected ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon size={18} />
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                    isSelected ? 'bg-blue-50 text-brand-blue' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {tObj(r, 'badge')}
                  </span>
                </div>

                <h4 className="font-bold text-base text-slate-900 leading-tight font-sans">
                  {tObj(r, 'label')}
                </h4>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2 font-sans font-medium">
                  {tObj(r, 'desc')}
                </p>
              </div>

              {/* Indicator Link */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold font-sans">
                <span className={isSelected ? 'text-brand-blue font-bold' : 'text-slate-400 group-hover:text-slate-900'}>
                  {t('exploreDetails')}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Benefits Showcase Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm transition-all" id="benefits-showcase">
        <div className="border-b border-slate-100 pb-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-start">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
              {t('roleValueProposition')}
            </span>
            <h4 id="answers-active-header" className="text-xl font-bold text-slate-900 font-sans mt-0.5">
              {tObj(activeRoleData, 'label')}
            </h4>
          </div>

          <a
            href="#contact-form-section"
            className="self-start md:self-auto bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer uppercase shadow-sm decoration-none"
          >
            <Award size={14} className="text-white" />
            <span>{t('inquireProgram')}</span>
          </a>
        </div>

        {/* Tailored Benefits List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeBenefits.map((b, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center">
                  <CheckSquare size={13} />
                </div>
              </div>
              <div className="text-start">
                <h5 className="font-semibold text-slate-900 text-sm">
                  {tObj(b, 'title')}
                </h5>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium">
                  {tObj(b, 'description')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
