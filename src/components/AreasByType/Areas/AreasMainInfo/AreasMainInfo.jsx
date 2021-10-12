import React from 'react'
import AreasMainActivities from './AreasMainActivities/AreasMainActivities'
import AreasMainBlock from './AreasMainBlock/AreasMainBlock'

function AreasMainInfo(props) {
  const list = props.areasMainInfo.map(item => {
    return (
      <AreasMainBlock {...item} key={item.id}/>
    )
  })

  
  return (
    <div className="areas-main">
      <div className="areas-main__body _container">
        <div className="areas-main__content content-paddings">
          <div className="areas-main__content_activities">
            <AreasMainActivities {...props}/>
          </div>
          <ul className="areas-main__content_info">
              {list}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AreasMainInfo
