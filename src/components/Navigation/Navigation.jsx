import React from 'react'
import { navigationConfig } from '../../configurations/navigationConfig'
import NavigationItem from './NavigationItem/NavigationItem'
import NavigationDropdown from './NavigationItem/NavigationDropdownItem/NavigationDropdown'

function Navigation({navigationClass}) {
  const list = navigationConfig.map(item => {
    return (
      <NavigationItem 
        to={item.to}
        name={item.name}
        key={item.id}
        isDrop={item.isDrop}
        isLink={item.isLink}
        list={item.dropContent.map(elem => {
          return (
            <NavigationDropdown 
              to={elem.to}
              name={elem.name}
              key={elem.id}
            />
          )
        })}
      />
    )
  })

  return (
    <div className={navigationClass}>
      <div className="navigation__body">
        <div className="navigation__content _container">
          <ul className="nav-list">
            {list}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation
