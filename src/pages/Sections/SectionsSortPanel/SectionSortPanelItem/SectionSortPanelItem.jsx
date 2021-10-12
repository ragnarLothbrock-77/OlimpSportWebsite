import React, { useState } from 'react'
import Icon from '../../../../components/Icon/Icon'

function SectionSortPanelItem({type, list}) {
  const [showPanelSettings, setShowPanelSettings] = useState(false)

const toggleDropdown = () => {
  setShowPanelSettings(() => !showPanelSettings)
}

  return (
    <li className="sections-sort-panel__item" onMouseDown={toggleDropdown}>
      <div className="sections-sort-item">
        <div className="sections-sort-item__type">
          <span data-value={type} className="sections-sort-item__type_name nav-font">{type}</span>
          <div className={showPanelSettings ? "sections-sort-item__type_icon rotate-sort-icon" : "sections-sort-item__type_icon"}>
            <Icon name="arrow-down" size="15" color="#2baae2"/>
          </div>
        </div>
        {
          showPanelSettings 
          ? <div className="sections-sort-item__dropdown">
              <ul className="sections-sort-item__dropdown_list">
                {list}
              </ul>
            </div>
          : null
        }
      </div>
    </li>
  )
}

export default SectionSortPanelItem
