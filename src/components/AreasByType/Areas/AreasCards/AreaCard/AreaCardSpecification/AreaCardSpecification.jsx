import React from 'react'

function AreaCardSpecification(props) {
  return (
    <li className="area-specification-item">
     <div className="area-specification-item__title">
       <span className="area-specification-item__title_text text-small">{props.areaInfoTitle}</span>
     </div>
     <div className="area-specification-item__info">
        <div className="area-specification-item__text">
          <span className="area-specification-item__text_value text-large">{props.areaInfo}</span>
          <span className="area-specification-item__text_simbol text-medium">{props.extraSimbol}</span>
        </div>
     </div>
    </li>
  )
}

export default AreaCardSpecification
