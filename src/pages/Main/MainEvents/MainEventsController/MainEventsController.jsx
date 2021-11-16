import React from 'react'
import { mainEventsConfig } from '../../../../configurations/Main/mainEventsConfig'
import Icon from '../../../../components/Icon/Icon'

function MainEventsController({prevStep, nextStep, current}) {
  return (
    <div className="events-controller">
      <div className="events-controller__body">
        <div className="events-controller__button" onClick={prevStep}>
          <Icon className="events-controller__icon" name="slider-arrow-l" size='40' color="#2344432"/> 
        </div>         
        <div className="events-pagination-bord">
          {mainEventsConfig.map((item, index) => {
            return (
              <div className="events-pagination-bord__item" key={item.id}>
                <span className={index === current ? "events-pagination-bord__item_number active-number" : "events-pagination-bord__item_number"} ></span>
              </div>     
            )
          })}  
        </div> 
        <div className="events-controller__button" onClick={nextStep}>
          <Icon className="events-controller__icon" name="slider-arrow-r" size='40' color="#2344432"/> 
        </div> 
      </div>
    </div>
  )
}

export default MainEventsController
