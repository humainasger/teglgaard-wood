export type Locale = 'en' | 'da' | 'de' | 'fr';

export interface Translation {
  common: {
    phone: string;
    email: string;
    requestQuote: string;
    getStarted: string;
    learnMore: string;
    viewAll: string;
    readMore: string;
    contactUs: string;
  };
  nav: {
    products: string;
    services: string;
    solutions: string;
    about: string;
    contact: string;
    christmasTrees: string;
    greenery: string;
  };
  header: {
    topBar: {
      yearsExcellence: string;
      deliveringEurope: string;
    };
    megaMenu: {
      products: {
        christmasTrees: {
          title: string;
          description: string;
        };
        greenery: {
          title: string;
          description: string;
        };
      };
    };
    cta: string;
  };
  footer: {
    brandDescription: string;
    products: string;
    solutions: string;
    company: string;
    legal: {
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    products: {
      title: string;
      subtitle: string;
      christmasTrees: {
        title: string;
        description: string;
      };
      greenery: {
        title: string;
        description: string;
      };
    };
    whyUs: {
      title: string;
      subtitle: string;
      quality: {
        title: string;
        description: string;
      };
      heritage: {
        title: string;
        description: string;
      };
      logistics: {
        title: string;
        description: string;
      };
      expertise: {
        title: string;
        description: string;
      };
    };
    deliveryCoverage: {
      title: string;
      subtitle: string;
    };
    stats: {
      treesAnnually: string;
      yearsExperience: string;
      europeanMarkets: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
    };
    whoWeAre: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    approach: {
      title: string;
      quality: {
        title: string;
        description: string;
      };
      relationships: {
        title: string;
        description: string;
      };
      sustainability: {
        title: string;
        description: string;
      };
      innovation: {
        title: string;
        description: string;
      };
    };
    leadership: {
      title: string;
      role: string;
    };
    facts: {
      title: string;
    };
    milestone: {
      title: string;
      description: string;
    };
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
    team: {
      title: string;
    };
  };
  services: {
    hero: {
      title: string;
      subtitle: string;
    };
    process: {
      title: string;
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
    };
    capabilities: {
      title: string;
      subtitle: string;
      sourcing: {
        title: string;
        description: string;
      };
      logistics: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
    deliveryCoverage: {
      title: string;
      subtitle: string;
    };
    stats: {
      deliveries: string;
      onTime: string;
      satisfaction: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  products: {
    hero: {
      title: string;
      subtitle: string;
    };
    christmasTrees: {
      title: string;
      description: string;
    };
    greenery: {
      title: string;
      description: string;
    };
    species: {
      nordmann: {
        name: string;
        description: string;
      };
      noble: {
        name: string;
        description: string;
      };
      fraser: {
        name: string;
        description: string;
      };
      bluespruce: {
        name: string;
        description: string;
      };
    };
    greeneryTypes: {
      nobleFir: {
        name: string;
        description: string;
      };
      fraserFir: {
        name: string;
        description: string;
      };
      wreaths: {
        name: string;
        description: string;
      };
      cemetery: {
        name: string;
        description: string;
      };
    };
    quality: {
      premium: {
        name: string;
        description: string;
      };
      aGrade: {
        name: string;
        description: string;
      };
      standard: {
        name: string;
        description: string;
      };
    };
    christmasTreesPage: {
      breadcrumb: string;
      hero: {
        title: string;
        subtitle: string;
      };
      speciesSection: {
        title: string;
      };
      sizeRange: {
        title: string;
        description: string;
      };
      qualityGrades: {
        title: string;
      };
      packaging: {
        title: string;
        description: string;
      };
      cta: {
        title: string;
        subtitle: string;
        button: string;
      };
    };
    greeneryPage: {
      breadcrumb: string;
      hero: {
        title: string;
        subtitle: string;
      };
      productsSection: {
        title: string;
      };
      applications: {
        title: string;
        wreaths: {
          title: string;
          description: string;
        };
        cemetery: {
          title: string;
          description: string;
        };
        commercial: {
          title: string;
          description: string;
        };
      };
      packaging: {
        title: string;
        description: string;
      };
      cta: {
        title: string;
        subtitle: string;
        button: string;
      };
    };
  };
  solutions: {
    hero: {
      title: string;
      subtitle: string;
    };
    experience: {
      banner: string;
    };
    customerTypes: {
      gardenCenters: {
        name: string;
        challenges: string[];
        howWeHelp: string[];
        cta: string;
      };
      supermarkets: {
        name: string;
        challenges: string[];
        howWeHelp: string[];
        cta: string;
      };
      distributors: {
        name: string;
        challenges: string[];
        howWeHelp: string[];
        cta: string;
      };
      nurseries: {
        name: string;
        challenges: string[];
        howWeHelp: string[];
        cta: string;
      };
      ecommerce: {
        name: string;
        challenges: string[];
        howWeHelp: string[];
        cta: string;
      };
      commercial: {
        name: string;
        challenges: string[];
        howWeHelp: string[];
        cta: string;
      };
    };
    whyItMatters: {
      title: string;
      description: string;
    };
  };
  notFound: {
    title: string;
    message: string;
    homeLink: string;
    contactLink: string;
  };
  seo: {
    home: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      description: string;
    };
    products: {
      title: string;
      description: string;
    };
    christmasTrees: {
      title: string;
      description: string;
    };
    greenery: {
      title: string;
      description: string;
    };
    solutions: {
      title: string;
      description: string;
    };
  };
}
