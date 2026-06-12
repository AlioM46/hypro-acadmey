import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Shield, Zap, RefreshCw, BarChart3 } from 'lucide-react';

export default function HyproEnergyShowcase() {
  const { lang } = useTranslation();

  const steps = [
    {
      icon: BarChart3,
      titleEn: 'Cell Diagnostics & SOH Analysis',
      titleAr: 'تحليل كفاءة وصحة الخلايا (SOH)',
      descEn: 'Analyzing internal resistance, capacity decay, and voltage curves of high-voltage battery modules using specialized computerized cyclers.',
      descAr: 'قياس المقاومة الداخلية، وتراجع السعة، ومنحنيات التفريغ للبطاريات الكبيرة باستخدام أجهزة حاسوبية مخصصة.'
    },
    {
      icon: RefreshCw,
      titleEn: 'Active Voltage Rebalancing',
      titleAr: 'إعادة موازنة الجهد النشط للبطاريات',
      descEn: 'Equalizing state-of-charge (SOC) across all series-connected cell groups to eliminate bottlenecks and fully restore usable energy capacity.',
      descAr: 'موازنة نسب الشحن (SOC) بين الخلايا المتصلة على التوالي لحل مشاكل الهبوط المفاجئ واستعادة السعة القصوى.'
    },
    {
      icon: Shield,
      titleEn: 'BMS Calibration & Safety Verification',
      titleAr: 'معايرة أنظمة الحماية BMS وفحص العزل',
      descEn: 'Testing thermal runaway thresholds, insulation resistance (megohmmeter tests), and programming custom Battery Management System limits.',
      descAr: 'اختبار درجات الحرارة الحرجة، ومقاومة العزل الكهربائي بجهاز الميجر، وبرمجة حدود نظام إدارة البطارية الذكي.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Modern Graphic/Stats style presentation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider block">
              {lang === 'en' ? 'HYPRO ENERGY LABS' : 'مختبرات هايبـرو للطاقة'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {lang === 'en' 
                ? 'High-Voltage Battery Rebalancing & Restoration' 
                : 'إعادة تأهيل وصيانة بطاريات الجهد العالي'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {lang === 'en'
                ? 'In Syria, the lifespan of alternative energy batteries is shortened by improper charging cycles. Our specialized clinic utilizes industrial grade machinery to test, rebuild, and rebalance lithium and tubular gel packs.'
                : 'نظراً للتحديات التشغيلية لبطاريات الطاقة البديلة في سوريا، يقدم قسم هندسة الطاقة مختبراً متطوراً لإعادة موازنة، صيانة، وتأهيل بطاريات الليثيوم والجل لاستعادة كفاءتها ومضاعفة عمرها الافتراضي.'}
            </p>
            
            <div className="p-5 bg-white border border-slate-200/80 rounded-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-brand-blue shrink-0">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wide">
                  {lang === 'en' ? 'Clinic Capacity' : 'قدرة المختبر الفنية'}
                </h4>
                <p className="text-slate-500 text-xs mt-1 font-medium leading-relaxed">
                  {lang === 'en' 
                    ? 'Up to 95% capacity recovery on high-voltage and hybrid battery packs with zero thermal risks.' 
                    : 'استعادة تصل إلى 95% من الكفاءة الأصلية لبطاريات الليثيوم والهايبرد تحت ظروف اختبار آمنة تماماً.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Technical Step Cards */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200 p-5 hover:border-slate-300 transition-all flex flex-col sm:flex-row items-start gap-4 shadow-sm"
                >
                  <div className="p-2.5 bg-slate-50 border border-slate-100 text-brand-blue shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {lang === 'en' ? step.titleEn : step.titleAr}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {lang === 'en' ? step.descEn : step.descAr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
