import React from 'react'
import { Link } from 'react-router-dom' 
import { useHeaderContext } from '../../../../context/headerContext'

function NavigationDropdown({name, to}) {
  const {handleMobileSideBar, mobileWidth} = useHeaderContext()


  return (
    <li className="nav-dropdown-item" onClick={mobileWidth ? handleMobileSideBar : undefined}> 
      <Link to={to} className="nav-dropdown-item__link">
        <div className="nav-dropdown-item__content">
          <span className="nav-dropdown-item__content_name ">{name}</span>
        </div>
      </Link>
    </li>
  )
}

export default NavigationDropdown
