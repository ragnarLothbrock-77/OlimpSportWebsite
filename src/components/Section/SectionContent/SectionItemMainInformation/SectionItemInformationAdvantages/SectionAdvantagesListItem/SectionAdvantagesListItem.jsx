import React from 'react'
import Icon from '../../../../../Icon/Icon'

function SectionAdvantagesListItem({text}) {
  return (
    <li className="section-item-advantages">
      <div className="section-item-advantages__icon">
        <Icon name="arrow-right-circle" size="40" color="#0051bd"/>
      </div>
      <div className="section-item-advantages__info">
        <span className="section-item-advantages__info_text title-small">{text}</span>
      </div>
    </li>
  )
}

export default SectionAdvantagesListItem
