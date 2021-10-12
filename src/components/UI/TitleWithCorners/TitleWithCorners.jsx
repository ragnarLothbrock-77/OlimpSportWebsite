import React from 'react'
import Icon from '../../Icon/Icon'

function TitleWithCorners({text, fontColor = "#000", color = "#0051bd"}) {
  return (
    <div className="title-with-corners title-medium">
      <Icon className="title-with-corners__icon corner-icon-left" name="corner" size="35" color={color}/>
      <span className="title-with-corners__text" style={{color: fontColor}}>{text}</span>
      <Icon className="title-with-corners__icon corner-icon-right" name="corner" size="35" color={color}/>
    </div>
  )
}

export default TitleWithCorners
