export const placesConfig = [
  {
    id: 1,
    title: 'Открытые Площадки',
    subtitle: 'Открытые площадки СК Олимп представляют собой современные пространства для занятий спортом. Каждая из площадок имеет несколько сценариев использования и пригодна для занятий спортом разных направлений таких как: футбол, волейбол, хоккей, баскетбол, воркаут и даже теннис. Площадь пощадок от 20 до 60 квадратных метров. Некоторые из площадок имеют искуственное освещение. ',
    to: '/places/street-areas',
    areas: [
      {
        id: 1.1,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-1.jpg').default,
        placeName: 'Площадка Красная Пахра, 11',
        placeDescription: 'Многофункциональная площадка для занятий игровыми видами спорта. Оборудована футбольными воротами и баскетбольными кольцами',
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small' 
      },
      {
        id: 1.2,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-2.jpg').default,
        placeName: 'Площадка Красная Пахра, 11',
        placeDescription: 'Площадка для занятий силовыми видами спорта и воркаутом. Оснащена современными тренажёрами',
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small'  
      },
      {
        id: 1.3,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-3.jpg').default,
        placeName: 'Площадка Былово, 8А',
        placeDescription: 'Площадка в селе Былово оборудована инвентарём для занятий воркаутом и силовыми тренировками' ,
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small' 
      },
      {
        id: 1.4,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-4.jpg').default,
        placeName: 'Площадка Красная Пахра, 20',
        placeDescription: 'Площадка для занятий хоккеем в зимний период. Летом покрыта искусственным газоном для занятий футболом',
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small'  
      },
      {
        id: 1.5,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-5.jpg').default,
        placeName: 'Площадка Красная Пахра, 20',
        placeDescription: 'Многофункциональная площадка для занятий спортом. Может использоваться как футбольная и волейбольная площадка или как тенесный корт' ,
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small' 
      }
    ]
  },
  {
    id: 2,
    title: 'Крытые Залы',
    subtitle: 'Крытые залы СК Олимп представляют собой современные пространства для занятий спортом. Каждый зал оборудован для использования в определённых направлениях спорта. Два зала имеют покрытие из матов на полу и предназначены в основным для боевых единоборств. Площадь залов от 30 до 60 квадратных метров. Все залы имеют искуственное освещение. ',
    to: '/places/indoor-areas',
    areas: [
      {
        id: 2.1,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-6.jpg').default,
        placeName: 'Зал Красная Пахра, 11',
        placeDescription: 'Зал для занятий боевыми единоборствами. Покрытие пола - маты. Может использоваться как зал для кардио тренировок.' ,
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small' 
      },
      {
        id: 2.2,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-7.jpg').default,
        placeName: 'Зал Красная Пахра, 20',
        placeDescription: 'Зал для занятий волейболом. Покрытие пола - паркет. Оборудован волейбольной сеткой. Также используется для занятий футболом. ' ,
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small' 
      },
      {
        id: 2.3,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-8.jpg').default,
        placeName: 'Зал Былово, 8А',
        placeDescription: 'Зал для занятий боевыми единоборствами. Покрытие пола - маты. Может использоваться как зал для кардио тренировок.' ,
        imageStyle: 'places-decor-image-small',
        extraCls: 'places-item-small' 
      }
    ]
  },
  {
    id: 3,
    title: 'Тренажёрные залы',
    subtitle: 'Тренажёрные залы СК Олимп представляют собой современные пространства для занятий силовыми видами спорта. Каждый из залов оборудован специализированнми тренажёрами и большим ассортиментом силового инвентаря. Площадь залов 25 квадратных метров. Все залы имеют искуственное освещение.',
    to: '/places/gyms/',
    areas: [
      {
        id: 3.1,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-9.jpg').default,
        placeName: 'Тренажёраный зал Красная Пахра, 11',
        placeDescription: 'Тренажёрный зал оснащён всем необходимым инвентарём для занятий силовыми тренировками. Имеются тренажёры для кардио нагрузок.',
        imageStyle: 'places-decor-image-medium',
        extraCls: 'places-item-medium'  
      },
      {
        id: 3.2,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-10.jpg').default,
        placeName: 'Тренажёрный зал Красная Пахра, 20',
        placeDescription: 'Тренажёрный зал оснащён всем необходимым инвентарём для занятий силовыми тренировками. Имеются тренажёры для кардио нагрузок.',
        imageStyle: 'places-decor-image-medium',
        extraCls: 'places-item-medium'  
      }
    ]
  },
  {
    id: 4,
    title: 'Велотрек',
    subtitle: 'Велотрек СК Олимп представляет собой современную площадку для занятий велогонками BMX. Один из лучших треков Москвы и ТиНАО. Неоднократно принимал крупные Московские соревнования по велогонкам. Трек грунтовый с искусвенно возведёнными холмами. За поверхностью велотрека ведётся постоянный уход. Трек оборудован трибунами для болельщиков. Имеет искуственное освещение.',
    to: '/places/biketrack/',
    areas: [
      {
        id: 4.1,
        placeImage: require('../../assets/images/placesImages/mainAreasImages/place-11.jpg').default,
        placeName: 'Велотрек Олимп',
        placeDescription: '',
        imageStyle: 'places-decor-image-large',
        extraCls: 'places-item-large'  
      }
    ]
  }
]