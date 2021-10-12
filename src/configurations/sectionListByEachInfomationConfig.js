export const sectionListByEachInfomationConfig = [
  {
    id: 1,
    type: 'football',
    previewTitle: 'Футбольная секция',
    previewSubtitle: 'Занятия в изостудии «Апельсин» развивают художественные способности, ассоциативное мышление и зрительно-образную память у детей и подростков. ',
    previewImage: require('../assets/images/11.jpeg').default,
    age: '4 до 16',
    group: 'футбол',
    mainInfo: 'Анимация — это всегда игра, полет фантазии и безграничные возможности. Мультфильмы любят даже взрослые. В медиаиндустрии профессия аниматор является самой востребованной. На занятиях ребята попробуют себя в разных ролях на съемочной площадке, а также узнают все этапы создания мультфильма: от идеи до показа на экране. В процессе реализации творческого замысла дети обретут навыки по написанию сценария, съемке и монтажу видео — это поможет им при выборе будущей профессии.',
    advantages: [
      {
        id: 1.1,
        text: 'Каждое занятие - анимационный ролик или GIF'
      },
      {
        id: 1.2,
        text: 'Большие проекты и работа в команде'
      },
      {
        id: 1.3,
        text: 'У каждого участника портфолио собственных анимационных работ'
      },
      {
        id: 1.4,
        text: 'Базовые навыки съемки и монтажа видео'
      },
      {
        id: 1.5,
        text: 'Комфортное пространство для общения и творчества'
      }
    ],
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Сергей Соловьёв', 
      groupPrice: '2000',
      groupDuration: '60',
      groupLocation: 'Красная Пахра , 20',
      groupAge: '7 - 8',
      groupFormat: 'Младшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '16:00 - 17:00'
        },
        {
          id: 2,
          sheduleDay: 'Среда',
          sheduleTime: '16:00 - 17:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе 20 детей',
        'Сменная обувь и форма покупается родителями',
        'Занятия проходят на современных площадках с исскуственным покрытием',
        'Упор делается на развитие физических способностей ребёнка',
        'Ещё что-нибудь такое',
      ],
      groupImage: require('../assets/images/group-1.jpeg').default
     },
     {
      id: 'group-2',
      groupCoach: 'Сергей Соловьёв', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Былово',
      groupAge: '8 - 11',
      groupFormat: 'Средняя группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '17:30 - 19:00'
        },
        {
          id: 2,
          sheduleDay: 'Среда',
          sheduleTime: '17:30 - 19:00'
        },
        {
          id: 3,
          sheduleDay: 'Четверг',
          sheduleTime: '17:30 - 19:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе 20 детей',
        'Сменная обувь и форма покупается родителями',
        'Занятия проходят на современных площадках с исскуственным покрытием',
        'Упор делается на развитие физических способностей ребёнка',
        'Ещё что-нибудь такое',
      ],
      groupImage: require('../assets/images/group-2.jpeg').default
     },
     {
      id: 'group-3',
      groupCoach: 'Андрей Соловьёв', 
      groupPrice: 'Бесплатно',
      groupDuration: '90 - 120',
      groupLocation: 'Былово',
      groupAge: '11 - 14',
      groupFormat: 'Старшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Четверг',
          sheduleTime: '19:00 - 20:30'
        },
        {
          id: 2,
          sheduleDay: 'Суббота',
          sheduleTime: '11:00 - 13:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе 20 детей',
        'Сменная обувь и форма покупается родителями',
        'Занятия проходят на современных площадках с исскуственным покрытием',
        'Упор делается на развитие физических способностей ребёнка',
        'Ещё что-нибудь такое',
      ],
      groupImage: require('../assets/images/group-3.jpeg').default
     },
     {
      id: 'group-4',
      groupCoach: 'Сергей Соловьёв', 
      groupPrice: 'Бесплатно',
      groupDuration: '60 - 90',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '18 +',
      groupFormat: 'Взрослые',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Среда',
          sheduleTime: '21:00 - 22:30'
        },
        {
          id: 2,
          sheduleDay: 'Пятница',
          sheduleTime: '21:30 - 22:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе 20 детей',
        'Сменная обувь и форма покупается родителями',
        'Занятия проходят на современных площадках с исскуственным покрытием',
        'Упор делается на развитие физических способностей ребёнка',
        'Ещё что-нибудь такое',
      ],
      groupImage: require('../assets/images/group-4.jpeg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Сергей Соловьёв',
       coachAge: '28',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../assets/images/personalPhoto/SolovyovSergey-1.png').default,
       extraClass: 'left-item'
     },
     {
      id: 2,
      coachName: 'Андрей Соловьёв',
      coachAge: '29',
      coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
      coachPhoto: require('../assets/images/personalPhoto/SolovyovSergey-2.png').default,
       extraClass: 'right-item'
    }
   ],
  },
  {
    id: 2,
    type: 'bmx',
    text: 'Это страница про BMX',
  },
  {
    id: 3,
    type: 'hockey',
    text: 'Это страница про Хоккей',
  }
]