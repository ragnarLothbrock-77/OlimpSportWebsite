import React from 'react'
import Button from '../../Button/Button'


function SliderItem(props) {
  return (
    <div className="slider-item" key={props.id}>
      <div className="slider-item__body">
        <div className="slider-item-content _container">
          <div className="slider-item-content__body">
            <div className="slider-item-content__title">
              <p className="slider-item-content__title_text title-large">{props.title}</p>
            </div>
            <div className="slider-item-content__subtitle">
              <p className="slider-item-content__subtitle_text text-medium ">{props.subtitle}</p>
            </div>
            <div className="slider-item-content__link">
              <Button to={props.to} text="Подробнее" isAnimatedButton={true} />
            </div>
        </div>
        </div>
        <div className="slider-item-image">
          <div className="slider-item-image__mask"></div>
          <div  className="slider-item-image__img" style={{backgroundImage: `url(${props.src})`}}/>
        </div>
      </div>
    </div>
  )
}

export default SliderItem
