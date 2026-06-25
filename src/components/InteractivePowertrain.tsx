import { useState } from 'react';
import { Bolt, Fuel, Zap, RefreshCw, Layers } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface InteractivePowertrainProps {
  lang?: 'en' | 'ar'; // Backward compatibility
}

type DriveMode = 'fuel' | 'hybrid' | 'ev';

export default function InteractivePowertrain() {
  const { lang, t, tObj, tVal } = useTranslation();
  const [activeMode, setActiveMode] = useState<DriveMode>('hybrid');

  const modes = {
    fuel: {
      label: tObj({ labelEn: 'Traditional Fuel (ICE)', labelAr: 'بنزين كلاسيكي (ميكانيك)' }, 'label'),
      badge: tObj({ badgeEn: 'Mechanical Engine', badgeAr: 'محرك ميكانيكي بالكامل' }, 'badge'),
      desc: tObj({
        descEn: 'Requires mechanical fuel injection, spark adjustments, valves timing, and emissions diagnosis.',
        descAr: 'يتطلب فحص ومعايرة أنظمة حقن الوقود، توقيت الصمامات، معالجة انبعاثات الكربون، والتحكم بالضغط الداخلي.'
      }, 'desc')
    },
    hybrid: {
      label: tObj({ labelEn: 'Smart Hybrid (HEV)', labelAr: 'هايبرد مزدوج هجين' }, 'label'),
      badge: tObj({ badgeEn: 'Dual Power Integration', badgeAr: 'التكامل المزدوج للطاقة' }, 'badge'),
      desc: tObj({
        descEn: 'Combines thermal engine with high-voltage traction batteries, requiring electronic cell balancing and inverter cooling diagnostics.',
        descAr: 'يجمع بين المحرك الحراري وبطارية الخلايا للفولت العالي. يتطلب موازنة الخلايا وتحليل تبريد مبدلات التيار.'
      }, 'desc')
    },
    ev: {
      label: tObj({ labelEn: 'Pure Electric (EV)', labelAr: 'كهربائي بالكامل EV' }, 'label'),
      badge: tObj({ badgeEn: 'Zero Emissions Power', badgeAr: 'صيانة السيارات الكهربائية' }, 'badge'),
      desc: tObj({
        descEn: 'Pure high-voltage loop. Requires inverter diagnostics, three-phase AC traction motor control, and resolver calibration.',
        descAr: 'دائرة كهربائية نقية بجهد عالي. تتطلب صيانة العاكس (Inverter)، المحركات ثلاثية الأطوار، وحساس الزوايا.'
      }, 'desc')
    }
  };

  const components = {
    fuelTank: tVal({ en: 'Fuel Tank', ar: 'خزان الوقود' }),
    engine: tVal({ en: 'ICE Engine', ar: 'محرك الاحتراق' }),
    battery: tVal({ en: 'HV Battery', ar: 'البطارية هاي فولت' }),
    inverter: tVal({ en: 'Inverter Module', ar: 'منظم الطاقة (Inverter)' }),
    motor: tVal({ en: 'Traction Motor', ar: 'محرك السحب الكهربائي' }),
    wheels: tVal({ en: 'Drive Wheels', ar: 'الإطارات' })
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm transition-all animate-fade-in" id="powertrain-simulator">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
        <div className="max-w-xl text-start">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <RefreshCw size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span>{t('practicalDiagnosticsLabel')}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight font-sans">
            {t('powertrainTitle')}
          </h3>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            {t('powertrainDesc')}
          </p>
        </div>

        {/* Dynamic Mode Switcher */}
        <div className="flex flex-wrap lg:flex-nowrap gap-1 bg-slate-100 p-1 rounded-xl w-full lg:w-auto">
          {(['fuel', 'hybrid', 'ev'] as DriveMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              id={`btn-mode-${mode}`}
              className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer border-none ${activeMode === mode
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'text-slate-650 hover:text-slate-905 hover:bg-slate-200 bg-transparent'
                }`}
            >
              {mode === 'fuel' && <Fuel size={14} />}
              {mode === 'hybrid' && <Layers size={14} />}
              {mode === 'ev' && <Zap size={14} />}
              <span>{modes[mode].label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Workspace Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Drive Mode Image Card / Left side */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="overflow-hidden border border-slate-200 aspect-[600/320] bg-white relative rounded-xl shadow-sm">
            <img
              src={
                activeMode === 'hybrid'
                  ? '/images/3.jpeg'
                  : activeMode === 'ev'
                  ? '/images/4.jpeg'
                  : '/images/5.jpeg'
              }
              alt={modes[activeMode].label}
              className={`w-full h-full object-contain transition-transform duration-300 ${
                activeMode === 'fuel' ? 'scale-125' : 'scale-100'
              }`}
            />
          </div>

          {/* Simple Clean Status Bar */}
          <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 text-[10px] font-mono text-slate-500 gap-1.5 w-full text-start">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span>{tVal({ en: 'Diagnostics Standard: Certified Automotive Systems', ar: 'معيار التدريب: أنظمة صيانة هجينة وكلاسيكية معتمدة' })}</span>
            </div>
            <div>
              <span>{tVal({ en: '80% Practical Work', ar: '80% تطبيق فني مباشر' })}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Detail Text Side description */}
        <div className="lg:col-span-5 flex flex-col justify-between text-start p-2">
          <div>
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider font-mono">
              {modes[activeMode].badge}
            </span>
            <h4 id="powertrain-active-title" className="text-lg font-bold text-slate-900 mt-1 mb-3 font-sans">
              {modes[activeMode].label}
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">
              {modes[activeMode].desc}
            </p>

            {/* Curricular Focus Bullet points */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-500 block mb-2 font-mono uppercase tracking-wider">
                {t('skillCurriculum')}
              </span>
              <ul className="space-y-2 text-xs text-slate-700 font-sans font-medium">
                {activeMode === 'fuel' && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-blue font-bold">✓</span>
                      <span>{tVal({ en: 'Electronic combustion & sensor diagnostic logic', ar: 'منطق تشخيص أجهزة التحكم ومستشعرات حرارة الاحتراق' })}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-blue font-bold">✓</span>
                      <span>{tVal({ en: 'Combustion chamber seals and liquid mechanical engineering', ar: 'موانع التسريب بغرف الاحتراق وقوانين هندسة الميكانيكا الحركية' })}</span>
                    </li>
                  </>
                )}
                {activeMode === 'hybrid' && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent font-bold">✓</span>
                      <span>{tVal({ en: 'Hybrid battery cells assembly & voltage balancing tools', ar: 'تجميع وتفكيك خلايا الهايبرد مع أدوات موازنة الفولت الآمنة' })}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent font-bold">✓</span>
                      <span>{tVal({ en: 'DC/DC switching, current converters & cooling pump speeds', ar: 'قواطع التحويل المباشر ومضخات تبريد مياه عاكس الفولت الهجين' })}</span>
                    </li>
                  </>
                )}
                {activeMode === 'ev' && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent font-bold">✓</span>
                      <span>{tVal({ en: 'Resolver sensor timing parameters & rotational field code', ar: 'تنظيم ومعايرة قطب حساس التزامن والزوايا المغناطيسية' })}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-accent font-bold">✓</span>
                      <span>{tVal({ en: 'High-voltage safety disconnect locks (MSD) & insulation rating', ar: 'مفاتيح الأمان لعزل الفولت العالي MSD وتصنيف جودة عزل الحشوات' })}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4 flex gap-6 text-xs font-mono text-slate-500">
            <div>
              <span className="text-slate-400 block text-[9px] uppercase tracking-wider">{t('difficulty')}</span>
              <strong className="text-slate-800">{activeMode === 'fuel' ? 'INTERMEDIATE' : 'ADVANCED SPECIALIST'}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px] uppercase tracking-wider">{t('practicalHours')}</span>
              <strong className="text-slate-800">{activeMode === 'fuel' ? '90 Hours' : '150 Hours'}</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
