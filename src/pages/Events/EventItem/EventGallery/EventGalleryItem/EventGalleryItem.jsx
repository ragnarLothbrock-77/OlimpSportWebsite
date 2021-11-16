import React, { useState } from 'react'
import Icon from '../../../../../components/Icon/Icon'

function EventGalleryItem(props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="event-gallery-item" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="event-gallery-item__decor" style={{backgroundImage: `url(${props.src})`}}>
        <img className="event-gallery-item__decor_img" src={props.src} alt={props.alt}></img>
      </div>
      {
        hovered
        ? <div className="event-gallery-item__icon">
            <Icon name="loupe" color="#fff" size="30"/>
          </div>
        : null
        }
      <div className={`${hovered ? "event-gallery-item__mask event-gallery-item__mask-active " : "event-gallery-item__mask"} `}></div>
    </div>
  )
}

export default EventGalleryItem
