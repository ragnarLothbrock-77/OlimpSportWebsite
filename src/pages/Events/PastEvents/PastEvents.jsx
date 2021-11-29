import React from 'react'
import SimpleReactLightBox from 'simple-react-lightbox'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock'
import { pastEventsConfiig } from '../../../configurations/Events/pastEventsConfig'
import EventItem from '../EventItem/EventItem'


function PastEvents() {
  const list = pastEventsConfiig.map(item => <EventItem key={item.id} {...item} />)

  return (
    <SimpleReactLightBox>
      <div className="past-events">
        <div className="past-events__body _container">
          <div className="past-events-preview">
            <PreviewPagesBlock  
              title="Прошедшие мероприятия" 
              subtitle="Ниже представлены прошедшие мероприятия в которых принимали участия спортсмены МБУ СК Олимп. Вы можете ознакомиться с каждым мероприятием подробнее. При наличии итогового протокола соревнования он будет прикреплён в посте и доступен для скачивания. Также можно онзнакомится с галереей фото отдельно взятого мероприятия."
              mainColor="#A7C2D3"
              icon="pastEvents"
            />
          </div>
          <div className="past-events-content">
            <div className="past-events-content__body content-paddings">
              <ul className="past-events-content__list">{list}</ul>
            </div>
          </div>
        </div>
      </div>
    </SimpleReactLightBox>
  )
}

export default PastEvents
