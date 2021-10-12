import React from 'react'

function SectionGroupSheduleItem(props) {
  return (
    <li className="section-shedule-item">
      <div className="section-shedule-item__body">
        <div className="section-shedule-item__day">
          <span className="section-shedule-item__day_value text-medium">{props.sheduleDay}</span>
        </div>
        <div className="section-shedule-item__time">
          <span className="section-shedule-item__time_value text-medium">{props.sheduleTime}</span>
        </div>
      </div>
    </li>
  )
}

export default SectionGroupSheduleItem
