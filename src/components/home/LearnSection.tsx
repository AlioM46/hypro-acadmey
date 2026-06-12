import React from 'react';
import { Battery, Wrench, Cpu, CheckCircle2, ShieldCheck, Settings } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function LearnSection() {
  const { lang } = useTranslation();

  const learnItems = [
    {
      icon: Battery,
      titleEn: "Battery Systems",
      titleAr: "أنظمة البطاريات",
      descEn: "Hybrid & EV battery construction, cells testing, state-of-health diagnostics, module replacement, and computerized battery balancing.",
      descAr: "دراسة وتفكيك بطاريات الهايبريد والكهرباء، فحص المقاومة الفنية للخلايا، تشخيص الأعطال واستبدال الأجزاء التالفة والموازنة المؤتمتة.",
      image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Wrench,
      titleEn: "Troubleshooting & Fault Finding",
      titleAr: "تشخيص الأعطال والعيوب",
      descEn: "Isolating short circuits, tracking parasitic draws, deciphering complex DTC trouble codes, and mapping wiring schematics.",
      descAr: "تتبع الأعطال الكهربائية المعقدة والمتقطعة، قراءة وتحليل رموز الأعطال DTC، قراءة المخططات الهندسية وحصر المشاكل الفنية.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Cpu,
      titleEn: "Hybrid Systems & Inverters",
      titleAr: "أنظمة الهايبرد والهجين",
      descEn: "Planetary gear synchronization, high-voltage inverter coolant management, traction motor operations, and regenerative breaking loops.",
      descAr: "أجزاء الحركة الهجينة ونواقل الحركة، مبدلات الفولت العالي وعزلها، مضخة تبريد العاكس (Inverter)، ومكابح تدوير الطاقة.",
      image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: CheckCircle2,
      titleEn: "Electronic Scanning & Calibration",
      titleAr: "الفحص الإلكتروني وبرمجة العقول",
      descEn: "OBD-II live data analysis, actuator testing, throttle adaptation, key coding, and electronic control unit (ECU) flashing.",
      descAr: "التعامل الاحترافي مع أجهزة فحص السيارات وكشف الكمبيوتر OBD-II، قراءة البيانات الحية، برمجة البوابات الإلكترونية، وتهيئة العقول والـ ECU.",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: ShieldCheck,
      titleEn: "Electrical Safety & Isolated Tools",
      titleAr: "السلامة الكهربائية للفولت العالي",
      descEn: "Working with up to 1000V DC safely, removal of MSD high-voltage loops, using double-insulated tools, and personal protective clothing (PPC).",
      descAr: "بروتوكولات الأمان للجهود الفائقة التي تصل إلى 1000 فولت، فك قواطع الأمان MSD، استخدام المفكات والعدد المعزولة مهنياً.",
      image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Settings,
      titleEn: "Practical Maintenance Operations",
      titleAr: "الصيانة العملية والتطبيق الميداني",
      descEn: "Regular maintenance, direct fluid changes of hybrid gearboxes, replacing cells, and working on live customer vehicles under supervision.",
      descAr: "تغيير سوائل وزيوت الفولت العالي لعلب التروس الهجينة، الصيانة الوقائية السريعة، وتجربة إصلاح سيارات زبائن فعلية تحت ظروف العمل الميدانية.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
            {lang === 'en' ? 'SKILLS & SYLLABUS' : 'ماذا ستتعلم؟ المهارات الأساسية'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? '6 Core Pillars of Advanced Diagnostics' : '٦ محاور رئيسية لاحتراف الصيانة الفنية'}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
            {lang === 'en'
              ? 'Our intensive training program maps out the six most demanded skills in the automotive repair market today.'
              : 'يغطي برنامجنا التدريبي المحاور الستة الأكثر طلباً في سوق العمل وصيانة السيارات الحديثة.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learnItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden border border-slate-200 aspect-[16/10] bg-[#232f5b] flex flex-col justify-end p-6 transition-all duration-300"
              >
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={lang === 'en' ? item.titleEn : item.titleAr}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-30 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 space-y-2 text-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-blue border border-white/20 text-white transition-transform group-hover:scale-110 duration-300">
                      <IconComponent size={18} className="text-white" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase">
                      {lang === 'en' ? `MODULE 0${idx + 1}` : `المحور 0${idx + 1}`}
                    </span>
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight font-sans">
                    {lang === 'en' ? item.titleEn : item.titleAr}
                  </h4>
                  
                  <p className="text-xs text-slate-350 leading-relaxed font-medium transition-colors duration-300 group-hover:text-white">
                    {lang === 'en' ? item.descEn : item.descAr}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
