import React from 'react'
import TitleWithConrners from '../../../../UI/TitleWithCorners/TitleWithCorners'
import Icon from '../../../../Icon/Icon'

function AreasMainActivities(props) {
  const list = props.areasActivities.map(item => {
    return (
      <li key={item.id} className="areas-activities__list_item">
        <Icon className="areas-activities__list_item-icon" name={item.activitiesIconName} color={item.activitiesIconColor}/>
      </li>
    )
  })

  return (
    <div className="areas-activities">
      <div className="areas-activities__body">
        <div className="areas-activities__title">
          <TitleWithConrners text="Активности"/> 
        </div>
        <ul className="areas-activities__list">
          {list}
        </ul>
      </div>
    </div>
  )
}

export default AreasMainActivities
