import React from 'react'
import {Link} from 'react-router-dom'

function Sectionitem(props) {
  return (
    <li className="sections-content-list__item">
      <Link className="sections-content-list__item_body" to={`${props.to}${props.type}`}>
        <div className="section-card">
          <div className="setion-card__decor">
            <img src={props.src} alt="SK_Olimp" className="section-card__decor_image" />
          </div>
          <div className="section-card__information">
            <div className="section-card-info">
              <div className="section-card-info__title">
                <span className="section-card-info__title_text title-small">{props.title}</span>
              </div>
              <div className="section-card-info__text">
                <span className="section-card-info__text_value text-small">{props.info}</span>
              </div>
              <div className="section-card-info__age">
                <span className="section-card-info__age_title text-medium">Возраст:</span>
                <span className="section-card-info__age_value">{props.age}</span>
              </div>
            </div>
          </div>
          <div className="section-card__link">
            <div className="section-card__link_text nav-font">Подробнее</div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Sectionitem
