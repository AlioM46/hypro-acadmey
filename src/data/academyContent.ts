/**
 * hypro-academy-content
 * 
 * This file contains all the copy, structure, and translations for Hypro Academy.
 * Editing any text, feature, FAQ, or contact detail here will update it instantly across the website.
 * Both English and Arabic are fully supported.
 */

export interface AcademyStats {
  value?: string;
  valueEn: string;
  valueAr: string;
  labelEn: string;
  labelAr: string;
}

export interface CourseModule {
  id: string;
  month: string;
  titleEn: string;
  titleAr: string;
  durationEn: string;
  durationAr: string;
  ratioEn: string;
  ratioAr: string;
  skillsEn: string[];
  skillsAr: string[];
}

export interface PartnerBenefit {
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface FAQItem {
  id: string;
  category: 'student' | 'workshop' | 'dealer' | 'ngo' | 'ev-advanced';
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}

export interface TeamMember {
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  bioEn: string;
  bioAr: string;
  experienceEn: string;
  experienceAr: string;
  image?: string;
}

export interface AboutUsData {
  storyEn: string;
  storyAr: string;
  missionEn: string;
  missionAr: string;
  visionEn: string;
  visionAr: string;
}

export interface AcademyContent {
  meta: {
    titleEn: string;
    titleAr: string;
    taglineEn: string;
    taglineAr: string;
    descriptionEn: string;
    descriptionAr: string;
  };
  contact: {
    phone: string;
    whatsapp: string; // Dynamic WhatsApp API link trigger
    email: string;
    addressEn: string;
    addressAr: string;
    telegram: string;
  };
  stats: AcademyStats[];
  modules: CourseModule[];
  benefits: {
    student: PartnerBenefit[];
    workshop: PartnerBenefit[];
    dealer: PartnerBenefit[];
    ngo: PartnerBenefit[];
  };
  faqs: FAQItem[];
  aboutUs: AboutUsData;
  team: TeamMember[];
}

export const academyContent: AcademyContent = {
  meta: {
    titleEn: "Hypro Academy",
    titleAr: "أكاديمية هايبـرو",
    taglineEn: "Master Electric, Hybrid, & Fuel Engineering in 300+ Hours",
    taglineAr: "احترف صيانة السيارات الكهربائية، الهجينة (الهايبرد) والبنزين خلال أكثر من 300 ساعة تدريبية",
    descriptionEn: "A high-performance vocational school providing 80% practical hands-on training, expert mentors with 20+ years of experience, and a guaranteed placement ecosystem with top workshops, car dealers, and ministries.",
    descriptionAr: "أكاديمية مهنية متخصصة تمنحك دبلوم تدريبي مهني وعملي وتدريب في ورشات حقيقية بنسبة 80%، بإشراف مدربين بخبرة تزيد عن 20 عاماً، مع نظام تشغيل وتوظيف مباشر بالتعاون مع وكلاء وصالات الصيانة والمنظمات."
  },
  contact: {
    phone: "+963 23 881 200", // Syria country code + sample number
    whatsapp: "https://wa.me/962796616549", // Instant WhatsApp messaging API trigger
    telegram: "https://t.me/hypro_academy_sy",
    email: "office@HyproPlatform.com",
    addressEn: "Syria",
    addressAr: "سوريا"
  },
  stats: [
    { valueEn: "80%", valueAr: "80%", labelEn: "Practical Work Focused", labelAr: "تدريب تطبيقي ومهني خالص" },
    { valueEn: "300+ Hours", valueAr: "300+ ساعة", labelEn: "Intensive Apprenticeship", labelAr: "أكثر من 300 ساعة من التأهيل والتمكين المهني" },
    { valueEn: "20+ Years", valueAr: "20+ عاماً", labelEn: "Core Experts Experience", labelAr: "خبرة الموجهين والمدربين" },
    { valueEn: "92%", valueAr: "92%", labelEn: "Placement Integration", labelAr: "معدل توظيف الخريجين بالورش" }
  ],
  modules: [
    {
      id: "mod-1",
      month: "Month 1 / الشهر الأول",
      titleEn: "Advanced Fuel Systems & Diagnostics",
      titleAr: "أنظمة الوقود السائل والتشخيص المتطور",
      durationEn: "4 weeks (Theory + Live Shop)",
      durationAr: "4 أسابيع (نظري + ورشة فنية حية)",
      ratioEn: "70% Practical / 30% Theory",
      ratioAr: "70% عملي / 30% نظري",
      skillsEn: [
        "OBD-II Scanning & System Fault analysis",
        "Sensors, actuators, and ECU calibration",
        "Modern fuel injection (GDI, direct inject systems)",
        "Emission testing & engine mechanical troubleshooting"
      ],
      skillsAr: [
        "فحوص وقراءة كمبيوتر السيارة OBD-II وتحليل الأعطال",
        "معايرة الحساسات، مشغلات الأنظمة، وكمبيوتر السيارة ECU",
        "أنظمة حقن الوقود الحديثة وبخاخات البنزين المباشرة GDI",
        "فحوصات الانبعاثات ومعالجة المشاكل الميكانيكية وصيانة المحرك"
      ]
    },
    {
      id: "mod-2",
      month: "Month 2 / الشهر الثاني",
      titleEn: "Hybrid Powertrains & High-Voltage Systems",
      titleAr: "أنظمة الدوران الهجينة (الهايبرد) والفولتية العالية",
      durationEn: "4 weeks (80% Hands-on)",
      durationAr: "4 أسابيع (80% عملي تطبيقي)",
      ratioEn: "80% Practical / 20% Theory",
      ratioAr: "80% عملي / 20% نظري",
      skillsEn: [
        "High voltage safety equipment & insulated tools usage",
        "Toyota, Hyundai, and European hybrid system architectures",
        "Hybrid battery pack inspection, testing, and cell balancing",
        "DC-DC Converter & inverter thermal management diagnostics"
      ],
      skillsAr: [
        "إجراءات السلامة للفولت العالي واستخدام الأدوات المعزولة",
        "دراسة وتفكيك أنظمة الهايبرد لسيارات تويوتا، هيونداي والسيارات الأوروبية",
        "تحليل حالة بطارية الهايبرد، فحص الروابط وموازنة خلايا البطارية",
        "تشخيص محولات الطاقة والمبدلات ومروحة التبريد ومكافحة السخونة"
      ]
    },
    {
      id: "mod-3",
      month: "Month 3 / الشهر الثالث",
      titleEn: "Pure Electric Vehicle (EV) Systems & Inverters",
      titleAr: "أنظمة السيارات الكهربائية بالكامل والمبدلات EV",
      durationEn: "4 weeks (80% Hands-on)",
      durationAr: "4 أسابيع (80% عملي تطبيقي)",
      ratioEn: "80% Practical / 20% Theory",
      ratioAr: "80% عملي / 20% نظري",
      skillsEn: [
        "EV high-voltage network loop and interlocks (MSD)",
        "Three-phase AC traction motor controls & resolver timing",
        "Regenerative braking system repair & calibration",
        "Thermal management of EV drive motors and structural batteries"
      ],
      skillsAr: [
        "دائرة الفولت العالي لسيارات EV وأمن القواطع MSD",
        "التحكم بمحرك الدفع ثلاثي الأطوار وضبط تزامن الحساس Resolver",
        "صيانة وبرمجة أنظمة الكوابح الذكية واسترجاع الطاقة المتولدة",
        "تبريد محركات السحب وبنك البطاريات المتكاملة وحمايتها"
      ]
    },
    {
      id: "mod-4",
      month: "Month 4 / الشهر الرابع",
      titleEn: "Professional Shop Placement & Certification Trade Test",
      titleAr: "التدريب المهني الاحترافي في الورش وامتحانات نيل الشهادة",
      durationEn: "4 weeks (100% On-Job Clinic)",
      durationAr: "4 أسابيع (100% تطبيق سريري في ورشة معتمدة)",
      ratioEn: "100% Practical Experience",
      ratioAr: "100% خبرة حقلية في العمل",
      skillsEn: [
        "Diagnosing live customer vehicles under mentor supervision",
        "Workshop workflow speed, job-sheet management & billing",
        "Comprehensive electrical diagnostic speed runs (Trade Test)",
        "Immediate placement interviewing and direct employment handoff"
      ],
      skillsAr: [
        "تشخيص وإصلاح سيارات العملاء الحقيقية تحت إشراف الموجهين والخبراء",
        "إدارة سير العمل الفني، كتابة كشوفات الأعطال والتواصل مع الزبائن",
        "مشاريع تخريج واختبارات قياس الكفاءة السريعة الفردية المعتمدة",
        "بدء مقابلات التشغيل الفوري والتحويل المباشر لشركاء التوظيف والوكالات"
      ]
    }
  ],
  benefits: {
    student: [
      {
        titleEn: "Expert Mentors (20+ Years)",
        titleAr: "خبراء ومدربون بخبرة 20+ عام",
        descriptionEn: "Learn directly from veterans who repair these complex systems on a daily basis. No outdated slideshows—only real master technicians.",
        descriptionAr: "تعلم مباشرة من رواد المهنة اللذين يقومون بإصلاح أحدث الموديلات يومياً. لا نؤمن بالمحاضرات التقليدية، بل بنقل الخبرة الميدانية الحقيقية."
      },
      {
        titleEn: "State-of-the-Art Training Garage",
        titleAr: "ورشات تدريب حديثة بالكامل",
        descriptionEn: "Get access to specialized hybrid battery balancers, inverters diagnostics, OBD-III scanners, and high-voltage safety gears from day one.",
        descriptionAr: "تدرب في بيئة عمل مجهزة بالكامل بأجهزة موازنة البطاريات، وأجهزة فحص وتشخيص مبدلات الطاقة، والعدد المعزولة الآمنة."
      },
      {
        titleEn: "National & Global Certification",
        titleAr: "شهادة مهنية معتمدة دولياً ومحلياً",
        descriptionEn: "Your 300+ hour vocational training diploma is widely accredited internationally and by local ministries, enabling you to practice, register your shop, or export your skills.",
        descriptionAr: "شهادة دبلوم تدريبي مهني معتمدة تتيح لك ترخيص مصلحتك الخاصة، السفر خارجاً، أو التثبيت الفوري في المؤسسات والهيئات المهنية."
      },
      {
        titleEn: "Guaranteed Interview Pathways",
        titleAr: "مسارات توظيف ومقابلات مضمونة",
        descriptionEn: "We connect you straight to Syrian and regional auto shops, parts importers, and private fleet networks. 92% of graduates get hired.",
        descriptionAr: "نقوم بربطك بشكل مباشر مع كبرى مراكز الخدمة، وكلاء قطع الغيار، ومستوردي السيارات الذين ينتظرون خريجينا دائماً."
      }
    ],
    workshop: [
      {
        titleEn: "Access Certified Technician Pool",
        titleAr: "الاستفادة من خزان المصلحين المعتمدين",
        descriptionEn: "Hire job-ready technicians who already passed their trade checks in high-voltage safety and electronic scanning. Zero onboarding lag.",
        descriptionAr: "احصل على فنيين مدربين جاهزين للعمل فوراً، بعد اجتيازهم فحوصات جودة صارمة في الفولت العالي وفحص الكمبيوتر. لن تضيع وقتاً في التدريب."
      },
      {
        titleEn: "Custom Team Upskilling Program",
        titleAr: "تطوير طاقم عملك الحالي وتأهيله",
        descriptionEn: "Send your senior traditional mechanics to our night crash course to transition them into EV/Hybrid experts in weeks.",
        descriptionAr: "أرسل الفنيين التقليديين العاملين لديك إلى دوراتنا المخصصة، وحولّهم إلى خبراء أنظمة الفايد الهجينة (هايبرد) والكهربائية لحماية زبائنك وتوسيع مصلحتك."
      },
      {
        titleEn: "Official 'Academy Certified' Badge",
        titleAr: "الحصول على شارة 'صيانة معتمدة'",
        descriptionEn: "Partner garages get verified status and customer referrals from our central diagnosis hub. Build strong customer trust.",
        descriptionAr: "الورشات الشريكة تحصل على ميزة التحقق من الأكاديمية وإرسال زبائن جدد إليها من فرعنا المركزي لزيادة أرباحك ومصداقيتك."
      }
    ],
    dealer: [
      {
        titleEn: "Dedicated Fleet Engineers",
        titleAr: "مهندسو وفنيو تخصص وكالات",
        descriptionEn: "Recruit specialized automotive diagnostic graduates prepared to read and address factory-level technical errors for premium EV & Hybrid brands.",
        descriptionAr: "استقطب فنيين ومهندسين متخصصين في دقة تشخيص أعطال الوكالات، القادرين على فحص ومعالجة المشاكل البرمجية للعلامات التجارية الراقية."
      },
      {
        titleEn: "Structured Apprenticeship Schemes",
        titleAr: "برامج تدريب وتشغيل مدمجة",
        descriptionEn: "Sponsor or co-host apprentices in your authorized showroom service centers during their final phase of training. Minimize hiring risk by evaluating them live.",
        descriptionAr: "يمكنك رعاية أو استضافة طلاب المرحلة الأخيرة للعمل كمتدربين في صالات العرض التابعة لك، وتجربة مهاراتهم قبل اتخاذ قرار توظيفهم الفعلي."
      },
      {
        titleEn: "Technical Standardization Training",
        titleAr: "تطوير معايير الفحص الموحدة",
        descriptionEn: "Ensure your dealership mechanics comply fully with global high-voltage handling requirements and localized Syrian safety specifications.",
        descriptionAr: "اضمن تلبية فنيي الصيانة لمعايير الفولت العالي الدولية والمواصفات السورية المعتمدة في التعامل مع مكونات الكهرباء والبطاريات."
      }
    ],
    ngo: [
      {
        titleEn: "Vocational Economic Empowerment",
        titleAr: "التمكين الاقتصادي والتدريب المهني",
        descriptionEn: "Provide highly valuable, high-income practical skills to young workers. Combat unemployment by equipping youth with high-demand modern trades.",
        descriptionAr: "تمكين الشباب والباحثين عن مصلحة من خلال مهارات تقنية ذات دخل مرتفع ومطلوبة بشدة. حارب البطالة بأكثر المهن طلباً في السوق السوري."
      },
      {
        titleEn: "Transparent Tracking & Reporting",
        titleAr: "تقارير تقدم شفافة وموثوقة",
        descriptionEn: "Comprehensive metrics showing attendance, theoretical scores, shop performance tests, and successful permanent placement outcomes.",
        descriptionAr: "توفير معلومات وتقارير دقيقة توثق نسب الحضور، نتائج الفحوصات النظرية، تقييم الأداء العملي في الورش، وحالات التوظيف المباشرة."
      },
      {
        titleEn: "Accredited Vocational Curriculums",
        titleAr: "مناهج مهنية معتمدة وعلمية",
        descriptionEn: "We provide structured diagnostic systems that align perfectly with international standards and are localized to fit development targets.",
        descriptionAr: "نعتمد مناهج مهنية مسبكة تتناسب مع المعايير المهنية العالمية ومطورة لتلائم الاحتياجات التنموية والمحلية لإعادة الإعمار."
      }
    ]
  },
  faqs: [
    {
      id: "faq-1",
      category: "student",
      questionEn: "What is the difference between an electric vehicle (EV) and a hybrid vehicle?",
      questionAr: "ما الفرق بين السيارة الكهربائية والسيارة الهجينة؟",
      answerEn: "An electric vehicle operates entirely on batteries and electric motors, whereas a hybrid vehicle combines an internal combustion engine with an electric motor to achieve higher fuel efficiency.",
      answerAr: "السيارة الكهربائية تعمل بالكامل بواسطة البطاريات والمحركات الكهربائية، بينما السيارة الهجينة تجمع بين محرك الاحتراق الداخلي والمحرك الكهربائي لتحقيق كفاءة أعلى في استهلاك الطاقة."
    },
    {
      id: "faq-2",
      category: "student",
      questionEn: "Do I need prior experience to enroll in the training programs?",
      questionAr: "هل أحتاج إلى خبرة سابقة للالتحاق بالبرامج التدريبية؟",
      answerEn: "No, programs are available for both beginners and professionals, and the appropriate level is determined for each trainee during registration.",
      answerAr: "لا، تتوفر برامج للمبتدئين والمحترفين، ويتم تحديد المستوى المناسب لكل متدرب عند التسجيل."
    },
    {
      id: "faq-3",
      category: "student",
      questionEn: "Is the training practical or theoretical only?",
      questionAr: "هل التدريب عملي أم نظري فقط؟",
      answerEn: "The academy's programs rely on hands-on practical training alongside theoretical concepts to ensure the acquisition of skills required for the job market.",
      answerAr: "تعتمد برامج الأكاديمية على التدريب العملي والتطبيقي إلى جانب الجانب النظري لضمان اكتساب المهارات المطلوبة لسوق العمل."
    },
    {
      id: "faq-4",
      category: "student",
      questionEn: "What is the duration of the training programs?",
      questionAr: "ما هي مدة البرامج التدريبية؟",
      answerEn: "The duration varies depending on the program, ranging from short courses to vocational programs and specialized diplomas.",
      answerAr: "تختلف المدة حسب البرنامج، وتتراوح بين الدورات القصيرة والبرامج المهنية والدبلومات المتخصصة."
    },
    {
      id: "faq-5",
      category: "student",
      questionEn: "Do I receive a certificate after completing the training?",
      questionAr: "هل أحصل على شهادة بعد إتمام التدريب؟",
      answerEn: "Yes, trainees receive a program completion certificate in accordance with the systems and standards approved by the academy.",
      answerAr: "نعم، يحصل المتدرب على شهادة إتمام البرنامج وفق الأنظمة والمعايير المعتمدة لدى الأكاديمية."
    },
    {
      id: "faq-6",
      category: "student",
      questionEn: "Can I work in the electric vehicle field after graduation?",
      questionAr: "هل يمكنني العمل في مجال السيارات الكهربائية بعد التخرج؟",
      answerEn: "Yes, the programs are designed to equip trainees with the skills required to work in service centers and companies associated with electric and hybrid vehicles.",
      answerAr: "نعم، تم تصميم البرامج لتزويد المتدربين بالمهارات المطلوبة للعمل في مراكز الصيانة والشركات المرتبطة بالمركبات الكهربائية والهجينة."
    },
    {
      id: "faq-7",
      category: "student",
      questionEn: "What are the most hazardous components of an electric vehicle?",
      questionAr: "ما هي أخطر مكونات السيارة الكهربائية؟",
      answerEn: "High-voltage battery packs and high-voltage electrical connection systems are among the most critical components that require specialized training and safety procedures.",
      answerAr: "تعتبر بطاريات الجهد العالي وأنظمة التوصيل الكهربائية عالية الجهد من أهم المكونات التي تتطلب تدريباً وإجراءات سلامة خاصة."
    },
    {
      id: "faq-8",
      category: "student",
      questionEn: "Is there training on lithium-ion batteries?",
      questionAr: "هل يتم التدريب على بطاريات الليثيوم؟",
      answerEn: "Yes, the training programs include learning about lithium batteries, their management systems (BMS), diagnostics, troubleshooting, and related safety procedures.",
      answerAr: "نعم، تشمل البرامج التدريبية التعرف على بطاريات الليثيوم وأنظمة إدارتها وتشخيص أعطالها وإجراءات السلامة الخاصة بها."
    },
    {
      id: "faq-9",
      category: "student",
      questionEn: "Does the academy provide field training opportunities?",
      questionAr: "هل توفر الأكاديمية فرص تدريب ميداني؟",
      answerEn: "Yes, the academy works on building a partner network to provide hands-on field training opportunities for trainees and graduates.",
      answerAr: "هل توفر الأكاديمية فرص تدريب ميداني؟"
    },
    {
      id: "faq-10",
      category: "student",
      questionEn: "What is a Battery Management System (BMS)?",
      questionAr: "ما هو نظام إدارة البطارية (BMS)؟",
      answerEn: "It is the electronic system responsible for monitoring and protecting the battery, as well as managing charging and discharging processes to ensure performance and safety.",
      answerAr: "هو النظام الإلكتروني المسؤول عن مراقبة البطارية وحمايتها وإدارة عمليات الشحن والتفريغ لضمان الأداء والسلامة."
    },
    {
      id: "faq-11",
      category: "student",
      questionEn: "Is there a growing demand for electric vehicle technicians?",
      questionAr: "هل يوجد طلب متزايد على فنيي السيارات الكهربائية؟",
      answerEn: "Yes, the sector is experiencing rapid global and regional growth, which increases the demand for qualified technicians.",
      answerAr: "نعم، يشهد القطاع نمواً متسارعاً عالمياً وإقليمياً، مما يزيد الطلب على الفنيين المؤهلين."
    },
    {
      id: "faq-12",
      category: "student",
      questionEn: "How can I register at the academy?",
      questionAr: "كيف يمكنني التسجيل في الأكاديمية؟",
      answerEn: "You can register online through the website or by visiting the academy and contacting the admissions and registration team.",
      answerAr: "يمكن التسجيل إلكترونياً من خلال الموقع أو عبر زيارة الأكاديمية والتواصل مع فريق القبول والتسجيل."
    },
    {
      id: "faq-13",
      category: "student",
      questionEn: "Can women enroll in the training programs?",
      questionAr: "هل يمكن للنساء الالتحاق بالبرامج التدريبية؟",
      answerEn: "Yes, all programs are open to both male and female applicants in accordance with the registration requirements of each program.",
      answerAr: "نعم، جميع البرامج متاحة للراغبين والراغبات وفق شروط التسجيل الخاصة بكل برنامج."
    },
    {
      id: "faq-14",
      category: "student",
      questionEn: "Does the academy help graduates find job opportunities?",
      questionAr: "هل تساعد الأكاديمية الخريجين في الحصول على فرص عمل؟",
      answerEn: "Yes, employment and placement support are provided through the Syrian Competency Bank, partner networks, and employers.",
      answerAr: "نعم، من خلال بنك الكفاءات السورية وشبكة الشركاء وأصحاب العمل يتم دعم فرص التوظيف والتشغيل."
    },
    {
      id: "faq-15",
      category: "student",
      questionEn: "What is the Syrian Competency Bank?",
      questionAr: "ما هو بنك الكفاءات السورية؟",
      answerEn: "It is a specialized platform that compiles data on qualified graduates to connect them with employers and partner companies.",
      answerAr: "منصة متخصصة تجمع بيانات الخريجين والمؤهلين لربطهم بأصحاب العمل والشركات الشريكة."
    },
    {
      id: "faq-16",
      category: "workshop",
      questionEn: "Can garages and companies join the partner network?",
      questionAr: "هل يمكن للكراجات والشركات الانضمام إلى شبكة الشركاء؟",
      answerEn: "Yes, companies, garages, and maintenance centers can register in the Hypro partner network to benefit from services and qualified personnel.",
      answerAr: "نعم، يمكن للكراجات والشركات الانضمام إلى شبكة الشركاء للاستفادة من الخدمات والكوادر المؤهلة."
    },
    {
      id: "faq-17",
      category: "workshop",
      questionEn: "Can trainers and experts join the academy?",
      questionAr: "هل يمكن للمدربين والخبراء الانضمام إلى الأكاديمية؟",
      answerEn: "Yes, the academy provides a dedicated portal to recruit trainers, experts, and technical specialists.",
      answerAr: "نعم، توفر الأكاديمية نموذجاً خاصاً لاستقطاب المدربين والخبراء وأصحاب الخبرات الفنية."
    },
    {
      id: "faq-18",
      category: "dealer",
      questionEn: "Does the academy offer consultation services for businesses?",
      questionAr: "هل تقدم الأكاديمية خدمات استشارية للشركات؟",
      answerEn: "Yes, services include technical and training consultations, business development support, and technology transfer.",
      answerAr: "نعم، تقدم الأكاديمية خدمات استشارية للشركات تشمل الاستشارات الفنية والتدريبية ودعم تطوير الأعمال ونقل التكنولوجيا."
    },
    {
      id: "faq-19",
      category: "ngo",
      questionEn: "What is the academy's vision for the coming years?",
      questionAr: "ما هي رؤية الأكاديمية خلال السنوات القادمة؟",
      answerEn: "The academy aims to contribute to qualifying more than 10,000 young Syrian men and women over the next five years, connecting them to jobs and professional development.",
      answerAr: "تسعى الأكاديمية للمساهمة في تأهيل أكثر من 10,000 شاب وشابة سورية خلال السنوات الخمس القادمة وربطهم بفرص العمل والتطوير المهني."
    },
    {
      id: "faq-20",
      category: "ngo",
      questionEn: "How can organizations and institutions cooperate with the academy?",
      questionAr: "كيف يمكن للمنظمات والمؤسسات التعاون مع الأكاديمية؟",
      answerEn: "Cooperation can be established through training programs, personnel qualification, joint projects, employment support, and transferring knowledge and technology into the Syrian market.",
      answerAr: "كيف يمكن للمنظمات والمؤسسات التعاون مع الأكاديمية؟ يمكن التعاون من خلال برامج التدريب، وتأهيل الكوادر، والمشاريع المشتركة، ودعم التشغيل، ونقل المعرفة والتكنولوجيا إلى السوق السوري"
    },
    {
      id: "faq-21",
      category: "ev-advanced",
      questionEn: "What is the difference between LFP and NMC batteries?",
      questionAr: "ما هو الفرق بين بطاريات LFP و NMC؟",
      answerEn: "LFP (Lithium Iron Phosphate) batteries offer longer lifespan, higher thermal stability, and lower cost but have lower energy density. NMC (Nickel Manganese Cobalt) batteries offer higher energy density for longer range and lighter weight but are more sensitive to heat and costlier.",
      answerAr: "بطاريات LFP (ليثيوم حديد فوسفات) تتميز بعمر افتراضي أطول، وأمان حراري أعلى، وتكلفة أقل، ولكن كثافتها الطاقية أقل. أما NMC (نيكل منغنيز كوبالت) فتتميز بكثافة طاقية عالية تمنح مدى قيادة أطول ووزن أخف، ولكنها أكثر حساسية للحرارة المرتفعة وأعلى تكلفة."
    },
    {
      id: "faq-22",
      category: "ev-advanced",
      questionEn: "Why does battery capacity degrade over time?",
      questionAr: "لماذا تنخفض سعة البطارية مع الزمن؟",
      answerEn: "Capacity degrades due to natural chemical wear inside the cells, accelerated by factors like frequent charging to 100%, deep discharges, and exposure to high operating temperatures, which increase internal resistance and lead to active lithium loss.",
      answerAr: "تنخفض السعة بسبب التحلل الكيميائي الطبيعي داخل الخلايا، والذي يزداد بفعل عوامل مثل: الشحن المتكرر للحد الأقصى (100%)، التفريغ العميق جداً، والتعرض المستمر لدرجات الحرارة المرتفعة، مما يؤدي إلى تراكم المقاومة الداخلية وفقدان أيونات الليثيوم النشطة."
    },
    {
      id: "faq-23",
      category: "ev-advanced",
      questionEn: "How are inverter faults diagnosed?",
      questionAr: "كيف يتم تشخيص أعطال الإنفرتر؟",
      answerEn: "Diagnosis is done using advanced diagnostic scanners to read DTCs, monitoring IGBT transistor temperatures, testing ground insulation of the motor windings, and checking control gate signals to ensure proper DC to 3-phase AC conversion.",
      answerAr: "تشخيص الأعطال يتم باستخدام أجهزة فحص متطورة لقراءة رموز الأعطال (DTCs)، ومراقبة درجات حرارة ترانزستورات الـ IGBTs، وقياس العزل الأرضي لملفات المحرك، وفحص إشارات التحكم القادمة من البوابة لضمان سلامة تحويل التيار من مستمر (DC) إلى متردد (3-phase AC)."
    },
    {
      id: "faq-24",
      category: "ev-advanced",
      questionEn: "What causes battery overheating?",
      questionAr: "ما أسباب ارتفاع حرارة البطارية؟",
      answerEn: "Key causes include continuous DC fast charging at high rates, high-stress aggressive driving, liquid cooling system failures (such as coolant leaks or pump malfunction), or damaged internal cells experiencing abnormally high internal resistance.",
      answerAr: "تشمل الأسباب الرئيسية: الشحن السريع المستمر بقدرات عالية (DC Fast Charging)، القيادة بجهد مرتفع وسرعات عالية، وجود خلل في نظام التبريد السائل (مثل نقص السائل أو تعطل المضخة)، أو وجود خلايا داخلية تالفة ذات مقاومة داخلية مرتفعة جداً."
    },
    {
      id: "faq-25",
      category: "ev-advanced",
      questionEn: "How is the BMS calibrated?",
      questionAr: "كيف تتم معايرة نظام BMS؟",
      answerEn: "Calibration is performed by running a full charge and discharge cycle. This lets the system register the cell voltage limits, recalibrate the calculated State of Charge (SOC), and balance individual cell voltage variances.",
      answerAr: "تتم المعايرة من خلال دورة كاملة للشحن والتفريغ (Full Charge & Discharge Cycle) للسماح للنظام بتعلم الحدود الفعلية للجهد (Maximum and Minimum Cell Voltages) وإعادة احتساب سعة البطارية المتبقية (SOC) وموازنة فروقات الجهد بين الخلايا."
    },
    {
      id: "faq-26",
      category: "ev-advanced",
      questionEn: "What is the difference between AC and DC charging?",
      questionAr: "ما الفرق بين الشحن AC و DC؟",
      answerEn: "AC charging delivers alternating current that must be converted by the vehicle's On-Board Charger, making it ideal for slow overnight/office charging. DC charging bypasses the on-board charger, supplying high-power direct current straight to the battery, allowing rapid charging.",
      answerAr: "الشحن المتردد (AC) يغذي السيارة بتيار متردد يحتاج إلى محول داخلي (On-Board Charger) لتحويله إلى مستمر، وهو شحن بطيء للمنازل والمكاتب. أما الشحن المستمر (DC) فيتجاوز المحول الداخلي ويغذي البطارية مباشرة بتيار مستمر عالي القدرة من الشاحن الخارجي، وهو شحن سريع جداً للمحطات."
    },
    {
      id: "faq-27",
      category: "ev-advanced",
      questionEn: "What is Regenerative Braking?",
      questionAr: "ما هو نظام الكبح المتجدد Regenerative Braking؟",
      answerEn: "It is a system that utilizes deceleration when lifting off the accelerator or applying brakes to run the electric motor as a generator. This slows the vehicle down while feeding kinetic energy back to recharge the high-voltage battery, improving efficiency and range.",
      answerAr: "هو نظام يستغل قوة التباطؤ عند رفع القدم عن دواسة الوقود أو الضغط على الفرامل لتحويل محرك الدفع الكهربائي إلى مولد طاقة (Generator)، مما يؤدي لإبطاء السيارة وإعادة شحن البطارية بجزء من الطاقة الحركية المفقودة، مما يزيد كفاءة الاستهلاك والمدى."
    },
    {
      id: "faq-28",
      category: "ev-advanced",
      questionEn: "How is high-voltage (HV) system safety handled?",
      questionAr: "كيف يتم التعامل الآمن مع أنظمة الجهد العالي HV",
      answerEn: "Safety requires wearing approved CAT III (1000V) insulated gloves (visually and pneumatically inspected before use), disconnecting the Manual Service Disconnect (MSD) plug, and waiting at least 10 minutes for high-capacity capacitors to discharge before touching orange-clad components.",
      answerAr: "يتطلب ذلك ارتداء قفازات عازلة معتمدة فئة CAT III (1000V) وفحصها قبل الاستخدام، وفصل مفتاح الأمان الرئيسي للجهد العالي (Service Disconnect / MSD) مع الانتظار لمدة لا تقل عن 10 دقائق لتفريغ المكثفات قبل البدء بأي فحص أو صيانة للمكونات ذات اللون البرتقالي."
    }
  ],
  aboutUs: {
    storyEn: "Hypro Academy was born in Syria to fill an urgent local crisis in modern automotive maintenance. With the rapid arrival of Hybrid and Pure Electric vehicles (EVs) into Syrian domestic markets, traditional workshops struggled with high-voltage electronics. Our academy acts as a critical bridge—equipping local youth with high-tech, high-income practical skills while providing workshop operators, agencies, and public fleets with fully qualified, syndicate-approved technicians.",
    storyAr: "تأسست أكاديمية هايبـرو في سوريا استجابةً لأزمة محلية حقيقية وملحة في صيانة المركبات الحديثة. فمع تدفق سيارات الهايبرد والكهرباء (EV) إلى أسواق الداخل السوري، وجدت الورش الفنية التقليدية صعوبة بالغة في التعامل مع معقدات الكهرباء والفولت العالي. تُعد أكاديميتنا جسراً إنقاذياً تقنياً يمنح الحرفيين والشباب المهارات الفنية المتقدمة ذات الدخل المرتفع، ويسد ثغرة ندرة المصلحين الخبراء لدى أصحاب صالات الصيانة والمؤسسات والمنظمات الإنسانية.",
    missionEn: "To provide world-standard, 100% practical, safe vocational training routines that empower young people, boost domestic repair infrastructure, and guarantee prompt employment through deep-rooted institutional networks.",
    missionAr: "تمكين الكوادر الفنية الوطنية وتأهيل الشباب مهنياً بنسبة 100% عملي آمن ومطابق للمواصفات الدولية، لتسريع إعادة الإعمار وحل أزمات ندرة الخبرة وتأمين مسارات تشغيل موثوقة في سوق الصيانة.",
    visionEn: "To become the premier hub for modern sustainable technology and hybrid powertrain diagnostics training across Syria and the regional market.",
    visionAr: "أن نكون المركز المرجعي الأول والوجهة الأكثر موثوقية في سوريا لتدريب وفحص وتأهيل مهندسي وفنيي صيانة السيارات الهجينة والكهربائية."
  },
  team: [
    {
      nameEn: "Eng. Ammar Al-Ahmad",
      nameAr: "المهندس عمار الأحمد",
      roleEn: "CEO of Hypro Academy & Lead EV Mentor",
      roleAr: "الرئيس التنفيذي لأكاديمية هايبـرو والموجه الرئيسي لسيارات الكهرباء",
      bioEn: "Specialist in high-voltage micro-controller mapping and hybrid power cell rebuilds. Oversees all core testing protocols.",
      bioAr: "أخصائي هندسة الالكترون وبرمجة العقول الإلكترونية وإعادة موازنة خلايا الفولت العالي. يشرف على اختبارات فحص الكفاءة النهائية.",
      experienceEn: "24 Years of Active Bench Repair",
      experienceAr: "٢٤ عاماً من الورشات والخبرة العملية",
      image: "/trainers/CEO.jpeg"
    },
    {
      nameEn: "Eng. Mohammed Made",
      nameAr: "المهندس محمد ماضي",
      roleEn: "Lead Hybrid Engineer & Battery Specialist",
      roleAr: "كبير مهندسي الهايبرد وأخصائي بطاريات الجهد العالي",
      bioEn: "Specialist in battery cell diagnostics, rebuilding modular packs, and electric drivetrain calibration.",
      bioAr: "خبرة ٢٠ سنة في مجال ميكانيك السيارات الكهربائية والبطاريات الهجينة.",
      experienceEn: "20 Years of Active Experience",
      experienceAr: "خبرة ٢٠ عاماً في ميكانيك السيارات والبطاريات",
      image: "/trainers/Mohammed Made.jpeg"
    },
    {
      nameEn: "Trainer Amer Arqawe",
      nameAr: "المدرب عامر عرقاوي",
      roleEn: "Electric & Hybrid Vehicle Mechanics Trainer",
      roleAr: "مدرب في مجال ميكانيك السيارات الكهربائية والهجينة ومتخصص في المحركات العاملة بالبنزين",
      bioEn: "Specialist in gasoline engines and electric/hybrid vehicle mechanics instruction.",
      bioAr: "مدرب ومتخصص في صيانة المحركات العاملة بالبنزين وأنظمة الدفع الكهربائية والهجينة.",
      experienceEn: "14 Years of Active Instruction",
      experienceAr: "١٤ عاماً في تدريب صيانة الميكانيك والهايبرد",
      image: "/trainers/Omar Arqawe.jpeg"
    },
    {
      nameEn: "Eng. Basel Al-Sagheer",
      nameAr: "المهندس باسل الصغير",
      roleEn: "Senior Inverter & Calibration Instructor",
      roleAr: "كبير مدربي صيانة مبدلات الطاقة والمحركات",
      bioEn: "Expert in European, Toyota, and Korean hybrid dual powertrains diagnostics with direct focus on workplace safety.",
      bioAr: "خبير تشخيص وحل أعطال العواكس (الأصناف الكورية واليابانية والأوروبية) مع تركيز صارم على بروتوكولات الأمان الفني وعزل الفولت الفعال.",
      experienceEn: "18 Years of Technical Instruction",
      experienceAr: "١٨ عاماً من التدريب وصناعة الكوادر",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
      nameEn: "Eng. Omar Al-Sloom",
      nameAr: "المهندس عمر السلوم",
      roleEn: "B2B & Placement Liaison Officer",
      roleAr: "مسؤول التشبيك والتنسيق مع المنظمات والورش",
      bioEn: "Manages employment pathways with NGO sponsors, local repair trade unions, and public agencies.",
      bioAr: "يتولى التنسيق لبناء مسارات رعاية تدريب الشباب، وبناء بروتوكولات التشغيل وخلق فرص عمل واثقة وتوطيد عقود التدريب المهني.",
      experienceEn: "12 Years in Vocational Program Design",
      experienceAr: "١٢ عاماً في خدمة وتطوير المشاريع المهنية بالمنطقة",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
      nameEn: "Ustadh Munir Al-Khatib",
      nameAr: "الأستاذ منير الخطيب",
      roleEn: "Lab Director & Safety Controller",
      roleAr: "مدير المختبر والمشرف الميداني للسلامة",
      bioEn: "Maintains all insulated tools and high-voltage diagnostic systems. Standardizes workshop safety gear compliance.",
      bioAr: "يشرف على تكامل وحداثة أجهزة الفحص، والعدّة المعزولة وحماية الطلاب من صدمات الفولت المرتفع في الورشة والمختبر الميداني للمركز.",
      experienceEn: "15 Years of Lab Operations Support",
      experienceAr: "١٥ عاماً من إدارة مختبرات الصيانة والسلامة",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80"
    },
    {
      nameEn: "Eng. Anas Al-Kurd",
      nameAr: "المهندس أنس الكرد",
      roleEn: "Alternative Energy & Smart Grids Instructor",
      roleAr: "مدرب أنظمة الطاقة البديلة والشبكات الذكية",
      bioEn: "Specialist in solar arrays integration, battery management programming, and sustainable grids.",
      bioAr: "متخصص في تكامل أنظمة الخلايا الشمسية وبرمجة إدارة البطاريات وتصميم الشبكات المستدامة.",
      experienceEn: "10 Years of Energy Systems Engineering",
      experienceAr: "١٠ سنوات في هندسة نظم الطاقة",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80"
    }
  ]
};
