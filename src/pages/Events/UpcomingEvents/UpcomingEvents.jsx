import React from 'react'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock'
import { upcomingEventsConfig } from '../../../configurations/Events/upcomingEventsConfig'
import UpcomingEventsItem from './UpcomingEventsItem/UpcomingEventsItem'

function UpcomingEvents() {
  const list = upcomingEventsConfig.map(item => <UpcomingEventsItem key={item.id} {...item} />)

  return (
    <section className="upcoming-events">
      <div className="upcoming-events__body _container">
        <div className="upcoming-events-preview">
          <PreviewPagesBlock  
            title="Предстоящие меромприятия" 
            subtitle="Многолетний опыт работы, высокий уровень качества, индивидуальный подход к организации и проведению как профессиональных, так и любительских спортивно-массовых мероприятий."
            mainColor="#A7C2D3"
            icon="upcomingEvents"
          />
        </div>
        <div className="upcoming-events-filter">Filter component is Here!</div>
        <div className="upcoming-events-content">
          <div className="upcoming-events-content__body">
            <ul className="upcoming-events-content__list">{list}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
