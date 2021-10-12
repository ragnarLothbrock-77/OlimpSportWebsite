export const areasByType = [
  {
    id: 1,
    type: 'street-areas',
    title: 'Открытые площадки',
    subtitle: 'Инфо о площадках в основном водичка. Инфо о площадках в основном водичка. Инфо о площадках в основном водичка. Инфо о площадках в основном водичка. Инфо о площадках в основном водичка. Инфо о площадках в основном водичка. Инфо о площадках в основном водичка. Инфо о площадках в основном водичка.',
    areas: [
      {
        id: 1.1,
        areasLocation: 'Красная Пахра , 9А',
        areasCards: [
          {
            id: '1.1.1',
            areaType: 'Футбольная площадка',
            areaImage: require('../../assets/images/placesImages/areasImages/streetAreas/footballArea/footbalOlimpArea-5.JPG').default,
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
                areaInfo: 'Искуственное',
              },
              {
                id: '1.1.1.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Футбол / Баскетбол',
              },
            ],
            areaInformation: [
              'Посещение площадки бесплатное', 'Искуственное свещение отсутствует', 'Ещё что нибудь такое подобное','Искуственное освещение отсутствует'
            ]
          },
          {
            id: '1.1.2',
            areaType: 'Силовая плошадка',
            areaImage: require('../../assets/images/placesImages/areasImages/streetAreas/workoutArea/workoutOlimpArea-4.JPG').default,
            areaShedule: '09:00 - 22:00',
            areaSpecifications: [
              {
                id: '1.1.2.1',
                areaInfoTitle: 'Площадь',
                areaInfo: '55 М',
                extraSimbol: '2'
              },
              {
                id: '1.1.2.2',
                areaInfoTitle: 'Покрытие',
                areaInfo: 'Искуственное',
              },
              {
                id: '1.1.2.3',
                areaInfoTitle: 'Виды активностей',
                areaInfo: 'Воркаут / Силовые',
              },
            ],
            areaInformation: [
              'Посещение площадки бесплатное', 'Искуственное свещение отсутствует', 'Ещё что нибудь такое подобное'
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
            mainInfoTitle: 'Красная Пахра, 9А',
            mainIconSize: '150',
            extraClass: 'main-bigger-text'
          },
          {
            id: 3,
            mainIcon: 'surface',
            mainInfoTitle: 'Искуственное',
            mainIconSize: '100',
            extraClass: ''
          }
        ],
        areasActivities: [
          {
            activitiesIconName: 'football',
            activitiesIconColor: '#92A1A6',
          },
          {
            activitiesIconName: 'basketball',
            activitiesIconColor: '#82A9B0',
          },
          {
            activitiesIconName: 'basketball',
            activitiesIconColor: '#3878A4',
          },
          {
            activitiesIconName: 'fittnes',
            activitiesIconColor: '#A7C2D3',
          }
        ]
      },
      
    ]
  }
]