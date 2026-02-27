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
    title: 'Drinking Water in Haiti',
    description: 'This project aims to provide access to clean drinking water for 2,000 people in a rural region of Haiti. Installation of wells, filtration systems, and training of local communities in maintenance.',
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
    title: 'Education for All',
    description: 'Inclusive education program for disadvantaged children. Providing access to school, school supplies, and teacher training.',
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
    title: 'Mobile Clinic',
    description: 'Mobile health service for rural areas. Medical consultations, vaccinations, and health awareness.',
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
    description: 'Massive tree planting to fight climate change and create green jobs. Training in sustainable agriculture.',
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
    title: 'Vocational Training',
    description: 'Workshops on technical skills and entrepreneurship for unemployed young adults.',
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
    title: 'Disaster Emergency Aid',
    description: 'Immediate response to natural disasters. Distribution of food aid, emergency shelters, and medical care.',
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
    project: 'Clean Water in Haiti',
    amount: 50,
    time: '2 min ago',
    color: 'secondary'
  },
  {
    name: 'Jean P.',
    initials: 'J',
    project: 'Education for All',
    amount: 100,
    time: '8 min ago',
    color: 'accent'
  },
  {
    name: 'Sophie L.',
    initials: 'S',
    project: 'Monthly',
    amount: 25,
    time: '15 min ago',
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
    labelEn: 'Beneficiaries helped',
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    value: '432',
    label: 'Projets réalisés',
    labelEn: 'Projects completed',
    emoji: '🎯'
  },
  {
    value: '34',
    label: 'Pays d\'intervention',
    labelEn: 'Countries of operation',
    emoji: '🌍'
  }
];

// TRUST BADGES
const trustBadges = [
  {
    emoji: '🏆',
    icon: 'images/badge-certified.png',
    title: 'Certified NGO',
    description: 'Guaranteed financial transparency',
    color: '#F59E0B'
  },
  {
    emoji: '📜',
    icon: 'images/badge-fiscal.png',
    title: 'Tax Receipt',
    description: '66% tax deduction',
    color: '#10B981'
  },
  {
    emoji: '✨',
    icon: 'images/badge-impact.png',
    title: 'Verified Impact',
    description: 'Detailed quarterly reports',
    color: '#0EA5E9'
  }
];
