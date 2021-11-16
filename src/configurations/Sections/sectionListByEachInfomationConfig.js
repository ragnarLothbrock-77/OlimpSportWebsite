export const sectionListByEachInfomationConfig = [
  {
    id: 1,
    type: 'football',
    previewTitle: 'Футбольная секция',
    previewSubtitle: 'Эффективная методика тренировок. Большой опыт тренеров. Программы, адаптированные для самых молодых спортсменов. Энтузиазм, азарт и дисциплина!',
    previewImage: require('../../assets/images/sectionsImages/football/football-prev-image.jpg').default,
    age: '7 до 18',
    group: 'футбол',
    amount: 'multi-coach',
    link: 'multi-coach-link',
    mainInfo: 'Футбол – простой и универсальный вид спорта. Это не только игра с мячом, а настоящая комплексная тренировка, которая укрепляет здоровье, психику и поддерживает тело в лучшей форме! Активная игра вынуждает быстро принимать решения. Это способствует повышению концентрации, а необходимость постоянно оценивать ситуацию на поле развивает умственные способности. Не стоит забывать что на данный момент футбол игра в мире номер один. ',
    advantages: [
      {
        id: 1.1,
        text: 'Развитие выносливости'
      },
      {
        id: 1.2,
        text: 'Укрепление физической формы'
      },
      {
        id: 1.3,
        text: 'Тренировка навыков: растяжки, координации'
      },
      {
        id: 1.4,
        text: 'Преобретение командных навыков важны для личностного развития'
      },
      {
        id: 1.5,
        text: 'Улучшение психологического здоровья'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/football/football-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Сергей Соловьёв', 
      groupPrice: '2000',
      groupDuration: '60',
      groupLocation: 'Красная Пахра, Заводская 20',
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
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: футболка и шорты, футбольные бутсы',
        'Занятия проходят на современных площадках с искусственным покрытием',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/football/groupsImages/football-group-1.jpg').default
     },
     {
      id: 'group-2',
      groupCoach: 'Сергей Соловьёв', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра, Заводская 20',
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
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: футболка и шорты, футбольные бутсы',
        'Занятия проходят на современных площадках с искусственным покрытием',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/football/groupsImages/football-group-2.jpg').default
     },
     {
      id: 'group-3',
      groupCoach: 'Андрей Соловьёв', 
      groupPrice: 'Бесплатно',
      groupDuration: '90 - 120',
      groupLocation: 'Красная Пахра, Заводская 20',
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
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: футболка и шорты, футбольные бутсы',
        'Занятия проходят на современных площадках с искусственным покрытием',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/football/groupsImages/football-group-3.jpg').default
     },
     {
      id: 'group-4',
      groupCoach: 'Сергей Соловьёв', 
      groupPrice: 'Бесплатно',
      groupDuration: '60 - 90',
      groupLocation: 'Красная Пахра, Заводская 20',
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
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: футболка и шорты, футбольные бутсы',
        'Занятия проходят на современных площадках с искусственным покрытием',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/football/groupsImages/football-group-4.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Сергей Соловьёв',
       coachAge: '28',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/SergeySoloviyov.png').default,
       extraClass: 'left-item',
       coachItemSize: 'multi-coach-item'
       
     },
     {
      id: 2,
      coachName: 'Андрей Соловьёв',
      coachAge: '29',
      coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
      coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/tamplatePersonR.png').default,
      extraClass: 'right-item second-coach',
      coachItemSize: 'multi-coach-item'
    }
   ],
  },
  {
    id: 2,
    type: 'bmx',
    previewTitle: 'BMX Велоспорт',
    previewSubtitle: 'Потрясающий велотрек. Эффективная методика тренировок. Большой опыт тренера. Программы, адаптированные для самых молодых спортсменов.',
    previewImage: require('../../assets/images/sectionsImages/BMX/bmx-prev-image.jpg').default,
    age: '5 до 15',
    group: 'велоспорт',
    amount: 'single-coach',
    link: 'single-coach-link-left',
    mainInfo: 'BMX — один из самых сложных видов велоспорта. Выполнение трюков требует от спортсмена определенных навыков. Но прежде чем освоить их, необходимо научиться уверенной езде на классическом велосипеде. Это могут сделать родители или тренер. В некоторых секциях для детей 3-4 лет проводят занятия на двухколесных велосипедах или беговелах. К 5-6 годам ребята уже владеют навыками, которые помогут им развиваться выбранном направлении BMX. ',
    advantages: [
      {
        id: 1.1,
        text: 'Повысит самооценку и добавит уверенности в себе'
      },
      {
        id: 1.2,
        text: 'Развитие выносливости и скорости мышления'
      },
      {
        id: 1.3,
        text: 'BMX - заряд положительных эмоций'
      },
      {
        id: 1.4,
        text: 'Тренирует сердце, сосуды и органы дыхания'
      },
      {
        id: 1.5,
        text: 'Делает тело спортивным и подтянутым'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/BMX/bmx-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Татьяна Карабак', 
      groupPrice: 'Бесплатно',
      groupDuration: '60 - 120',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '5 - 8',
      groupFormat: 'Младшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Среда',
          sheduleTime: '17:00 - 18:00'
        },
        {
          id: 2,
          sheduleDay: 'Суббота',
          sheduleTime: '13:15 - 14:45'
        },
        {
          id: 3,
          sheduleDay: 'Воскресенье',
          sheduleTime: '11:00 - 12:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Обязательно наличие защиты и шлем',
        'Занятия проходят на современных велотреке',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/BMX/groupsImages/bmx-group-1.jpg').default
     },
     {
      id: 'group-2',
      groupCoach: 'Татьяна Карабак', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '9 - 15',
      groupFormat: 'Старшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Среда',
          sheduleTime: '18:15 - 19:45'
        },
        {
          id: 2,
          sheduleDay: 'Пятница',
          sheduleTime: '18:15 - 19:45'
        },
        {
          id: 3,
          sheduleDay: 'Суббота',
          sheduleTime: '13:15 - 14:45'
        },
        {
          id: 4,
          sheduleDay: 'Воскресенье',
          sheduleTime: '11:00 - 12:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Обязательно наличие защиты и шлем',
        'Занятия проходят на современных велотреке',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/BMX/groupsImages/bmx-group-2.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Татьяна Карабак',
       coachAge: '35',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/TatianaKarabak.png').default,
       extraClass: 'left-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  },
  {
    id: 3,
    type: 'hockey',
    previewTitle: 'Хоккей',
    previewSubtitle: 'Мы уверены, что для ребенка процесс тренировки намного важнее результата, поэтому для гармоничного развития юного хоккеиста мы создаем комфортную атмосферу, в которой он не боится ошибаться и рисковать.',
    previewImage: require('../../assets/images/sectionsImages/hockey/hockey-prev-image.jpg').default,
    age: '8 до 17',
    group: 'хоккей',
    position: 'flex-end',
    amount: 'single-coach',
    link: 'single-coach-link-right',
    mainInfo: 'Хоккей – увлекательный и динамичный вид спорта, который приводит в ледовые дворцы и притягивает к экранам телевизоров миллионы болельщиков по всему миру. Несмотря на ожесточённую силовую борьбу и повышенную травмоопасность, ежегодно в хоккейные школы и секции приходят десятки тысяч мальчишек, юношей и мужчин, желающих играть в хоккей. Занимаясь хоккеем, парень вырастает в сильного, закаленного и выносливого мужчину, проявляющего во многих делах себя как личность.',
    advantages: [
      {
        id: 1.1,
        text: 'Укрепляет сердечно-сосудистую и дыхательную систему'
      },
      {
        id: 1.2,
        text: 'Интенсивную развитие мышц плечевого пояса и мышц ног'
      },
      {
        id: 1.3,
        text: 'Игра на свежем воздухе – организм обогащается кислородом'
      },
      {
        id: 1.4,
        text: 'Развивает чувство равновесия и координацию.'
      },
      {
        id: 1.5,
        text: 'Навык работы в коллективе'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/hockey/hockey-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Николай Моторнов', 
      groupPrice: 'Бесплатно',
      groupDuration: '60 - 90',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '8 - 12',
      groupFormat: 'Младшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '19:00 - 20:00'
        },
        {
          id: 2,
          sheduleDay: 'Четверг',
          sheduleTime: '19:00 - 20:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Обязательно наличие защиты, шлема и коньков',
        'Занятия в зимний период проходят на хоккейной площадке',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/hockey/groupsImages/hockey-group-1.jpg').default
     },
     {
      id: 'group-2',
      groupCoach: 'Николай Моторнов', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '12 - 16',
      groupFormat: 'Средняя группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '20:00 - 21:30'
        },
        {
          id: 2,
          sheduleDay: 'Среда',
          sheduleTime: '18:00 - 19:00'
        },
        {
          id: 3,
          sheduleDay: 'Четверг',
          sheduleTime: '20:30 - 22:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Обязательно наличие защиты, шлема и коньков',
        'Занятия в зимний период проходят на хоккейной площадке',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/hockey/groupsImages/hockey-group-2.jpg').default
     },
     {
      id: 'group-3',
      groupCoach: 'Николай Моторнов', 
      groupPrice: 'Бесплатно',
      groupDuration: '60 - 90',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '17 +',
      groupFormat: 'Старшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '21:30 - 23:00'
        },
        {
          id: 2,
          sheduleDay: 'Среда',
          sheduleTime: '22:00 - 23:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Обязательно наличие защиты, шлема и коньков',
        'Занятия в зимний период проходят на хоккейной площадке',
        'Упор делается на развитие физических способностей ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/hockey/groupsImages/hockey-group-3.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Николай Моторнов',
       coachAge: '25',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/NikolayMotornov.png').default,
       extraClass: 'right-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  },
  {
    id: 4,
    type: 'voleyball',
    previewTitle: 'волейбол',
    previewSubtitle: 'Обучение игре с нуля и совершенствование навыков под руководством опытного тренера. Групповые тренировки по грамотно подобранным программам.',
    previewImage: require('../../assets/images/sectionsImages/valeyball/valeyball-prev-image.jpg').default,
    age: '9 до 18',
    group: 'воллейбол',
    position: 'flex-start',
    amount: 'single-coach',
    link: 'single-coach-link-left',
    mainInfo: 'Волейбол входит в десятку самых популярных спортивных игр в мире. У этой игры есть около шести разновидностей. В него играют в школах, во дворах, на пляжах — сложно найти человека, который никогда не пробовал себя в роли игрока. Однако, не все знают о том, насколько это полезный вид спорта. Волейбол относится к бесконтактному виду спортивных занятий, что сводит риск получение травмы к минимуму. За счет этого волейбол идеально подойдет для игроков любого возраста с обеспечением безопасной физической нагрузки.',
    advantages: [
      {
        id: 1.1,
        text: 'Укрепление физического здоровья'
      },
      {
        id: 1.2,
        text: 'Положительное влияние на нервную систему'
      },
      {
        id: 1.3,
        text: 'Развитие реакции и внимания'
      },
      {
        id: 1.4,
        text: 'Умение работать в команде'
      },
      {
        id: 1.5,
        text: 'Развитие воображения и импровизации'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/valeyball/valeyball-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Игорь Белослюдов', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '9 - 11',
      groupFormat: 'Младшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '14:30 - 16:00'
        },
        {
          id: 2,
          sheduleDay: 'Вторник',
          sheduleTime: '14:30 - 16:00'
        },
        {
          id: 3,
          sheduleDay: 'Четверг',
          sheduleTime: '14:30 - 16:00'
        },
        {
          id: 4,
          sheduleDay: 'Пятница',
          sheduleTime: '14:30 - 16:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка, спортивная обувь',
        'Занятия проходят в спортивном зале',
        'Летом возможны тренировки на песчаной волейбольной площадке'
      ],
      groupImage: require('../../assets/images/sectionsImages/valeyball/groupImages/valeyball-group-1.jpg').default
     },
     {
      id: 'group-2',
      groupCoach: 'Игорь Белослюдов', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '12 - 15',
      groupFormat: 'Средняя группа Девочки',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник',
          sheduleTime: '16:00 - 17:30'
        },
        {
          id: 2,
          sheduleDay: 'Пятница',
          sheduleTime: '16:00 - 17:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка, спортивная обувь',
        'Занятия проходят в спортивном зале',
        'Летом возможны тренировки на песчаной волейбольной площадке'
      ],
      groupImage: require('../../assets/images/sectionsImages/valeyball/groupImages/valeyball-group-2.jpg').default
     },
     {
      id: 'group-3',
      groupCoach: 'Игорь Белослюдов', 
      groupPrice: 'Бесплатно',
      groupDuration: '120',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '15 - 18',
      groupFormat: 'Средняя группа Мальчики',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник',
          sheduleTime: '17:30 - 19:30'
        },
        {
          id: 2,
          sheduleDay: 'Пятница',
          sheduleTime: '17:30 - 19:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка, спортивная обувь',
        'Занятия проходят в спортивном зале',
        'Летом возможны тренировки на песчаной волейбольной площадке'
      ],
      groupImage: require('../../assets/images/sectionsImages/valeyball/groupImages/valeyball-group-3.jpg').default
     },
     {
      id: 'group-4',
      groupCoach: 'Игорь Белослюдов', 
      groupPrice: 'Бесплатно',
      groupDuration: '120 - 150',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '18 +',
      groupFormat: 'Старшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник',
          sheduleTime: '19:30 - 22:00'
        },
        {
          id: 2,
          sheduleDay: 'Среда',
          sheduleTime: '19:00 - 21:00'
        },
        {
          id: 3,
          sheduleDay: 'Пятница',
          sheduleTime: '19:30 - 21:30'
        },
        {
          id: 4,
          sheduleDay: 'Суббота',
          sheduleTime: '15:00 - 17:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка, спортивная обувь',
        'Занятия проходят в спортивном зале',
        'Летом возможны тренировки на песчаной волейбольной площадке'
      ],
      groupImage: require('../../assets/images/sectionsImages/valeyball/groupImages/valeyball-group-4.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Игорь Белослюдов',
       coachAge: '50',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/IgorBelaslyudov.png').default,
       extraClass: 'left-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  },
  {
    id: 5,
    type: 'kickbox',
    previewTitle: 'кикбоксинг',
    previewSubtitle: 'Занятия в секции кикбоксинг проходят под руководством опытных тренеров. Программы рассчитанны как для маленьких спортсменов, так и для взрослых людей.',
    previewImage: require('../../assets/images/sectionsImages/kickbox/kickbox-prev-image.jpg').default,
    age: '7',
    group: 'кикбоксинг',
    amount: 'multi-coach',
    link: 'multi-coach-link',
    mainInfo: 'Кикбоксинг – технически сложный вид единоборств, так как здесь разрешены удары как ногами, так и руками. Однако есть в нем и ряд ограничений. Кикбоксинг включает несколько единоборств: карате, ушу, тхэквандо. Также он объединил тайский и английский бокс. Тренировки проходят в паре и без нее. Для занятий применяют подвижные и неподвижные детали: щиты, подушки, макивары. Такая экипировка способствует развитию многих важных спортивных черт.',
    advantages: [
      {
        id: 1.1,
        text: 'Развитие координации движений'
      },
      {
        id: 1.2,
        text: 'Сжигание калорий'
      },
      {
        id: 1.3,
        text: 'Развитие мускулатуры'
      },
      {
        id: 1.4,
        text: 'Тренировка скорости и выносливости'
      },
      {
        id: 1.5,
        text: 'Снижение уровня стресса'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/kickbox/kickbox-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Никита Краев', 
      groupPrice: 'Бесплатно',
      groupDuration: '75 - 90',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '7 - 9',
      groupFormat: 'Младшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник',
          sheduleTime: '17:00 - 18:30'
        },
        {
          id: 2,
          sheduleDay: 'Пятница',
          sheduleTime: '17:00 - 18:15'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка',
        'Сменная обувь нужна до входа в зал, во время занятий ребёнок без обуви',
        'Занятия проходят в спортивном зале для единоборств'
      ],
      groupImage: require('../../assets/images/sectionsImages/kickbox/groupsImages/kickbox-group-1.jpg').default
     },
     {
      id: 'group-2',
      groupCoach: 'Сергей Миронов', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '9 - 12',
      groupFormat: 'Средняя группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '17:30 - 19:00'
        },
        {
          id: 2,
          sheduleDay: 'Четверг',
          sheduleTime: '17:30 - 19:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка',
        'Сменная обувь нужна до входа в зал, во время занятий ребёнок без обуви',
        'Занятия проходят в спортивном зале для единоборств'
      ],
      groupImage: require('../../assets/images/sectionsImages/kickbox/groupsImages/kickbox-group-2.jpg').default
     },
     {
      id: 'group-3',
      groupCoach: 'Сергей Миронов', 
      groupPrice: 'Бесплатно',
      groupDuration: '90 - 120',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '12 +',
      groupFormat: 'Старшая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '19:00 - 20:30'
        },
        {
          id: 2,
          sheduleDay: 'Вторник',
          sheduleTime: '19:00 - 20:30'
        },
        {
          id: 3,
          sheduleDay: 'Четверг',
          sheduleTime: '19:00 - 20:30'
        },
        {
          id: 4,
          sheduleDay: 'Пятница',
          sheduleTime: '19:00 - 21:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка',
        'Сменная обувь нужна до входа в зал, во время занятий ребёнок без обуви',
        'Занятия проходят в спортивном зале для единоборств'
      ],
      groupImage: require('../../assets/images/sectionsImages/kickbox/groupsImages/kickbox-group-3.jpg').default
     }
   ],
   coachesInfo: [
     {
      id: 1,
      coachName: 'Никита Краев',
      coachAge: '22',
      coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
      coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/NikitaKraev.png').default,
      extraClass: 'left-item',
      coachItemSize: 'multi-coach-item'
     },
     {
      id: 2 ,
      coachName: 'Сергей Миронов',
      coachAge: '35',
      coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
      coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/SergeyMironov.png').default,
      extraClass: 'right-item second-coach',
      coachItemSize: 'multi-coach-item'
    }
   ],
  },
  {
    id: 6,
    type: 'sambo',
    previewTitle: 'спортивное самбо',
    previewSubtitle: 'Самбо для малышей доступно с 5 лет, в этом возрасте занятия нацелены на увеличение физической силы, а также на развитие гибкости. Для самых маленьких занятия проходят в игровой форме. С 6 лет ребята начинают заниматься уже на профессиональном уровне.',
    previewImage: require('../../assets/images/sectionsImages/sambo/sambo-prev-image.jpeg').default,
    age: '5 до 18',
    group: 'спортивное самбо',
    position: 'flex-end',
    amount: 'single-coach',
    link: 'single-coach-link-right',
    mainInfo: 'Самбо "Самооборона без оружия" – вид спорта, который учит постоять за себя в любой ситуации и обезоруживать противника одним приемом. Самбо для детей доступно с 5 лет, в секции малыша научат основам самообороны и принципам самообладания и самосовершенствования. Несмотря на то, что самбо относится к единоборствам, этот вид спорта признан одним из самых безопасных для детей. Здесь юного спортсмена научат в первую очередь решать конфликты мирным путем, а также постоять за себя в различных ситуациях.',
    advantages: [
      {
        id: 1.1,
        text: 'Развитие мышц всего тела'
      },
      {
        id: 1.2,
        text: 'Хорошая интуиция и привычка быстро соображать'
      },
      {
        id: 1.3,
        text: 'Развитие уверенности в себе'
      },
      {
        id: 1.4,
        text: 'Тренировка выносливости и скорости'
      },
      {
        id: 1.5,
        text: 'Соблюдение правил личной гигиены'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/sambo/sambo-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Илья Дорощенков', 
      groupPrice: 'Бесплатно',
      groupDuration: '120',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '5 - 18',
      groupFormat: 'Основная группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник',
          sheduleTime: '10:30 - 12:00'
        },
        {
          id: 2,
          sheduleDay: 'Четверг',
          sheduleTime: '10:30 - 12:00'
        },
        {
          id: 3,
          sheduleDay: 'Пятница',
          sheduleTime: '15:00 - 16:30'
        },
        {
          id: 4,
          sheduleDay: 'Суббота',
          sheduleTime: '11:00 - 12:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты и майка',
        'Сменная обувь нужна до входа в зал, во время занятий ребёнок без обуви',
        'Занятия проходят в спортивном зале для единоборств'
      ],
      groupImage: require('../../assets/images/sectionsImages/sambo/groupsImages/sambo-group-1.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Илья Дорощенков',
       coachAge: '21',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/IliyaDoroshenkov.png').default,
       extraClass: 'right-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  },
  {
    id: 7,
    type: 'ski',
    previewTitle: 'лыжные гонки',
    previewSubtitle: 'Групповые занятия на свежем воздухе. Лыжная трасса в пешей доступности. Тренер с многолетним опытом работы с детьми.',
    previewImage: require('../../assets/images/sectionsImages/ski/ski-prev-image.jpg').default,
    age: '5 до 18',
    group: 'лыжные гонки',
    position: 'flex-end',
    amount: 'single-coach',
    link: 'single-coach-link-right',
    mainInfo: 'Лыжные гонки — технически сложный спорт. Однако сегодня, благодаря разнообразию профильных секций и профессиональным тренерам, научиться технике может любой. Даже если увлечение не пойдет дальше прогулок в лесу, все равно занятия благоприятно скажутся на здоровье и физическом развитии ребенка. Лыжные гонки один из самых массовых видов спорта, где на соревнованиях участвуют более 500 человек. Этот вид спорта входит в программу Олимпийский игр.',
    advantages: [
      {
        id: 1.1,
        text: 'Тренировки зимой - укрепляют иммунитет'
      },
      {
        id: 1.2,
        text: 'Тренировка сердечно - сосудистой системы'
      },
      {
        id: 1.3,
        text: 'Стабилизация работы нервной системы'
      },
      {
        id: 1.4,
        text: 'Снижение веса и укрепление мышечной ткани'
      },
      {
        id: 1.5,
        text: 'Улучшение легочной вентиляции организма'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/ski/ski-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Александр Черных', 
      groupPrice: 'Бесплатно',
      groupDuration: '120',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '5 - 18',
      groupFormat: 'Первая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник, Среда, Четверг, Пятница',
          sheduleTime: '16:00 - 18:00'
        },
        {
          id: 2,
          sheduleDay: 'Суббота, Воскресенье',
          sheduleTime: '11:00 - 13:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: по погоде',
        'Занятия большей частью проходят на улице',
        'Инвентарь приобретается со временем'
      ],
      groupImage: require('../../assets/images/sectionsImages/ski/groupsImages/ski-group-1.jpg').default
     },
     {
      id: 'group-2',
      groupCoach: 'Александр Черных', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '5 - 18',
      groupFormat: 'Вторая группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник',
          sheduleTime: '10:00 - 11:30'
        },
        {
          id: 2,
          sheduleDay: 'Четверг',
          sheduleTime: '10:00 - 11:30'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: по погоде',
        'Занятия большей частью проходят на улице',
        'Инвентарь приобретается со временем'
      ],
      groupImage: require('../../assets/images/sectionsImages/ski/groupsImages/ski-group-2.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Александр Черных',
       coachAge: '45',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/AleksandrChernih.png').default,
       extraClass: 'right-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  },
  {
    id: 8,
    type: 'chess',
    previewTitle: 'шахматы',
    previewSubtitle: 'Занятия в секции шахматы это тренировка логики, памяти, концентрации внимания, целеустремленности и навыка быстрого счета в уме',
    previewImage: require('../../assets/images/sectionsImages/chess/chess-prev-image.jpg').default,
    age: '5 до 18',
    group: 'шахматы',
    position: 'flex-end',
    amount: 'single-coach',
    link: 'single-coach-link-right',
    mainInfo: 'Шахматы - одна из самых древних игр в истории - им более 1500 лет. Шахматы менялись, распространяясь по глобусу, пока не стали такой игрой, какой мы их знаем сегодня. Это путешествие сближало людей разных культур, возрастов и профессий, объединяя их страстью к игре. Люди, играющие в шахматы тренируют собственный мозг и ещё некоторые человеческие качества такие, как терпение и усидчивость.',
    advantages: [
      {
        id: 1.1,
        text: 'Развитие творческого начала'
      },
      {
        id: 1.2,
        text: 'Тренировка мозга'
      },
      {
        id: 1.3,
        text: 'Умение предугадывать и прогнозировать события'
      },
      {
        id: 1.4,
        text: 'Умение принимать оперативные решения'
      },
      {
        id: 1.5,
        text: 'Улучшение памяти и концентрации'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/chess/chess-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Иван Баранов', 
      groupPrice: 'Бесплатно',
      groupDuration: '90',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '5 - 18',
      groupFormat: 'Основная группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Вторник',
          sheduleTime: '17:15 - 18:45'
        },
        {
          id: 2,
          sheduleDay: 'Четверг',
          sheduleTime: '17:15 - 18:45'
        },
        {
          id: 3,
          sheduleDay: 'Пятница',
          sheduleTime: '17:15 - 18:45'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма не обязательна',
        'Занятия проходят в шахматном зале',
        'Занятия нацелены на умственное развитие ребёнка'
      ],
      groupImage: require('../../assets/images/sectionsImages/chess/groupsImages/chess-group-1.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Иван Баранов',
       coachAge: '45',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/tamplatePersonR.png').default,
       extraClass: 'right-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  },
  {
    id: 9,
    type: 'tennis',
    previewTitle: 'настольный теннис',
    previewSubtitle: 'Во время игры в настольный теннис невозможно думать о чем-то другом, кроме самой игры, поэтому для любых других мыслей просто не остается места. А интенсивная физическая нагрузка способствует снятию эмоционального напряжения и поднятию настроения.',
    previewImage: require('../../assets/images/sectionsImages/tennis/tennis-prev-image.jpg').default,
    age: '5 до 18',
    group: 'настольный теннис',
    amount: 'single-coach',
    link: 'single-coach-link-left',
    mainInfo: 'Настольный теннис - это спортивный вид соревнований, в котором можно участвовать как индивидуально, так в дуэтах или командах. Настольный теннис по праву считается одной из самых популярных спортивных игр в мире, и это неспроста. В него с удовольствием играют, без преувеличения, более двух миллиардов человек. Особенно настольный теннис развит в Китае, Корее и других восточных странах. В России эта игра тоже широко пропагандируется и постоянно развивается.',
    advantages: [
      {
        id: 1.1,
        text: 'Укрепление сердечно-сосудистой системы'
      },
      {
        id: 1.2,
        text: 'Укрепление мышц и гибкость суставов'
      },
      {
        id: 1.3,
        text: 'Развиие силы, ловкости, быстроты реакции'
      },
      {
        id: 1.4,
        text: 'Координация движений и тренировка вестибулярного аппарата'
      },
      {
        id: 1.5,
        text: 'Развитие оперативного и аналитического мышления'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/tennis/tennis-advantages-image.jpg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Сергей Дроздов', 
      groupPrice: 'Бесплатно',
      groupDuration: '120',
      groupLocation: 'Красная Пахра , Заводская 20',
      groupAge: '5 - 18',
      groupFormat: 'Основная группа',
      groupShedule: [
        {
          id: 1,
          sheduleDay: 'Понедельник',
          sheduleTime: '14:00 - 16:00'
        },
        {
          id: 2,
          sheduleDay: 'Среда',
          sheduleTime: '14:00 - 16:00'
        },
        {
          id: 3,
          sheduleDay: 'Четверг',
          sheduleTime: '14:00 - 16:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты, майка и спортивная обувь',
        'Занятия проходят в спортивном зале',
        'Инвентарь приобретается со временем'
      ],
      groupImage: require('../../assets/images/sectionsImages/tennis/groupsImages/tennis-group-1.jpg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Сергей Дроздов',
       coachAge: '50',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/SergeyDrozdov.png').default,
       extraClass: 'left-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  },
  {
    id: 10,
    type: 'ofp',
    previewTitle: 'ОФП',
    previewSubtitle: 'Профессиональный тренер найдёт подход к каждому подопечному. Благодаря использованию тщательно продуманных программ каждая тренировка будет насыщенной и результативной.',
    previewImage: require('../../assets/images/sectionsImages/ofp/ofp-prev-image.jpg').default,
    age: '5',
    group: 'ОФП',
    amount: 'single-coach',
    link: 'single-coach-link-left',
    mainInfo: 'Общая физическая подготовка подразумевает продуманную систему упражнений, которая направлена на развитие всех физических качеств человека. Это одновременное развитие силы, гибкости, выносливости, скорости и т. д. Во время тренировки ОФП делается акцент именно на комплексном развитии, а не на совершенствовании какого-нибудь одного качества. Тренером при этом используются специальные программы, включающие много разнообразных упражнений.',
    advantages: [
      {
        id: 1.1,
        text: 'Улучшение иммунитета и общего состояния организма'
      },
      {
        id: 1.2,
        text: 'Развитие координации движений'
      },
      {
        id: 1.3,
        text: 'Укрепление сердечно-сосудистой и дыхательной системы'
      },
      {
        id: 1.4,
        text: 'Развитие выносливости'
      },
      {
        id: 1.5,
        text: 'Ускорение реакций метаболизма и улучшение обмена веществ'
      }
    ],
    advantagesImage: require('../../assets/images/sectionsImages/ofp/ofp-advantages-image.jpeg').default,
   groupInfo: [
     {
      id: 'group-1',
      groupCoach: 'Ирина Ломтева', 
      groupPrice: 'Бесплатно',
      groupDuration: '60',
      groupLocation: 'Красная Пахра , 9А',
      groupAge: '5 +',
      groupFormat: 'Основная группа',
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
        },
        {
          id: 3,
          sheduleDay: 'Воскресенье',
          sheduleTime: '10:00 - 11:00'
        }
      ],
      groupDescription: [
        'Занятия проходят в группе',
        'Сменная обувь и форма обязательна',
        'Форма: шорты, майка и спортивная обувь',
        'Занятия проходят в спортивном зале',
        'Весь спортивный инвентарь предоставляется'
      ],
      groupImage: require('../../assets/images/sectionsImages/ofp/groupsImages/ofp-group-1.jpeg').default
     }
   ],
   coachesInfo: [
     {
       id: 1,
       coachName: 'Ирина Ломтева',
       coachAge: '30',
       coachDescription: 'Прекрасный тренер и хороший человек. Очень любит детей и главной целью жизни ставит воспитание нового поколения топовых футболистов.',
       coachPhoto: require('../../assets/images/personalPhoto/CutedPhoto/IrinaLomteva.png').default,
       extraClass: 'left-item',
       coachItemSize: 'single-coach-item'
     }
   ],
  }
]