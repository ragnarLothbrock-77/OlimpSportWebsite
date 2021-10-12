import React from 'react'
import { aboutPlacesConfig } from '../../../../configurations/aboutPlacesConfig'
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
            <span className="about-unification__info_text text-large">Дом культуры «Звездный», с его обособленными структурными подразделениями, является центром досуга населения в поселении Краснопахорское. Здесь работают творческие, любящие свое дело специалисты, которые смогли создать теплую и добрую атмосферу, комфортные и уютные условия для занятий, общения и отдыха более чем в 30 клубных формирований, на бюджетной и внебюджетной основе, для жителей разного возраста по направлениям: раннее и интеллектуальное развитие, театральное искусство, танцевально-спортивное направление, декоративно-прикладное творчество и изобразительное искусство, направления оригинального жанра, вокальное искусство и музыкальное развитие, а также проект Мэра Москвы «Московское долголетие», для лиц старшего поколения.</span>
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
