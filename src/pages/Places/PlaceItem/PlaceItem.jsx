import React from 'react'
import Button from '../../../components/Button/Button'
import TitleWithCorners from '../../../components/UI/TitleWithCorners/TitleWithCorners'

function PlaceItem(props) {
  const list = props.areas.map(item => {
    return (
      <li key={item.id} className={`places-content-list__item ${item.extraCls}`}>
        <div className="places-content-list__decor">
          <div className="places-content-list__decor_mask"></div>
          <img src={item.placeImage} alt="Olimp" className={`places-content-list__decor_image ${item.imageStyle}`}></img>
        </div>
        <div className="places-content-list__info">
          <div className="places-content-list__info_place text-medium">{item.placeName}</div>
          <div className="places-content-list__info_description text-small">{item.placeDescription}</div>
        </div>
      </li>
    )
  })


  return (
    <li key={props.id} className="places-item">
      <div className="places-item__body">
        <div className="places-item__preview">
          <TitleWithCorners text={props.title}/>
          <div className="places-item__subtitle">
            <span className="places-item__subtitle_text text-medium">{props.subtitle}</span>
          </div>
        </div>
        <ul className="places-item__content places-content-list">
          {list}
        </ul>
        <div className="places-item__link">
          <Button text="Подробнее" color="#000" buttonBorder="#0051bd" buttonBackground="#fff" to={props.to}/>
        </div>
      </div>
    </li>
  )
}

export default PlaceItem
