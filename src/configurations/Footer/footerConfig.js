export const footerConfig = [
  {
    id: 1,
    title: 'О НАС',
    to: '/about/',
    links: [
      {
        id: 1.1,
        name: 'Документы',
        to: '/documents/',
        isLink: true
      },
      {
        id: 1.2,
        name: 'Независимая оценка',
        to: '/',
        isLink: true
      },
      {
        id: 1.3,
        name: 'Новости',
        to: '/news/',
        isLink: true
      },
      {
        id: 1.4,
        name: 'Услуги',
        to: '/services/',
        isLink: true
      }
    ]
  },
  {
    id: 2,
    title: 'СЕКЦИИ',
    to: '/sections/',
    links: [
      {
        id: 2.1,
        name: 'Футбол',
        to: '/sections/football/',
        isLink: true
      },
      {
        id: 2.2,
        name: 'Волейбол',
        to: '/sections/voleyball/',
        isLink: true
      },
      {
        id: 2.3,
        name: 'BMX',
        to: '/sections/bmx/',
        isLink: true
      },
      {
        id: 2.4,
        name: 'Все секции',
        to: '/sections/',
        isLink: true
      }
    ]
  },
  {
    id: 3.3,
    title: 'КОНТАКТЫ',
    to: '/contacts/',
    links: [
      {
        id: 3.1,
        to: '/',
        name: 'Телефон: + 7 495 850-83-89',
        isLink: true,
        isMedia: true,
        type: 'tel:+74958508389'
      },
      {
        id: 3.2,
        name: '108828 г.Москва,п.Краснопахорское, с.Красная Пахра, 11',
        isLink: false
      },
      {
        id: 3.3,
        name: 'Ежедневно с 09:00 до 22:00',
        isLink: false
      },
      {
        id: 3.4,
        name: 'Почта: Olimp.post@inbox.ru',
        isLink: true,
        isMedia: true,
        type: 'mailto:Olimp.post@inbox.ru'
      }
    ]
  }
]