import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MainNewsItem from './MainNewsItem/MainNewsItem'
import Button from '../../../components/Button/Button'
import Icon from '../../../components/Icon/Icon'
import { newsConfig } from '../../../configurations/News/newsConfig'

function MainNews() {
  const list = newsConfig.map((item, id) => {
    if(id <= 8) {
      return (
        <MainNewsItem {...item} key={item.id}/>
      )
    }
  })

  return (
    <section className="main-news">
      <div className="main-news__body _container">
        <SectionTitle text="Новости"/>
        <div className="main-news-content content-paddings-with-sectionTitle">
            <div className="main-news-content__body">
              <ul className="main-news-list">{list}</ul>
            </div>
            <div className="main-news-links">
              <Button text="Все новости" to="/news/" buttonCollor="#fff" isAnimatedButton={false} color="#3b3b3b" buttonBackground="transparent" buttonBorder="#3b3b3b"/>
              <div className="main-news-links__social">
                <a href="https://vk.com/public203484259" className="main-news-links__social_link" target="_blank" rel="noopener noreferrer">Будьте в курсе самых свежих новостей в нашей группе
                  <Icon className="main-news-links__social_ico-1" name="vk" size="50" color="#000" />
                  <Icon className="main-news-links__social_ico-2" name="slider-arrow-r" size="25" color="#0051bd" />
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MainNews
