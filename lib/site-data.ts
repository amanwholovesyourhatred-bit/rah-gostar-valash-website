export const siteConfig = {
  name: 'راه گستر ولاش',
  fullName: 'شرکت راه گستر ولاش',
  legalName: 'Rah Gostar Valash Co.',
  shortDescription:
    'مجری پروژه‌های راه‌سازی، ابنیه، زیرساخت‌های شهری، آب و فاضلاب و پروژه‌های تخصصی عمرانی',
  established: 1379,
  experienceYears: 24,
  url: 'https://rahgostarvalash.ir',
  contact: {
    address: 'اطلاعات تماس پس از تأیید نهایی درج خواهد شد',
    phone: '—',
    email: '—',
    workingHours: 'شنبه تا چهارشنبه، ۸:۰۰ تا ۱۷:۰۰',
  },
};

export const mainNav = [
  { title: 'صفحه اصلی', href: '/' },
  { title: 'درباره ما', href: '/about' },
  { title: 'حوزه‌های فعالیت', href: '/expertise' },
  { title: 'پروژه‌ها', href: '/projects' },
  { title: 'توانمندی‌های فنی', href: '/capabilities' },
  { title: 'ماشین‌آلات و تجهیزات', href: '/equipment' },
  { title: 'گواهینامه‌ها و صلاحیت‌ها', href: '/qualifications' },
  { title: 'تماس با ما', href: '/contact' },
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
    number: '۰۱',
    title: 'راه‌سازی و زیرساخت حمل‌ونقل',
    titleEn: 'Road & Transportation Infrastructure',
    description:
      'احداث راه‌های برون‌شهری، محورهای ارتباطی و جاده‌های دسترسی با عملیات خاکی، بسترسازی، روسازی و آسفالت‌کاری.',
    image:
      'https://images.pexels.com/photos/5504658/pexels-photo-5504658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#road-infra',
  },
  {
    id: 'bridges',
    number: '۰۲',
    title: 'پل‌ها و تقاطع‌های غیرهمسطح',
    titleEn: 'Bridges & Interchanges',
    description:
      'احداث پل‌ها و تقاطع‌های غیرهمسطح شهری و برون‌شهری، بهسازی لرزه‌ای و مقاوم‌سازی پل‌های موجود.',
    image:
      'https://images.pexels.com/photos/7107980/pexels-photo-7107980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#bridges',
  },
  {
    id: 'rcc',
    number: '۰۳',
    title: 'روسازی بتن غلتکی (RCC)',
    titleEn: 'Roller Compacted Concrete Pavement',
    description:
      'اجرای روسازی بتن غلتکی با بتنی با اسلمپ صفر، اجرا با فینیشر آسفالت و متراکم‌کننده‌های لرزه‌ای.',
    image:
      'https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/capabilities/rcc',
  },
  {
    id: 'soil-stab',
    number: '۰۴',
    title: 'تثبیت خاک با سیمان',
    titleEn: 'Cement Soil Stabilization',
    description:
      'تثبیت درجای خاک با دستگاه‌های WR/WM برای افزایش مقاومت، کاهش تورم و بهبود مشخصات پلاستیسیته.',
    image:
      'https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/capabilities/soil-stabilization',
  },
  {
    id: 'building',
    number: '۰۵',
    title: 'ابنیه و ساختمان',
    titleEn: 'Building Construction',
    description:
      'اجرای ساختمان‌های اداری، آموزشی و عمومی از مرحله خاکی تا پایان کار، تأسیسات مکانیکی و برقی و نازک‌کاری.',
    image:
      'https://images.pexels.com/photos/8961071/pexels-photo-8961071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#building',
  },
  {
    id: 'residential',
    number: '۰۶',
    title: 'پروژه‌های مسکونی',
    titleEn: 'Residential Construction',
    description:
      'احداث مجتمع‌های مسکونی شامل حدود ۱۰۰۰ واحد مسکونی و بیش از ۱٫۵ میلیون متر مربع ساخت در تهران و قم.',
    image:
      'https://images.pexels.com/photos/34360408/pexels-photo-34360408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#residential',
  },
  {
    id: 'precast',
    number: '۰۷',
    title: 'دیوارهای بتنی پیش‌ساخته',
    titleEn: 'Precast Concrete Walls',
    description:
      'تولید و نصب دیوارهای بتنی پیش‌ساخته برای مرزها، محوطه‌ها و پروژه‌های امنیتی و صنعتی.',
    image:
      'https://images.pexels.com/photos/39962550/pexels-photo-39962550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#precast',
  },
  {
    id: 'water',
    number: '۰۸',
    title: 'آب و فاضلاب',
    titleEn: 'Water & Wastewater',
    description:
      'اجرای شبکه‌های آب و فاضلاب، خطوط انتقال و پروژه‌های مرتبط با زیرساخت‌های آبی.',
    image:
      'https://images.pexels.com/photos/32502650/pexels-photo-32502650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    href: '/expertise#water',
  },
  {
    id: 'urban-infra',
    number: '۰۹',
    title: 'محوطه‌سازی و زیرساخت‌های شهری',
    titleEn: 'Urban Infrastructure & Site Development',
    description:
      'احداث معابر، زیرساخت‌های شهری، محوطه‌سازی و عملیات بهسازی محیطی در مقیاس پروژه‌های بزرگ.',
    image:
      'https://images.pexels.com/photos/8860492/pexels-photo-8860492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
    label: 'سال تجربه اجرایی',
    sublabel: 'فعالیت مستمر از سال ۱۳۷۹',
  },
  {
    value: 1,
    label: 'رتبه راه و ترابری',
    sublabel: 'پایه ۱ — پیمانکار',
  },
  {
    value: 3,
    label: 'رتبه ابنیه و ساختمان',
    sublabel: 'پایه ۳ — پیمانکار',
  },
  {
    value: 4,
    label: 'رتبه آب',
    sublabel: 'پایه ۴ — پیمانکار',
  },
];

export type Employer = {
  name: string;
  type: string;
};

export const employers: Employer[] = [
  { name: 'سازمان راهداری و مدیریت راه‌های کشور', type: 'دولتی' },
  { name: 'شرکت عمران شهرهای جدید', type: 'دولتی' },
  { name: 'وزارت راه و شهرسازی', type: 'دولتی' },
  { name: 'شهرداری‌ها و فرمانداری‌ها', type: 'عمومی' },
  { name: 'سازمان صنایع معدنی و معادن', type: 'صنعتی' },
  { name: 'شرکت‌های سیمان منطقه‌ای', type: 'صنعتی' },
  { name: 'سازمان مدیریت و برنامه‌ریزی کشور', type: 'دولتی' },
  { name: 'بانک مسکن — شرکت پشتیبانی امور عمرانی', type: 'دولتی' },
];
