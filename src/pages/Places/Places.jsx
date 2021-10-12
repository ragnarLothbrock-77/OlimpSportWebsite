import React from 'react'
import PreviewMain from '../../components/PreviewPagesBlock/PreviewMain'
import img from '../../assets/images/placesImages/places-1.JPG'
import { placesConfig } from '../../configurations/Places/placesConfig'
import PlaceItem from './PlaceItem/PlaceItem'

function Places() {
  const list = placesConfig.map(item => <PlaceItem key={item.id} {...item}/>)


  return (
    <section className="places">
      <div className="places__body">
        <PreviewMain 
          title="Пространства" 
          subtitle="У нас есть площадкт открытые, зактрытые, и велотрек. У нас есть площадкт открытые, зактрытые, и велотрек."
          decorImage={img}
        />
        <div className="places__content content-paddings">
          <ul className="places__list _container">
            {list}
          </ul>
        </div> 
      </div>
    </section>
  )
}

export default Places
