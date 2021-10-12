import React from 'react'

function SectionGroupDescriptionItem({text}) {
  return (
    <li className="section-description-item">
      <div className="section-description-item__body">
        <div className="section-description-item__info">
          <span className="section-description-item__info_text text-small">{text}</span>
        </div>
      </div>
    </li>
  )
}

export default SectionGroupDescriptionItem
