export type ProjectCategory =
  | 'road'
  | 'bridge'
  | 'rcc'
  | 'soil-stab'
  | 'building'
  | 'residential'
  | 'precast'
  | 'urban-infra'
  | 'water';

export type ProjectStatus = 'completed' | 'ongoing' | 'unknown';

export type ProjectFact = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  employer?: string;
  consultant?: string;
  location?: string;
  startDate?: string;
  duration?: string;
  contractValue?: string;
  status: ProjectStatus;
  statusLabel?: string;
  image: string;
  gallery?: string[];
  intro?: string;
  scope?: string[];
  facts?: ProjectFact[];
  featured?: boolean;
};

export type ProjectTranslation = Pick<
  Project,
  'title' | 'categoryLabel' | 'statusLabel'
> & {
  employer?: string;
  location?: string;
  intro: string;
  scope?: string[];
  facts?: ProjectFact[];
};

export const categoryLabels: Record<ProjectCategory, string> = {
  road: 'Road Construction',
  bridge: 'Bridges & Structures',
  rcc: 'RCC',
  'soil-stab': 'Soil Stabilization',
  building: 'Building Construction',
  residential: 'Residential',
  precast: 'Precast Walls',
  'urban-infra': 'Urban Infrastructure',
  water: 'Water',
};

export const projects: Project[] = [
  {
    slug: 'iran-hormuz-access-road',
    title: 'Construction of Patrol Access Road and Perimeter Wall at Iran Hormoz Site',
    category: 'road',
    categoryLabel: 'Road Construction',
    employer: 'Iran Hormoz Nuclear Power Company',
    location: 'Iran Hormoz site',
    status: 'completed',
    statusLabel: 'Temporary handover',
    image: '/images/projects/precast-walls/iran-hormuz-precast-01.webp',
    gallery: [
      '/images/projects/precast-walls/iran-hormuz-precast-02.webp',
      '/images/projects/soil-stabilization/iran-hormuz-stabilization-01.webp',
      '/images/projects/soil-stabilization/iran-hormuz-stabilization-02.webp',
      '/images/projects/precast-walls/precast-production-01.webp',
      '/images/projects/precast-walls/precast-production-02.webp',
      '/images/projects/precast-walls/precast-installation-01.webp',
      '/images/projects/precast-walls/precast-installation-02.webp',
      '/images/projects/precast-walls/precast-completed-01.webp',
    ],
    intro:
      'The project comprised an 11.5 km patrol access road and perimeter wall at the Iran Hormoz site. Soil stabilization covered 11.5 km of the route. Documented activities include wall formwork and precast-wall production and installation. This project is distinct from the other border-wall projects in the company portfolio.',
    scope: [
      'Construction of the patrol access road and perimeter wall',
      'Soil-stabilization works over 11.5 km',
      'Precast-wall formwork, production and installation',
    ],
    facts: [
      { label: 'Project length', value: '11.5 km' },
      { label: 'Stabilization length', value: '11.5 km' },
      { label: 'Wall type', value: 'Precast concrete perimeter wall' },
    ],
    featured: true,
  },
  {
    slug: 'precast-wall-eastern-border',
    title: 'Precast Concrete Wall on the Eastern Border, North of Dogharoun Terminal',
    category: 'precast',
    categoryLabel: 'Precast Walls',
    location: 'North of Dogharoun Terminal — Eastern Border',
    status: 'unknown',
    image:
      'https://images.pexels.com/photos/39962550/pexels-photo-39962550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'A 25 km precast concrete protective wall was built on the eastern border, north of Dogharoun Terminal. This is a separate border-wall project from the perimeter wall at the Iran Hormoz site.',
    scope: [
      'Construction of the precast concrete border wall',
    ],
    facts: [
      { label: 'Wall length', value: '25 km' },
      { label: 'Wall type', value: 'Precast concrete protective wall' },
    ],
    featured: true,
  },
  {
    slug: 'wirtgen-soil-stabilization-northeast-border',
    title: 'Wirtgen Soil Stabilization for the Northeastern Border Closure Project',
    category: 'soil-stab',
    categoryLabel: 'Soil Stabilization',
    employer: '411th Combat Engineering Group',
    location: 'Northeastern Border',
    status: 'completed',
    statusLabel: 'Temporary handover',
    image: '/images/projects/soil-stabilization/northeast-border-stabilization-01.webp',
    gallery: [
      '/images/projects/soil-stabilization/northeast-border-stabilization-02.webp',
    ],
    intro:
      'Wirtgen-machine soil stabilization was carried out over 50 km for the northeastern border closure project. The project was undertaken for the 411th Combat Engineering Group.',
    scope: [
      'Soil-stabilization operations using Wirtgen equipment',
    ],
    facts: [
      { label: 'Stabilization length', value: '50 km' },
      { label: 'Equipment', value: 'Wirtgen stabilization machine' },
    ],
    featured: true,
  },
  {
    slug: 'qom-jafariye-stabilization-asphalt',
    title: 'Stabilization and Asphalt Works on the Qom–Jafariyeh Return Lane',
    category: 'soil-stab',
    categoryLabel: 'Soil Stabilization',
    location: 'Qom — Jafariyeh',
    status: 'unknown',
    image: '/images/projects/soil-stabilization/qom-jafarieh-stabilization-01.webp',
    intro:
      'Stabilization and asphalt works were carried out on the return carriageway of the Qom–Jafarieh route. The photographed section is 6 km long and 11 m wide.',
    scope: [
      'Stabilization of the return carriageway',
      'Asphalt works on the return carriageway',
    ],
    facts: [
      { label: 'Route length', value: '6 km' },
      { label: 'Photographed section width', value: '11 m' },
    ],
    featured: false,
  },
  {
    slug: 'rcc-borujerdi-boulevard-qom',
    title: 'RCC Pavement on Ayatollah Boroujerdi Boulevard, Qom',
    category: 'rcc',
    categoryLabel: 'RCC',
    employer: 'Qom Municipality',
    location: 'Qom',
    status: 'unknown',
    image: '/images/projects/rcc/boroujerdi-rcc-01.webp',
    intro:
      'Roller-compacted concrete (RCC) pavement works were carried out on Ayatollah Boroujerdi Boulevard in Qom for Qom Municipality. The documented dimensions are 10 km long and 40 m wide.',
    scope: [
      'RCC pavement works on Ayatollah Boroujerdi Boulevard',
    ],
    facts: [
      { label: 'Pavement type', value: 'Roller-compacted concrete (RCC)' },
      { label: 'Length', value: '10 km' },
      { label: 'Width', value: '40 m' },
    ],
    featured: true,
  },
  {
    slug: 'gilan-sabz-cement-access-road',
    title: 'Access Road from Gilan Sabz Cement Plant to Larikhani and Siahkal',
    category: 'road',
    categoryLabel: 'Road Construction',
    location: 'Gilan Province — Larikhani and Siahkal route',
    status: 'unknown',
    image: '/images/projects/roads/gilan-sabz-siahkal-01.webp',
    intro:
      'The access route from Gilan Sabz Cement Plant to Larikhani and Siahkal is approximately 15 km long and 8 m wide.',
    scope: [
      'Construction of the access route from Gilan Sabz Cement Plant to Larikhani and Siahkal',
    ],
    facts: [
      { label: 'Route length', value: 'Approximately 15 km' },
      { label: 'Width', value: '8 m' },
    ],
    featured: true,
  },
  {
    slug: 'diraklu-pumice-mine-access-road',
    title: 'Access Road to Deir Kolu Industrial Pumice Mines, Qorveh',
    category: 'road',
    categoryLabel: 'Road Construction',
    location: 'Qorveh — Kurdistan Province',
    status: 'unknown',
    image: '/images/projects/rcc/qorveh-pumice-access-01.webp',
    intro:
      'The access road to the Deir Kolu industrial pumice mines in Qorveh is 11 km long and 7.6 m wide.',
    scope: [
      'Construction of the access road to the Deir Kolu industrial pumice mines',
    ],
    facts: [
      { label: 'Route length', value: '11 km' },
      { label: 'Width', value: '7.6 m' },
    ],
    featured: false,
  },
  {
    slug: 'hejij-darian-rcc-road',
    title: 'Subgrade and RCC Works on the Hajij–Daryan Route',
    category: 'rcc',
    categoryLabel: 'RCC',
    location: 'Hajij–Daryan Route',
    status: 'unknown',
    image: '/images/projects/rcc/hejij-daryan-rcc-01.webp',
    intro:
      'Subgrade preparation and RCC works were carried out on the Hajij–Daryan route, approximately 9 km long and 8 m wide.',
    scope: [
      'Subgrade preparation',
      'RCC pavement works',
    ],
    facts: [
      { label: 'Route length', value: 'Approximately 9 km' },
      { label: 'Width', value: '8 m' },
      { label: 'Pavement type', value: 'Roller-compacted concrete (RCC)' },
    ],
    featured: true,
  },
  {
    slug: 'zabol-cement-factory-access-road',
    title: 'Access Road to Zabol Cement Plant',
    category: 'road',
    categoryLabel: 'Road Construction',
    location: 'Zabol — Sistan and Baluchestan',
    status: 'unknown',
    image: '/images/projects/rcc/zabol-cement-access-rcc-01.webp',
    intro:
      'The access road to Zabol Cement Plant is 16 km long and 9 m wide.',
    scope: [
      'Construction of the access road to Zabol Cement Plant',
    ],
    facts: [
      { label: 'Route length', value: '16 km' },
      { label: 'Width', value: '9 m' },
    ],
    featured: false,
  },
  {
    slug: 'seismic-retrofit-urban-bridges',
    title: 'Seismic Upgrading of Bridge Interchanges on Shahid Hakim and Shahid Babaei Highways',
    category: 'bridge',
    categoryLabel: 'Bridges & Structures',
    location: 'Tehran',
    status: 'ongoing',
    statusLabel: 'In progress',
    image:
      'https://images.pexels.com/photos/17064158/pexels-photo-17064158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Seismic upgrading works were carried out on bridges at the Shahid Hakim and Shahid Babaei (Sadr)–Kaveh highway interchanges in Tehran. This project is distinct from the Hemmat–Sheikh Fazlollah bridge works.',
    scope: [
      'Seismic upgrading of bridges at the named Tehran highway interchanges',
    ],
    facts: [
      {
        label: 'Documented structures',
        value: 'Shahid Hakim and Shahid Babaei (Sadr)–Kaveh highway interchanges',
      },
    ],
    featured: false,
  },
  {
    slug: 'urban-roads-infrastructure',
    title: 'Qods Township–Ayatollah Boroujerdi Boulevard Grade-Separated Interchange',
    category: 'urban-infra',
    categoryLabel: 'Urban Infrastructure',
    location: 'Qom',
    status: 'unknown',
    image:
      'https://images.pexels.com/photos/33125632/pexels-photo-33125632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'A grade-separated interchange was constructed at Qods Township and Ayatollah Boroujerdi Boulevard in Qom. The Qom–Jafarieh return-carriageway asphalt works are a separate project.',
    scope: [
      'Construction of the grade-separated interchange at Qods Township and Ayatollah Boroujerdi Boulevard',
    ],
    facts: [{ label: 'Structure', value: 'Grade-separated interchange' }],
    featured: false,
  },
  {
    slug: 'national-housing-mehr',
    title: 'National Housing and Mehr Housing Projects',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Tehran and Qom',
    status: 'ongoing',
    statusLabel: 'Under execution',
    image:
      'https://images.pexels.com/photos/8373204/pexels-photo-8373204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'The residential portfolio spans Tehran and Qom, with approximately 1,000 units and about 1.5 million m² of built-up area. Its recorded average physical progress is approximately 80%. The documented scope spans site mobilization, earthworks, structural works and framing, rough construction, mechanical and electrical installations, finishing and final completion. This portfolio-level summary is separate from the Qom National Housing and Pardis Mehr projects.',
    scope: [
      'Site mobilization and earthworks',
      'Structural works, framing and rough construction',
      'Mechanical and electrical installations',
      'Finishing and final completion',
    ],
    facts: [
      { label: 'Residential units', value: 'Approximately 1,000' },
      { label: 'Built-up area', value: 'Approximately 1,500,000 m²' },
      { label: 'Average physical progress', value: 'Approximately 80%' },
    ],
    featured: true,
  },
  {
    slug: 'qom-national-housing-440-units',
    title: '440-Unit National Housing Project in Qom',
    category: 'residential',
    categoryLabel: 'Residential',
    employer: 'Qom Province General Directorate of Roads and Urban Development',
    location: 'Qom',
    status: 'unknown',
    image: '/images/projects/residential/qom-national-housing-02.webp',
    gallery: [
      '/images/projects/residential/qom-national-housing-01.webp',
      '/images/projects/residential/qom-national-housing-03.webp',
      '/images/projects/residential/qom-national-housing-04.webp',
      '/images/projects/residential/qom-national-housing-05.webp',
    ],
    intro:
      'The 440-unit National Housing Movement project in Qom was undertaken for the Qom Province General Directorate of Roads and Urban Development. Project progress is listed at 70%.',
    scope: [
      'Construction of 440 residential units',
    ],
    facts: [
      { label: 'Residential units', value: '440' },
      { label: 'Progress', value: '70%' },
    ],
    featured: false,
  },
  {
    slug: 'parand-school-10',
    title: 'Construction of Parand School No. 10',
    category: 'building',
    categoryLabel: 'Building Construction',
    employer: 'Parand New Town Development Company',
    location: 'Parand',
    status: 'completed',
    statusLabel: 'Completed',
    image:
      'https://images.pexels.com/photos/18082446/pexels-photo-18082446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Construction of School No. 10 in Parand for Parand New Town Development Company included the main building, guardhouse, buffet, sanitary facilities, water cooler, caretaker room, site development and a perimeter wall.',
    scope: [
      'Construction of the main school building and guardhouse',
      'Buffet, sanitary facilities, water cooler and caretaker room',
      'Site development and perimeter wall',
    ],
    facts: [
      { label: 'School', value: 'No. 10' },
    ],
    featured: false,
  },
  {
    slug: 'pole-dokhtar-mosalla',
    title: 'Pol-e Dokhtar Friday Mosque (Mosalla) Project',
    category: 'building',
    categoryLabel: 'Building Construction',
    location: 'Pol-e Dokhtar',
    status: 'unknown',
    image:
      'https://images.pexels.com/photos/19099247/pexels-photo-19099247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Completion works were carried out for the Pol-e Dokhtar Mosalla.',
    scope: ['Completion works for the Pol-e Dokhtar Mosalla'],
    facts: [{ label: 'Documented work', value: 'Mosalla completion works' }],
    featured: false,
  },
  {
    slug: '106-unit-residential-complex',
    title: '106-Unit Residential Complex and Site Development',
    category: 'residential',
    categoryLabel: 'Residential',
    status: 'ongoing',
    statusLabel: '10% progress',
    image:
      'https://images.pexels.com/photos/38449886/pexels-photo-38449886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'The project included construction of 106 residential units and site development over 15,000 m². Project progress is listed at 10%.',
    scope: [
      'Construction of 106 residential units',
      'Site development over 15,000 m²',
    ],
    facts: [
      { label: 'Residential units', value: '106' },
      { label: 'Site development area', value: '15,000 m²' },
      { label: 'Progress', value: '10%' },
    ],
    featured: false,
  },
  {
    slug: 'pardis-residential-projects',
    title: 'Pardis Mehr Housing Completion and Defect-Correction Works — Phase 11',
    category: 'residential',
    categoryLabel: 'Residential',
    employer: 'Pardis New Town Development Company',
    location: 'Pardis — Phase 11',
    status: 'unknown',
    image: '/images/projects/residential/pardis-mehr-housing-01.webp',
    gallery: [
      '/images/projects/residential/pardis-mehr-housing-02.webp',
      '/images/projects/residential/pardis-mehr-housing-03.webp',
      '/images/projects/residential/pardis-mehr-housing-04.webp',
    ],
    intro:
      'Completion and defect-correction works covered the remaining work in four 59-unit Mehr Housing blocks in Phase 11 of Pardis. Project progress is listed at 90%.',
    scope: [
      'Completion of remaining works in four 59-unit blocks',
      'Defect-correction works',
    ],
    facts: [
      { label: 'Blocks', value: '4' },
      { label: 'Units per block', value: '59' },
      { label: 'Phase', value: '11' },
      { label: 'Progress', value: '90%' },
    ],
    featured: false,
  },
  {
    slug: 'parand-residential-projects',
    title: 'Residential Project Entry',
    category: 'residential',
    categoryLabel: 'Residential',
    status: 'unknown',
    image:
      'https://images.pexels.com/photos/5335018/pexels-photo-5335018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: false,
  },
  {
    slug: 'west-malard-industrial-town',
    title: 'West Malard Industrial Town Earthworks and Subgrade Works',
    category: 'urban-infra',
    categoryLabel: 'Urban Infrastructure',
    location: 'West Malard Industrial Town',
    status: 'unknown',
    image: '/images/projects/roads/malard-industrial-town-01.webp',
    gallery: ['/images/projects/roads/malard-industrial-town-02.webp'],
    intro:
      'Earthworks to subgrade level and curbing were carried out in the western part of Malard Industrial Town. Activities included excavation and fill, grading, subbase works and curbing.',
    scope: [
      'Excavation and fill to subgrade level',
      'Grading',
      'Subbase works',
      'Curbing',
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory | 'all'): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(project: Project, count: number = 3): Project[] {
  return projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, count);
}
