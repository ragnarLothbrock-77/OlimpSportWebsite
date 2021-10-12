import React from 'react'
import { sectionsListConfig } from '../../configurations/sectionsListConfig'
import Sectionitem from './SectionItem/Sectionitem'
import SectionSortPanel from './SectionsSortPanel/SectionSortPanel'
import {useHeaderContext} from '../../context/headerContext'
import MobileSortPanel from './MobileSortPanel/MobileSortPanel'

function Sections() {
  const { mobileWidth } = useHeaderContext()

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
          {
            mobileWidth 
            ? <MobileSortPanel />
            : <div className="sections-content-controllers">
                <div className="sections-content-controllers__body">
                  <SectionSortPanel />
                </div>
              </div>
          }
          <ul className="sections-content-list">{list}</ul>
        </div>
      </div>
    </section>
  )
}

export default Sections
