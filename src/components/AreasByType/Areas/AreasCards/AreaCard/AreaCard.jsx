import React from 'react'
import AreaCardSpecification from './AreaCardSpecification/AreaCardSpecification'

function AreaCard(props) {
  return (
    <li className="area-card">
      <div className="area-card__body">
          <div className="area-card-decor">
            <div className="area-card-decor__img" style={{backgroundImage: `url(${props.areaImage})`}}>
              <div className="area-card-decor__img_mask"></div>
            </div>
            <div className="area-card-decor__text">
              <span className="area-card-decor__text_value title-small">{props.areaType}</span>
            </div>
          </div>
          <div className="area-card__content">
            <div className="area-card__content_body">
              <div className="area-card-specification">
                <div className="area-card-specification__title">
                  <span className="area-card-specification__title_text text-large">Характеристики</span>
                </div>
                <ul className="area-card-specification__list">
                  {
                    props.areaSpecifications.map(item => {
                      return (
                        <AreaCardSpecification {...item} key={item.id}/>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="area-card-information">
                <div className="area-card-information__body">
                  <div className="area-card-information__title">
                      <span className="area-card-information__title_text text-large">Дополнительно</span>
                  </div>
                  <div className="area-card-information__content">
                    <ul className="area-card-information__content_list">
                      {
                        props.areaInformation.map(item => {
                          return (
                            <li key={item} className="area-information-item">
                              <span className="area-information-item__text text-small">{item}</span>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </li>
  )
}

export default AreaCard
