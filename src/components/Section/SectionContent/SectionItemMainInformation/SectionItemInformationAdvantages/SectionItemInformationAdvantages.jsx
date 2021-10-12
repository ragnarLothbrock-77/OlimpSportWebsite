import React from 'react'
import SectionAdvantagesListItem from './SectionAdvantagesListItem/SectionAdvantagesListItem'


function SectionItemInformationAdvantages(props) {
  return (
    <div className="section-item-information-advantages">
      <div className="section-item-information-advantages__body">
        <div className="section-item-information-advantages__decor">
          <div className="section-item-information-advantages__decor_body">
            <div className="section-item-advantages-decor">
              <div className="section-item-advantages-decor__image"></div>
            </div>
          </div>
        </div>
        <div className="section-item-information-advantages__content">
          <div className="section-item-information-advantages__content_title">
            <span className="section-item-information-advantages__content_text title-medium">Преимущества</span>
          </div>
          <ul className="section-item-information-advantages__content_list">
            {props.advantages.map(item => {
              return (
                <SectionAdvantagesListItem text={item.text} key={item.id}/>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SectionItemInformationAdvantages
