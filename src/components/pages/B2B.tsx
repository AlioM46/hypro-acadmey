import React from 'react';
import { motion } from 'motion/react';
import { Building2, Award, Lightbulb, GraduationCap, Users, Milestone, ShieldCheck, Heart } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function B2B() {
  const { lang } = useTranslation();

  const solutions = [
    {
      icon: GraduationCap,
      titleAr: 'التدريب والتأهيل للكوادر الفنية',
      titleEn: 'Corporate Training & Upskilling',
      descAr: 'تصميم وتنفيذ برامج تدريب وتأهيل للكوادر الفنية لشركات السيارات والطاقة ومراكز الصيانة.',
      descEn: 'Designing and executing technical qualification programs for automotive and energy teams.'
    },
    {
      icon: Award,
      titleAr: 'تطوير المناهج والبرامج التقنية',
      titleEn: 'Curriculum & Program Development',
      descAr: 'تطوير مناهج وبرامج تقنية متخصصة ومصممة لتلبية احتياجات سوق العمل والمشاريع.',
      descEn: 'Creating specialized technical curricula tailored to market and project demands.'
    },
    {
      icon: Building2,
      titleAr: 'إنشاء مراكز تدريب معتمدة',
      titleEn: 'Accredited Training Centers',
      descAr: 'تأسيس مراكز تدريب مهنية معتمدة وبناء شراكات أكاديمية وتدريبية مع المؤسسات.',
      descEn: 'Establishing accredited vocational training centers and educational partnerships.'
    },
    {
      icon: Users,
      titleAr: 'مشاريع مشتركة مع المنظمات',
      titleEn: 'Joint Development Projects',
      descAr: 'تنفيذ مشاريع تنموية وتأهيلية مشتركة بالتعاون مع المنظمات والمؤسسات المحلية والدولية.',
      descEn: 'Executing joint development and qualification projects in partnership with NGOs.'
    },
    {
      icon: Lightbulb,
      titleAr: 'البحث والتطوير ونقل التكنولوجيا',
      titleEn: 'R&D & Technology Transfer',
      descAr: 'دعم الابتكار وبناء مشاريع بحثية مشتركة في مجالات الطاقة البديلة والبطاريات والمركبات الكهربائية.',
      descEn: 'Fostering innovation and joint research in alternative energy, batteries, and electric drive loops.'
    },
    {
      icon: ShieldCheck,
      titleAr: 'الاستشارات الفنية والمهنية',
      titleEn: 'Technical Consultations',
      descAr: 'تقديم استشارات فنية ودعم الشركات والمراكز في رفع كفاءة التشغيل ومعايير السلامة المهنية.',
      descEn: 'Providing technical advice to enhance operational standards and occupational safety protocols.'
    }
  ];

  return (
    <motion.div
      key="b2b"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-white text-slate-800 text-start font-sans"
    >
      {/* Hero Header */}
      <section className="relative py-16 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'CORPORATE SOLUTIONS & R&D' : 'الشركات والتطوير والحلول التقنية'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            {lang === 'en' ? 'B2B Solutions & Tech Development' : 'الشركات والتطوير المهني'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3 font-medium">
            {lang === 'en'
              ? 'We design customized training modules, support technology transfer, and consult on energy transition projects to scale local capacities.'
              : 'نصمم برامج تدريب مخصصة، وندعم نقل التكنولوجيا، ونقدم استشارات مهنية للارتقاء بالكفاءات وتأهيل الكوادر الفنية.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* Grid of Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {lang === 'en' ? 'SERVICES PORTFOLIO' : 'حقيبة الخدمات التقنية'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              {lang === 'en' ? 'Tailored B2B Services' : 'مجالات التمكين والتطوير للشركات'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-8 hover:border-brand-blue/30 transition-all rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3.5 bg-blue-50 text-brand-blue w-12 h-12 flex items-center justify-center rounded-xl mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-3">
                      {lang === 'en' ? item.titleEn : item.titleAr}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                      {lang === 'en' ? item.descEn : item.descAr}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Success Story Callout */}
          <div className="mt-16 bg-brand-blue text-white p-8 border border-brand-blue-hover rounded-2xl relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto text-center space-y-4 relative z-10">
              <span className="inline-block bg-brand-blue/20 text-blue-300 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-brand-blue/30">
                {lang === 'en' ? 'SUCCESS PARTNER STORIES' : 'قصص النجاح والشراكة'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans leading-tight">
                {lang === 'en' ? 'Driving Industrial Progress Together' : 'نصنع فارقاً حقيقياً في السوق الميداني'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                {lang === 'en'
                  ? 'From qualifying traditional garage mechanics to consulting on regional solar battery installations, we enable partners to lead with technical confidence.'
                  : 'من تدريب ميكانيكيي السيارات التقليديين إلى تقديم استشارات لتركيب منظومات بطاريات الطاقة البديلة، نمنح شركاءنا الثقة الفنية للريادة.'}
              </p>
            </div>
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
