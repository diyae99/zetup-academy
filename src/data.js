import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock,
  GraduationCap,
  Headphones,
  Laptop,
  MessageCircle,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

export const whatsappDisplay = '+212 XXXXXXXXX';
export const whatsappHref = 'https://wa.me/212XXXXXXXXX';
export const email = 'contact@zetupacademy.com';
export const instagram = '@zetupacademy';

export const navHrefs = ['#accueil', '#programmes', '#packs', '#pourquoi-nous', '#faq', '#contact'];

export const trustIcons = [Headphones, GraduationCap, Clock];
export const heroFloatingIcons = [CalendarDays, Users, BookOpen, Laptop];
export const programMeta = [
  { icon: BookOpen, gradient: 'from-[#0B4DFF] to-[#35A7FF]' },
  { icon: MessageCircle, gradient: 'from-[#061A40] to-[#0B4DFF]' },
];
export const methodIcons = [ChevronRight, BookOpen, Target, Sparkles];
export const contactIcons = [MessageCircle, Award, Sparkles, Laptop];

export const translations = {
  fr: {
    dir: 'ltr',
    topBar: {
      offer: 'Offre de lancement',
      duration: 'Formation d’été — 2 mois',
      limited: 'Places limitées',
      early: 'Early Bird: 399 DH',
    },
    nav: {
      links: ['Accueil', 'Programmes', 'Packs', 'Pourquoi nous', 'FAQ', 'Contact'],
      cta: 'Pré-inscription',
      aria: 'Zet Up Academy Accueil',
      tagline: 'Online Language Academy',
    },
    hero: {
      badge: 'Formation d’été 2026',
      titleBeforeFirst: 'Apprenez le',
      firstHighlight: 'français',
      titleMiddle: 'ou l’',
      secondHighlight: 'anglais',
      titleAfter: 'en ligne, depuis chez vous.',
      titlePlain: 'Apprenez le français ou l’anglais en ligne, depuis chez vous.',
      subtitle:
        'Un programme d’été de 2 mois pour débutants, à partir de 15 ans, avec des cours live, des exercices pratiques et un suivi personnalisé.',
      slogan: 'لغتك الجديدة… بدايتها من هنا.',
      bullets: [
        'Cours live online',
        'Groupes réduits par niveau',
        'Suivi individuel',
        'Certificat de participation',
      ],
      buttons: {
        reserve: 'Je réserve ma place',
        whatsapp: 'Contact WhatsApp',
      },
      visualKicker: 'Online summer cohort',
      visualTitle: 'Français ou English',
      floatingCards: [
        { label: '2 mois', sub: 'Formation intensive' },
        { label: '15 ans et plus', sub: 'Débutants acceptés' },
        { label: 'Français ou English', sub: 'Une langue au choix' },
        { label: 'Online live', sub: 'Depuis chez vous' },
      ],
    },
    trustCards: [
      {
        title: 'Cours interactifs',
        text: 'Des séances live avec pratique, échange et correction.',
      },
      {
        title: 'Professeurs qualifiés',
        text: 'Un accompagnement clair pour progresser avec méthode.',
      },
      {
        title: 'Horaires adaptés',
        text: 'Des groupes pensés pour étudiants, jeunes actifs et parents.',
      },
    ],
    why: {
      eyebrow: 'Pourquoi nous',
      title: 'Pourquoi choisir Zet Up Academy ?',
      text: 'Parce que beaucoup de personnes veulent apprendre une langue, mais n’ont pas le temps de se déplacer ou ne trouvent pas un programme adapté à leur niveau.',
      visual: {
        live: 'Live Class',
        home: 'Depuis chez vous',
        beginner: 'Beginner friendly',
        progress: 'Progression',
        slogan: 'تعلم بطريقة واضحة ومناسبة لمستواك',
      },
      bullets: [
        'Apprendre depuis chez vous',
        'Programme simple pour débutants',
        'Exercices après chaque séance',
        'Suivi de progression',
        'Groupes limités pour mieux accompagner chaque apprenant',
      ],
    },
    programs: {
      eyebrow: "Programmes d'été",
      title: 'Choisissez votre programme d’été',
      text: 'Deux parcours débutants, une seule langue à choisir, et un accompagnement pensé pour progresser pendant l’été.',
      durationBadge: '2 mois',
      cards: [
        {
          tag: 'French Track',
          title: 'Français Débutant',
          description:
            'Pour renforcer vos bases en français et commencer à communiquer avec plus de confiance.',
          details: [
            'Niveau: Débutant / Faux débutant',
            'Durée: 2 mois',
            'Format: Online live',
            'Âge: 15+',
            'Suivi: Exercices + accompagnement',
          ],
          button: 'Choisir Français',
        },
        {
          tag: 'English Track',
          title: 'English Beginner',
          description:
            'Pour apprendre les bases de l’anglais et commencer à parler avec plus de confiance.',
          details: [
            'Level: Beginner / False beginner',
            'Duration: 2 months',
            'Format: Online live',
            'Age: 15+',
            'Support: Exercises + follow-up',
          ],
          button: 'Choose English',
        },
      ],
    },
    pricing: {
      eyebrow: 'Packs',
      title: 'Nos packs d’été',
      sideTitle: 'Une seule décision pour bien utiliser votre été.',
      sideText:
        'Choisissez Français ou English, rejoignez un groupe limité, et avancez avec un suivi professionnel pendant 2 mois.',
      noteLabel: 'Note importante',
      note: 'Les places sont limitées afin de garantir un meilleur suivi.',
      badge: 'Offre de lancement: 399 DH pour les premiers inscrits',
      packName: 'Pack Summer Language',
      packSub: 'Formation d’été en ligne — 2 mois',
      price: '499 DH',
      period: '/ 2 mois',
      features: [
        'Une langue au choix: Français ou English',
        '2 mois de formation',
        'Cours live online',
        'Groupes réduits',
        'Exercices pratiques',
        'Suivi individuel',
        'Certificat de participation',
      ],
      cta: 'Réserver ma place',
    },
    method: {
      eyebrow: 'Process',
      title: 'Comment ça marche ?',
      stepLabel: 'Étape',
      steps: [
        { title: 'Pré-inscription', text: 'Remplissez le formulaire de pré-inscription' },
        { title: 'Choix de la langue', text: 'Choisissez la langue: Français ou English' },
        { title: 'Confirmation', text: 'Nous confirmons votre niveau et votre groupe' },
        { title: 'Début des cours', text: 'Vous commencez les cours online' },
      ],
    },
    form: {
      eyebrow: 'Pré-inscription',
      title: 'Réservez votre place maintenant',
      text: 'Remplissez vos informations et l’équipe Zet Up Academy vous contactera bientôt sur WhatsApp pour confirmer votre groupe.',
      questionTitle: 'Vous avez une question ?',
      questionText:
        'Parlez directement avec nous sur WhatsApp pour les horaires, le niveau ou le paiement.',
      whatsapp: 'Parler avec nous sur WhatsApp',
      formTitle: 'Pré-inscription',
      helper: 'Les champs principaux sont obligatoires pour préparer votre inscription.',
      fields: {
        fullName: 'Nom complet',
        age: 'Âge',
        email: 'Email',
        city: 'Ville',
        whatsapp: 'Numéro WhatsApp',
        language: 'Langue choisie',
        level: 'Niveau actuel',
        schedule: 'Horaire préféré',
        message: 'Message optionnel',
      },
      options: {
        choose: 'Choisir...',
        language: ['Français', 'English'],
        level: ['Débutant', 'J’ai quelques bases', 'Intermédiaire'],
        schedule: ['Matin', 'Après-midi', 'Soir'],
      },
      placeholder: 'Votre message...',
      submit: 'Envoyer ma pré-inscription',
      submitting: 'Envoi en cours...',
      success:
        'Merci pour votre pré-inscription. L’équipe Zet Up Academy vous contactera bientôt sur WhatsApp.',
      error:
        'Une erreur est survenue. Veuillez réessayer ou nous contacter directement sur WhatsApp.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Est-ce que la formation est 100% en ligne ?',
          answer: 'Oui, la formation se déroule en ligne avec des cours live.',
        },
        {
          question: 'Est-ce que je peux commencer même si je suis débutant ?',
          answer: 'Oui, le programme est conçu pour les débutants et faux débutants.',
        },
        {
          question: 'Quelle est la durée du programme ?',
          answer: 'La formation dure 2 mois.',
        },
        {
          question: 'Est-ce que je choisis une seule langue ?',
          answer: 'Oui, chaque participant choisit une seule langue: Français ou English.',
        },
        {
          question: 'Est-ce qu’il y a un certificat ?',
          answer: 'Oui, un certificat de participation est remis à la fin du programme.',
        },
        {
          question: 'Comment se fait le paiement ?',
          answer: 'Les détails du paiement seront envoyés après la pré-inscription.',
        },
        {
          question: 'Est-ce que les places sont limitées ?',
          answer: 'Oui, les groupes sont limités pour garantir un bon suivi.',
        },
      ],
    },
    finalCta: {
      badge: 'Formation d’été en ligne — 2 mois',
      title: 'Cet été, ne laissez plus la langue être un obstacle.',
      subtitle: 'Commencez avec un programme simple, pratique et adapté à votre niveau.',
      button: 'Je fais ma pré-inscription',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contactez Zet Up Academy',
      text: 'Notre équipe vous répond sur WhatsApp pour les horaires, les places disponibles et la confirmation d’inscription.',
      button: 'Contact WhatsApp',
      items: [
        { label: 'WhatsApp', value: whatsappDisplay },
        { label: 'Email', value: email },
        { label: 'Instagram', value: instagram },
        { label: 'Maroc / Online', value: 'Académie digitale' },
      ],
    },
    footer: {
      description: 'Académie digitale marocaine pour apprendre les langues en ligne.',
      quickLinksTitle: 'Liens rapides',
      programsTitle: 'Programmes',
      contactTitle: 'Contact',
      quickLinks: ['Accueil', 'Programmes', 'Packs', 'Pré-inscription'],
      programs: ['Français Débutant', 'English Beginner', 'Formation d’été'],
      location: 'Maroc / Online',
      copyright: '© 2026 Zet Up Academy. Tous droits réservés.',
    },
  },
  ar: {
    dir: 'rtl',
    topBar: {
      offer: 'عرض الإطلاق',
      duration: 'تكوين صيفي — شهران',
      limited: 'أماكن محدودة',
      early: 'عرض التسجيل المبكر: 399 درهم',
    },
    nav: {
      links: ['الرئيسية', 'البرامج', 'العروض', 'لماذا نحن', 'الأسئلة', 'تواصل معنا'],
      cta: 'التسجيل القبلي',
      aria: 'Zet Up Academy الرئيسية',
      tagline: 'Online Language Academy',
    },
    hero: {
      badge: 'تكوين صيفي 2026',
      titleBeforeFirst: 'تعلم',
      firstHighlight: 'الفرنسية',
      titleMiddle: 'أو',
      secondHighlight: 'الإنجليزية',
      titleAfter: 'أونلاين من دارك.',
      titlePlain: 'تعلم الفرنسية أو الإنجليزية أونلاين من دارك.',
      subtitle:
        'برنامج صيفي لمدة شهرين موجه للمبتدئين ابتداءً من 15 سنة، مع حصص مباشرة، تمارين تطبيقية، وتتبع فردي.',
      slogan: 'لغتك الجديدة… بدايتها من هنا.',
      bullets: ['حصص مباشرة أونلاين', 'مجموعات صغيرة حسب المستوى', 'تتبع فردي', 'شهادة مشاركة'],
      buttons: {
        reserve: 'أحجز مكاني',
        whatsapp: 'تواصل عبر واتساب',
      },
      visualKicker: 'فوج صيفي أونلاين',
      visualTitle: 'الفرنسية أو الإنجليزية',
      floatingCards: [
        { label: 'شهران', sub: 'تكوين صيفي' },
        { label: '15 سنة فما فوق', sub: 'للمبتدئين' },
        { label: 'الفرنسية أو الإنجليزية', sub: 'لغة واحدة حسب الاختيار' },
        { label: 'حصص مباشرة', sub: 'من دارك' },
      ],
    },
    trustCards: [
      {
        title: 'حصص تفاعلية',
        text: 'حصص مباشرة فيها تطبيق، تواصل وتصحيح.',
      },
      {
        title: 'أساتذة مؤهلون',
        text: 'مواكبة واضحة تساعدك على التطور بطريقة منظمة.',
      },
      {
        title: 'أوقات مناسبة',
        text: 'مجموعات موجهة للتلاميذ، الطلبة، الشباب والآباء.',
      },
    ],
    why: {
      eyebrow: 'لماذا نحن',
      title: 'لماذا تختار Zet Up Academy؟',
      text: 'لأن العديد من الأشخاص يرغبون في تعلم لغة جديدة، لكن لا يملكون الوقت للتنقل أو لا يجدون برنامجاً مناسباً لمستواهم.',
      visual: {
        live: 'حصص مباشرة',
        home: 'من دارك',
        beginner: 'مناسب للمبتدئين',
        progress: 'تتبع التطور',
        slogan: 'تعلم بطريقة واضحة ومناسبة لمستواك',
      },
      bullets: [
        'تعلم من دارك',
        'برنامج بسيط للمبتدئين',
        'تمارين بعد كل حصة',
        'تتبع للتطور',
        'مجموعات محدودة لضمان مواكبة أفضل',
      ],
    },
    programs: {
      eyebrow: 'برامج الصيف',
      title: 'اختر برنامجك الصيفي',
      text: 'مساران للمبتدئين، لغة واحدة حسب الاختيار، ومواكبة تساعدك على التطور خلال الصيف.',
      durationBadge: 'شهران',
      cards: [
        {
          tag: 'مسار الفرنسية',
          title: 'الفرنسية للمبتدئين',
          description: 'برنامج لتقوية الأساسيات في الفرنسية والبدء في التواصل بثقة أكبر.',
          details: [
            'المستوى: مبتدئ / شبه مبتدئ',
            'المدة: شهران',
            'الصيغة: حصص مباشرة أونلاين',
            'العمر: 15 سنة فما فوق',
            'التتبع: تمارين + مواكبة',
          ],
          button: 'اختيار الفرنسية',
        },
        {
          tag: 'مسار الإنجليزية',
          title: 'الإنجليزية للمبتدئين',
          description: 'برنامج عملي لتعلم أساسيات الإنجليزية والبدء في التحدث بثقة أكبر.',
          details: [
            'المستوى: مبتدئ / شبه مبتدئ',
            'المدة: شهران',
            'الصيغة: حصص مباشرة أونلاين',
            'العمر: 15 سنة فما فوق',
            'التتبع: تمارين + مواكبة',
          ],
          button: 'اختيار الإنجليزية',
        },
      ],
    },
    pricing: {
      eyebrow: 'العروض',
      title: 'عروض الصيف',
      sideTitle: 'قرار واحد لاستثمار الصيف بطريقة مفيدة.',
      sideText:
        'اختر الفرنسية أو الإنجليزية، وانضم إلى مجموعة محدودة، وتطور مع تتبع مهني لمدة شهرين.',
      noteLabel: 'ملاحظة مهمة',
      note: 'الأماكن محدودة لضمان تتبع أفضل.',
      badge: 'عرض الإطلاق: 399 درهم للأوائل المسجلين',
      packName: 'Pack Summer Language',
      packSub: 'تكوين صيفي أونلاين — شهران',
      price: '499 درهم',
      period: '/ شهران',
      features: [
        'لغة واحدة حسب الاختيار: الفرنسية أو الإنجليزية',
        'شهران من التكوين',
        'حصص مباشرة أونلاين',
        'مجموعات صغيرة',
        'تمارين تطبيقية',
        'تتبع فردي',
        'شهادة مشاركة',
      ],
      cta: 'أحجز مكاني',
    },
    method: {
      eyebrow: 'الطريقة',
      title: 'كيف يعمل البرنامج؟',
      stepLabel: 'المرحلة',
      steps: [
        { title: 'التسجيل القبلي', text: 'املأ استمارة التسجيل القبلي' },
        { title: 'اختيار اللغة', text: 'اختر اللغة: الفرنسية أو الإنجليزية' },
        { title: 'تأكيد المجموعة', text: 'نؤكد مستواك والمجموعة المناسبة لك' },
        { title: 'بداية الحصص', text: 'تبدأ الحصص أونلاين' },
      ],
    },
    form: {
      eyebrow: 'التسجيل القبلي',
      title: 'أحجز مكانك الآن',
      text: 'املأ معلوماتك وسيتواصل معك فريق Zet Up Academy قريباً عبر واتساب لتأكيد مجموعتك.',
      questionTitle: 'عندك سؤال؟',
      questionText: 'تواصل معنا مباشرة عبر واتساب بخصوص الأوقات، المستوى أو طريقة الأداء.',
      whatsapp: 'تواصل معنا عبر واتساب',
      formTitle: 'التسجيل القبلي',
      helper: 'المعلومات الأساسية ضرورية لتحضير تسجيلك.',
      fields: {
        fullName: 'الاسم الكامل',
        age: 'العمر',
        email: 'البريد الإلكتروني',
        city: 'المدينة',
        whatsapp: 'رقم واتساب',
        language: 'اللغة المختارة',
        level: 'المستوى الحالي',
        schedule: 'الوقت المفضل',
        message: 'رسالة اختيارية',
      },
      options: {
        choose: 'اختر...',
        language: ['الفرنسية', 'الإنجليزية'],
        level: ['مبتدئ', 'عندي بعض الأساسيات', 'متوسط'],
        schedule: ['الصباح', 'بعد الزوال', 'المساء'],
      },
      placeholder: 'رسالتك...',
      submit: 'إرسال التسجيل القبلي',
      submitting: 'جاري الإرسال...',
      success:
        'شكراً على تسجيلك القبلي. سيتواصل معك فريق Zet Up Academy قريباً عبر واتساب.',
      error: 'وقع خطأ أثناء الإرسال. المرجو المحاولة من جديد أو التواصل معنا عبر واتساب.',
    },
    faq: {
      eyebrow: 'الأسئلة',
      title: 'الأسئلة الشائعة',
      items: [
        {
          question: 'هل التكوين 100% أونلاين؟',
          answer: 'نعم، التكوين يتم أونلاين عبر حصص مباشرة.',
        },
        {
          question: 'هل يمكنني البدء إذا كنت مبتدئاً؟',
          answer: 'نعم، البرنامج موجه للمبتدئين وشبه المبتدئين.',
        },
        {
          question: 'ما هي مدة البرنامج؟',
          answer: 'مدة التكوين شهران.',
        },
        {
          question: 'هل أختار لغة واحدة فقط؟',
          answer: 'نعم، كل مشارك يختار لغة واحدة: الفرنسية أو الإنجليزية.',
        },
        {
          question: 'هل توجد شهادة؟',
          answer: 'نعم، يتم تسليم شهادة مشاركة في نهاية البرنامج.',
        },
        {
          question: 'كيف يتم الأداء؟',
          answer: 'سيتم إرسال تفاصيل الأداء بعد التسجيل القبلي.',
        },
        {
          question: 'هل الأماكن محدودة؟',
          answer: 'نعم، المجموعات محدودة لضمان تتبع جيد.',
        },
      ],
    },
    finalCta: {
      badge: 'تكوين صيفي أونلاين — شهران',
      title: 'هذا الصيف، لا تجعل اللغة عائقاً أمامك.',
      subtitle: 'ابدأ ببرنامج بسيط، عملي ومناسب لمستواك.',
      button: 'أقوم بالتسجيل القبلي',
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'تواصل مع Zet Up Academy',
      text: 'فريقنا يجيبك عبر واتساب بخصوص الأوقات، الأماكن المتوفرة وتأكيد التسجيل.',
      button: 'تواصل عبر واتساب',
      items: [
        { label: 'WhatsApp', value: whatsappDisplay },
        { label: 'Email', value: email },
        { label: 'Instagram', value: instagram },
        { label: 'المغرب / أونلاين', value: 'أكاديمية رقمية' },
      ],
    },
    footer: {
      description: 'أكاديمية رقمية مغربية لتعلم اللغات أونلاين.',
      quickLinksTitle: 'روابط سريعة',
      programsTitle: 'البرامج',
      contactTitle: 'تواصل معنا',
      quickLinks: ['الرئيسية', 'البرامج', 'العروض', 'التسجيل القبلي'],
      programs: ['الفرنسية للمبتدئين', 'الإنجليزية للمبتدئين', 'تكوين صيفي'],
      location: 'المغرب / أونلاين',
      copyright: '© 2026 Zet Up Academy. جميع الحقوق محفوظة.',
    },
  },
};

export { CheckCircle2 };
