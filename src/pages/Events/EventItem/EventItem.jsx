import React from 'react'
import EventGallery from './EventGallery/EventGallery'

function EventItem(props) {
  return (
    <div className="event">
      <div className="event__body">
        <div className="event-decor">
          <img className="event-decor__image" src={props.image} alt="events" />
        </div>
        <div className="event-info">
          <div className="event-info__body">
            <div className="event-info__date">
              <div className="event-info__date_title text-small">Дата проведения</div>
              <span className="event-info__date_value text-medium">{props.date}</span>
            </div>
            <div className="event-info__name">
              <span className="event-info__name_value title-small">{props.name}</span>
            </div>
            <div className="event-info__location">
              <div className="event-info__location_body">
                <div className="event-info__location_title text-small">Место проведения</div>
                <span className="event-info__location_value text-medium">{props.location}</span>
              </div>
            </div>
          </div>
        </div>
        {
          props.isPast 
          ? <EventGallery gallery={props.gallery} />
          : null
        }
        {
          props.isDocument
          ? <div className="event-docs">
              <a className="event-docs__body" href={props.documentation} rel="noopener noreferrer" target="_blank">
                <div className="event-docs__decor">
                  <span className="event-docs__decor_text text-small">Скачать</span>
                </div>
                <div className="event-docs__title">
                  <span className="event-docs__title_text text-large">{props.isPast ? 'Итоговый протокол' : 'Протокол'}</span>
                </div>
              </a>
            </div>
          : <div className="event-bottom">
              <div className="event-bottom__body">
                <span className="event-bottom__body_text text-medium">МБУ СК ОЛИМП</span>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default EventItem
