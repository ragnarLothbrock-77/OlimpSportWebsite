import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import EventGalleryItem from './EventGalleryItem/EventGalleryItem'

function EventGallery({gallery}) {
  const list = gallery.map(item => <EventGalleryItem {...item} key={item.id}/>)

  return (
    <div className="event-gallery">
      <div className="event-gallery__body">
        <div className="event-gallery__title">
          <span className="event-gallery__title_text">Фотоотчёт</span>
        </div>
        <SRLWrapper>
          <ul className="event-gallery__list"> 
            { list }
          </ul>
        </SRLWrapper>
      </div>
    </div>
  )
}

export default EventGallery
