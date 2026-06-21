import React from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface AccreditationsProps {
  navigateTo: (page: 'home' | 'about' | 'programs' | 'testing-lab' | 'partnerships' | 'contact' | 'practical-training' | 'accreditations' | 'team') => void;
  setActiveAccreditation: (url: string | null) => void;
  setLightboxTitle: (title: string | null) => void;
  setLightboxDesc: (desc: string | null) => void;
}

export default function Accreditations({
  navigateTo,
  setActiveAccreditation,
  setLightboxTitle,
  setLightboxDesc
}: AccreditationsProps) {
  const { lang, t } = useTranslation();

  return (
    <motion.div
      key="accreditations"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className="bg-white text-slate-800 text-start"
    >
      {/* HERO / HEADER */}
      <section className="relative py-16 bg-brand-blue text-white overflow-hidden border-b border-brand-blue-hover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase block font-bold mb-2">
            {lang === 'en' ? 'ACCREDITATIONS & VOCATIONAL VALUE' : 'الاعتمادات الأكاديمية والشهادات الرسمية'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight font-sans text-white">
            {lang === 'en' ? 'Official Certifications & Global Alignment' : 'الوثائق والشهادات والمصداقية المهنية للأكاديمية'}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl font-sans mt-3 font-medium">
            {lang === 'en'
              ? 'Every graduate receives official industry-endorsed certificates with unique digital verification codes. Explore our TVET stamp, official partners, and how it qualifies your career.'
              : 'يحصل كل خريج على شهادات مهنية موثقة برموز تحقق رقمية فريدة وموثوقة لدى الوكالات ومراكز الصيانة الإقليمية.'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </section>

      {/* CORE ACCREDITATIONS & ENTITIES */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Jordanian Accreditations */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-brand-blue tracking-wider uppercase block">
                  {lang === 'en' ? 'JORDANIAN ALIGNMENT' : 'الاعتمادات الأردنية'}
                </span>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  {lang === 'en' ? 'TVET Curriculum & Trade Standardizations' : 'المواءمة مع مناهج ومعايير التدريب الأردنية'}
                </h3>
              </div>
              <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-medium">
                {lang === 'en'
                  ? 'Our curricula are closely aligned with Jordanian Technical and Vocational Education and Training (TVET) systems. This ensures that the technical depth of our diagnostics, hybrid system calculations, and safety standards match regional governmental benchmarks.'
                  : 'صُممت مناهج أكاديمية هايبـرو الفنية بالاعتماد على معايير هيئة تطوير المهارات الفنية والتقنية (TVET) في الأردن. يضمن ذلك تدريب طلابنا على مستويات رفيعة من الكفاءة تلائم وتطابق المعايير الحكومية والمهنية الإقليمية.'}
              </p>
              <div className="border-l-2 border-brand-blue pl-4 space-y-2">
                <h4 className="font-extrabold text-sm text-slate-900">
                  {lang === 'en' ? 'Curriculum Alignment Registry: JO-TVET-9021' : 'رمز التحقق والتسجيل المنهجي: JO-TVET-9021'}
                </h4>
                <p className="text-slate-500 text-xs">
                  {lang === 'en'
                    ? 'Approved curriculum structure mapped directly to occupational standards in advanced automotive electronics.'
                    : 'منهج دراسي معتمد ومطابق لأحدث نظم صيانة إلكترونيات وفولتية السيارات الكهربائية والهجينة.'}
                </p>
              </div>
            </div>

            {/* Official Entities */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-brand-blue tracking-wider uppercase block">
                  {lang === 'en' ? 'OFFICIAL PARTNERSHIPS' : 'الجهات الرسمية والتعاون'}
                </span>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  {lang === 'en' ? 'International & Governmental Alliances' : 'التحالفات والاعتمادات الرسمية المهنية'}
                </h3>
              </div>
              <p className="text-slate-655 text-xs sm:text-sm leading-relaxed font-medium">
                {lang === 'en'
                  ? 'We work closely with official automotive repair organizations and trade unions to legalize our graduates certificates. Our program is built in conjunction with development ministries and labor unions to assure employment compliance.'
                  : 'تعمل الأكاديمية بالتعاون الوثيق مع مراكز صيانة السيارات والجهات التدريبية لضمان قانونية الشهادات الصادرة ودعم الخريجين في الحصول على رخص مزاولة المهنة الرسمية.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 p-4">
                  <h4 className="font-extrabold text-xs text-slate-900 uppercase">
                    {lang === 'en' ? 'Jordan Vocational Corp' : 'المؤسسة العامة للتدريب المهني'}
                  </h4>
                  <p className="text-slate-500 text-[10px] mt-1">
                    {lang === 'en' ? 'Technical framework design & safe laboratory standardizations.' : 'تنسيق المعايير المخبرية ومعايير السلامة المهنية للفولت العالي.'}
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4">
                  <h4 className="font-extrabold text-xs text-slate-900 uppercase">
                    {lang === 'en' ? 'Automotive Repair Syndicate' : 'هيئة صيانة السيارات الفنية'}
                  </h4>
                  <p className="text-slate-500 text-[10px] mt-1">
                    {lang === 'en' ? 'Direct pathway to obtain official mechanical practice licensing.' : 'مسار مباشر وسريع للخريجين لنيل رخص مزاولة المهنة الرسمية.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED CERTIFICATIONS & VALUE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {lang === 'en' ? 'CERTIFICATE DETAILS' : 'الشهادات الممنوحة وقيمتها المهنية'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === 'en' ? 'What You Earn & How it Accelerates Your Career' : 'الشهادات التي تحصل عليها والأثر المهني المباشر'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certificate 1 details */}
            <div className="bg-white border border-slate-200 p-8 space-y-4">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 block uppercase">01 / TECHNICAL DIPLOMA</span>
              <h4 className="text-lg font-black text-slate-900 font-sans">
                {lang === 'en' ? 'Advanced Automotive Diagnostics & EV Diploma' : 'دبلوم تدريبي مهني في صيانة السيارات الحديثة والكهربائية المعتمد'}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                {lang === 'en'
                  ? 'A professional qualification stating your 360 contact hours of study, demonstrating mastery of scanner calibrations, OBD-II DTC decoding, CAN-Bus logic boards, and hybrid powertrain operations.'
                  : 'شهادة دبلوم تدريبي مهني تخصصي تثبت إتمامك لـ 360 ساعة من التدريب العملي المباشر، وتؤكد أهليتك الكاملة لفحص كمبيوتر السيارات وكشف عيوب المحركات وبرمجة البوابات والـ ECU.'}
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside pt-2 font-medium">
                <li>{lang === 'en' ? 'Licensed by local Educational & Craft Institutions' : 'معتمد ومطابق لأحدث النظم والمعايير المهنية الرسمية.'}</li>
                <li>{lang === 'en' ? 'Features unique QR Code for online employer lookup' : 'يحمل كود تحقق فريد ورابط فحص رقمي خاص بالشركات.'}</li>
                <li>{lang === 'en' ? 'Guarantees priority placement interviews' : 'يمنحك الأولوية التامة في مقابلات التشغيل وشركات التوظيف.'}</li>
              </ul>
            </div>

            {/* Certificate 2 details */}
            <div className="bg-white border border-slate-200 p-8 space-y-4">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 block uppercase">02 / SAFETY CERTIFICATION</span>
              <h4 className="text-lg font-black text-slate-900 font-sans">
                {lang === 'en' ? '1000V High-Voltage Safety Handling Stamp' : 'شهادة أمان الفولت العالي وعزل الأنظمة الهجينة 1000V'}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                {lang === 'en'
                  ? 'A specialized safety certificate certifying that you have successfully completed high-voltage loop isolation (MSD extraction), usage of certified double-insulated tools, and emergency procedures.'
                  : 'شهادة أمان مهنية متخصصة تثبت اجتيازك لاختبارات عزل الجهد العالي فائق الخطورة (MSD)، واستخدام العدة الآمنة المعزولة مهنياً، وبروتوكولات إخلاء وإنقاذ المصاب بالصدمة.'}
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside pt-2 font-medium">
                <li>{lang === 'en' ? 'Complies with OSHA and international VDE standards' : 'متوافق مع شروط الأمن والسلامة الدولية VDE والـ OSHA.'}</li>
                <li>{lang === 'en' ? 'Mandatory stamp to handle commercial hybrid battery balance setups' : 'ختم إلزامي للعمل في صالات الصيانة الكبرى والمنظمات.'}</li>
                <li>{lang === 'en' ? 'Covers up to 1000V DC live network handling safety' : 'يغطي مهارات التعامل الآمن مع شبكات التيار المستمر حتى 1000 فولت.'}</li>
              </ul>
            </div>
          </div>

          {/* Worth Explanations */}
          <div className="mt-12 bg-white border border-slate-200 p-8 space-y-6">
            <h4 className="font-extrabold text-lg text-slate-955">
              {lang === 'en' ? 'Why This Certification Holds High Market Worth:' : 'لماذا تمتلك هذه الشهادة القيمة الكبرى في سوق العمل؟'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-start">
              <div className="space-y-2">
                <div className="text-brand-blue font-black text-sm">{lang === 'en' ? '1. Work Licensing' : '1. تراخيص العمل والمقرات'}</div>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {lang === 'en'
                    ? 'The vocational certificate enables you to obtain official municipal licenses to open your diagnostics center legally.'
                    : 'تمكنك الشهادة المهنية من استخراج رخص البلدية الرسمية لفتح مركز فحص السيارات الخاص بك والعمل بشكل مرخص وقانوني.'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-brand-blue font-black text-sm">{lang === 'en' ? '2. NGO Alignment' : '2. ثقة المنظمات الإنسانية'}</div>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {lang === 'en'
                    ? 'Humanitarian NGOs require safety and technical credentials from Hypro to hire technicians for fleet maintenance and vocational programs.'
                    : 'المنظمات التنموية تشترط شهادة السلامة والشهادات المعتمدة من هايبـرو لتوظيف الفنيين في مشاريع دعم سبل العيش أو صيانة أساطيل المركبات.'}
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-brand-blue font-black text-sm">{lang === 'en' ? '3. Regional Employment' : '3. السفر والعمل الإقليمي'}</div>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {lang === 'en'
                    ? 'Online QR lookup allows dealers in Jordan and the Gulf to verify your study credentials instantly, granting immediate hiring priority.'
                    : 'التوثيق الرقمي يتيح لأصحاب العمل والوكالات في الأردن ودول الخليج التحقق من دراستك فوراً، مما يعطيك امتياز القبول والتوظيف الخارجي.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL CERTIFICATES SHOWCASE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-3xl space-y-3 mb-12">
            <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
              {lang === 'en' ? 'VISUAL PORTFOLIO' : 'نماذج وصور الشهادات الرسمية'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {lang === 'en' ? 'Preview Our Standardized Certification Models' : 'استعراض النماذج المعتمدة وعناصر الأمان للشهادة'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {/* Certificate template 1 */}
            <div
              onClick={() => {
                setActiveAccreditation('https://images.unsplash.com/photo-1589330694653-ded6df53f7ee?auto=format&fit=crop&w=1200&q=80');
                setLightboxTitle(lang === 'en' ? 'Technical Diagnostics Diploma Template' : 'نموذج دبلوم تدريبي مهني لفحص وصيانة السيارات الحديثة');
                setLightboxDesc(lang === 'en' ? 'Official diploma structure featuring TVET registrar alignment, unique verification QR code, and signatures.' : 'التصميم الرسمي للشهادة مع الختم الرسمي ورمز التحقق الرقمي الفريد للمؤسسات.');
              }}
              className="bg-slate-50 border border-slate-200 p-4 hover:border-slate-350 transition-all cursor-zoom-in group"
            >
              <div className="aspect-[1.414/1] w-full bg-white border border-slate-200 relative overflow-hidden flex items-center justify-center p-6 shadow-sm">
                <div className="border-4 border-double border-slate-300 w-full h-full p-4 flex flex-col justify-between items-center text-center relative">
                  <span className="text-[7px] font-mono text-slate-400">HYPRO AUTOMOTIVE ACADEMY DIPLOMA</span>
                  <div className="space-y-1">
                    <div className="font-extrabold text-xs text-brand-blue">شهادة دبلوم تدريبي مهني تخصصي</div>
                    <div className="text-[6px] text-slate-400 font-mono">PROFESSIONAL AUTOMOTIVE DIAGNOSTICS DIPLOMA</div>
                  </div>
                  <div className="w-12 h-12 border border-brand-blue/20 rounded-full flex items-center justify-center text-[7px] font-bold text-brand-blue bg-blue-50/50">
                    {lang === 'en' ? 'SEAL' : 'الختم'}
                  </div>
                  <div className="w-full flex justify-between items-end text-[5px] text-slate-400 font-mono">
                    <span>REG: JO-TVET-9021</span>
                    <span>QR VERIFICATION STAMP</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white text-slate-800 px-4 py-2 text-xs font-bold shadow-md">
                    {lang === 'en' ? 'Click to Zoom Model' : 'اضغط لتكبير النموذج'}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-start">
                <h4 className="font-extrabold text-sm text-slate-900 font-sans">
                  {lang === 'en' ? 'Diagnostics Diploma Certificate' : 'صورة نموذج دبلوم تدريبي مهني لتشخيص صيانة السيارات'}
                </h4>
                <p className="text-slate-500 text-xs mt-1 font-medium">
                  {lang === 'en' ? 'Official design issued to graduates of the 300+ hours program.' : 'الشكل النهائي والختم الرسمي للشهادة المسلمة لطلاب برنامج الـ 300+ ساعة.'}
                </p>
              </div>
            </div>

            {/* Certificate template 2 */}
            <div
              onClick={() => {
                setActiveAccreditation('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80');
                setLightboxTitle(lang === 'en' ? 'High-Voltage Safety Handling Stamp Template' : 'نموذج شهادة أمان الجهد العالي وعزل الأنظمة');
                setLightboxDesc(lang === 'en' ? 'Official compliance certificate showing 1000V DC insulated circuit safety test pass details.' : 'شهادة السلامة الفنية المعنية بالتعامل والعمل مع محركات الفولت الفائق وعزل الدوائر.');
              }}
              className="bg-slate-50 border border-slate-200 p-4 hover:border-slate-350 transition-all cursor-zoom-in group"
            >
              <div className="aspect-[1.414/1] w-full bg-white border border-slate-200 relative overflow-hidden flex items-center justify-center p-6 shadow-sm">
                <div className="border-4 border-double border-red-300 w-full h-full p-4 flex flex-col justify-between items-center text-center relative">
                  <span className="text-[7px] font-mono text-red-500">1000V DC HIGH VOLTAGE SAFETY HANDLING</span>
                  <div className="space-y-1">
                    <div className="font-extrabold text-xs text-red-600">شهادة أمان الفولت العالي المعتمدة</div>
                    <div className="text-[6px] text-slate-400 font-mono">HIGH VOLTAGE SAFETY CERTIFICATE</div>
                  </div>
                  <div className="w-12 h-12 border border-red-500/20 rounded-full flex items-center justify-center text-[7px] font-bold text-red-650 bg-red-50/50">
                    {lang === 'en' ? 'PASS' : 'مقبول'}
                  </div>
                  <div className="w-full flex justify-between items-end text-[5px] text-slate-400 font-mono">
                    <span>OSHA/VDE STANDARDS</span>
                    <span>QR SAFETY COMPLIANCE</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white text-slate-800 px-4 py-2 text-xs font-bold shadow-md">
                    {lang === 'en' ? 'Click to Zoom Model' : 'اضغط لتكبير النموذج'}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-start">
                <h4 className="font-extrabold text-sm text-slate-900 font-sans">
                  {lang === 'en' ? 'HV Safety Stamp Certificate' : 'صورة نموذج شهادة السلامة للفولت العالي'}
                </h4>
                <p className="text-slate-500 text-xs mt-1 font-medium">
                  {lang === 'en' ? 'Official design issued to graduates who pass high-voltage lab checks.' : 'الشكل النهائي لترخيص فني عزل دوائر الفولت العالي حتى 1000V.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
