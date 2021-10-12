import React from 'react'
import AreaCard from './AreaCard/AreaCard'

function AreasCards(props) {
  return (
    <div className="areas-inner__cards_body">
      <ul className="areas-inner__cards_list">
        {
          props.areasCards.map(item => {
            return (
              <AreaCard {...item} key={item.id}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AreasCards
