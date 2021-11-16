import React from 'react'
import { sectionsListConfig } from '../../configurations/Sections/sectionsListConfig'
import Sectionitem from './SectionItem/Sectionitem'


function Sections() {
  const list = sectionsListConfig.map(item => {
    return (
      <Sectionitem key={item.id} {...item} />
    )
  })

  return (
    <section className="sections">
      <div className="sections__body _container">
        <div className="sections-preview">
          <div className="sections-preview__title">
            <span className="sections-preview__title_text title-medium">Выберете интересующее вас направление</span>
          </div>
        </div>
        <div className="sections-сontent content-paddings">
          <ul className="sections-content-list">{list}</ul>
        </div>
      </div>
    </section>
  )
}

export default Sections
