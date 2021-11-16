import React from 'react'
import PreviewMain from '../../components/PreviewPagesBlock/PreviewMain'
import img from '../../assets/images/previewImages/placesPrevImage.jpg'
import { placesConfig } from '../../configurations/Places/placesConfig'
import PlaceItem from './PlaceItem/PlaceItem'

function Places() {
  const list = placesConfig.map(item => <PlaceItem key={item.id} {...item}/>)


  return (
    <section className="places">
      <div className="places__body">
        <PreviewMain 
          title="Пространства" 
          subtitle="В распоряжение СК Олимп находятся 5 открытых спортивных площадок, 3 крытых многофункциональных зала, 2 тренажёрных зала и профессиональный велотрек"
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
