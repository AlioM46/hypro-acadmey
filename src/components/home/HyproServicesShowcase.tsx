import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Settings, Cpu, HardDrive, CheckSquare } from 'lucide-react';

export default function HyproServicesShowcase() {
  const { lang } = useTranslation();

  const services = [
    {
      icon: Cpu,
      titleEn: 'Expert ECU Calibration & Flash Support',
      titleAr: 'دعم تكويد وبرمجة العقول الإلكترونية',
      descEn: 'Online configuration, software updates, and immobilizer coding for workshops handling complex EV/Hybrid faults.',
      descAr: 'خدمات التكويد عن بُعد، ومزامنة أنظمة الحماية، وتحديث برمجيات عقول السيارات لمساعدة الورش في حل الأعطال المستعصية.'
    },
    {
      icon: HardDrive,
      titleEn: 'Diagnostics Tool Setup & Database Subscriptions',
      titleAr: 'تأمين وتجهيز أجهزة الفحص والاشتراكات',
      descEn: 'Equipping workshops with legal diagnostic scanners, oscilloscopes, and original maintenance data access (Autodata/Alldata).',
      descAr: 'تأمين أجهزة فحص الأعطال التخصصية، ومقاييس الإشارة (Oscilloscope)، وتوفير اشتراكات قواعد البيانات والمخططات الفنية.'
    },
    {
      icon: CheckSquare,
      titleEn: 'Workshop Quality & Safety Certification',
      titleAr: 'شهادات الجودة وتدقيق الأمان المهني',
      descEn: 'Structuring workshop workflows, high-voltage safety zones, and certifying technicians in handling 400V+ vehicle architectures.',
      descAr: 'تصميم مسارات العمل الآمنة داخل الورش، وتجهيز مناطق عزل سيارات الفولت المرتفع، ومنح شهادات الأمان والسلامة.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Technical Highlights Cards */}
          <div className="lg:col-span-7 space-y-4 lg:order-1 order-2">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-200 p-5 hover:border-slate-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm"
                >
                  <div className="p-2.5 bg-white border border-slate-200 text-brand-blue shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {lang === 'en' ? service.titleEn : service.titleAr}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {lang === 'en' ? service.descEn : service.descAr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Block: Marketing / Brand Message */}
          <div className="lg:col-span-5 space-y-6 lg:order-2 order-1">
            <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block">
              {lang === 'en' ? 'ENGINEERING OUTREACH' : 'التمكين الهندسي والخدمي'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {lang === 'en' 
                ? 'Elevating the Maintenance Quality Standards in Syria' 
                : 'رفع كفاءة وموثوقية مراكز الصيانة والورش'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {lang === 'en'
                ? 'Through Hypro Services, we partner with independent garages, fleet operators, and maintenance centers. We supply the tools, programming support, and safety guidelines required to service state-of-the-art electric vehicle systems safely.'
                : 'يقدم قسم الخدمات الهندسية حلولاً متكاملة لأصحاب الورش الفنية وأساطيل النقل. نؤمّن لهم الاستشارات والعدد المتطورة لتفادي العشوائية في الصيانة، ونرسم لهم بروتوكولات الأمان للتعامل مع أنظمة الجهد العالي.'}
            </p>
            
            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-brand-blue shrink-0">
                <Settings size={20} />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                  {lang === 'en' ? 'Workshop Support' : 'المساندة الميدانية للورش'}
                </h4>
                <p className="text-slate-500 text-xs mt-1 font-medium leading-relaxed">
                  {lang === 'en' 
                    ? 'Empowering over 30+ service centers in Syria with direct programming, diagrams, and calibrated testing scopes.' 
                    : 'نقدم خدمات الدعم الفني، والمخططات الأصلية، وبرمجة الأنظمة لأكثر من 30 مركز صيانة وورشة عمل في سوريا.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
