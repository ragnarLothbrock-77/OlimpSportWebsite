import React from 'react'
import { newsConfig } from '../../configurations/News/newsConfig'
import MainNewsItem from '../../pages/Main/MainNews/MainNewsItem/MainNewsItem'
import PreviewPagesBlock from '../../components/PreviewPagesBlock/PreviewPagesBlock'

function News() {
  const list = newsConfig.map(item => <MainNewsItem {...item} key={item.id} />)

  return (
    <section className="news _wrapper">
      <div className="news__body">
        <div className="news-preview">
          <div className="news-preview__body _container">
            <PreviewPagesBlock  
              title="Новости" 
              subtitle="Ниже представлен список новостей МБУ СК Олимп. В нём хранятся самые яркие события связанные с жизнью нашего спортивного клуба. Новости с соревнований, посты о тренерах и их подопечных, спортивные события поселения Краснопахорское и многое другое вы сможете найти ниже."
              subtitleColor="#000"
              mainColor="#000"
              titleColor="#fff"
              icon="news"
            />  
          </div>
        </div>
        <div className="news-content _container">
          <ul className="news-list">{ list }</ul>
        </div>
      </div>
    </section>
  )
}

export default News
