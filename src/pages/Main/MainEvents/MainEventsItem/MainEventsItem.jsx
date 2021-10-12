import React from 'react'

function MainEventsItem(props) {
  return (
    <div className="events-item">
      <div className="events-item__body">
        <div className="events-item-content">
          <div className="events-item-content__title ">
            <span className="events-item-content__title_text title-large">{props.title}</span>
          </div>
          <div className="events-item-content__subtitle">
            <span className="events-item-content__subtitle_text text-medium">{props.subtitle}</span>
          </div>
        </div>
        <div className="events-item-decoration">
          <div className="events-item-decoration__body" style={{backgroundImage: `url(${props.backgroundImage}`}}>
            <div className="events-item-decoration__body_shape"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainEventsItem
