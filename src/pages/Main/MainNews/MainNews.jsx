import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { mainNewsConfig } from '../../../configurations/mainNewsConfig'
import MainNewsItem from './MainNewsItem/MainNewsItem'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import Icon from '../../../components/Icon/Icon'

function MainNews() {
  const list = mainNewsConfig.map(item => {
    return (
      <MainNewsItem {...item} key={item.id}/>
    )
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
              <Button text="Все новости" to="/" buttonCollor="#fff" isAnimatedButton={false} color="#3b3b3b" buttonBackground="transparent" buttonBorder="#3b3b3b"/>
              <div className="main-news-links__social">
                <Link to="/" className="main-news-links__social_link">Будьте в курсе самых свежих новосте в нашей группе
                  <Icon className="main-news-links__social_ico-1" name="vk" size="40" color="#3b3b3b" />
                  <Icon className="main-news-links__social_ico-2" name="slider-arrow-r" size="25" color="#0051bd" />
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default MainNews
