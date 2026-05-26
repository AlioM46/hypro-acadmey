import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Smartphone } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface DynamicFormProps {
  lang?: 'en' | 'ar'; // Backward compatibility
  activeCategory: 'student' | 'workshop' | 'dealer' | 'ngo';
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo') => void;
}

export default function DynamicForm({ activeCategory, setActiveCategory }: DynamicFormProps) {
  const { lang, t, tObj } = useTranslation();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setFormData({});
    setSubmitted(false);
  }, [activeCategory]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getFormFields = () => {
    switch (activeCategory) {
      case 'student':
        return [
          { id: 'fullName', labelEn: 'Full Name', labelAr: 'الاسم الكامل الثلاثي', type: 'text', placeholderEn: 'e.g. Ali Al-Sloom', placeholderAr: 'مثال: علي السلوم', required: true },
          { id: 'phone', labelEn: 'Contact Phone / WhatsApp', labelAr: 'رقم الهاتف / الواتساب', type: 'tel', placeholderEn: 'e.g. +963-955-408202', placeholderAr: 'مثال: 0955408202', required: true },
          { id: 'age', labelEn: 'Age', labelAr: 'العمر', type: 'number', placeholderEn: 'e.g. 24', placeholderAr: 'مثال: 24 عام', required: true },
          { id: 'shift', labelEn: 'Preferred Training Shift', labelAr: 'فترة التدريب المفضلة', type: 'select', optionsEn: ['Morning (9:00 AM - 1:00 PM)', 'Evening (4:00 PM - 8:00 PM)', 'Weekend Intensive (Fri/Sat)'], optionsAr: ['الصباحية (9:00 صباحاً - 1:00 ظهراً)', 'المسائية (4:00 عصراً - 8:00 مساءً)', 'مكثّفة نهاية الأسبوع (الجمعة والسبت)'], required: true },
          { id: 'background', labelEn: 'Do you have prior mechanics experience?', labelAr: 'هل لديك خبرة سابقة في ميكانيك السيارات؟', type: 'select', optionsEn: ['No prior experience (Beginner)', 'Basic knowledge (Trainee)', 'Senior traditional auto technician'], optionsAr: ['لا توجد خبرة سابقة (مبتدئ تماماً)', 'خبرة بسيطة أولية (متدرب)', 'فني سيارات بنزين/ديزل تقليدي ممارس'], required: false }
        ];
      case 'workshop':
        return [
          { id: 'garageName', labelEn: 'Garage / Workshop Name', labelAr: 'اسم المنشأة / ورشة الصيانة', type: 'text', placeholderEn: 'e.g. Al-Nisr Auto Lab', placeholderAr: 'مثال: مركز النسر الهندسي لصيانة السيارات', required: true },
          { id: 'location', labelEn: 'City & Location', labelAr: 'المحافظة والعنوان بالتفصيل', type: 'text', placeholderEn: 'e.g. Idleb / Industrial Area', placeholderAr: 'مثال: إدلب / المنطقة الصناعية', required: true },
          { id: 'phone', labelEn: 'Business Mobile / WhatsApp', labelAr: 'رقم هاتف مركز الصيانة', type: 'tel', placeholderEn: 'e.g. +963-955-300100', placeholderAr: 'مثال: 0955300100', required: true },
          { id: 'serviceGoal', labelEn: 'Collaboration Requested', labelAr: 'نوع الاتفاق المطلوب للورشة', type: 'select', optionsEn: ['Hire certified academy graduates', 'Upskill our current mechanics to EV/Hybrid', 'Apply to be a certified partner workshop'], optionsAr: ['توظيف فنيين خريجين من الأكاديمية لجهازي', 'تدريب وتأهيل طاقمي الحالي لصيانة الهايبرد', 'اعتماد ورشتي كفرع فحص مفوض من هابيرو'], required: true },
          { id: 'additionalNotes', labelEn: 'Additional Notes / Equipment', labelAr: 'تفاصيل إضافية عن الورشة أو الطلب', type: 'textarea', placeholderEn: 'Outline your current diagnostic devices...', placeholderAr: 'اكتب كشافة مقتضبة للأجهزة المتوفرة لديك حالياً...', required: false }
        ];
      case 'dealer':
        return [
          { id: 'dealerBrand', labelEn: 'Dealer Brand Name (franchise)', labelAr: 'اسم الوكالة أو الشركة التجارية', type: 'text', placeholderEn: 'e.g. Hyundai Syria Showroom', placeholderAr: 'مثال: الشركة الدولية لاستيراد السيارات', required: true },
          { id: 'repName', labelEn: 'Representative Name', labelAr: 'اسم المسؤول / مدير الموارد البشرية', type: 'text', placeholderEn: 'e.g. Dr. Eng. Samir', placeholderAr: 'مثال: الدكتور المهندس سمير', required: true },
          { id: 'phone', labelEn: 'Contact Email or Phone', labelAr: 'هاتف التواصل / البريد الرسمي للشركة', type: 'text', placeholderEn: 'e.g. samir@dealer.sy', placeholderAr: 'مثال: recruitment@brand.sy', required: true },
          { id: 'personnelNeed', labelEn: 'Est. Personnel Required (Yearly)', labelAr: 'العدد التقديري للفنيين المطلوبين سنوياً', type: 'number', placeholderEn: 'e.g. 5', placeholderAr: 'مثال: 5 مهندسين وفنيي فحص', required: true },
          { id: 'specReq', labelEn: 'Special Tech Specifications Preferred', labelAr: 'تخصصات أو متطلبات فنية معينة تطلبها شركتك', type: 'textarea', placeholderEn: 'e.g. Focus on electric battery pack cells replacement...', placeholderAr: 'مثال: فك وتصحيح بطاريات الليثيوم ونظم البرمجة...', required: false }
        ];
      case 'ngo':
        return [
          { id: 'orgName', labelEn: 'Organization / Ministry Title', labelAr: 'الجهة الرسمية / اسم المنظمة', type: 'text', placeholderEn: 'e.g. Local NGO', placeholderAr: 'مثال: الهيئة المهنية للتنمية', required: true },
          { id: 'contactPerson', labelEn: 'Focal Point Officer Name', labelAr: 'اسم منسق المشروع / المعني بالتواصل', type: 'text', placeholderEn: 'e.g. Fatima Mansour', placeholderAr: 'مثال: الأستاذة فاطمة منصور', required: true },
          { id: 'phone', labelEn: 'Authorized WhatsApp / Phone', labelAr: 'الهاتف المعتمد للمشروع / الواتساب الرسمي', type: 'tel', placeholderEn: 'e.g. +963-955-408xxx', placeholderAr: 'مثال: 0955408202', required: true },
          { id: 'missionGoal', labelEn: 'Sponsorship Goal', labelAr: 'الهدف التنموي للشراكة', type: 'select', optionsEn: ['Fund vocational scholarships for youth', 'Train state industrial technicians', 'Establish remote community labs cooperation'], optionsAr: ['رعاية وتمويل منح مهنية للشباب المتعطلين', 'تطوير فنيي الصيانة التابعين للمؤسسات العامة', 'إنشاء وتجهيز مختبر صيانة مجتمعي في المحافظات'], required: true },
          { id: 'notes', labelEn: 'Scope and numbers of beneficiaries', labelAr: 'النطاق الجغرافي وعدد المستفيدين المستهدفين', type: 'textarea', placeholderEn: 'e.g. Targeting 50 youths in rural Idleb...', placeholderAr: 'مثال: استهداف 30 شاباً وشابة من ريف إدلب للتأهيل المهني...', required: false }
        ];
      default:
        return [];
    }
  };

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();

    const fields = getFormFields();
    for (const f of fields) {
      if (f.required && !formData[f.id]) {
        const errorMsg = lang === 'en'
          ? `Please complete the mandatory field: ${f.labelEn}`
          : `يرجى إدخال الحقل الإلزامي: ${f.labelAr}`;
        alert(errorMsg);
        return;
      }
    }

    setSubmitted(true);
  };

  const getWhatsAppURI = () => {
    const fields = getFormFields();
    const prefix = lang === 'en'
      ? `🌟 *Hypro Academy Inquiry Form* 🌟\n---------------------------------\n`
      : `🌟 *نموذج تواصل أكاديمية هايبـرو* 🌟\n---------------------------------\n`;

    let body = `*Category / الشريحة:* ${activeCategory.toUpperCase()}\n`;
    fields.forEach(f => {
      const val = formData[f.id] || '(N/A)';
      body += `• *${tObj(f, 'label')}:* ${val}\n`;
    });

    return `https://wa.me/963955408202?text=${encodeURIComponent(prefix + body)}`;
  };

  const fields = getFormFields();

  return (
    <div className="bg-white text-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm" id="contact-form-section">
      <div className="max-w-2xl text-start mb-6">
        <span className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
          {t('applyCollaborate')}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mt-1 font-sans">
          {t('connectHypro')}
        </h3>
        <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans font-medium">
          {t('formDesc')}
        </p>
      </div>

      {/* Role Switcher in Form Area */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
          {t('roleHeading')}
        </label>
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {(['student', 'workshop', 'dealer', 'ngo'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              id={`form-role-tab-${cat}`}
              className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeCategory === cat
                ? 'bg-brand-blue text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-850 hover:bg-slate-200 border-none'
                }`}
            >
              {t(cat)}
            </button>
          ))}
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmission} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
            {fields.map((f) => (
              <div key={f.id} className={f.type === 'textarea' ? 'md:col-span-2' : ''}>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {tObj(f, 'label')} {f.required && <span className="text-red-500">*</span>}
                </label>

                {f.type === 'text' && (
                  <input
                    type="text"
                    id={`input-${f.id}`}
                    value={formData[f.id] || ''}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    placeholder={tObj(f, 'placeholder')}
                    required={f.required}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors"
                  />
                )}

                {f.type === 'number' && (
                  <input
                    type="number"
                    id={`input-${f.id}`}
                    value={formData[f.id] || ''}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    placeholder={tObj(f, 'placeholder')}
                    required={f.required}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors"
                  />
                )}

                {f.type === 'tel' && (
                  <input
                    type="tel"
                    id={`input-${f.id}`}
                    value={formData[f.id] || ''}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    placeholder={tObj(f, 'placeholder')}
                    required={f.required}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors text-start"
                  />
                )}

                {f.type === 'select' && (
                  <select
                    id={`input-${f.id}`}
                    value={formData[f.id] || ''}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    required={f.required}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors cursor-pointer"
                  >
                    <option value="">-- {lang === 'en' ? 'Select Option' : 'اختر من القائمة'} --</option>
                    {(tObj(f, 'options') as string[] | undefined)?.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                )}

                {f.type === 'textarea' && (
                  <textarea
                    id={`input-${f.id}`}
                    rows={3}
                    value={formData[f.id] || ''}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    placeholder={tObj(f, 'placeholder')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors resize-none"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-slate-400 font-mono">
              {t('requiredNote')}
            </span>
            <button
              type="submit"
              id="btn-form-submit"
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm select-none border-none"
            >
              <Send size={14} />
              <span>{t('submitBtn')}</span>
            </button>
          </div>
        </form>
      ) : (
        /* Success Screen showing WhatsApp confirmation */
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 text-center animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
            <CheckCircle size={22} />
          </div>

          <h4 id="success-screen-title" className="text-lg font-bold text-slate-900 mb-2">
            {t('successTitle')}
          </h4>

          <p className="text-slate-600 text-xs leading-relaxed max-w-xl mx-auto mb-6 font-medium">
            {t('successDesc')}
          </p>

          <div className="flex justify-center">
            <a
              href={getWhatsAppURI()}
              target="_blank"
              rel="noreferrer"
              id="link-whatsapp-action"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm decoration-none"
            >
              <Smartphone size={16} />
              <span>{t('whatsappButton')}</span>
            </a>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            id="btn-fill-again"
            className="text-slate-500 hover:text-slate-700 underline text-xs font-mono mt-6 cursor-pointer inline-block bg-transparent border-none"
          >
            ← {t('resetButton')}
          </button>
        </div>
      )}
    </div>
  );
}
