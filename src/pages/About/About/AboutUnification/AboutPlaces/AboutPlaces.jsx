import React from 'react'

function AboutPlaces(props) {
  return (
    <li className={`about-places-item ${props.cls}`}>
      <div className="about-places-item__mask about-item-mask">
        <div className="about-item-mask__content">
          <div className="about-item-mask__content_body">
            <div className="about-item-mask__info">
              <span className="about-item-mask__info_text title-small">{props.location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-places-item__decor" style={{backgroundImage: `url(${props.image})`}}></div>
    </li>
  )
}

export default AboutPlaces
