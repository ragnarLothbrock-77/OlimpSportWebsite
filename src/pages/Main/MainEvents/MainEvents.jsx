import React, { useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { mainEventsConfig } from '../../../configurations/Main/mainEventsConfig'
import MainEventsItem from './MainEventsItem/MainEventsItem'
import MainEventsController from './MainEventsController/MainEventsController'

function MainEvents() {
  const [currentElement, setCurrentElement] = useState(0)
  const configLength = mainEventsConfig.length


  const nextElement = () => {
    setCurrentElement(currentElement === configLength - 1 ? 0 : currentElement + 1)
  }

  const previousElement = () => {
    setCurrentElement(currentElement === 0 ? configLength - 1  : currentElement - 1)
  }


  return (
    <section className="events ">
      <div className="events__body _container">
        <SectionTitle text="События"/>
        <div className="events__content content-paddings-with-sectionTitle">
          {
            mainEventsConfig.map((item, index) => {
              return (
                  <div className={index === currentElement ? "events-block events-active-block" : "events-block"} key={item.id}>
                    {
                      index === currentElement && (
                        <MainEventsItem {...item} key={item.id}/>
                      )
                    }        
                  </div>
              )
            })
          }
          <MainEventsController nextStep={nextElement} prevStep={previousElement} current={currentElement}/>
        </div>
      </div>
    </section>
  )
}

export default MainEvents
