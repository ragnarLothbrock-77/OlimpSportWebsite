import React from 'react'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock'
import { upcomingEventsConfig } from '../../../configurations/Events/upcomingEventsConfig'
import EventItem from '../EventItem/EventItem'

function UpcomingEvents() {
  const list = upcomingEventsConfig.map(item => <EventItem key={item.id} {...item} />)

  return (
      <section className="upcoming-events">
        <div className="upcoming-events__body _container">
          <div className="upcoming-events-preview">
            <PreviewPagesBlock  
              title="Предстоящие мероприятия" 
              subtitle="Ниже представлены предстоящие мероприятия в которых примут участие спортсмены МБУ СК Олимп. Вы можете ознакомиться с каждым мероприятием подробнее. При наличии протокола соревнования он будет прикреплён в посте и доступен для скачивания. Протокол содержит полную информацию о правилах проведения, участия и организации мероприятия. "
              mainColor="#A7C2D3"
              icon="upcomingEvents"
            />
          </div>
          <div className="upcoming-events-content">
            <div className="upcoming-events-content__body content-paddings">
              <ul className="upcoming-events-content__list">{list}</ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default UpcomingEvents
