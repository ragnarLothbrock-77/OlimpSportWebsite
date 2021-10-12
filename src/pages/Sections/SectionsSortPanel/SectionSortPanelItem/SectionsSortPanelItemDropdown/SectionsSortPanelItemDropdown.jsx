import React from 'react'

function SectionsSortPanelItemDropdown({value}) {
  return (
    <li className="sections-sort-dropdown">
      <div className="sections-sort-dropdown__content">
        <span className="sections-sort-dropdown__content_value text-large">{value}</span>
      </div>
    </li>
  )
}

export default SectionsSortPanelItemDropdown
