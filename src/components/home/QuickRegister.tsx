import React, { useState } from 'react';
import { Users, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export default function QuickRegister() {
  const { lang, t } = useTranslation();

  const [quickRegName, setQuickRegName] = useState('');
  const [quickRegPhone, setQuickRegPhone] = useState('');
  const [quickRegGov, setQuickRegGov] = useState('');

  const handleQuickRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickRegName || !quickRegPhone || !quickRegGov) {
      alert(lang === 'en' ? 'Please fill in all fields.' : 'يرجى ملء جميع الحقول.');
      return;
    }
    const message = lang === 'en'
      ? `Hello Hypro Academy, I would like to register:\nName: ${quickRegName}\nPhone: ${quickRegPhone}\nGovernorate: ${quickRegGov}`
      : `مرحباً أكاديمية هايبـرو، أود التسجيل:\nالاسم: ${quickRegName}\nالهاتف: ${quickRegPhone}\nالمحافظة: ${quickRegGov}`;
    const whatsappUrl = `https://wa.me/963955408202?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #232f5b 100%)' }} id="quick-register">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #3b82f6, #22d3ee, #10b981)' }} />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 mb-6">
          <div className="w-2 h-2 bg-emerald-400 animate-pulse" style={{ borderRadius: '50%' }} />
          <span className="text-[10px] font-mono tracking-widest text-emerald-300 uppercase font-bold">
            {lang === 'en' ? 'REGISTRATION OPEN NOW' : 'التسجيل مفتوح الآن'}
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight leading-tight mb-3">
          {lang === 'en' ? 'Reserve Your Seat Now' : 'احجز مقعدك الآن'}
        </h3>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium max-w-xl mx-auto mb-10">
          {lang === 'en' 
            ? 'Fill in your details and connect instantly via WhatsApp. It takes less than 30 seconds.' 
            : 'أدخل بياناتك وتواصل فوراً عبر واتساب. لن يستغرق الأمر أكثر من 30 ثانية.'}
        </p>

        {/* Form Card */}
        <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 p-8 sm:p-10">
          <form onSubmit={handleQuickRegister} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Name */}
              <div className="space-y-2 text-start">
                <label className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider flex items-center gap-1.5">
                  <Users size={10} className="text-blue-400" />
                  {t('fullNameLabel')}
                </label>
                <input
                  type="text"
                  required
                  value={quickRegName}
                  onChange={(e) => setQuickRegName(e.target.value)}
                  placeholder={lang === 'en' ? 'Your full name' : 'الاسم الثنائي أو الثلاثي'}
                  className="w-full bg-white/10 border border-white/15 text-white text-sm px-4 py-3.5 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/[0.12] transition-all h-[50px]"
                />
              </div>
              {/* Phone */}
              <div className="space-y-2 text-start">
                <label className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider flex items-center gap-1.5">
                  <Phone size={10} className="text-blue-400" />
                  {t('phoneLabel')}
                </label>
                <input
                  type="tel"
                  required
                  value={quickRegPhone}
                  onChange={(e) => setQuickRegPhone(e.target.value)}
                  placeholder={lang === 'en' ? '+963 XXX XXX XXX' : 'رقم الهاتف مع الرمز'}
                  className="w-full bg-white/10 border border-white/15 text-white text-sm px-4 py-3.5 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/[0.12] transition-all h-[50px] text-start"
                  dir="ltr"
                />
              </div>
              {/* Governorate */}
              <div className="space-y-2 text-start">
                <label className="text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider flex items-center gap-1.5">
                  <MapPin size={10} className="text-blue-400" />
                  {t('govLabel')}
                </label>
                <input
                  type="text"
                  required
                  value={quickRegGov}
                  onChange={(e) => setQuickRegGov(e.target.value)}
                  placeholder={lang === 'en' ? 'City / Governorate' : 'المحافظة أو المدينة'}
                  className="w-full bg-white/10 border border-white/15 text-white text-sm px-4 py-3.5 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/[0.12] transition-all h-[50px]"
                />
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              type="submit"
              className="w-full text-white font-extrabold text-sm sm:text-base py-4 sm:py-5 flex items-center justify-center gap-3 transition-all cursor-pointer border-none"
              style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)')}
            >
              <MessageSquare size={18} className="fill-white" />
              <span>{lang === 'en' ? 'Register via WhatsApp Now' : 'سجّل عبر واتساب الآن'}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={11} className="text-emerald-500" />
              <span>{lang === 'en' ? 'Instant confirmation' : 'تأكيد فوري'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={11} className="text-emerald-500" />
              <span>{lang === 'en' ? 'Under 30 seconds' : 'أقل من 30 ثانية'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={11} className="text-emerald-500" />
              <span>{lang === 'en' ? 'No requirements' : 'بدون شروط'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
    </section>
  );
}
