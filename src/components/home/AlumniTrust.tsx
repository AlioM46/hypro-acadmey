import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function AlumniTrust() {
  const { lang } = useTranslation();

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-brand-blue tracking-widest uppercase block">
            {lang === 'en' ? 'ALUMNI TRUST VERIFICATIONS' : 'شهادات خريجينا الموثقة'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? 'Verified Placement & Career Outcomes' : 'قصص نجاح مهنية حقيقية من السوق'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimony 1 */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Mustafa H."
                  className="w-16 h-16 object-cover border border-slate-200 grayscale"
                />
                <div>
                  <div className="font-extrabold text-sm text-slate-900">Mustafa H.</div>
                  <div className="text-[10px] text-slate-450 font-mono">Alumnus 2025</div>
                  <div className="flex gap-0.5 mt-1 text-xs text-amber-500 font-sans">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium font-sans italic">
                {lang === 'en'
                  ? '"I was a traditional mechanic doing simple oil changes. After 300+ hours of training at goHypro, I opened my own hybrid battery diagnostics center in Syria. I earn three times more now."'
                  : '"كنت أعمل كميكانيكي تقليدي وبأجور بسيطة. بعد إتمام دبلوم تدريبي مهني من 300+ ساعة في جو هايبـرو، افتتحت مركزي الخاص لصيانة بطاريات الهايبرد في المنطقة الصناعية، وتضاعف دخلي ٣ مرات."'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-450 font-mono">
              {lang === 'en' ? 'Diagnostic Shop Owner, Syria' : 'مالك مركز صيانة، سوريا'}
            </div>
          </div>

          {/* Testimony 2 */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Ahmad A."
                  className="w-16 h-16 object-cover border border-slate-200 grayscale"
                />
                <div>
                  <div className="font-extrabold text-sm text-slate-900">Ahmad A.</div>
                  <div className="text-[10px] text-slate-450 font-mono">Alumnus 2025</div>
                  <div className="flex gap-0.5 mt-1 text-xs text-amber-500 font-sans">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium font-sans italic">
                {lang === 'en'
                  ? '"I enrolled with zero background in electronics. Today I work as a senior Diagnostic Lead in an authorized agency workshop, easily decoding Toyota HV system faults."'
                  : '"التحقت بالأكاديمية بدون أي معرفة مسبقة بالكهرباء. اليوم أعمل كفني فحص وتشخيص رئيسي في مركز خدمة كبير، وأتعامل بثقة تامة مع أكواد السلامة وعقول السيارات."'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-450 font-mono">
              {lang === 'en' ? 'Dealership Scanner Specialist' : 'فني فحص وتشخيص وكالة'}
            </div>
          </div>

          {/* Testimony 3 */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Yaseen K."
                  className="w-16 h-16 object-cover border border-slate-200 grayscale"
                />
                <div>
                  <div className="font-extrabold text-sm text-slate-900">Yaseen K.</div>
                  <div className="text-[10px] text-slate-450 font-mono">Alumnus 2025</div>
                  <div className="flex gap-0.5 mt-1 text-xs text-amber-500 font-sans">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium font-sans italic">
                {lang === 'en'
                  ? '"The job placement program is 100% real. I passed my high-voltage trade test on Tuesday and started working in an NGO-sponsored fleet on Sunday."'
                  : '"برنامج التوظيف والتشبيك حقيقي وفعال. أنهيت امتحاني العملي النهائي يوم الثلاثاء، وبدأت العمل كفني صيانة معتمد لأسطول سيارات المنظمة صباح يوم الأحد."'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6 text-xs text-slate-450 font-mono">
              {lang === 'en' ? 'Fleet Maintenance Technician' : 'فني صيانة أسطول سيارات'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
