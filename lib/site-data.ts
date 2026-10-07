export const siteConfig = {
  name: 'Rah Gostar Valash',
  fullName: 'Rah Gostar Valash Co.',
  legalName: 'Rah Gostar Valash Co.',
  shortDescription:
    'Contractor for road construction, buildings, urban infrastructure, water and wastewater, and specialized civil engineering projects',
  established: 2000,
  experienceYears: 24,
  url: 'https://rahgostarvalash.ir',
  contact: {
    address: 'Contact information will be added after final verification',
    phone: '—',
    email: '—',
    workingHours: 'Saturday to Wednesday, 8:00 AM–5:00 PM',
  },
};

export const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Expertise', href: '/expertise' },
  { title: 'Projects', href: '/projects' },
  { title: 'Technical Capabilities', href: '/capabilities' },
  { title: 'Machinery & Equipment', href: '/equipment' },
  { title: 'Qualifications & Certificates', href: '/qualifications' },
  { title: 'Contact Us', href: '/contact' },
];

export type Capability = {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  description: string;
  image: string;
  href: string;
};

export const capabilities: Capability[] = [
  {
    id: 'road-infra',
    number: '01',
    title: 'Road & Transportation Infrastructure',
    titleEn: 'Road & Transportation Infrastructure',
    description:
      'Construction of intercity roads, transportation corridors and access roads, including earthworks, subgrade preparation, pavement and asphalt works.',
    image: '/images/projects/roads/gilan-sabz-siahkal-01.webp',
    href: '/expertise#road-infra',
  },
  {
    id: 'bridges',
    number: '02',
    title: 'Bridges & Interchanges',
    titleEn: 'Bridges & Interchanges',
    description:
      'Construction of urban and intercity bridges and grade-separated interchanges, including seismic rehabilitation and strengthening of existing bridges.',
    image:
      'https://images.pexels.com/photos/7107980/pexels-photo-7107980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#bridges',
  },
  {
    id: 'rcc',
    number: '03',
    title: 'Roller Compacted Concrete (RCC) Pavement',
    titleEn: 'Roller Compacted Concrete Pavement',
    description:
      'Execution of RCC pavement using zero-slump concrete, asphalt pavers and vibratory rollers.',
    image: '/images/projects/rcc/boroujerdi-rcc-01.webp',
    href: '/capabilities/rcc',
  },
  {
    id: 'soil-stab',
    number: '04',
    title: 'Cement Soil Stabilization',
    titleEn: 'Cement Soil Stabilization',
    description:
      'In-situ soil stabilization using WR/WM equipment to increase strength, reduce swelling and improve plasticity characteristics.',
    image: '/images/projects/soil-stabilization/northeast-border-stabilization-02.webp',
    href: '/capabilities/soil-stabilization',
  },
  {
    id: 'building',
    number: '05',
    title: 'Building Construction',
    titleEn: 'Building Construction',
    description:
      'Construction of administrative, educational and public buildings from earthworks through completion, including MEP systems and finishing.',
    image:
      'https://images.pexels.com/photos/8961071/pexels-photo-8961071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#building',
  },
  {
    id: 'residential',
    number: '06',
    title: 'Residential Projects',
    titleEn: 'Residential Construction',
    description:
      'Development of residential complexes comprising approximately 1,000 housing units and more than 1.5 million m² of construction in Tehran and Qom.',
    image: '/images/projects/residential/qom-national-housing-03.webp',
    href: '/expertise#residential',
  },
  {
    id: 'precast',
    number: '07',
    title: 'Precast Concrete Walls',
    titleEn: 'Precast Concrete Walls',
    description:
      'Production and installation of precast concrete walls for borders, sites, security and industrial projects.',
    image: '/images/projects/precast-walls/precast-completed-01.webp',
    href: '/expertise#precast',
  },
  {
    id: 'water',
    number: '08',
    title: 'Water & Wastewater',
    titleEn: 'Water & Wastewater',
    description:
      'Execution of water and wastewater networks, transmission lines and related water infrastructure projects.',
    image:
      'https://images.pexels.com/photos/32502650/pexels-photo-32502650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#water',
  },
  {
    id: 'urban-infra',
    number: '09',
    title: 'Site development and urban infrastructure',
    titleEn: 'Urban Infrastructure & Site Development',
    description:
      'Construction of roads, urban infrastructure, site development and environmental improvement works for large-scale projects.',
    image: '/images/projects/roads/iran-hormuz-ferdow-kahak-01.webp',
    href: '/expertise#urban-infra',
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
};

export const companyStats: Stat[] = [
  {
    value: 24,
    prefix: '+',
    label: 'Years of Experience',
    sublabel: 'Continuous operations since 2000',
  },
  {
    value: 1,
    label: 'Road & Transportation Grade',
    sublabel: 'Grade 1 — Contractor',
  },
  {
    value: 3,
    label: 'Building Construction Grade',
    sublabel: 'Grade 3 — Contractor',
  },
  {
    value: 4,
    label: 'Water Grade',
    sublabel: 'Grade 4 — Contractor',
  },
];

export type Employer = {
  name: string;
  type: string;
};

export const employers: Employer[] = [
  { name: 'Road Maintenance & Transportation Organization', type: 'Government' },
  { name: 'New Towns Development Company', type: 'Government' },
  { name: 'Ministry of Roads and Urban Development', type: 'Government' },
  { name: 'Municipalities and Governorates', type: 'Public' },
  { name: 'Mining and Mineral Industries Organization', type: 'Industrial' },
  { name: 'Regional Cement Companies', type: 'Industrial' },
  { name: 'Plan and Budget Organization', type: 'Government' },
  { name: 'Bank Maskan — Civil Works Support Company', type: 'Government' },
];
