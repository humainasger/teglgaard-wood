export const BUSINESS_INFO = {
  name: 'Teglgaard Wood',
  legalName: 'Teglgaard Wood ApS',
  cvr: '38689622',
  phone: '+45 40 73 70 78',
  phoneDisplay: '+45 40 73 70 78',
  phoneRaw: '+4540737078',
  email: 'info@teglgaardwood.dk',
  address: {
    street: 'Rugårdsvej 784',
    city: 'Morud',
    postalCode: '5462',
    country: 'Denmark'
  },
  founded: 1976,
  yearsFounded: new Date().getFullYear() - 1976,
  
  // Leadership
  leadership: {
    michael: {
      name: 'Michael Teglgaard',
      role: 'Founder & Director',
      description: '50 years in the Christmas tree industry. Deep relationships with growers across Europe.',
    },
    rasmus: {
      name: 'Rasmus Teglgaard',
      role: 'Board Member',
      description: 'Strategic development and business partnerships.',
    },
    asger: {
      name: 'Asger Teglgaard',
      role: 'Board Member',
      description: 'Operations & Technology. Modernizing systems and processes.',
    }
  },
  
  // Key stats
  stats: {
    treesAnnually: '250.000',
    yearsExperience: 50,
    totalExported: '10+ million',
    seasonalWorkers: '10-30',
  },
  
  // Markets
  primaryMarkets: ['Germany', 'France', 'United Kingdom', 'Netherlands', 'Belgium', 'Denmark'],
  
  // Languages
  languages: ['en', 'da', 'de', 'fr'] as const,
  defaultLanguage: 'en'
} as const

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/teglgaard-wood',
} as const

export const SEO_DEFAULTS = {
  title: 'Teglgaard Wood - Wholesale Christmas Trees & Decorative Greenery',
  description: 'Professional Christmas tree and greenery sourcing partner. 250,000 trees annually. Production team in Denmark. European grower network. 50 years of expertise.',
  keywords: 'wholesale Christmas trees, christmas tree supplier, nordmann fir wholesale, christmas tree exporter denmark, decorative greenery wholesale, noble fir greenery',
  image: '/images/og-image.jpg'
} as const

export const TREE_SPECIES = {
  nordmann: {
    name: 'Nordmann Fir',
    scientificName: 'Abies nordmanniana',
    description: 'The most popular Christmas tree in Europe. Soft needles, excellent needle retention, symmetrical shape.',
    sizes: ['100-150cm', '150-175cm', '175-200cm', '200-250cm', '250cm+', 'Large specimens to 7m'],
  },
  noble: {
    name: 'Noble Fir',
    scientificName: 'Abies procera',
    description: 'Distinctive blue-green color with upward-curving needles. Excellent fragrance and shape.',
    sizes: ['125-150cm', '150-175cm', '175-200cm', '200-250cm'],
  },
  fraser: {
    name: 'Fraser Fir',
    scientificName: 'Abies fraseri',
    description: 'Compact pyramidal shape with dark green needles. Great fragrance and needle retention.',
    sizes: ['125-150cm', '150-175cm', '175-200cm', '200-225cm'],
  },
  spruce: {
    name: 'Norway Spruce',
    scientificName: 'Picea abies',
    description: 'Traditional Christmas tree with classic conical shape. Classic pine fragrance.',
    sizes: ['100-150cm', '150-200cm', '200-250cm', '250cm+'],
  }
} as const

export const GREENERY_PRODUCTS = {
  nobleFir: {
    name: 'Noble Fir Branches',
    description: 'Blue-green branches, excellent for premium wreaths and decorations.',
  },
  nordmannFir: {
    name: 'Nordmann Fir Branches',
    description: 'Dark green, soft needles. Versatile for all types of arrangements.',
  },
  cypress: {
    name: 'Cypress Varieties',
    description: 'Available in green, yellow, and blue. Adds texture and color variety.',
    varieties: ['Green Cypress', 'Yellow Cypress', 'Blue Cypress'],
  },
  spruce: {
    name: 'Spruce Branches',
    description: 'Traditional look with classic fragrance. Norway and Serbian spruce available.',
    varieties: ['Norway Spruce', 'Serbian Spruce'],
  }
} as const

export const QUALITY_GRADES = {
  premium: {
    name: 'Premium',
    description: 'Top quality trees with perfect symmetry, dense foliage, and flawless appearance. For discerning retailers.',
  },
  aGrade: {
    name: 'A-Grade', 
    description: 'Excellent quality with minimal imperfections. The standard for quality-focused retailers.',
  },
  standard: {
    name: 'Standard',
    description: 'Good quality trees suitable for value-conscious markets. Reliable and consistent.',
  }
} as const

export const SERVICES = {
  sourcing: {
    title: 'European Sourcing Network',
    description: 'Access to premium growers across Denmark and Europe. We source the right trees for your specific needs.',
    icon: 'globe',
  },
  production: {
    title: 'Full Production Team',
    description: 'Experienced team on the ground in Denmark. 10-30 seasonal workers for grading, netting, and palletizing.',
    icon: 'users',
  },
  quality: {
    title: 'Professional Quality Control',
    description: 'Every tree is professionally graded to consistent standards. Premium, A-Grade, and Standard classifications.',
    icon: 'badge-check',
  },
  logistics: {
    title: 'Reliable Logistics',
    description: 'Best-in-class logistics partners. Full truck loads, mixed loads, day-to-day delivery capability.',
    icon: 'truck',
  },
  privateLabel: {
    title: 'Private Label Options',
    description: 'Custom labeling and branding available. Your brand, our quality trees.',
    icon: 'tag',
  }
} as const
