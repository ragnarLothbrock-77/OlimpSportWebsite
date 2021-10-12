import React from 'react'

function PastEventGallery({pastGallery}) {
  return (
    <div className="past-event-gallery">
      <div className="past-event-gallery__body">
        <ul className="past-event-gallery__list">
          {
            pastGallery.map(item => {
              return (
                <a href={item} className="past-event-gallery__image">
                  <div className="past-event-gallery__decor" style={{backgroundImage: `url(${item})`}}></div>
                </a>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default PastEventGallery
