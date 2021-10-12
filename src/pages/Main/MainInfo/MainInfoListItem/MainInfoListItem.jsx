import React from 'react'
import Icon from '../../../../components/Icon/Icon'

function MainInfoListItem({id, text, indent, defaultMargin}) {
  


  return (
    <li className="info-list__item" style={{marginLeft: `${!defaultMargin ? '0px' : indent}`}}>
      <Icon name="check" size="30" color="#fff" className="info-list__item_ico"/>
      <div className="info-list__item_content info-item" >
        <div className="info-item__number">
          <span className="info-item__number_value">{id}</span>
          <div className="info-item__number_shape"></div>
        </div>
        <div className="info-item__text">
          <span className="info-item__text_value text-medium">{text}</span>
        </div>
      </div>
    </li>
  )
}

export default MainInfoListItem
