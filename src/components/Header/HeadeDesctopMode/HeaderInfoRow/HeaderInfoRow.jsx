import React from 'react'
import { headerInfoRowConfig } from '../../../../configurations/Header/headerInfoRowConfig'
import Icon from '../../../Icon/Icon'

function HeaderInfoRow() {
  const list = headerInfoRowConfig.map(item => {
    return (
      <li key={item.id} className="header-info-item">
        <div className="header-info-item__body">
          <div className="header-info-item__icon">
            <Icon name={item.icon} color="#808080" size="20"/>
          </div>
          <a href={item.type} className="header-info-item__value">
            <span className="header-info-item__value_text text-small">{item.value}</span>
          </a>
        </div>
      </li>
    )
  })
  return (
    <div className="header-info">
      <div className="header-info__body">
        <ul className="header-info__list">
          {list}
        </ul>
      </div>
    </div>
  )
}

export default HeaderInfoRow
