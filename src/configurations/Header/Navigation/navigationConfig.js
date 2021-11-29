export const navigationConfig = [
  {
    id: 1,
    name: 'О НАС',
    to: '/about/',
    isDrop: true,
    isLink: true,
    dropContent: [
      {
        id: 1.1,
        name: 'КОМАНДА',
        to: '/team/'
      },
      {
        id: 1.2,
        name: 'ДОКУМЕНТЫ',
        to: '/documents/'
      },
      {
        id: 1.3,
        name: 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ',
        to: '/questions/'
      },
    ]
  },
  {
    id: 2,
    name: 'СЕКЦИИ',
    to: '/sections/',
    isDrop: true,
    isLink: true,
    dropContent: [
      {
        id: 2.1,
        name: 'ФУТБОЛ',
        to: '/sections/football'
      },
      {
        id: 2.2,
        name: 'ВОЛЕЙБОЛ',
        to: '/sections/voleyball'
      },
      {
        id: 2.3,
        name: 'ХОККЕЙ',
        to: '/sections/hockey'
      },
      {
        id: 2.4,
        name: 'BMX',
        to: '/sections/bmx'
      },
      {
        id: 2.5,
        name: 'КИКБОКСИНГ',
        to: '/sections/kickbox'
      },
      {
        id: 2.6,
        name: 'САМБО',
        to: '/sections/sambo'
      },
      {
        id: 2.7,
        name: 'ЛЫЖНЫЕ ГОНКИ',
        to: '/sections/ski'
      },
      {
        id: 2.8,
        name: 'ОФП',
        to: '/sections/ofp'
      },
      {
        id: 2.9,
        name: 'НАСТОЛЬНЫЙ ТЕННИС',
        to: '/sections/tennis'
      },
      {
        id: 210,
        name: 'ШАХМАТЫ',
        to: '/sections/chess'
      }
    ]
  },
  {
    id: 3,
    name: 'НОВОСТИ',
    to: '/news',
    isDrop: false,
    isLink: true,
    dropContent: []
  },
  {
    id: 4,
    name: 'МЕРОПРИЯТИЯ',
    to: '',
    isDrop: true,
    isLink: false,
    dropContent: [
      {
        id: 4.1,
        name: 'ПРЕДСТОЯЩИЕ МЕРОПРИЯТИЯ',
        to: '/upcoming-events/'
      },
      {
        id: 4.2,
        name: 'ПРОШЕДШИЕ МЕРОПРИЯТИЯ',
        to: '/past-events/'
      },
    ]
  },
  {
    id: 5,
    name: 'ПРОСТРАНСТВА',
    to: '/places/',
    isDrop: true,
    isLink: true,
    dropContent: [
      {
        id: 5.1,
        name: 'УЛИЧНЫЕ ПЛОЩАДКИ',
        to: '/places/street-areas'
      },
      {
        id: 5.2,
        name: 'КРЫТЫЕ ЗАЛЫ',
        to: '/places/indoor-areas'
      },
      {
        id: 5.3,
        name: 'ТРЕНАЖЁРНЫЕ ЗАЛЫ',
        to: '/places/gyms'
      },
      {
        id: 5.4,
        name: 'ВЕЛОТРЕК',
        to: '/places/biketrack'
      }
    ]
  },
  {
    id: 6,
    name: 'УСЛУГИ',
    to: '',
    isDrop: false,
    isLink: true,
    dropContent: []
  },
  {
    id: 7,
    name: 'КОНТАКТЫ',
    to: '/contacts/',
    isDrop: false,
    isLink: true,
    dropContent: []
  }
]