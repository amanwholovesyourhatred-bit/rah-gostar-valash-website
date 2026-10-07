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
  statusLabel: string;
  image: string;
  gallery?: string[];
  intro?: string;
  scope?: string[];
  challenges?: string[];
  solutions?: string[];
  featured?: boolean;
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
    employer: 'Mining and Mineral Industries Organization',
    location: 'Hormozgan',
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/precast-walls/iran-hormuz-precast-01.webp',
    intro:
      'Construction of a patrol access road and perimeter wall for the Iran Hormoz site, including earthworks, subgrade preparation and pavement works.',
    scope: [
      'Earthworks and subgrade preparation for the access road',
      'Construction of the site perimeter wall',
      'Pavement and asphalt works',
    ],
    featured: true,
  },
  {
    slug: 'precast-wall-eastern-border',
    title: 'Precast Concrete Wall on the Eastern Border, North of Dogharoun Terminal',
    category: 'precast',
    categoryLabel: 'Precast Walls',
    employer: 'Road Maintenance & Transportation Organization',
    location: 'Dogharoun — Eastern Border',
    status: 'completed',
    statusLabel: 'Completed',
    image:
      'https://images.pexels.com/photos/39962550/pexels-photo-39962550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Production and installation of precast concrete walls north of the Dogharoun border terminal for perimeter security.',
    scope: [
      'Production of precast concrete panels',
      'Installation of perimeter walls',
      'Foundation and base works',
    ],
    featured: true,
  },
  {
    slug: 'wirtgen-soil-stabilization-northeast-border',
    title: 'Wirtgen Soil Stabilization for the Northeastern Border Closure Project',
    category: 'soil-stab',
    categoryLabel: 'Soil Stabilization',
    employer: 'Road Maintenance & Transportation Organization',
    location: 'Northeastern Border',
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/soil-stabilization/northeast-border-stabilization-01.webp',
    intro:
      'In-situ cement soil stabilization using Wirtgen equipment to improve road subgrade properties.',
    scope: [
      'In-situ soil stabilization using Wirtgen equipment',
      'Mixing cement with subgrade soil',
      'Compaction and asphalt paving over the stabilized base',
    ],
    featured: true,
  },
  {
    slug: 'qom-jafariye-stabilization-asphalt',
    title: 'Stabilization and Asphalt Works on the Qom–Jafariyeh Return Lane',
    category: 'soil-stab',
    categoryLabel: 'Soil Stabilization',
    employer: 'Road Maintenance & Transportation Organization',
    location: 'Qom — Jafariyeh',
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/soil-stabilization/qom-jafarieh-stabilization-01.webp',
    intro:
      'Soil stabilization and asphalt paving of the Qom–Jafariyeh return lane to improve the subgrade and extend pavement service life.',
    scope: [
      'Cement stabilization of subgrade soil',
      'Asphalt layer construction',
      'Improvement of route traffic flow',
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
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/rcc/boroujerdi-rcc-01.webp',
    intro:
      'Execution of RCC pavement on Ayatollah Boroujerdi Boulevard in Qom using zero-slump concrete, asphalt pavers and vibratory rollers.',
    scope: [
      'Production and placement of zero-slump concrete',
      'Placement with an asphalt paver',
      'Compaction with vibratory rollers',
      'Final surface finishing',
    ],
    challenges: [
      'Need for rapid pavement construction under urban traffic conditions',
      'Concrete temperature control under ambient conditions',
    ],
    solutions: [
      'Use of RCC technology to accelerate construction',
      'Planning concrete production and transport for continuous placement',
    ],
    featured: true,
  },
  {
    slug: 'gilan-sabz-cement-access-road',
    title: 'Access Road from Gilan Sabz Cement Plant to Larikhani and Siahkal',
    category: 'road',
    categoryLabel: 'Road Construction',
    employer: 'Gilan Sabz Cement Plant',
    location: 'Gilan — Siahkal',
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/roads/gilan-sabz-siahkal-01.webp',
    intro:
      'Construction of the access route from Gilan Sabz Cement Plant to Larikhani and Siahkal, including earthworks, subgrade preparation and pavement in mountainous terrain.',
    scope: [
      'Earthworks and excavation in mountainous terrain',
      'Subgrade preparation and stabilization',
      'Pavement and asphalt works',
    ],
    featured: true,
  },
  {
    slug: 'diraklu-pumice-mine-access-road',
    title: 'Access Road to Deir Kolu Industrial Pumice Mines, Qorveh',
    category: 'road',
    categoryLabel: 'Road Construction',
    employer: 'Mining and Mineral Industries Organization',
    location: 'Qorveh — Kurdistan Province',
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/rcc/qorveh-pumice-access-01.webp',
    intro:
      'Construction of the access road to the Deir Kolu industrial pumice mines in Qorveh under challenging geological and mountainous conditions.',
    scope: [
      'Rock earthworks',
      'Subgrade preparation and road formation',
      'Pavement and asphalt',
    ],
    featured: false,
  },
  {
    slug: 'hejij-darian-rcc-road',
    title: 'Subgrade and RCC Works on the Hajij–Daryan Route',
    category: 'rcc',
    categoryLabel: 'RCC',
    employer: 'Road Maintenance & Transportation Organization',
    location: 'Hajij–Daryan Route',
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/rcc/hejij-daryan-rcc-01.webp',
    intro:
      'Subgrade preparation and RCC pavement on the Hajij–Daryan route, using RCC technology for high strength and long service life.',
    scope: [
      'Subgrade preparation',
      'RCC pavement construction',
      'Compaction and finishing works',
    ],
    featured: true,
  },
  {
    slug: 'zabol-cement-factory-access-road',
    title: 'Access Road to Zabol Cement Plant',
    category: 'road',
    categoryLabel: 'Road Construction',
    employer: 'Zabol Cement Plant',
    location: 'Zabol — Sistan and Baluchestan',
    status: 'completed',
    statusLabel: 'Completed',
    image: '/images/projects/rcc/zabol-cement-access-rcc-01.webp',
    intro:
      'Construction of the access road to Zabol Cement Plant under harsh climatic and high-temperature conditions.',
    scope: [
      'Earthworks',
      'Subgrade preparation',
      'Pavement and asphalt works',
    ],
    featured: false,
  },
  {
    slug: 'seismic-retrofit-urban-bridges',
    title: 'Seismic Rehabilitation and Strengthening of Urban Bridges',
    category: 'bridge',
    categoryLabel: 'Bridges & Structures',
    employer: 'Municipalities',
    location: 'Urban Areas',
    status: 'completed',
    statusLabel: 'Completed',
    image:
      'https://images.pexels.com/photos/17064158/pexels-photo-17064158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Seismic rehabilitation and strengthening of urban bridges to improve earthquake safety and structural performance.',
    scope: [
      'Assessment of existing bridge conditions',
      'Design and implementation of strengthening systems',
      'Strengthening of bridge piers and decks',
    ],
    featured: false,
  },
  {
    slug: 'urban-roads-infrastructure',
    title: 'Construction of Urban Roads and Infrastructure',
    category: 'urban-infra',
    categoryLabel: 'Urban Infrastructure',
    employer: 'Municipalities and Governorates',
    location: 'Urban Areas',
    status: 'completed',
    statusLabel: 'Completed',
    image:
      'https://images.pexels.com/photos/33125632/pexels-photo-33125632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Construction of urban roads, water infrastructure, wastewater systems and site development for urban development projects.',
    scope: [
      'Construction of asphalt and concrete roads',
      'Water and wastewater networks',
      'Site development and urban infrastructure',
    ],
    featured: false,
  },
  {
    slug: 'national-housing-mehr',
    title: 'National Housing and Mehr Housing Projects',
    category: 'residential',
    categoryLabel: 'Residential',
    employer: 'New Towns Development Company / Bank Maskan',
    location: 'Qom, Parand and Pardis',
    status: 'ongoing',
    statusLabel: 'Ongoing',
    image:
      'https://images.pexels.com/photos/8373204/pexels-photo-8373204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'Construction of residential units under the National Housing and Mehr Housing programs, including projects in Qom, Parand and Pardis.',
    scope: [
      'Construction of residential units',
      'Construction from earthworks through finishing',
      'Mechanical and electrical installations',
      'Site development and infrastructure',
    ],
    featured: true,
  },
  {
    slug: 'qom-national-housing-440-units',
    title: '440-Unit National Housing Project in Qom',
    category: 'residential',
    categoryLabel: 'Residential',
    employer: 'New Towns Development Company',
    location: 'Qom',
    status: 'ongoing',
    statusLabel: 'Ongoing',
    image: '/images/projects/residential/qom-national-housing-02.webp',
    intro:
      'Construction of 440 residential units for the Qom National Housing project, with significant physical progress at the time the company profile was prepared.',
    scope: [
      'Construction of 440 residential units',
      'Concrete structure and frame',
      'Finishing and MEP works',
    ],
    featured: false,
  },
  {
    slug: 'parand-school-10',
    title: 'Construction of Parand School No. 10',
    category: 'building',
    categoryLabel: 'Building Construction',
    employer: 'School Renovation Organization',
    location: 'Parand — Tehran',
    status: 'completed',
    statusLabel: 'Completed',
    image:
      'https://images.pexels.com/photos/18082446/pexels-photo-18082446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Construction of School No. 10 in Parand, including complete building works from earthworks through completion.',
    scope: [
      'Complete building works',
      'Mechanical and electrical installations',
      'Site development',
    ],
    featured: false,
  },
  {
    slug: 'pole-dokhtar-mosalla',
    title: 'Pol-e Dokhtar Friday Mosque (Mosalla) Project',
    category: 'building',
    categoryLabel: 'Building Construction',
    employer: 'Endowments and Charity Affairs Organization',
    location: 'Pol-e Dokhtar',
    status: 'completed',
    statusLabel: 'Completed',
    image:
      'https://images.pexels.com/photos/19099247/pexels-photo-19099247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Construction of the Pol-e Dokhtar Friday Mosque (Mosalla), including the main building and site development.',
    scope: [
      'Mosalla building works',
      'Concrete structure and frame',
      'Finishing and MEP works',
    ],
    featured: false,
  },
  {
    slug: '106-unit-residential-complex',
    title: '106-Unit Residential Complex and Site Development',
    category: 'residential',
    categoryLabel: 'Residential',
    employer: 'Bank Maskan — Civil Works Support Company',
    location: '—',
    status: 'completed',
    statusLabel: 'Completed',
    image:
      'https://images.pexels.com/photos/38449886/pexels-photo-38449886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Construction of a 106-unit residential complex together with site development and infrastructure works.',
    scope: [
      'Construction of 106 residential units',
      'Site development and infrastructure',
      'Mechanical and electrical installations',
    ],
    featured: false,
  },
  {
    slug: 'pardis-residential-projects',
    title: 'Residential Projects in Pardis',
    category: 'residential',
    categoryLabel: 'Residential',
    employer: 'New Towns Development Company',
    location: 'Pardis — Tehran',
    status: 'ongoing',
    statusLabel: 'Ongoing',
    image:
      'https://images.pexels.com/photos/16453466/pexels-photo-16453466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Residential projects in Pardis, forming part of the company’s track record of approximately 1,000 housing units.',
    scope: [
      'Construction of residential units',
      'Complete construction works',
      'Infrastructure and site development',
    ],
    featured: false,
  },
  {
    slug: 'parand-residential-projects',
    title: 'Residential Projects in Parand',
    category: 'residential',
    categoryLabel: 'Residential',
    employer: 'New Towns Development Company',
    location: 'Parand — Tehran',
    status: 'ongoing',
    statusLabel: 'Ongoing',
    image:
      'https://images.pexels.com/photos/5335018/pexels-photo-5335018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Residential projects in Parand with average physical progress of approximately 80% at the time the company profile was prepared.',
    scope: [
      'Construction of residential units',
      'Complete construction works',
      'Infrastructure and site development',
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
