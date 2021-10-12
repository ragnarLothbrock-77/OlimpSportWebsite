import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../../../components/Icon/Icon'


function AboutPagesLinksCard(props) {
  const [flip, setFlip] = useState(false)

  return (
    <li className="about-links-item">
      <div className={`about-links-item__body ${flip ? "fliped" : ""}`} onClick={() => setFlip(!flip)}>
        <div className="about-links-item__side about-links-item__side--front">
          <div className="about-item-front">
            <div className="about-item-front__icon">
              <Icon name={props.icon} size="100" color="#fff"/>
            </div>
            <div className="about-item-front__text">
              <span className="about-item-front__text_value title-small">{props.text}</span>
            </div>
          </div>
        </div>
        <div className="about-links-item__side about-links-item__side--back">
          <div className="about-item-back">
            <Link className="about-item-back__link" to={props.to} >
              <span className="about-item-back__link_text title-small">Подробнее</span>
              <Icon className="about-item-back__link_icon" name="arrow-right" size="55" color="#1c1c1c"/>
            </Link>
          </div>
        </div>
      </div>
    </li>
  )
}

export default AboutPagesLinksCard
