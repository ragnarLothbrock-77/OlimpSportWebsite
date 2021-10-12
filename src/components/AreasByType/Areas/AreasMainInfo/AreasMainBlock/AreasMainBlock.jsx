import React from 'react'
import Icon from '../../../../Icon/Icon'

function AreasMainBlock(props) {
  return (
    <div className="areas-main-block">
      <div className="areas-main-block__content">
        <div className="areas-main-block__icon">
          <Icon className="areas-main-block__icon_ico" name={props.mainIcon} size={props.mainIconSize}/>
        </div>
        <div className={props.decorStyle ? `areas-main-block__decor ${props.decorStyle}` : "areas-main-block__decor" }>
          <Icon name="arrow-right-circle" size="35" color="#0051bd"/>
        </div>
        <div className="areas-main-block__info">
          <div className={ props.extraClass ? `areas-main-block__info_value title-small ${props.extraClass}` : "areas-main-block__info_value title-small"}>{props.mainInfoTitle}
            {props.extraSimbol ? <span className="areas-main-block__info_extra-simbol text-large">{props.extraSimbol}</span> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AreasMainBlock
