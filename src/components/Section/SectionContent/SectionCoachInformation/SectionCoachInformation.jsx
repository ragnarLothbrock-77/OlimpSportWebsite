import React from 'react'
import TitleWithCorners from '../../../UI/TitleWithCorners/TitleWithCorners'
import SectionCoachItem from './SectionCoachItem/SectionCoachItem'
import Button from '../../../Button/Button'

function SectionCoachInformation(props) {
  return (
    <section className="section-coach-info">
      <div className="section-coach-info__body">
        <div className="section-coach-info__content">
          <div className="section-coach-title _container">
            <div className="section-coach-title__body">
              <TitleWithCorners text={`Информация о руководителях секции ${props.group}`}/>
            </div>
          </div>
          <div className="section-coach-content">
            <div className="section-coach-content__body">
              <ul className="section-coach-content__list">
                {
                  props.coachesInfo.map(item => {
                    return (
                      <SectionCoachItem {...item} key={item.id}/>
                    )
                  })
                }
              </ul>
              <div className="section-coach-content__link">
                <Button text="Подробнее" to="/team" color="#000" buttonBorder="#000" buttonBackground="#fff"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionCoachInformation
