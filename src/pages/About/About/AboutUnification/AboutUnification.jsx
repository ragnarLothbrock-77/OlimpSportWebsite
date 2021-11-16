import React from 'react'
import { aboutPlacesConfig } from '../../../../configurations/About/About/aboutPlacesConfig'
import AboutPlaces from './AboutPlaces/AboutPlaces'

function AboutUnification() {
  const list = aboutPlacesConfig.map(item => {
    return (
      <AboutPlaces key={item.id} {...item} />
    )
  })
  
  return (
    <div className="about-unification">
      <div className="about-unification__body _container">
        <div className="about-unification__content">
          <div className="about-unification__title">
            <span className="about-unification__title_text title-large">Информация <br></br>об объединении</span>
          </div>
          <div className="about-unification__info">
            <span className="about-unification__info_text text-large">По постановлению администрации поселения Краснопахорское в городе Москве от 04.09.2020 была проведена реорганизация муниципального бюджетного учреждения "Спортивный клуб "Олимп" (МБУ "Спортивный клуб "Олимп") путём присоединения к нему муниципального бюджетного учреждения "Спортивный комплекс "Красная Пахра" (МБУ "Спортивный комплекс "Красная Пахра"). Процедура реорганизации была завершена до 31.12.2020г. Директором МБУ СК "Олимп" назначен Миронов Сергей Геннадьевич. </span>
          </div>
        </div>
      </div>
      <div className="about-unification__places">
            <div className="about-places">
              <ul className="about-places__list">
                {list}
              </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutUnification
