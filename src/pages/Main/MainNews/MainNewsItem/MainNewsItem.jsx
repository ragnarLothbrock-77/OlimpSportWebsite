import React from 'react'
import Icon from '../../../../components/Icon/Icon'

function MainNewsItem(props) {
  return (
    <li className="main-news-list__item main-news-item">
      <div className="main-news-item__decoration">
        <div className="main-news-item__decoration_img" style={{backgroundImage: `url(${props.image})`}}></div>
      </div>
      <div className="main-news-item__info">
        <div className="main-news-item__info_title">
          <span className="title-small">{props.title}</span>
        </div>
        <div className="main-news-item__info_text">
          <span className="text-small">{props.text}</span>
        </div>
        <div className="main-news-item__info_date">
          <Icon name="calendar" size="25" color="#0051bd"/>
          <p className="main-news-item__info_date-title text-small">Дата публикации: </p>
          <span className="main-news-item__info_date-number text-small">{props.date}</span>
        </div>
      </div>
    </li>
  )
}

export default MainNewsItem
