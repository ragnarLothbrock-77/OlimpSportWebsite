import React from 'react'
import { useHeaderContext } from '../../../../context/headerContext'
import Icon from '../../../Icon/Icon'

function HeaderMobileConect() {
  const {phoneWidth} = useHeaderContext()

  return (
    <div className="header-mobile-conect">
      <div className="header-mobile-conect__body">
        <div className="header-info-item">
          <div className="header-info-item__body">
            <div className="header-info-item__icon">
              <Icon name="phone" color={phoneWidth ? "#fff" : "#808080"} size={phoneWidth ? "40": "30"}/>
            </div>
            <a href="tel:+74958508389" className="header-info-item__value">
              <span className="header-info-item__value_text text-small">+ 7 495 850-83-89 </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobileConect
