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
  road: 'راه‌سازی',
  bridge: 'پل و سازه',
  rcc: 'RCC',
  'soil-stab': 'تثبیت خاک',
  building: 'ابنیه',
  residential: 'مسکونی',
  precast: 'دیوار پیش‌ساخته',
  'urban-infra': 'زیرساخت شهری',
  water: 'آب',
};

export const projects: Project[] = [
  {
    slug: 'iran-hormuz-access-road',
    title: 'احداث جاده دسترسی حراستی (پاترول رود) و دیوار پیرامونی سایت ایران هرمز',
    category: 'road',
    categoryLabel: 'راه‌سازی',
    employer: 'سازمان صنایع معدنی و معادن',
    location: 'هرمزگان',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/5504658/pexels-photo-5504658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'احداث جاده دسترسی حراستی و دیوار پیرامونی برای سایت ایران هرمز، شامل عملیات خاکی، بسترسازی و روسازی.',
    scope: [
      'عملیات خاکی و بسترسازی جاده دسترسی',
      'احداث دیوار پیرامونی سایت',
      'روسازی و آسفالت‌کاری',
    ],
    featured: true,
  },
  {
    slug: 'precast-wall-eastern-border',
    title: 'اجرای دیوار بتنی پیش‌ساخته مرز شرق در محدوده شمال پایانه دوغارون',
    category: 'precast',
    categoryLabel: 'دیوار پیش‌ساخته',
    employer: 'سازمان راهداری و مدیریت راه‌های کشور',
    location: 'دوغارون — مرز شرق',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/39962550/pexels-photo-39962550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'تولید و نصب دیوارهای بتنی پیش‌ساخته در محدوده پایانه مرزی شمال دوغارون برای تأمین امنیت پیرامونی.',
    scope: [
      'تولید پنل‌های بتنی پیش‌ساخته',
      'نصب و استقرار دیوارهای پیرامونی',
      'عملیات پایه و فونداسیون',
    ],
    featured: true,
  },
  {
    slug: 'wirtgen-soil-stabilization-northeast-border',
    title: 'اجرای عملیات تثبیت توسط دستگاه ویرتگن در پروژه انسداد مرز شمال شرق',
    category: 'soil-stab',
    categoryLabel: 'تثبیت خاک',
    employer: 'سازمان راهداری و مدیریت راه‌های کشور',
    location: 'مرز شمال شرق',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'اجرای عملیات تثبیت خاک با سیمان به روش درجا با استفاده از دستگاه‌های ویرتگن برای بهبود مشخصات خاک بستر راه.',
    scope: [
      'تثبیت درجای خاک با دستگاه ویرتگن',
      'اختلاط سیمان با خاک بستر',
      'تراکم و آسفالت‌کاری روی بستر تثبیت‌شده',
    ],
    featured: true,
  },
  {
    slug: 'qom-jafariye-stabilization-asphalt',
    title: 'عملیات تثبیت و آسفالت باند برگشت محور قم–جعفریه',
    category: 'soil-stab',
    categoryLabel: 'تثبیت خاک',
    employer: 'سازمان راهداری و مدیریت راه‌های کشور',
    location: 'قم — جعفریه',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/7910082/pexels-photo-7910082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'اجرای عملیات تثبیت خاک و آسفالت‌کاری باند برگشت محور قم–جعفریه به‌منظور بهبود بستر و افزایش عمر روسازی.',
    scope: [
      'تثبیت خاک بستر با سیمان',
      'اجرای لایه آسفالت',
      'تسهیل ترافیک محور',
    ],
    featured: false,
  },
  {
    slug: 'rcc-borujerdi-boulevard-qom',
    title: 'بتن غلتکی بلوار آیت‌الله بروجردی قم',
    category: 'rcc',
    categoryLabel: 'RCC',
    employer: 'شهرداری قم',
    location: 'قم',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'اجرای روسازی بتن غلتکی (RCC) در بلوار آیت‌الله بروجردی قم با استفاده از بتن با اسلمپ صفر، اجرا با فینیشر آسفالت و متراکم‌کننده‌های لرزه‌ای.',
    scope: [
      'تهیه و اجرای بتن با اسلمپ صفر',
      ' اجرا با فینیشر آسفالت',
      'تراکم با غلتک‌های لرزه‌ای',
      'پرداخت سطح نهایی',
    ],
    challenges: [
      'نیاز به اجرای سریع روسازی در ترافیک شهری',
      'کنترل دمای بتن در شرایط محیطی',
    ],
    solutions: [
      'استفاده از تکنولوژی RCC برای سرعت اجرا',
      'برنامه‌ریزی تولید و حمل بتن برای پوشش پیوسته',
    ],
    featured: true,
  },
  {
    slug: 'gilan-sabz-cement-access-road',
    title: 'احداث محور دسترسی از کارخانه سیمان گیلان سبز به لاریخانی و سیاهکل',
    category: 'road',
    categoryLabel: 'راه‌سازی',
    employer: 'کارخانه سیمان گیلان سبز',
    location: 'گیلان — سیاهکل',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/10960855/pexels-photo-10960855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'احداث محور دسترسی از کارخانه سیمان گیلان سبز به لاریخانی و سیاهکل، شامل عملیات خاکی، بسترسازی و روسازی در منطقه‌ای کوهستانی.',
    scope: [
      'عملیات خاکی و حفاری در زمین کوهستانی',
      'بسترسازی و تثبیت بستر',
      'روسازی و آسفالت‌کاری',
    ],
    featured: true,
  },
  {
    slug: 'diraklu-pumice-mine-access-road',
    title: 'احداث راه دسترسی به معادن پوکه صنعتی دیرکلو قروه',
    category: 'road',
    categoryLabel: 'راه‌سازی',
    employer: 'سازمان صنایع معدنی و معادن',
    location: 'قروه — استان کردستان',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/12464314/pexels-photo-12464314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'احداث راه دسترسی به معادن پوکه صنعتی دیرکلو قروه در شرایط زمین‌شناسی سخت و توپوگرافی کوهستانی.',
    scope: [
      'عملیات خاکی سنگی',
      'بسترسازی و شاه‌راه',
      'روسازی و آسفالت',
    ],
    featured: false,
  },
  {
    slug: 'hejij-darian-rcc-road',
    title: 'اجرای عملیات بسترسازی و بتن غلتکی محور هجیج–داریان',
    category: 'rcc',
    categoryLabel: 'RCC',
    employer: 'سازمان راهداری و مدیریت راه‌های کشور',
    location: 'محور هجیج–داریان',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/12230651/pexels-photo-12230651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'اجرای عملیات بسترسازی و روسازی بتن غلتکی در محور هجیج–داریان با استفاده از تکنولوژی RCC برای مقاومت بالا و عمر مفید طولانی.',
    scope: [
      'بسترسازی و آماده‌سازی بستر',
      'اجرای بتن غلتکی RCC',
      'عملیات تراکم و پرداخت',
    ],
    featured: true,
  },
  {
    slug: 'zabol-cement-factory-access-road',
    title: 'احداث راه دسترسی به کارخانه سیمان زابل',
    category: 'road',
    categoryLabel: 'راه‌سازی',
    employer: 'کارخانه سیمان زابل',
    location: 'زابل — سیستان و بلوچستان',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/35581973/pexels-photo-35581973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'احداث راه دسترسی به کارخانه سیمان زابل در شرایط اقلیمی سخت و دمای بالا.',
    scope: [
      'عملیات خاکی',
      'بسترسازی',
      'روسازی و آسفالت‌کاری',
    ],
    featured: false,
  },
  {
    slug: 'seismic-retrofit-urban-bridges',
    title: 'عملیات بهسازی لرزه‌ای و مقاوم‌سازی پل‌های شهری',
    category: 'bridge',
    categoryLabel: 'پل و سازه',
    employer: 'شهرداری‌ها',
    location: 'مناطق شهری',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/17064158/pexels-photo-17064158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'بهسازی لرزه‌ای و مقاوم‌سازی پل‌های شهری به‌منظور افزایش ایمنی در برابر زلزله و بهبود عملکرد سازه‌ای.',
    scope: [
      'ارزیابی وضعیت موجود پل‌ها',
      'طراحی و اجرای سیستم‌های مقاوم‌سازی',
      'تقویت پایه‌ها و عرشه پل',
    ],
    featured: false,
  },
  {
    slug: 'urban-roads-infrastructure',
    title: 'احداث معابر و زیرساخت‌های شهری',
    category: 'urban-infra',
    categoryLabel: 'زیرساخت شهری',
    employer: 'شهرداری‌ها و فرمانداری‌ها',
    location: 'مناطق شهری',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/33125632/pexels-photo-33125632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'احداث معابر شهری، زیرساخت‌های آبی، فاضلاب و محوطه‌سازی در مقیاس پروژه‌های توسعه شهری.',
    scope: [
      'احداث معابر آسفالتی و بتنی',
      'شبکه‌های آب و فاضلاب',
      'محوطه‌سازی و زیرساخت‌های شهری',
    ],
    featured: false,
  },
  {
    slug: 'national-housing-mehr',
    title: 'پروژه‌های مسکن ملی و مسکن مهر',
    category: 'residential',
    categoryLabel: 'مسکونی',
    employer: 'شرکت عمران شهرهای جدید / بانک مسکن',
    location: 'قم، پارندان، پردیس',
    status: 'ongoing',
    statusLabel: 'در حال اجرا',
    image:
      'https://images.pexels.com/photos/8373204/pexels-photo-8373204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'احداث واحدهای مسکونی در چارچوب پروژه‌های مسکن ملی و مسکن مهر، شامل مجموعه‌ای از پروژه‌های مسکونی در قم، پارندان پردیس.',
    scope: [
      'احداث واحدهای مسکونی',
      'عملیات خاکی تا نازک‌کاری',
      'تأسیسات مکانیکی و برقی',
      'محوطه‌سازی و زیرساخت',
    ],
    featured: true,
  },
  {
    slug: 'qom-national-housing-440-units',
    title: 'پروژه ۴۴۰ واحدی مسکن ملی در قم',
    category: 'residential',
    categoryLabel: 'مسکونی',
    employer: 'شرکت عمران شهرهای جدید',
    location: 'قم',
    status: 'ongoing',
    statusLabel: 'در حال اجرا',
    image:
      'https://images.pexels.com/photos/34360419/pexels-photo-34360419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro:
      'احداث ۴۴۰ واحد مسکونی در پروژه مسکن ملی قم با پیشرفت فیزیکی قابل‌توجه در زمان تدوین پروفایل شرکت.',
    scope: [
      'احداث ۴۴۰ واحد مسکونی',
      'ساختار و اسکلت بتنی',
      'عملیات نازک‌کاری و تأسیسات',
    ],
    featured: false,
  },
  {
    slug: 'parand-school-10',
    title: 'احداث مدرسه شماره ۱۰ پارند',
    category: 'building',
    categoryLabel: 'ابنیه',
    employer: 'سازمان نوسازی مدارس',
    location: 'پارند — تهران',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/18082446/pexels-photo-18082446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'احداث مدرسه شماره ۱۰ در شهرک پارند، شامل عملیات ساختمانی کامل از خاکی تا پایان کار.',
    scope: [
      'عملیات ساختمانی کامل',
      'تأسیسات مکانیکی و برقی',
      'محوطه‌سازی',
    ],
    featured: false,
  },
  {
    slug: 'pole-dokhtar-mosalla',
    title: 'پروژه مسجد جمعه پل دختر',
    category: 'building',
    categoryLabel: 'ابنیه',
    employer: 'سازمان اوقاف و امور خیریه',
    location: 'پل دختر',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/19099247/pexels-photo-19099247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'احداث پروژه مسجد جمعه (مصلی) پل دختر، شامل ساختمان اصلی و محوطه‌سازی.',
    scope: [
      'عملیات ساختمانی مصلی',
      'ساختار و اسکلت بتنی',
      'نازک‌کاری و تأسیسات',
    ],
    featured: false,
  },
  {
    slug: '106-unit-residential-complex',
    title: 'مجتمع ۱۰۶ واحدی مسکونی و محوطه‌سازی مرتبط',
    category: 'residential',
    categoryLabel: 'مسکونی',
    employer: 'بانک مسکن — شرکت پشتیبانی امور عمرانی',
    location: '—',
    status: 'completed',
    statusLabel: 'مستقیم شده',
    image:
      'https://images.pexels.com/photos/38449886/pexels-photo-38449886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'احداث مجتمع ۱۰۶ واحدی مسکونی به همراه عملیات محوطه‌سازی و زیرساخت.',
    scope: [
      'احداث ۱۰۶ واحد مسکونی',
      'محوطه‌سازی و زیرساخت',
      'تأسیسات مکانیکی و برقی',
    ],
    featured: false,
  },
  {
    slug: 'pardis-residential-projects',
    title: 'پروژه‌های مسکونی در پردیس',
    category: 'residential',
    categoryLabel: 'مسکونی',
    employer: 'شرکت عمران شهرهای جدید',
    location: 'پردیس — تهران',
    status: 'ongoing',
    statusLabel: 'در حال اجرا',
    image:
      'https://images.pexels.com/photos/16453466/pexels-photo-16453466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'احداث پروژه‌های مسکونی در شهرک پردیس به عنوان بخشی از سابقه ساخت حدود ۱۰۰۰ واحد مسکونی شرکت.',
    scope: [
      'احداث واحدهای مسکونی',
      'عملیات ساخت‌وساز کامل',
      'زیرساخت و محوطه‌سازی',
    ],
    featured: false,
  },
  {
    slug: 'parand-residential-projects',
    title: 'پروژه‌های مسکونی در پارند',
    category: 'residential',
    categoryLabel: 'مسکونی',
    employer: 'شرکت عمران شهرهای جدید',
    location: 'پارند — تهران',
    status: 'ongoing',
    statusLabel: 'در حال اجرا',
    image:
      'https://images.pexels.com/photos/5335018/pexels-photo-5335018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'احداث پروژه‌های مسکونی در شهرک پارند با پیشرفت فیزیکی متوسط حدود ۸۰ درصد در زمان تدوین پروفایل.',
    scope: [
      'احداث واحدهای مسکونی',
      'عملیات ساخت‌وساز کامل',
      'زیرساخت و محوطه‌سازی',
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
