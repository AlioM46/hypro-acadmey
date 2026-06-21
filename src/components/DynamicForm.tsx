import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Smartphone } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface DynamicFormProps {
  lang?: 'en' | 'ar'; // Backward compatibility
  activeCategory: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer';
  setActiveCategory: (category: 'student' | 'workshop' | 'dealer' | 'ngo' | 'trainer') => void;
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
          { id: 'firstName', labelEn: 'First Name', labelAr: 'الاسم الأول', type: 'text', placeholderEn: 'e.g. Ali', placeholderAr: 'مثال: علي', required: true },
          { id: 'lastName', labelEn: 'Last Name', labelAr: 'اسم العائلة', type: 'text', placeholderEn: 'e.g. Al-Sloom', placeholderAr: 'مثال: السلوم', required: true },
          { id: 'email', labelEn: 'Email Address', labelAr: 'البريد الإلكتروني', type: 'email', placeholderEn: 'e.g. ali@email.com', placeholderAr: 'مثال: ali@email.com', required: false },
          { id: 'phone', labelEn: 'Phone / WhatsApp', labelAr: 'رقم الهاتف / الواتساب', type: 'tel', placeholderEn: 'e.g. +963-955-408202', placeholderAr: 'مثال: 0955408202', required: true },
          { id: 'city', labelEn: 'City / Governorate', labelAr: 'المحافظة / المدينة', type: 'select', optionsEn: ['Idlib', 'Aleppo', 'Hama', 'Latakia', 'Damascus', 'Other'], optionsAr: ['إدلب', 'حلب', 'حماة', 'اللاذقية', 'دمشق', 'أخرى'], required: true },
          { id: 'age', labelEn: 'Age', labelAr: 'العمر', type: 'number', placeholderEn: 'e.g. 24', placeholderAr: 'مثال: 24', required: false },
          { id: 'program', labelEn: 'Program of Interest', labelAr: 'البرنامج المطلوب', type: 'select', optionsEn: ['EV/Hybrid Technician Diploma', 'Short Workshop Training', 'Advanced Battery Diagnostics', 'Not Sure Yet'], optionsAr: ['دبلوم فني سيارات كهربائية/هايبرد', 'تدريب ورش قصير', 'تشخيص بطاريات متقدم', 'غير متأكد بعد'], required: true },
          { id: 'source', labelEn: 'How did you hear about us?', labelAr: 'كيف سمعت عنا؟', type: 'select', optionsEn: ['Social Media (Facebook/Instagram)', 'WhatsApp / Friend Referral', 'Google Search', 'NGO / Organization', 'Other'], optionsAr: ['وسائل التواصل الاجتماعي', 'واتساب / توصية صديق', 'بحث جوجل', 'منظمة / جهة رسمية', 'أخرى'], required: false },
          { id: 'notes', labelEn: 'Additional Notes (optional)', labelAr: 'ملاحظات إضافية (اختياري)', type: 'textarea', placeholderEn: 'Any questions or details you want to share...', placeholderAr: 'أي أسئلة أو تفاصيل تريد مشاركتها...', required: false }
        ];
      case 'workshop':
        return [
          { id: 'workshopName', labelEn: 'Workshop / Garage Name', labelAr: 'اسم الورشة / مركز الصيانة', type: 'text', placeholderEn: 'e.g. Al-Nisr Auto Lab', placeholderAr: 'مثال: مركز النسر', required: true },
          { id: 'contactName', labelEn: 'Contact Person Name', labelAr: 'اسم المسؤول للتواصل', type: 'text', placeholderEn: 'e.g. Ahmad Khalil', placeholderAr: 'مثال: أحمد خليل', required: true },
          { id: 'email', labelEn: 'Business Email', labelAr: 'البريد الإلكتروني للعمل', type: 'email', placeholderEn: 'e.g. info@workshop.com', placeholderAr: 'مثال: info@workshop.com', required: false },
          { id: 'phone', labelEn: 'Business Phone / WhatsApp', labelAr: 'هاتف العمل / واتساب', type: 'tel', placeholderEn: 'e.g. +963-955-300100', placeholderAr: 'مثال: 0955300100', required: true },
          { id: 'city', labelEn: 'City / Location', labelAr: 'المحافظة / الموقع', type: 'select', optionsEn: ['Idlib', 'Aleppo', 'Hama', 'Latakia', 'Damascus', 'Other'], optionsAr: ['إدلب', 'حلب', 'حماة', 'اللاذقية', 'دمشق', 'أخرى'], required: true },
          { id: 'teamSize', labelEn: 'Current Team Size', labelAr: 'عدد الفنيين الحالي', type: 'select', optionsEn: ['1-3 mechanics', '4-10 mechanics', '10+ mechanics'], optionsAr: ['1-3 ميكانيكيين', '4-10 ميكانيكيين', '10+ ميكانيكيين'], required: false },
          { id: 'serviceGoal', labelEn: 'What do you need?', labelAr: 'ما الذي تحتاجه؟', type: 'select', optionsEn: ['Hire certified graduates', 'Upskill our current mechanics', 'Become a certified partner workshop', 'Technical consultation'], optionsAr: ['توظيف خريجين معتمدين', 'تدريب طاقمنا الحالي', 'أن نصبح ورشة شريكة معتمدة', 'استشارة فنية'], required: true },
          { id: 'notes', labelEn: 'Additional Details', labelAr: 'تفاصيل إضافية', type: 'textarea', placeholderEn: 'Describe your current equipment, specialties...', placeholderAr: 'صف أجهزتك الحالية وتخصصاتك...', required: false }
        ];
      case 'dealer':
        return [
          { id: 'companyName', labelEn: 'Company / Dealer Name', labelAr: 'اسم الشركة / الوكالة', type: 'text', placeholderEn: 'e.g. Hyundai Syria', placeholderAr: 'مثال: هيونداي سوريا', required: true },
          { id: 'contactName', labelEn: 'Representative Name', labelAr: 'اسم المسؤول', type: 'text', placeholderEn: 'e.g. Dr. Samir Haddad', placeholderAr: 'مثال: د. سمير حداد', required: true },
          { id: 'email', labelEn: 'Official Email', labelAr: 'البريد الرسمي', type: 'email', placeholderEn: 'e.g. hr@dealer.sy', placeholderAr: 'مثال: hr@dealer.sy', required: true },
          { id: 'phone', labelEn: 'Contact Phone', labelAr: 'هاتف التواصل', type: 'tel', placeholderEn: 'e.g. +963-11-2234567', placeholderAr: 'مثال: 0112234567', required: true },
          { id: 'city', labelEn: 'HQ Location', labelAr: 'موقع المقر الرئيسي', type: 'select', optionsEn: ['Idlib', 'Aleppo', 'Hama', 'Latakia', 'Damascus', 'Jordan', 'Turkey', 'Other'], optionsAr: ['إدلب', 'حلب', 'حماة', 'اللاذقية', 'دمشق', 'الأردن', 'تركيا', 'أخرى'], required: true },
          { id: 'personnelNeed', labelEn: 'Technicians Needed (Yearly)', labelAr: 'عدد الفنيين المطلوبين سنوياً', type: 'number', placeholderEn: 'e.g. 5', placeholderAr: 'مثال: 5', required: false },
          { id: 'source', labelEn: 'How did you find us?', labelAr: 'كيف وصلت إلينا؟', type: 'select', optionsEn: ['Website', 'Social Media', 'Partner Referral', 'Conference/Event', 'Other'], optionsAr: ['الموقع الإلكتروني', 'وسائل التواصل', 'توصية شريك', 'مؤتمر/فعالية', 'أخرى'], required: false },
          { id: 'notes', labelEn: 'Technical Requirements', labelAr: 'المتطلبات الفنية', type: 'textarea', placeholderEn: 'Describe specializations needed...', placeholderAr: 'صف التخصصات المطلوبة...', required: false }
        ];
      case 'ngo':
        return [
          { id: 'orgName', labelEn: 'Organization Name', labelAr: 'اسم المنظمة / الجهة', type: 'text', placeholderEn: 'e.g. UNDP Syria', placeholderAr: 'مثال: برنامج الأمم المتحدة الإنمائي', required: true },
          { id: 'contactName', labelEn: 'Focal Point Name', labelAr: 'اسم منسق المشروع', type: 'text', placeholderEn: 'e.g. Fatima Mansour', placeholderAr: 'مثال: فاطمة منصور', required: true },
          { id: 'email', labelEn: 'Official Email', labelAr: 'البريد الرسمي', type: 'email', placeholderEn: 'e.g. f.mansour@ngo.org', placeholderAr: 'مثال: f.mansour@ngo.org', required: true },
          { id: 'phone', labelEn: 'Project Phone / WhatsApp', labelAr: 'هاتف المشروع / واتساب', type: 'tel', placeholderEn: 'e.g. +963-955-408xxx', placeholderAr: 'مثال: 0955408202', required: true },
          { id: 'country', labelEn: 'Country of Operation', labelAr: 'بلد التشغيل', type: 'select', optionsEn: ['Syria', 'Jordan', 'Turkey', 'Lebanon', 'Iraq', 'Multi-country'], optionsAr: ['سوريا', 'الأردن', 'تركيا', 'لبنان', 'العراق', 'متعدد الدول'], required: true },
          { id: 'missionGoal', labelEn: 'Partnership Objective', labelAr: 'هدف الشراكة', type: 'select', optionsEn: ['Fund vocational scholarships', 'Train institutional technicians', 'Establish community labs', 'Research & impact assessment'], optionsAr: ['تمويل منح تدريب مهني', 'تدريب فنيي المؤسسات', 'إنشاء مختبرات مجتمعية', 'بحث وتقييم أثر'], required: true },
          { id: 'beneficiaryCount', labelEn: 'Target Beneficiaries', labelAr: 'عدد المستفيدين المستهدفين', type: 'number', placeholderEn: 'e.g. 50', placeholderAr: 'مثال: 50', required: false },
          { id: 'source', labelEn: 'Referral Source', labelAr: 'مصدر الإحالة', type: 'select', optionsEn: ['Website', 'Partner Organization', 'UN Network', 'Conference', 'Other'], optionsAr: ['الموقع الإلكتروني', 'منظمة شريكة', 'شبكة الأمم المتحدة', 'مؤتمر', 'أخرى'], required: false },
          { id: 'notes', labelEn: 'Project Scope & Notes', labelAr: 'نطاق المشروع وملاحظات', type: 'textarea', placeholderEn: 'Describe geographic scope, timeline, and budget range...', placeholderAr: 'صف النطاق الجغرافي والجدول الزمني ونطاق الميزانية...', required: false }
        ];
      case 'trainer':
        return [
          { id: 'firstName', labelEn: 'First Name', labelAr: 'الاسم الأول', type: 'text', placeholderEn: 'e.g. Mahmoud', placeholderAr: 'مثال: محمود', required: true },
          { id: 'lastName', labelEn: 'Last Name', labelAr: 'اسم العائلة', type: 'text', placeholderEn: 'e.g. Al-Ahmad', placeholderAr: 'مثال: الأحمد', required: true },
          { id: 'email', labelEn: 'Email Address', labelAr: 'البريد الإلكتروني', type: 'email', placeholderEn: 'e.g. mahmoud@email.com', placeholderAr: 'مثال: mahmoud@email.com', required: true },
          { id: 'phone', labelEn: 'Phone / WhatsApp', labelAr: 'رقم الهاتف / الواتساب', type: 'tel', placeholderEn: 'e.g. +963-955-500200', placeholderAr: 'مثال: 0955500200', required: true },
          { id: 'city', labelEn: 'City / Location', labelAr: 'المحافظة / المدينة', type: 'select', optionsEn: ['Idlib', 'Aleppo', 'Hama', 'Latakia', 'Damascus', 'Other'], optionsAr: ['إدلب', 'حلب', 'حماة', 'اللاذقية', 'دمشق', 'أخرى'], required: true },
          { id: 'specialty', labelEn: 'Specialty / Domain', labelAr: 'التخصص التدريبي', type: 'select', optionsEn: ['Electric & Hybrid Vehicles', 'Automotive Electronics', 'High-Voltage Battery Diagnostics', 'Alternative Energy Systems', 'Diagnostics & Scan Tools'], optionsAr: ['السيارات الكهربائية والهجينة', 'إلكترونيات وكهرباء السيارات', 'تشخيص وصيانة بطاريات الجهد العالي', 'أنظمة الطاقة البديلة والمتجددة', 'أجهزة الفحص وتشخيص الأعطال'], required: true },
          { id: 'experience', labelEn: 'Years of Experience', labelAr: 'سنوات الخبرة', type: 'number', placeholderEn: 'e.g. 5', placeholderAr: 'مثال: 5', required: true },
          { id: 'cvLink', labelEn: 'CV / Resume Link', labelAr: 'رابط السيرة الذاتية (لينكد إن أو درايف)', type: 'text', placeholderEn: 'e.g. https://linkedin.com/in/...', placeholderAr: 'مثال: https://linkedin.com/in/...', required: false },
          { id: 'notes', labelEn: 'Training Experience Details', labelAr: 'تفاصيل خبراتك التدريبية والملاحظات', type: 'textarea', placeholderEn: 'Describe courses taught or domain expertise...', placeholderAr: 'صف خبراتك أو تفاصيل إضافية تريد مشاركتها...', required: false }
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
    <div className="bg-white text-slate-800 p-6 md:p-8 border border-slate-200" id="contact-form-section">
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

      {/* Role Switcher */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
          {t('roleHeading')}
        </label>
        <div className="flex flex-wrap gap-1 bg-slate-100 p-1">
          {(['student', 'workshop', 'dealer', 'ngo', 'trainer'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              id={`form-role-tab-${cat}`}
              className={`flex-1 text-center py-2 px-3 text-xs font-bold transition-all cursor-pointer ${activeCategory === cat
                ? 'bg-brand-blue text-white'
                : 'text-slate-500 hover:text-slate-850 hover:bg-slate-200 border-none bg-transparent'
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
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors"
                  />
                )}

                {f.type === 'email' && (
                  <input
                    type="email"
                    id={`input-${f.id}`}
                    value={formData[f.id] || ''}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    placeholder={tObj(f, 'placeholder')}
                    required={f.required}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors"
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
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors"
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
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors text-start"
                  />
                )}

                {f.type === 'select' && (
                  <select
                    id={`input-${f.id}`}
                    value={formData[f.id] || ''}
                    onChange={(e) => handleInputChange(f.id, e.target.value)}
                    required={f.required}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors cursor-pointer"
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
                    className="w-full bg-slate-50 border border-slate-200 p-4 text-sm focus:outline-none focus:border-brand-blue text-slate-800 transition-colors resize-none"
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
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs px-8 py-3.5 flex items-center justify-center gap-2 transition-all cursor-pointer select-none border-none"
            >
              <Send size={14} />
              <span>{t('submitBtn')}</span>
            </button>
          </div>
        </form>
      ) : (
        /* Success Screen showing WhatsApp confirmation */
        <div className="bg-slate-50 p-6 md:p-8 border border-slate-200 text-center animate-fade-in">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 flex items-center justify-center gap-2 transition-all cursor-pointer decoration-none"
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
