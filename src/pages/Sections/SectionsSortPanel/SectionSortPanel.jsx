import React from 'react'

import { sectionsControlPanel } from '../../../configurations/sectionsControlPanelConfig'
import SectionSortPanelItem from './SectionSortPanelItem/SectionSortPanelItem'
import SectionsSortPanelItemDropdown from './SectionSortPanelItem/SectionsSortPanelItemDropdown/SectionsSortPanelItemDropdown'


function SectionSortPanel() {
  const list = sectionsControlPanel.map(item => {
    return (
      <SectionSortPanelItem 
        key={item.id}
        type={item.type}
        list={item.dropdown.map(elem => {
          return (
            <SectionsSortPanelItemDropdown key={elem.id} value={elem.value}/>
          )
        })}
      />
    )
  })



  return (
    <ul className="sections-sort-panel">
      {list}





      {/* <div className="sections-sort-panel__item">
        <div className="sections-sort-item">
          <div className="sections-sort-item__type">
            <span className="sections-sort-item__type_name nav-font">Возраст</span>
            <div className="sections-sort-item__type_icon">
              <Icon name="arrow-down" size="15" />
            </div>
          </div>
          <div className="sections-sort-item__dropdown"></div>
        </div>
      </div>



      <div className="sections-sort-panel__item">
      <div className="sections-sort-item">
          <div className="sections-sort-item__type">
            <span className="sections-sort-item__type_name nav-font">Расписание</span>
            <div className="sections-sort-item__type_icon">
              <Icon name="arrow-down" size="15" />
            </div>
          </div>
          <div className="sections-sort-item__dropdown"></div>
        </div>
      </div>



      <div className="sections-sort-panel__item">
        <div className="sections-sort-item">
          <div className="sections-sort-item__type">
            <span className="sections-sort-item__type_name nav-font">Расположение</span>
            <div className="sections-sort-item__type_icon">
              <Icon name="arrow-down" size="15" />
            </div>
          </div>
          <div className="sections-sort-item__dropdown"></div>
        </div>
      </div> */}
      
    </ul>
  )
}

export default SectionSortPanel
