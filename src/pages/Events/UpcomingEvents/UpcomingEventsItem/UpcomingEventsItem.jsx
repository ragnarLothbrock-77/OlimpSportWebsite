import React from 'react'
import PastEventGallery from './PastEventGallary/PastEventGallery'

function UpcomingEventsItem(props) {
  return (
    <div className="upcoming-event">
      <div className="upcoming-event__body">
        <div className="upcoming-event-decor">
          <img className="upcoming-event-decor__image" src={props.image} alt="events" />
        </div>
        <div className="upcoming-event-info">
          <div className="upcoming-event-info__body">
            <div className="upcoming-event-info__date">
              <div className="upcoming-event-info__date_title text-small">Дата проведения</div>
              <span className="upcoming-event-info__date_value text-medium">{props.date}</span>
            </div>
            <div className="upcoming-event-info__name">
              <span className="upcoming-event-info__name_value title-small">{props.name}</span>
            </div>
            <div className="upcoming-event-info__location">
              <div className="upcoming-event-info__location_body">
                <div className="upcoming-event-info__location_title text-small">Место проведения</div>
                <span className="upcoming-event-info__location_value text-small">{props.location}</span>
              </div>
            </div>
          </div>
        </div>
        {
          props.isPast 
          ? <PastEventGallery pastGallery={props.pastGallery} />
          : null
        }
        <div className="upcoming-event-docs">
          <a className="upcoming-event-docs__body" href={props.documentation} rel="noopener noreferrer" target="_blank">
            <div className="upcoming-event-docs__decor">
              <span className="upcoming-event-docs__decor_text text-small">Скачать</span>
            </div>
            <div className="upcoming-event-docs__title">
              <span className="upcoming-event-docs__title_text text-large">Протокол</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEventsItem
