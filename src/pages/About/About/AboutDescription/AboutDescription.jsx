import React from 'react'
import Icon from '../../../../components/Icon/Icon'

function AboutDescription() {
  return (
    <div className="about-description">
      <div className="about-description__body _container">
        <div className="about-description__content">
          <div className="about-description__block1">
            <span className="about-description__block1_text title-small">Этим летом мы приглашаем вас присо­еди­ниться к путешествию на парусной яхте по Курильским островам. Курилы — удивительное место со своей невероятной историей, смешением культур, природой, как с заставок на рабочем столе, и всеми шансами стать одним из наших ключевых направлений.</span>
            <div className="about-description__block1_icon">
              <Icon className="about-description__block1_ico" name="about" color="#000"/>
            </div>
          </div>
          <div className="about-description__block2">
            <span className="about-description__block2_text text-large">Цепь островов между полуостровом Камчатка и японским островом Хоккайдо, чуть выпуклой дугой отделяющая Охотское море от Тихого океана — уникальная точка, куда мечтают попасть путешественники со всего мира, и теперь сможем попасть все мы. С августа по сентябрь мы будем путешествовать по местным бухтам и изучать вулканы, богатые редкими минералами, наблюдать за лежбищами ларги, антура и сивучей (то есть трех разновидностей тюленей), купаться в горячих реках, искать китов и косаток, ловить рыбу — в общем, кайфовать по полной программе.</span>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default AboutDescription
