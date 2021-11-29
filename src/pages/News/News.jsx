import React, { useState } from 'react'
import { newsConfig } from '../../configurations/News/newsConfig'
import MainNewsItem from '../../pages/Main/MainNews/MainNewsItem/MainNewsItem'
import PreviewPagesBlock from '../../components/PreviewPagesBlock/PreviewPagesBlock'
import Pagination from '../../components/UI/Pagination/Pagination'

function News() {
  const list = newsConfig.map(item => <MainNewsItem {...item} key={item.id} />)


  const [currentPage, setCurrentPage] = useState(1)
  const [activeIndex, setActiveIndex] = useState(1)
  const [limitNewsPerPage] = useState(12)
  const indexOfLastNews = currentPage * limitNewsPerPage
  const indexOfFirstNews = indexOfLastNews - limitNewsPerPage
  const currentNewsList = list.slice(indexOfFirstNews, indexOfLastNews)


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    setActiveIndex(pageNumber)
  }

  
  return (
    <section className="news _wrapper">
      <div className="news__body">
        <div className="news-preview">
          <div className="news-preview__body _container">
            <PreviewPagesBlock  
              title="Новости" 
              subtitle="Ниже представлен список новостей МБУ СК Олимп. В нём хранятся самые яркие события связанные с жизнью нашего спортивного клуба. Новости с соревнований, посты о тренерах и их подопечных, спортивные события поселения Краснопахорское и многое другое вы сможете найти ниже."
              subtitleColor="#000"
              mainColor="#0051bd"
              titleColor="#fff"
              icon="news"
              iconColor="#000"
            />  
          </div>
        </div>
        <div className="news-content _container">
          <ul className="news-list">{ currentNewsList }</ul>
        </div>
        <div className="news-pagination">
          <Pagination config={newsConfig.length} limitNewsPerPage={limitNewsPerPage} paginate={paginate} activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  )
}

export default News
