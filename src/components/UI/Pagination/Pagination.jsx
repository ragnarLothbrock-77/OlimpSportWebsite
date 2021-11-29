import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'


function Pagination({config, limitNewsPerPage, paginate, activeIndex }) {
  const pageCount = []
  const { url } = useRouteMatch()

  for (let i = 1; i <= Math.ceil(config / limitNewsPerPage); i++ ) {
    pageCount.push(i)
  }  

  return (
    <div className="pagination _container">
      <div className="pagination__body">
        <ul className="pagination-list">
          {
            pageCount.map(item => {
              if (activeIndex === item) {
                return (
                  <div className={activeIndex === item ? "pagination-list__item pagination-item-active" : "pagination-list__item"} key={item} onClick={() => paginate(item)}>
                    <span className="pagination-list__item_value title-small">{item}</span>
                  </div>
                )
              } else {
                return (
                  <Link to={`${url}${item === 1 ? '' : `/${item}`}`} className={activeIndex === item ? "pagination-list__item pagination-item-active" : "pagination-list__item"} key={item} onClick={() => paginate(item)}>
                    <span className="pagination-list__item_value title-small">{item}</span>
                  </Link>
                )
              }
            })
          }    
        </ul>
      </div>
    </div>
  )
}

export default Pagination
