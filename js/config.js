// STATE MANAGEMENT
const state = {
  selectedAmount: 25,
  selectedCurrency: 'EUR',
  currencySymbol: '€',
  recurringType: 'one-time',
  projects: []
};

// PROJECTS DATA
const projects = [
  {
    id: 1,
    title: 'Eau Potable en Haiti',
    description: 'Ce projet vise à fournir un accès à l\'eau potable à 2,000 personnes dans une région rurale de Haïti. Installation de puits, systèmes de filtration et formation des communautés locales à la maintenance.',
    image: 'images/project-1.jpg',
    emoji: '💧',
    category: 'water',
    badge: 'urgent',
    raised: 32500,
    goal: 50000,
    donors: 543,
    days: 12,
    beneficiaries: 2000,
    villages: 5,
    wells: 10
  },
  {
    id: 2,
    title: 'Éducation pour Tous',
    description: 'Programme d\'éducation inclusif pour enfants défavorisés. Fournir accès à l\'école, fournitures scolaires et formation des enseignants.',
    image: 'images/project-2.jpg',
    emoji: '📚',
    category: 'education',
    badge: 'active',
    raised: 45000,
    goal: 60000,
    donors: 782,
    days: 25,
    beneficiaries: 500
  },
  {
    id: 3,
    title: 'Clinique Mobile',
    description: 'Service de santé mobile pour zones rurales. Consultations médicales, vaccinations et sensibilisation à la santé.',
    image: 'images/project-3.jpg',
    emoji: '🏥',
    category: 'health',
    badge: 'urgent',
    raised: 28000,
    goal: 80000,
    donors: 421,
    days: 8,
    beneficiaries: 3000
  },
  {
    id: 4,
    title: 'Reforestation',
    description: 'Plantation massive d\'arbres pour combattre le changement climatique et créer emplois verts. Formation à l\'agriculture durable.',
    image: 'images/project-4.jpg',
    emoji: '🌳',
    category: 'environment',
    badge: 'active',
    raised: 15000,
    goal: 30000,
    donors: 312,
    days: 45,
    beneficiaries: 10000
  },
  {
    id: 5,
    title: 'Formation Professionnelle',
    description: 'Ateliers de formation aux compétences techniques et entrepreneuriat pour jeunes adultes sans emploi.',
    image: 'images/project-5.jpg',
    emoji: '👨‍🏫',
    category: 'education',
    badge: 'active',
    raised: 22000,
    goal: 35000,
    donors: 267,
    days: 30,
    beneficiaries: 150
  },
  {
    id: 6,
    title: 'Aide d\'Urgence Catastrophe',
    description: 'Réponse immédiate aux catastrophes naturelles. Distribution d\'aide alimentaire, abris d\'urgence et soins médicaux.',
    image: 'images/project-6.jpg',
    emoji: '🚨',
    category: 'urgent',
    badge: 'urgent',
    raised: 67000,
    goal: 100000,
    donors: 1203,
    days: 3,
    beneficiaries: 5000
  }
];

// RECENT DONATIONS DATA
const recentDonations = [
  {
    name: 'Marie D.',
    initials: 'M',
    project: 'Eau Potable en Haiti',
    amount: 50,
    time: 'Il y a 2 min',
    color: 'secondary'
  },
  {
    name: 'Jean P.',
    initials: 'J',
    project: 'Éducation pour Tous',
    amount: 100,
    time: 'Il y a 8 min',
    color: 'accent'
  },
  {
    name: 'Sophie L.',
    initials: 'S',
    project: 'Mensuel',
    amount: 25,
    time: 'Il y a 15 min',
    color: 'success'
  }
];

// BLOG POSTS DATA
const blogPosts = [
  {
    title: 'Premier puits inauguré en Haiti',
    image: 'images/blog-1.jpg',
    video: null,
    emoji: '📸',
    date: 'Il y a 2 jours',
    readTime: '5 min de lecture',
    excerpt: 'Port-au-Prince célèbre l\'arrivée de l\'eau potable grâce à nos donateurs...',
    background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)'
  },
  {
    title: '200 enfants scolarisés au Cambodge',
    image: 'images/blog-2.jpg',
    video: 'videos/education.mp4',
    emoji: '🎓',
    date: 'Il y a 5 jours',
    readTime: '8 min de lecture',
    excerpt: 'Notre programme d\'éducation permet à des enfants défavorisés d\'accéder à l\'école...',
    background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)'
  },
  {
    title: 'Témoignage: L\'histoire de Fatima',
    image: 'images/blog-3.jpg',
    video: 'videos/testimonial.mp4',
    emoji: '❤️',
    date: 'Il y a 1 semaine',
    readTime: '6 min de lecture',
    excerpt: 'Découvrez comment notre projet a transformé la vie de cette mère de famille...',
    background: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)'
  },
  {
    title: 'Graduation: L\'espoir pour une génération',
    image: 'images/blog-4.jpg',
    video: null,
    emoji: '🎓',
    date: 'Aujourd\'hui',
    readTime: '7 min de lecture',
    excerpt: 'Des étudiants haïtiens reçoivent leurs diplômes grâce à nos programmes d\'éducation. Une journée historique pour leurs familles et leurs communautés...',
    background: 'linear-gradient(135deg, #DCFCE7 0%, #BBFBDF 100%)'
  },
  {
    title: 'Célébration: La joie des enfants de Haïti',
    image: 'images/blog-5.jpg',
    video: null,
    emoji: '🎉',
    date: 'Aujourd\'hui',
    readTime: '5 min de lecture',
    excerpt: 'Les enfants des quartiers défavorisés de Port-au-Prince célèbrent ensemble. Une journée remplie de sourires, de rires et d\'espoir pour un futur meilleur...',
    background: 'linear-gradient(135deg, #FEF3C7 0%, #FCD34D 100%)'
  }
];

// TESTIMONIALS DATA
const testimonials = [
  {
    quote: 'Grâce à ce projet, mes enfants n\'ont plus à marcher 5km pour aller chercher de l\'eau. Maintenant ils peuvent aller à l\'école.',
    author: 'Fatima, mère de 3 enfants'
  }
];

// BUDGET BREAKDOWN
const budgetBreakdown = [
  {
    category: 'Infrastructure (puits, pompes)',
    percentage: 60,
    amount: 30000
  },
  {
    category: 'Formation des communautés',
    percentage: 25,
    amount: 12500
  },
  {
    category: 'Maintenance & suivi (2 ans)',
    percentage: 15,
    amount: 7500
  }
];

// IMPACT STATS
const impactStats = [
  {
    value: '125,847',
    label: 'Bénéficiaires aidés',
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    value: '432',
    label: 'Projets réalisés',
    emoji: '🎯'
  },
  {
    value: '34',
    label: 'Pays d\'intervention',
    emoji: '🌍'
  }
];

// TRUST BADGES
const trustBadges = [
  {
    emoji: '🏆',
    icon: 'images/badge-certified.png',
    title: 'Certifiée ONG',
    description: 'Transparence financière garantie',
    color: '#F59E0B'
  },
  {
    emoji: '📜',
    icon: 'images/badge-fiscal.png',
    title: 'Reçu Fiscal',
    description: '66% de réduction d\'impôts',
    color: '#10B981'
  },
  {
    emoji: '✨',
    icon: 'images/badge-impact.png',
    title: 'Impact Vérifié',
    description: 'Rapports trimestriels détaillés',
    color: '#0EA5E9'
  }
];
