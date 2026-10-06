import contentRu from './content-ru';

const ru = {
  ...contentRu,
  language: {
    english: 'Английский',
    russian: 'Русский',
    switch: 'Выбрать язык',
  },
  site: {
    title: 'Rah Gostar Valash Co. | Подрядчик в сфере дорожного строительства и инфраструктуры',
    titleTemplate: '%s | Rah Gostar Valash',
    description:
      'Rah Gostar Valash Co. имеет более 24 лет опыта в дорожном строительстве, строительстве зданий, городской инфраструктуре, водоснабжении и водоотведении, а также специализированных проектах гражданского строительства. Подрядчик категории 1 по автомобильным дорогам и транспорту, категории 3 по строительству зданий и категории 4 по водоснабжению.',
    keywords:
      'строительство дорог, подрядчик дорожного строительства, гражданское строительство, RCC-покрытие, стабилизация грунта цементом, строительство зданий, строительство мостов, инфраструктурные проекты, Rah Gostar Valash, RCC, инфраструктура, жилищное строительство',
  },
  home: {
    ...contentRu.home,
    metadataTitle:
      'Rah Gostar Valash Co. | Подрядчик по дорожному строительству и гражданскому строительству',
    metadataDescription:
      'Более двух десятилетий опыта в реализации проектов гражданского строительства и инфраструктуры: дороги, мосты, RCC, стабилизация грунта, здания и жилищное строительство.',
    identifier: 'RAH GOSTAR VALASH',
    industry: 'ГРАЖДАНСКОЕ СТРОИТЕЛЬСТВО И ИНФРАСТРУКТУРА',
  },
  cta: {
    heading: 'Готовы участвовать в реализации ваших проектов гражданского строительства и инфраструктуры',
    description:
      'Более двух десятилетий опыта, специализированная техника и действующие подрядные квалификации позволяют Rah Gostar Valash рассмотреть требования вашего проекта.',
  },
  header: {
    homeLabel: contentRu.nav.homeLink,
    navigationLabel: contentRu.nav.mainNavigation,
    mobileNavigationLabel: contentRu.nav.mobileNavigation,
    openMenu: contentRu.nav.openMenu,
    closeMenu: contentRu.nav.closeMenu,
  },
};

export default ru;
