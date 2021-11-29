import React from 'react'
import Icon from '../../../../components/Icon/Icon'

function AboutDescription() {
  return (
    <div className="about-description">
      <div className="about-description__body _container">
        <div className="about-description__content">
          <div className="about-description__block1">
            <span className="about-description__block1_text title-small">МБУ СК Олимп один из крупнейших спортивных клубов Новой Москвы – это современная площадка для занятий спортом, проведения крупных спортивных мероприятий, соревнований в различных видах спорта. Своей целью мы ставим развитие физических и моральных качеств детей, популяризацию здорового образа жизни и развитие массового спорта в стране. Большой выбор спортивных секций от шахмат до BMX, для детей и взрослых любого возраста. В нашем распоряжении грамотные программы развития в каждом спортивном направлении и профессиональный тренерский штаб.</span>
            <div className="about-description__block1_icon">
              <Icon className="about-description__block1_ico" name="about" color="#000"/>
            </div>
          </div>
          <div className="about-description__block2">
            <span className="about-description__block2_text text-large">В "Олимп" можно прийти самому, с друзьями или всей семьёй. Вы сможете подобрать интересующие вас направление и развиваться вместе. Здесь вас ждут два тренажёрных зала с широким выбором тренажёров, просторные залы для занятия боевыми единоборствами со специальным покрытием пола, просторный зал для занятия волейболом, искусственные поля для занятия футболом,  большое количество открытых спортивных площадок для занятий воркаутом и другими типами физической активности и современный велотрек для занятия велогонками. Приходите на занятия и становитесь членом большой спортивной семьи. </span>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default AboutDescription
