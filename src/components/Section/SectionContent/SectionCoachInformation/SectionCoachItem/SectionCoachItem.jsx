import React from 'react'

function SectionCoachItem(props) {
  return (
    <li className="section-coach-item">
      <div className={`section-coach-item__body ${props.extraClass}`} style={{backgroundImage: `url(${props.coachPhoto})`}}>
        <div className="coach-item-info">
          <div className="coach-item-info__name">
            <span className="coach-item-info__name_value text-large">{props.coachName}</span>
          </div>
          <div className="coach-item-info__description">
            <span className="coach-item-info__description_text text-small">{props.coachDescription}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SectionCoachItem
