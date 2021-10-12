import React from 'react'
import SectionGroupCard from './SectionGroupCard/SectionGroupCard'
import SectionGroupDescriptionItem from './SectionGroupDescriptionItem/SectionGroupDescriptionItem'
import SectionGroupSheduleItem from './SectionGroupSheduleItem/SectionGroupSheduleItem'

function SectionGroupItem(props) {
  return (
    <li className="group-item">
      <div className="group-item__body">
        <div className="group-card">
          <SectionGroupCard {...props}/>
        </div>
        <div className="group-description">
          <div className="group-description__body">
            <div className="group-description-shedule">
              <div className="group-description-shedule__title">
                <span className="group-description-shedule__title_text title-small">Расписание занятий</span>
              </div>
              <ul className="group-description-shedule__list">
                {
                  props.groupShedule.map(item => {
                    return (
                      <SectionGroupSheduleItem {...item} key={item.id}/>
                    )
                  })
                }
              </ul>
            </div>
            <div className="group-description-rules">
              <div className="group-description-rules__title">
                <span className="group-description-rules__title_text title-small">Важная информация</span>
              </div>
              <ul className="group-description-rules__list">
                {
                  props.groupDescription.map(item => {
                    return (
                      <SectionGroupDescriptionItem text={item} key={item}/>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SectionGroupItem
