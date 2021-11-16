export const areasByType = [
  {
    id: 1,
    type: 'street-areas',
    title: 'Открытые площадки',
    subtitle: 'Открытые площадки СК Олимп представляют собой современные пространства для занятий спортом. Каждая из площадок имеет несколько сценариев использования и пригодна для занятий спортом разных направлений таких как: футбол, волейбол, хоккей, баскетбол, воркаут и даже теннис. Площадь пространств от 20 до 60 квадратных метров. Некоторые из площадок имеют искусственное освещение. ',
    icon: 'area',
    areas: [
      {
        id: 1.1,
        areasLocation: 'Красная Пахра , 9А',
        areasCards: [
          {
            id: '1.1.1',
            areaType: 'Футбольная площадка',
            areaImage: require('../../assets/images/placesImages/areasImages/streetAreas/olimp/footbalOlimpArea.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '1.1.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '40 М',
                extraSimbol: '2'
              },
              {
                id: '1.1.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Искусственное',
              },
              {
                id: '1.1.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Футбол / Баскетбол',
              },
            ],
            areaInformation: [
              'Посещение площадки бесплатное', 'Искусственное освещение отсутствует', 'Площадка открыта с 9:00 до 22:00', 'Сменная обувь желательна'
            ]
          },
          {
            id: '1.1.2',
            areaType: 'Силовая плошадка',
            areaImage: require('../../assets/images/placesImages/areasImages/streetAreas/olimp/workoutOlimpArea.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '1.1.2.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '35 М',
                extraSimbol: '2'
              },
              {
                id: '1.1.2.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Искусственное',
              },
              {
                id: '1.1.2.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Воркаут / Силовые',
              },
            ],
            areaInformation: [
              'Посещение площадки платное', 'Искусственное освещение отсутствует', 'Площадка открыта с 9:00 до 22:00', 'Сменная обувь желательна'
            ]
          },
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: 'ОТ 35 ДО 40 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Красная Пахра, 9А',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Искусственное',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '1.1-icon-1',
            activitiesIconName: 'football',
            activitiesIconColor: '#92A1A6',
          },
          {
            id: '1.1-icon-2',
            activitiesIconName: 'basketball',
            activitiesIconColor: '#82A9B0',
          },
          {
            id: '1.1-icon-3',
            activitiesIconName: 'basketball',
            activitiesIconColor: '#3878A4',
          },
          {
            id: '1.1-icon-4',
            activitiesIconName: 'ofp',
            activitiesIconColor: '#A7C2D3',
          }
        ]
      },
      {
        id: 1.2,
        areasLocation: 'Красная Пахра , 20',
        areasCards: [
          {
            id: '1.2.1',
            areaType: 'Хокейная площадка',
            areaImage: require('../../assets/images/placesImages/areasImages/streetAreas/pahra/hockeyPahraAria.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '1.2.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '40 М',
                extraSimbol: '2'
              },
              {
                id: '1.2.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Лёд / Искусственное',
              },
              {
                id: '1.2.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Хоккей / Футбол',
              },
            ],
            areaInformation: [
              'Посещение площадки бесплатное', 'Искусственное освещение', 'Площадка открыта с 9:00 до 22:00', 'В зимнее период возможна аренда коньков'
            ]
          },
          {
            id: '1.2.2',
            areaType: 'Футбольная плошадка',
            areaImage: require('../../assets/images/placesImages/areasImages/streetAreas/pahra/footbalPahraAria.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '1.2.2.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '55 М',
                extraSimbol: '2'
              },
              {
                id: '1.2.2.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Искусственное',
              },
              {
                id: '1.2.2.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Футбол / Волейбол',
              },
            ],
            areaInformation: [
              'Посещение площадки бесплатное', 'Искусственное освещение', 'Площадка открыта с 9:00 до 22:00', 'Сменная обувь желательна'
            ]
          },
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: 'ОТ 40 ДО 55 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Красная Пахра, 20',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Искусственное / Лёд',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '1.2-icon-1',
            activitiesIconName: 'football',
            activitiesIconColor: '#92A1A6',
          },
          {
            id: '1.2-icon-2',
            activitiesIconName: 'voleyball',
            activitiesIconColor: '#82A9B0',
          },
          {
            id: '1.2-icon-3',
            activitiesIconName: 'basketball',
            activitiesIconColor: '#3878A4',
          },
          {
            id: '1.2-icon-4',
            activitiesIconName: 'hockey',
            activitiesIconColor: '#A7C2D3',
          }
        ]
      },
      {
        id: 1.3,
        areasLocation: 'Былово, 8А',
        areasCards: [
          {
            id: '1.3.1',
            areaType: 'Спортивная площадка',
            areaImage: require('../../assets/images/placesImages/areasImages/streetAreas/bilovo/workoutBilovoAria.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '1.3.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '25 М',
                extraSimbol: '2'
              },
              {
                id: '1.3.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Искусственное',
              },
              {
                id: '1.3.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Воркаут / Силовые',
              },
            ],
            areaInformation: [
              'Посещение площадки бесплатное', 'Искусственное освещение отсутствует', 'Площадка открыта с 9:00 до 22:00'
            ]
          }
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: '25 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Былово, 8А',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Искусственное',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '1.3-icon-1',
            activitiesIconName: 'fittnes',
            activitiesIconColor: '#92A1A6',
          },
          {
            id: '1.3-icon-2',
            activitiesIconName: 'ofp',
            activitiesIconColor: '#82A9B0',
          }
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'indoor-areas',
    title: 'Крытые залы',
    subtitle: 'Крытые залы СК Олимп представляют собой современные пространства для занятий спортом. Каждый зал оборудован для использования в определённых направлениях спорта. Два зала имеют покрытие из матов на полу и предназначены в основным для боевых единоборств. Площадь залов от 30 до 60 квадратных метров. Все залы имеют искусственное освещение. ',
    icon: 'close-area',
    areas: [
      {
        id: 2.1,
        areasLocation: 'Красная Пахра , 9А',
        areasCards: [
          {
            id: '2.1.1',
            areaType: 'Зал для единоборств',
            areaImage: require('../../assets/images/placesImages/areasImages/indoorAreas/olimp/indoorOlimpArea.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '2.1.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '50 М',
                extraSimbol: '2'
              },
              {
                id: '2.1.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Маты',
              },
              {
                id: '2.1.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Кикбоксинг / Самбо',
              },
            ],
            areaInformation: [
              'Посещение зала в рамках занятий в секциях', 'Искусственное освещение', 'Зал открыт с 9:00 до 22:00','Сменная обувь обязательна'
            ]
          }
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: '50 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Красная Пахра, 9А',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Маты',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '2.1-icon-1',
            activitiesIconName: 'kickbox',
            activitiesIconColor: '#92A1A6',
          },
          {
            id: '2.1-icon-2',
            activitiesIconName: 'sambo',
            activitiesIconColor: '#82A9B0',
          }
        ]
      },
      {
        id: 2.2,
        areasLocation: 'Красная Пахра , 20',
        areasCards: [
          {
            id: '2.2.1',
            areaType: 'Волейбольный зал',
            areaImage: require('../../assets/images/placesImages/areasImages/indoorAreas/pahra/indoorPahraArea.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '2.2.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '60 М',
                extraSimbol: '2'
              },
              {
                id: '2.2.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Паркет',
              },
              {
                id: '2.2.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Волейбол / Футбол',
              },
            ],
            areaInformation: [
              'Посещение зала в рамках занятий в секциях', 'Искусственное освещение', 'Зал открыт с 9:00 до 22:00','Сменная обувь обязательна'
            ]
          }
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: '60 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Красная Пахра, 20',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Паркет',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '2.2-icon-1',
            activitiesIconName: 'voleyball',
            activitiesIconColor: '#82A9B0',
          },
          {
            id: '2.2-icon-2',
            activitiesIconName: 'football',
            activitiesIconColor: '#3878A4',
          }
        ]
      },
      {
        id: 2.3,
        areasLocation: 'Былово, 8А',
        areasCards: [
          {
            id: '2.3.1',
            areaType: 'Зал для единоборств',
            areaImage: require('../../assets/images/placesImages/areasImages/indoorAreas/bilovo/indoorBilovoArea.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '2.3.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '40 М',
                extraSimbol: '2'
              },
              {
                id: '2.3.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Маты',
              },
              {
                id: '2.3.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Кудо / Кикбоксинг',
              },
            ],
            areaInformation: [
              'Посещение зала в рамках занятий в секциях', 'Искусственное освещение', 'Зал открыт с 9:00 до 22:00','Сменная обувь обязательна'
            ]
          }
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: '40 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Былово, 8А',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Маты',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '2.3-icon-1',
            activitiesIconName: 'kickbox',
            activitiesIconColor: '#92A1A6',
          },
          {
            id: '2.3-icon-2',
            activitiesIconName: 'sambo',
            activitiesIconColor: '#82A9B0',
          }
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'gyms',
    title: 'Тренажёрные залы',
    subtitle: 'Тренажёрные залы СК Олимп представляют собой современные пространства для занятий силовыми видами спорта. Каждый из залов оборудован специализированными тренажёрами и большим ассортиментом силового инвентаря. Площадь залов 25 квадратных метров. Все залы имеют искусственное освещение.',
    icon: 'gym',
    areas: [
      {
        id: 3.1,
        areasLocation: 'Красная Пахра , 9А',
        areasCards: [
          {
            id: '3.1.1',
            areaType: 'Тренажёрный зал',
            areaImage: require('../../assets/images/placesImages/areasImages/gyms/olimp/gymOlimp.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '3.1.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '20 М',
                extraSimbol: '2'
              },
              {
                id: '3.1.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Паркет',
              },
              {
                id: '3.1.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Силовые',
              },
            ],
            areaInformation: [
              'Посещение зала платное', 'Искусственное освещение', 'Зал открыт с 9:00 до 22:00','Сменная обувь обязательна'
            ]
          }
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: '20 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Красная Пахра, 9А',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Паркет',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '3.1-icon-1',
            activitiesIconName: 'fittnes',
            activitiesIconColor: '#92A1A6',
          },
          {
            id: '3.1-icon-2',
            activitiesIconName: 'ofp',
            activitiesIconColor: '#82A9B0',
          }
        ]
      },
      {
        id: 3.2,
        areasLocation: 'Красная Пахра , 20',
        areasCards: [
          {
            id: '3.2.1',
            areaType: 'Тренажёрный зал',
            areaImage: require('../../assets/images/placesImages/areasImages/gyms/pahra/gymPahra.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '3.2.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '25 М',
                extraSimbol: '2'
              },
              {
                id: '3.2.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Настил',
              },
              {
                id: '3.2.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Силовые',
              },
            ],
            areaInformation: [
              'Посещение зала платное', 'Искусственное освещение', 'Зал открыт с 9:00 до 22:00','Сменная обувь обязательна'
            ]
          }
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: '25 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Красная Пахра, 20',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Настил',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '3.2-icon-1',
            activitiesIconName: 'fittnes',
            activitiesIconColor: '#92A1A6',
          },
          {
            id: '3.2-icon-2',
            activitiesIconName: 'ofp',
            activitiesIconColor: '#82A9B0',
          }
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'biketrack',
    title: 'Велотрек',
    subtitle: 'Велотрек СК Олимп представляет собой современную площадку для занятий велогонками BMX. Один из лучших треков Москвы и ТиНАО. Неоднократно принимал крупные Московские соревнования по велогонкам. Трек грунтовый с искусственно возведёнными холмами. За поверхностью велотрека ведётся постоянный уход. Трек оборудован трибунами для болельщиков. Имеет искусственное освещение.',
    icon: 'biketrack',
    areas: [
      {
        id: 4.1,
        areasLocation: 'Красная Пахра , 9А',
        areasCards: [
          {
            id: '4.1.1',
            areaType: 'Веллотрек',
            areaImage: require('../../assets/images/placesImages/areasImages/biketrack/biketrackOlimp.jpg').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '4.1.1.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '300 М',
                extraSimbol: '2'
              },
              {
                id: '4.1.1.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Грунт',
              },
              {
                id: '4.1.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'BMX',
              },
            ],
            areaInformation: [
              'Посещение велотрека в рамках занятий в секции BMX', 'Возможна аренда велотрека для тренировок', 'Искусственное освещение', 'Велотрек открыт с 9:00 до 22:00'
            ]
          }
        ],
        areasMainInfo: [
          {
            id: 1,
            mainIcon: 'size',
            mainInfoTitle: '300 М',
            extraSimbol: '2',
            mainIconSize: '100',
            extraClass: ''
          },
          {
            id: 2,
            mainIcon: 'map',
            mainInfoTitle: 'Красная Пахра, 9А',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Грунт',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            id: '4-icon-1',
            activitiesIconName: 'bmx',
            activitiesIconColor: '#92A1A6',
          }
        ]
      }
    ]
  }
]