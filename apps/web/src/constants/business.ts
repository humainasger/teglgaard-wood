export const BUSINESS_INFO = {
  name: 'Teglgaard Wood',
  legalName: 'Teglgaard Wood ApS',
  phone: '+45 40 73 70 78',
  phoneDisplay: '+45 40 73 70 78',
  phoneRaw: '+4540737078',
  email: 'mt@teglgaardwood.dk',
  address: {
    street: 'Rugaardsvej 784',
    city: 'Morud',
    postalCode: '5462',
    country: 'Denmark'
  },
  founded: 1976,
  yearsFounded: new Date().getFullYear() - 1976,
  ceo: 'Michael Teglgaard',
  volume: {
    annual: '72.000',
    description: 'trees per year'
  },
  markets: 15,
  primaryMarkets: ['France', 'Germany', 'United Kingdom'],
  languages: ['en', 'da', 'fr', 'de'] as const,
  defaultLanguage: 'en'
} as const

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/teglgaard-wood',
} as const

export const SEO_DEFAULTS = {
  title: 'Teglgaard Wood - Premium Danish Christmas Trees | Wholesale Trading Since 1976',
  description: 'Teglgaard Wood is your trusted B2B wholesale partner for premium Danish Christmas trees. 48+ years of trading expertise connecting Europe\'s finest retailers with Denmark\'s best growers.',
  keywords: 'wholesale Christmas trees, Danish Christmas trees, B2B Christmas tree supplier, Nordmann fir wholesale, Christmas tree trading, bulk Christmas trees Europe',
  image: '/images/og-image.jpg'
} as const

export const QUALITY_GRADES = {
  premium: {
    name: 'Premium',
    description: 'Top quality trees with perfect shape and dense foliage'
  },
  aGrade: {
    name: 'A-Grade',
    description: 'Excellent quality trees with minimal imperfections'
  },
  standard: {
    name: 'Standard',
    description: 'Good quality trees suitable for general retail'
  }
} as const
