import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHeaderContext } from '../../../context/headerContext'

function NavigationItem({to, name, isDrop, list, isLink}) {
  const [showInnerContent, setShowInnerContent] = useState(false)
  const {mobileWidth, handleMobileSideBar} = useHeaderContext()

  const showContent = (e) => {
    e.stopPropagation()
    setShowInnerContent(true)
  }

  const hideContent = (e) => {
    e.stopPropagation()
    setShowInnerContent(false)
  }


  return (
    <li className="nav-list-item" onMouseEnter={showContent} onMouseLeave={hideContent} onClick={mobileWidth ? handleMobileSideBar : hideContent}>
      {
        isLink 
        ? <Link to={to} className="nav-list-item__link">
            <div className="nav-list-item__content">
              <span className="nav-list-item__content_name nav-font">{name}</span>
            </div>
          </Link>
        : <div className="nav-list-item__link" style={{cursor: 'default'}}>
            <div className="nav-list-item__content">
              <span className="nav-list-item__content_name nav-font">{name}</span>
            </div>
          </div>  
      }
      {
        mobileWidth 
        ? <div className="nav-list-item__dropdown">
            <ul className="nav-list-item__dropdown_list _container">
              {list}
            </ul>
          </div>
        : isDrop && showInnerContent 
          ? <div className="nav-list-item__dropdown">
              <ul className="nav-list-item__dropdown_list _container">
                {list}
              </ul>
            </div>
          : null
      }
    </li>
  )
}

export default NavigationItem
