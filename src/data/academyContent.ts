/**
 * hypro-academy-content
 * 
 * This file contains all the copy, structure, and translations for Hypro Academy.
 * Editing any text, feature, FAQ, or contact detail here will update it instantly across the website.
 * Both English and Arabic are fully supported.
 */

export interface AcademyStats {
  value: string;
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
  category: 'student' | 'workshop' | 'dealer' | 'ngo';
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
    taglineEn: "Master Electric, Hybrid, & Fuel Engineering in 4 Months",
    taglineAr: "احترف صيانة السيارات الكهربائية، الهجينة (الهايبرد) والبنزين خلال 4 أشهر",
    descriptionEn: "A high-performance vocational school providing 80% practical hands-on training, expert mentors with 20+ years of experience, and a guaranteed placement ecosystem with top workshops, car dealers, and ministries.",
    descriptionAr: "أكاديمية مهنية متخصصة تمنحك دبلوم عملي وتدريب في ورشات حقيقية بنسبة 80%، بإشراف مدربين بخبرة تزيد عن 20 عاماً، مع نظام تشغيل وتوظيف مباشر بالتعاون مع وكلاء وصالات الصيانة والمنظمات."
  },
  contact: {
    phone: "+963-955-408-202", // Syria country code + sample number
    whatsapp: "https://wa.me/963955408202", // Instant WhatsApp messaging API trigger
    telegram: "https://t.me/hypro_academy_sy",
    email: "info@hyproacademy.org",
    addressEn: "Industrial District Road, Idleb, Syria",
    addressAr: "سورية، إدلب، المنطقة الصناعية"
  },
  stats: [
    { value: "80%", labelEn: "Practical Work Focused", labelAr: "تدريب تطبيقي ومهني خالص" },
    { value: "4 Months", labelEn: "Intensive Apprenticeship", labelAr: "4 أشهر من التأهيل والتمكين الكامل" },
    { value: "20+ Years", labelEn: "Core Experts Experience", labelAr: "خبرة الموجهين والمدربين" },
    { value: "92%", labelEn: "Placement Integration", labelAr: "معدل توظيف الخريجين بالورش" }
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
        titleAr: "شهادة مهنية معتمدة داخلياً وخارجياً",
        descriptionEn: "Your 4-month diploma is widely accredited by syndicates and local ministries, enabling you to practice, register your shop, or export your skills.",
        descriptionAr: "شهادة دبلوم معتمدة تتيح لك ترخيص مصلحتك الخاصة، السفر خارجاً، أو التثبيت الفوري في النقابات والمؤسسات المهنية."
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
        descriptionEn: "Sponsor or co-host 4th-month apprentices in your authorized showroom service centers. Minimize hiring risk by evaluating them live.",
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
      questionEn: "Do I need any background in electrical engineering or mechanics to enroll?",
      questionAr: "هل أحتاج إلى خلفية مسبقة في الكهرباء أو الميكانيك للتسجيل في الدبلوم؟",
      answerEn: "No prior experience is required. We start from ground zero (electrical basics, basic safety) up to deep hybrid batteries restoration and computer state-reading.",
      answerAr: "لا، لا تشترط الأكاديمية أي معرفة مسبقة بالسيارات. نبدأ معك من الصفر تماماً (أسس الكهرباء العامة والسلامة) صعوداً إلى فك وترميم البطاريات المعقدة وقراءة وتصحيح أعطال الكمبيوتر."
    },
    {
      id: "faq-2",
      category: "student",
      questionEn: "Why is the duration restricted to exactly 4 months?",
      questionAr: "لماذا تبلغ مدة الدراسة 4 أشهر فقط؟",
      answerEn: "We eliminated theoretical filler modules. Because 80% of our daily curriculum is hands-on work inside an active workspace, you absorb 2 years' worth of conventional class learning in 4 intensive months.",
      answerAr: "لقد قمنا بحذف الحشو النظري غير المفيد للعمل الفعلي. ولأن 80% من جدولك اليومي هو عمل وتطبيق فني مباشر بيديك على سيارات حقيقية، فستكتسب خبرة تساوي سنتي تعليم كلاسيكي خلال 4 أشهر مكثفة."
    },
    {
      id: "faq-3",
      category: "student",
      questionEn: "What certificates do I receive, and is it recognized internationally?",
      questionAr: "ما هي الشهادات التي أحصل عليها، وهل هي معترف بها خارج سوريا؟",
      answerEn: "You receive a Professional Automotive Technician Diploma from Hypro Academy, accredited by state educational syndicates. We also verify your unique certificate online with an ID code, making it instantly verifiable by international dealers.",
      answerAr: "ستحصل على شهادة دبلوم مهني في صيانة السيارات الحديثة من أكاديمية هايبـرو ومعتمدة نقابياً. كل خريج يستلم رمز تحقق رقمي فريد يتيح للوكلاء الإقليميين والشركاء التأكد من أصالة دراسته وخبراته كفني مؤهل."
    },
    {
      id: "faq-4",
      category: "workshop",
      questionEn: "How do you guarantee your students are capable of touching client cars?",
      questionAr: "كيف تضمن الأكاديمية أن الخريج لديه الكفاءة الكافية للتعامل مع سيارات زبائني؟",
      answerEn: "Students spend Month 4 dealing with real consumer cars under direct watch of expert engineers. We also subject every candidate to a rigorous high-voltage double-insulated circuit safety exam before graduation.",
      answerAr: "يقضي طلاب المرحلة الأخيرة شهراً كاملاً بالعمل على سيارات عملاء حقيقية تحت رصد وتدقيق مباشر من مهندسي الصيانة. كما يخضع كل طالب لاختبار سلامة الفولت العالي بصرامة بالغة لضمان حماية المنشأة وصاحب السيارة."
    },
    {
      id: "faq-5",
      category: "ngo",
      questionEn: "Are you fully operational and physically accessible within Syria?",
      questionAr: "هل الأكاديمية موجودة وتمارس تدريبها عملياً وبشكل مادي داخل سوريا؟",
      answerEn: "Yes. Hypro Academy runs fully equipped, physically modern laboratory and workshop facilities in Idleb, equipped with specialized power generation grids to ensure persistent teaching despite standard power outages.",
      answerAr: "نعم. توجد للأكاديمية فروع حية مجهزة بأحدث أدوات الفحص والأجهزة الحقيقية في إدلب، كما نعتمد على مصادر طاقة ومولدات خاصة لضمان عدم تأثر ساعات التدريب العملي والتطبيقي بانقطاعات الطاقة العامة."
    }
  ],
  aboutUs: {
    storyEn: "Hypro Academy was born in Idleb to fill an urgent local crisis in modern automotive maintenance. With the rapid arrival of Hybrid and Pure Electric vehicles (EVs) into Northern Syrian markets, traditional workshops struggled with high-voltage electronics. Our academy acts as a critical bridge—equipping local youth with high-tech, high-income practical skills while providing workshop operators, agencies, and public fleets with fully qualified, syndicate-approved technicians.",
    storyAr: "تأسست أكاديمية هايبـرو في مدينة إدلب استجابةً لأزمة محلية حقيقية وملحة في صيانة المركبات الحديثة. فمع تدفق سيارات الهايبرد والكهرباء (EV) إلى أسواق الشمال السوري، وجدت الورش الفنية التقليدية صعوبة بالغة في التعامل مع معقدات الكهرباء والفولت العالي. تُعد أكاديميتنا جسراً إنقاذياً تقنياً يمنح الحرفيين والشباب المهارات الفنية المتقدمة ذات الدخل المرتفع، ويسد ثغرة ندرة المصلحين الخبراء لدى أصحاب صالات الصيانة والمؤسسات والمنظمات الإنسانية.",
    missionEn: "To provide world-standard, 100% practical, safe vocational training routines that empower young people, boost domestic repair infrastructure, and guarantee prompt employment through deep-rooted institutional networks.",
    missionAr: "تمكين الكوادر الفنية الوطنية وتأهيل الشباب مهنياً بنسبة 100% عملي آمن ومطابق للمواصفات الدولية، لتسريع إعادة الإعمار وحل أزمات ندرة الخبرة وتأمين مسارات تشغيل موثوقة في سوق الصيانة.",
    visionEn: "To become the premier hub for modern sustainable technology and hybrid powertrain diagnostics training across Syria and the regional market.",
    visionAr: "أن نكون المركز المرجعي الأول والوجهة الأكثر موثوقية في سوريا لتدريب وفحص وتأهيل مهندسي وفنيي صيانة السيارات الهجينة والكهربائية."
  },
  team: [
    {
      nameEn: "Eng. Ammar Al-Ahmad",
      nameAr: "المهندس عمار الأحمد",
      roleEn: "Founding Director & Lead EV Mentor",
      roleAr: "المدير المؤسس والموجه الرئيسي لسيارات الكهرباء",
      bioEn: "Specialist in high-voltage micro-controller mapping and hybrid power cell rebuilds. Oversees all core testing protocols.",
      bioAr: "أخصائي هندسة الالكترون وبرمجة العقول الإلكترونية وإعادة موازنة خلايا الفولت العالي. يشرف على اختبارات فحص الكفاءة النهائية.",
      experienceEn: "24 Years of Active Bench Repair",
      experienceAr: "٢٤ عاماً من الخبرة العملية والورشات"
    },
    {
      nameEn: "Eng. Basel Al-Sagheer",
      nameAr: "المهندس باسل الصغير",
      roleEn: "Senior Inverter & Calibration Instructor",
      roleAr: "كبير مدربي صيانة مبدلات الطاقة والمحركات",
      bioEn: "Expert in European, Toyota, and Korean hybrid dual powertrains diagnostics with direct focus on workplace safety.",
      bioAr: "خبير تشخيص وحل أعطال العواكس (الأصناف الكورية واليابانية والأوروبية) مع تركيز صارم على بروتوكولات الأمان الفني وعزل الفولت الفعال.",
      experienceEn: "18 Years of Technical Instruction",
      experienceAr: "١٨ عاماً من التدريب وصناعة الكوادر"
    },
    {
      nameEn: "Eng. Omar Al-Sloom",
      nameAr: "المهندس عمر السلوم",
      roleEn: "B2B & Placement Liaison Officer",
      roleAr: "مسؤول التشبيك والتنسيق مع المنظمات والورش",
      bioEn: "Manages employment pathways with NGO sponsors, local repair trade unions, and public agencies.",
      bioAr: "يتولى التنسيق لبناء مسارات رعاية تدريب الشباب، وبناء بروتوكولات التشغيل وخلق فرص عمل واثقة وتوطيد عقود التدريب المهني.",
      experienceEn: "12 Years in Vocational Program Design",
      experienceAr: "١٢ عاماً في خدمة وتطوير المشاريع المهنية بالمنطقة"
    },
    {
      nameEn: "Ustadh Munir Al-Khatib",
      nameAr: "الأستاذ منير الخطيب",
      roleEn: "Lab Director & Safety Controller",
      roleAr: "مدير المختبر والمشرف الميداني للسلامة",
      bioEn: "Maintains all insulated tools and high-voltage diagnostic systems. Standardizes workshop safety gear compliance.",
      bioAr: "يشرف على تكامل وحداثة أجهزة الفحص، والعدّة المعزولة وحماية الطلاب من صدمات الفولت المرتفع في الورشة والمختبر الميداني للمركز.",
      experienceEn: "15 Years of Lab Operations Support",
      experienceAr: "١٥ عاماً من إدارة مختبرات الصيانة والسلامة"
    }
  ]
};
